# Browser QA

Checked: 2026-07-31 against `http://127.0.0.1:4173/` in the Codex in-app browser.

## Responsive sweep

Seven representative routes were checked at every requested width: home, Electronics hub, Repair Quote, Parts and Labor Job Sheet, Ground Hum Diagnostic, String Tension Matcher, and the existing Fret Buzz Diagnostic.

| Requested width | Layout viewport | Routes | Horizontal overflow | Navigation |
|---:|---:|---:|---:|---|
| 1440 | 1425 | 7 | 0 | desktop links |
| 1280 | 1265 | 7 | 0 | desktop links |
| 1024 | 1009 | 7 | 0 | desktop links |
| 768 | 753 | 7 | 0 | mobile toggle |
| 390 | 375 | 7 | 0 | mobile toggle |

The 15px difference is the browser scrollbar. At 768px and 390px the menu button was visible; clicking it set `aria-expanded="true"`, opened the nav, and displayed it as a flex column.

## Interactive scenarios

- Repair Quote: 2.5 × $60 labor plus 2 × $12.50 parts, $5 discount, 10% tax, and $50 deposit produced $187 total and $137 balance. Copy contained the balance; Reset cleared inputs and restored the initial result.
- Ground Hum: cable/room/amplifier substitution results produced three external-source priorities. A second scenario with those sources still present plus touch increase, recent wiring, and a loose jack prioritized guitar-side jack and continuity checks. Outputs differed and retained the “never open an amplifier” boundary.
- String Tension: supported guitar and bass sets produced different per-string/total tables. An unsupported `81w` gauge returned “Unit-weight data unavailable” and explicitly refused a diameter-only estimate.
- Maintenance Schedule: occasional/home and daily/touring/seasonal-swing/active/floating-tremolo inputs produced different schedules. The latter added shorter string intervals, battery testing, hardware/tremolo inspection, and weekly humidity checks.
- Series/Parallel/Coil Split: two-conductor input blocked parallel and split. Four-conductor plus shield with a push-pull DPDT exposed all three mode descriptions.
- Repair Intake: long customer wording and an unbroken serial identifier wrapped inside the result at 390px; empty Contact was suppressed.

## Visual and print checks

Desktop Electronics hub and mobile generated maintenance record were visually inspected. One mobile defect was found: table headings used emergency character wrapping, splitting short words. CSS was changed so headings wrap only at normal word boundaries while long values retain `overflow-wrap:anywhere`; the generated record then measured `scrollWidth === clientWidth`.

Print QA covered the representative document result structure, Print controls, black-on-white `@media print` rules, hidden navigation/form/action controls, non-sticky result panels, visible labels/units, fixed-layout result tables, and long-value wrapping. The in-app browser surface does not expose a print-to-PDF or print-media emulation API, so physical/PDF pagination and printer scale were not visually automated in this session.

Final captured console errors/warnings: 0.

## Severity

- HIGH: 0
- MEDIUM: 0
- Accepted limitation: print-to-PDF page breaks and physical scaling require a manual printer/PDF check.
