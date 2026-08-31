# Electrical Test Bench browser QA — 2026-08-31

## Scope and method

All seven new public pages were loaded through the local production-style static server in the in-app browser at 1440, 1280, 1024, 900, 768, 600, 480, and 390 CSS pixels. Each of the 56 page/viewport combinations has a viewport screenshot in `research/browser-qa-2026-08-31/`; a 57th screenshot records the production Pickup DCR result at 390 px.

The four tools were filled with valid measured examples and run at every width before their screenshots were captured. DOM bounding boxes and computed layout state were recorded for the fixed header, H1, main, form panel, result panel, tables, warning blocks, and every input label/control. The checks did not rely only on document `scrollWidth`.

## Pages

| Page | Type | Valid result exercised |
|---|---|---|
| `/categories/testing.html` | hub | n/a |
| `/tools/pickup-dcr-analyzer.html` | tool | 7.389 kΩ compared with 7.500 kΩ |
| `/tools/potentiometer-taper-analyzer.html` | tool | measured sweep nearest the audio/log reference |
| `/tools/selector-contact-mapper.html` | tool | three unique switch-position maps |
| `/tools/cable-ground-continuity-checker.html` | tool | cable and bridge-ground paths clear the entered 1 Ω threshold |
| `/guides/multimeter-guitar-electronics.html` | guide | n/a |
| `/reference/resistance-continuity-reference.html` | reference | n/a |

## Responsive measurements

| Check | Result |
|---|---:|
| Page/viewport layout records | 56 |
| Local matrix screenshots | 56 |
| Production mobile screenshots | 1 |
| H1 above/behind fixed header | 0 |
| Document horizontal overflow | 0 |
| Main/panel/table/warning outside viewport without safe overflow | 0 |
| Label/control left-edge mismatch or off-screen control | 0 |
| Console errors or warnings | 0 |

At 1440 and 1280 px the workbench keeps a balanced two-column form/result layout. At 1024 px and below it becomes a single ordered column without a partial second panel. Long result headings wrap inside the result card at 480 and 390 px. Tables remain within their cards, warning blocks retain side padding, and numerical units wrap without extending the viewport.

Representative screenshots:

- `research/browser-qa-2026-08-31/pickup-dcr-analyzer-1440.png`
- `research/browser-qa-2026-08-31/potentiometer-taper-analyzer-390.png`
- `research/browser-qa-2026-08-31/testing-hub-390.png`

## Functional interaction

At 390 px, every new tool passed the following browser interaction loop with a valid result rather than an error ticket:

1. fill meaningful inputs;
2. Run tool;
3. verify the tool-specific result heading;
4. Copy result;
5. Reset and verify `Ready for measurements`;
6. refill and rerun successfully.

Print is intentionally not exposed on these transient measurement analyzers; Copy preserves the result ticket without presenting it as a calibrated printable document. The mobile menu opened, exposed the new `Meter` route, and navigated to `/categories/testing.html`. No console error or warning was recorded.

## Visual review notes

- Pickup DCR desktop: input and result cards remain aligned; the formula and stop-boundary warning stay inside the result panel.
- Pot taper mobile: textarea, select, numeric controls, result status, fit table, and normalized sweep remain legible in one column.
- Testing hub mobile: all four cards use the full content width, the hub explanation follows the cards without an empty column, and the footer remains inside the viewport.
- No shared CSS change was necessary. The existing responsive contract handled the new field counts and result tables without a regression workaround.

## Production replay

After GitHub Pages completed, `/tools/pickup-dcr-analyzer.html` was loaded from `https://guitarsetuplab.com/` at 390 px. The top-of-page bounding box placed H1 at 146.45 px and the header bottom at 70.27 px; document `scrollWidth` equaled its 375 px client width. A separate valid-input pass produced `Estimated pickup DCR: 7.389 kΩ`, Copy completed, Reset returned `Ready for measurements`, and refill/rerun reproduced the same result. Form and result card bounds were both 16–359 px. Console errors/warnings: 0. Screenshot: `research/browser-qa-2026-08-31/production-pickup-dcr-390.png`.
