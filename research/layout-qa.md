# Visual layout audit — 2026-08-01

Scope: all 71 public HTML pages served locally from the generated `site/` tree.

## Method

The browser audit exercised 1440, 1280, 1024, 900, 768, 600, 480, and 390 CSS-pixel viewports. Every page/viewport combination collected the bounding boxes for the sticky header, H1, main, workspace, form panel, result panel, result heading, tool explanation, all panels, and all tables. It also collected computed grid columns, gaps, result positioning, print-break values, document scroll width, and mobile-menu display state.

- Public pages: 71, including the generated 404 page
- Viewports: 8
- Browser combinations: 568
- Screenshots: 34 (8 production-before Gauge captures, 8 after Gauge result captures, 8 after Radius result captures, 8 after type-representative captures, and 2 production confirmation captures)
- Screenshot directory: `C:/Users/cangh/.codex/visualizations/2026/07/31/019fb78b-bc09-7462-bf4e-1508f32b5a79/guitar-layout-qa/`

## Reproduction, cause, and correction

| Page | Viewport | Before finding | Root cause | Common correction | After result |
| --- | ---: | --- | --- | --- | --- |
| String Gauge Change Planner | 1440, 1280 | Tool explanation stopped at 840 px while the workspace was wider, leaving an unnecessary blank column. | `.tool-depth.prose` inherited the generic 840 px prose cap. | Give tool-depth content the full workspace width and keep generic prose centered only on non-tool pages. | Explanation aligns with the 1152 px workspace; no empty right column. |
| String Gauge Change Planner | 1024, 900 | Two columns remained active until 800 px; the result title, lists, warning, and form shared narrow fixed fractions. | The workspace breakpoint was too late and grid children lacked an explicit shrink contract. | Use `minmax(0, 1fr)` columns, `min-width: 0`, responsive gaps/padding, and stack at 1100 px. | Input → result → explanation is one column; every panel stays inside the viewport. |
| String Gauge Change Planner | 768, 600 | Result typography and dense box padding made the narrow result feel compressed. | Desktop result-heading scale and spacing carried too far into mobile. | Clamp result H2 to 24–28 px on small screens and use responsive panel, warning, list, and table spacing. | Result title wraps within the card; warning and lists retain readable side padding. |
| String Gauge Change Planner | 480, 390 | Long result title and table/list content risked edge clipping. | Result overflow was hidden and narrow tables were forced into fixed compression. | Remove hidden clipping; make tables safe horizontal regions with wrapping and minimum cell widths. | No clipped text, partial panel, or document overflow. |
| Fretboard Radius Matcher | 1440, 1280 | Input/result height imbalance was visually amplified; explanation used only the left portion of the page. | Sticky result behavior plus the inherited prose cap coupled unrelated regions. | Remove screen sticky positioning and separate the full-width explanation region. | Two balanced workspace columns and a full-width explanation block. |
| Fretboard Radius Matcher | 1024, 900 | During scroll, the sticky result heading could pass beneath the 72 px header; the page also retained two cramped columns. | `.result { position: sticky; top: 96px }` was ineffective when the grid row constrained the sticky box and conflicted with the sticky header. | Make the screen result flow normally; stack at 1100 px; add 96 px document scroll padding and heading scroll margins. | No header/result collision or partial prior column; natural vertical flow. |
| Fretboard Radius Matcher | 768, 600, 480, 390 | Title, result table, and calibration/warning content needed more breathing room. | Desktop typography and table compression rules were reused at mobile widths. | Responsive title/panel spacing and safe table wrapping/scroll containment. | Result table, warning, and heading remain readable and inside the result card. |
| Print-capable and geometry pages | All screen widths | Print page widths, page-break rules, and geometry template constraints could affect screen layout from multiple stylesheets. | Print declarations were duplicated across `style.css`, `narrow.css`, and `geometry.css`. | Move all paper-only visibility, page-break, fixed-page, template, and money-table rules into `print.css` under `@media print`. | Screen computed `break-after` remains `auto`; result panels use normal screen flow. |

## Full audit result

Each width passed 71/71 pages. Across all 568 combinations:

- H1/header overlap: 0
- clipped H1 or panel: 0
- partial off-screen panel: 0
- abnormal document horizontal overflow: 0
- incorrect two-to-one-column transition: 0
- excessive workspace gap over 48 px: 0
- tool explanation constrained below workspace width: 0
- result heading outside its card: 0
- unsafe table clipping: 0
- screen result using sticky positioning: 0
- screen print-break leakage: 0
- mobile-menu breakpoint mismatch: 0
- console errors: 0

Type-representative screenshots cover Home, Radius Matcher, Setup Wizard, Fret Buzz Diagnostic, Repair Quote, Repair Intake, Fret Slot Template, and Nut String Spacing across the eight required widths. The coordinate matrix additionally covers every hub, guide, reference, comparison, diagnostic, calculator, selector, checklist, document generator, geometry tool, print template, and basic page.

## Functional and print regression

- Gauge Change Planner: Run generated an input-dependent result; Copy wrote the result to the browser clipboard and changed to `Copied`; Print invoked without navigation/error; Reset restored `Ready for measurements`.
- Repair Quote: adding two labor rows and one parts row generated totals; removing one labor row removed it from the regenerated quote while total and balance remained present.
- Radius Matcher: changing the unit to mm produced an mm result and preserved the sensitivity section.
- Fret Buzz Diagnostic: middle-neck/raised-fret and open-string/nut-slot paths produced distinct result tickets.
- Mobile menu: `aria-expanded` changed to true, the nav became visible, and Diagnose navigated to the diagnostics hub.
- Chromium PDF QA: 12 A4/Letter files across Repair Intake, Repair Quote, Fret Position, Fret Slot, Nut Spacing, and Bridge Spacing had correct page boxes and non-empty page content. Geometry calibration measured 188.96875 px for 50 mm and 192 px for 2 in, within tolerance.
- Static/SEO/links/modules: PASS, 0 failures across 71 pages and 41 tools.
- Geometry fixtures: PASS, 65 assertions.
- Content audit: PASS, 71 Sufficient and all failure gates zero.

Production verification is recorded in `handover.md`. After deployment, Gauge Change Planner passed the same bounding-box and computed-style checks at 900 and 390 px, Radius Matcher passed at 1024 and 390 px, and the production browser console reported zero errors.
