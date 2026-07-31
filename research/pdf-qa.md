# PDF and print QA — third expansion

Date: 2026-07-31
Output directory: `tests/output/print/` (ignored by Git)

## Pipeline

`scripts/pdf-qa.mjs` uses real Chromium with the system Chrome executable, submits the visible tool forms, generates A4 and US Letter PDFs, and inspects PDF page boxes/content streams with `pdf-lib`. Geometry outputs additionally assert the browser lengths of the 50 mm and 2 inch calibration bars before export. Poppler rendered every selected PDF page to PNG; `scripts/pdf-contact-sheet.py` assembled the renders for visual inspection.

## Selected output results

| Output | A4 pages | Letter pages |
|---|---:|---:|
| Guitar Repair Intake | 3 | 3 |
| Repair Quote | 3 | 3 |
| Parts and Labor Job Sheet | 4 | 4 |
| Maintenance Schedule | 2 | 2 |
| Fret Position Template | 3 | 3 |
| Fret Slot Print Template | 4 | 4 |
| Nut String Spacing | 2 | 2 |
| Bridge String Spacing | 2 | 2 |

The table reflects the final rerun after the last fret-slot page-break correction.

## Automated results

- PDFs generated: 16
- Correct page boxes: 16/16
- Non-empty page content streams: all pages
- A4 portrait page box: approximately 595 × 842 pt
- Letter portrait page box: 612 × 792 pt
- Browser 50 mm bar: 188.96875 CSS px (expected 188.976…)
- Browser 2 inch bar: 192 CSS px (expected 192)
- Calibration status for geometry samples: within selected tolerance

## Visual results

- No blank pages after the final print CSS adjustment.
- Repair Quote repeats table headings and keeps quantity/unit/amount columns readable.
- Long customer, instrument, labor, parts, diagnosis, and note content wraps without horizontal clipping.
- Header, navigation, footer, forms, buttons, and workflow cards are absent from print output.
- Units, dates, warnings, page order, page numbers, start/end coordinates, and overlap notes remain visible.
- Fret-slot pages keep registration information and repeated overlap marks; the final warning remains with actual content instead of creating its own page.
- Black-and-white hierarchy remains legible through borders, type weight, and text labels rather than color alone.

## Physical-output boundary

The PDF page box and CSS lengths are correct in the tested Chromium pipeline. A PDF viewer, printer driver, paper feed, inkjet/laser mechanism, temperature, or humidity can still change physical scale. Users must print at Actual size / 100%, disable Fit to page, and measure both calibration bars. Outside-tolerance output must not be used as a cutting template.
