"""Build a compact visual-QA sheet from the current PDF report renders."""
from __future__ import annotations

import json
import os
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont


ROOT = Path("tests/output/print")
RENDERED = ROOT / os.environ.get("QA_RENDER_DIR", "rendered")
report = json.loads((ROOT / "report.json").read_text(encoding="utf-8"))
font = ImageFont.load_default()
cards: list[Image.Image] = []

for item in report:
    prefix = f"{item['slug']}-{item['paper']}"
    for image_path in sorted(RENDERED.glob(f"{prefix}-*.png")):
        page = Image.open(image_path).convert("RGB")
        width = 240
        height = round(page.height * width / page.width)
        thumb = page.resize((width, height))
        card = Image.new("RGB", (width + 12, height + 34), "#d7d7d7")
        card.paste(thumb, (6, 24))
        ImageDraw.Draw(card).text((6, 6), image_path.stem, fill="black", font=font)
        cards.append(card)

columns = 4
gap = 10
rows = (len(cards) + columns - 1) // columns
cell_w = max(card.width for card in cards)
cell_h = max(card.height for card in cards)
sheet = Image.new("RGB", (columns * cell_w + (columns + 1) * gap, rows * cell_h + (rows + 1) * gap), "#2a2a2a")
for index, card in enumerate(cards):
    x = gap + (index % columns) * (cell_w + gap)
    y = gap + (index // columns) * (cell_h + gap)
    sheet.paste(card, (x, y))

sheet.save(ROOT / "contact-sheet.png", optimize=True)
print(f"Wrote {ROOT / 'contact-sheet.png'} with {len(cards)} rendered pages.")
