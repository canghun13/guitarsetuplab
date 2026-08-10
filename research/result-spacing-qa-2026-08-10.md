# Result-table follow-up spacing QA — 2026-08-10

## Problem and cause

Production Fretboard Radius Matcher rendered the `Nearest common candidate` table row directly against the `Measurement sensitivity` H3. With a real 2.0000 in chord and 0.0418 in sagitta result at 1440 px, the measured table-bottom-to-heading gap was `0px`. The renderer places dynamic result fragments directly in `.result`; the global H3 rule has no top margin, and result tables deliberately had no bottom margin.

## Fix

`scripts/assets/style.css` now applies `margin-top:24px` only when a table or `.geometry-scroll` result block is immediately followed by a meaningful result block:

```css
.result :is(table,.geometry-scroll) + :is(h2,h3,p,ol,ul,.warning,.geometry-diagram,.calibration,.template-page,.result-section,.section) { margin-top:24px; }
```

24px reuses the existing screen spacing rhythm used by geometry panels; the repository has no spacing custom property to reuse. The selector is limited to `.result`, uses the adjacent-sibling relationship, and overrides the existing 20px warning margin rather than stacking with it. It does not assign a blanket `margin-bottom` to tables, so input and editorial tables are unaffected. Table/heading margins do not collapse through the table formatting context. Print keeps normal document flow and existing `break-after: avoid-page` heading protection.

## Scope audit

- 45 generated Tool pages contain the same `.workspace[data-tool]` and `.result` contract; the static test verifies that count and the generated root/site mirrors.
- Source inspection found 16 dynamic table renderers. 13 have a table or geometry-table wrapper followed by meaningful content and are eligible for the new adjacent selector: String Spread at Pickup, Pickup Pole Spacing Matcher, Pickup Route Clearance Checker, Pickup Ring Mount Fit, Repair Quote Generator, String Tension Matcher, Fretboard Radius Matcher, Saddle Radius Planner, Multiscale Fretboard Planner, Neck Angle Planner, Headstock Break Angle, Tremolo Spring Balance, and Shim Thickness Planner.
- Three table renderers have no following meaningful result section and therefore remain visually unchanged. The other 29 Tools do not produce this table-follow-up shape. This includes String Gauge Change Planner, Guitar Setup Wizard, and Fret Buzz Diagnostic: their normal result structure receives no synthetic table spacing.

## Browser QA

- Production before capture, Fretboard Radius Matcher at 1440 px with an actual result: `0px` table-to-H3 gap.
- Local after capture using the same values: `24px` gap; heading no longer touches the table border.
- Fretboard Radius Matcher at 1440, 1024, 768, 480, and 390 px: 24px gap at every width; no document or result-panel horizontal overflow, clipping, or header/H1 overlap.
- The eight requested representative tools loaded with `.result`, Run, and Reset present at 390 px; no console errors and no overflow: Fretboard Radius Matcher, String Gauge Change Planner, String Tension Matcher, Pickup Route Clearance Checker, Pickup Pole Spacing Matcher, Guitar Setup Wizard, Fret Buzz Diagnostic, and Repair Quote Generator.
- Fretboard Run and Reset passed. Copy exercised its expected browser-permission fallback (`Select and copy manually`) in the QA browser; no console error occurred.

## Static and fixture QA

- Build: PASS — 78 public HTML pages, 45 Tools.
- Static/link/orphan/root-site/module checks: PASS — 0 failures.
- Geometry fixtures: PASS — 65 assertions.
- Pickup-fit fixtures: PASS — 15 assertions.
- Content audit: PASS — 78 Sufficient, 0 Needs, 0 Thin, 0 duplicate-risk, 0 incomplete.
- Added a static guard ensuring the scoped selector exists and a broad `.result table` bottom margin is not introduced.

## Deployment follow-up

Record the pushed commit, GitHub Actions status, production result measurement, and local/remote hash equality in `handover.md` after deployment.
