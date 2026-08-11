# Form alignment and result-value wrapping QA — 2026-08-11

## Scope and repository state

- Start commit: `13b307f86ee5304f47e11e91a34f7770b2923335` on clean `main`.
- `origin` was `https://github.com/canghun13/guitarsetuplab.git`; fetch, `pull --ff-only`, local `HEAD`, `origin/main`, and the remote `main` ref all matched before editing.
- Scope was limited to paired-control vertical alignment in generated Tool forms and three Potentiometer Mounting Fit result measurements. Navigation, copy, GA4, email, footer, and the root-only user-managed badge were not changed.

## Form audit, cause, and fix

All 50 generated Tool pages use the shared `.fields > label > control` form contract. At 1440, 1280, 1101, and 801 px, all 50 Tools retained a two-column `.fields` grid. The production baseline therefore covered 200 page/viewport combinations.

Seven Tools had one affected row each, with a maximum paired-control top difference of `21.21875px`:

1. Bridge String Spacing — Measured 50 mm calibration bar / Allowed calibration error.
2. Fret Position Template — Measured 50 mm calibration bar / Allowed calibration error.
3. Fret Slot Print Template — Orientation / Measured 50 mm calibration bar.
4. Knob & Shaft Compatibility — Knob insertion depth / Required engagement from candidate maker.
5. Nut String Spacing — Input and display unit / Measured 50 mm calibration bar.
6. Output Jack Mounting Fit — Plug insertion projection inside cavity / Available jack cavity depth.
7. Pickup Phase Troubleshooter — Pickup count / Thin sound only in combined position.

The remaining 43 Tools were already aligned. No audited label exceeded two rendered lines at those widths.

The common cause was the shared label's column flex layout: a two-line label made its own control start one line lower than the paired control. `scripts/assets/style.css` now changes only direct field labels to a two-row grid while the two-column field layout is active (`min-width:801px`). The first row reserves `3.16em`, derived from the existing `1.58` label line-height times two; `minmax(..., auto)` allows a future longer label to expand without clipping. At 800 px and below, the existing one-column labels remain flex layouts, so mobile receives no empty label slot. No page-specific selector or markup exception was introduced.

Post-fix browser measurement repeated all 200 page/viewport combinations: misaligned Tools `0`, misaligned rows `0`, maximum paired-control top difference `0px`, document overflow `0`, and row overlap/clipping `0`.

## Potentiometer result wrapping

The shared narrow-screen result rule intentionally allows table-cell text to wrap and uses `overflow-wrap:anywhere`. Applying global `nowrap` to result cells would regress other Tools. Instead, the Potentiometer Mounting Fit renderer wraps only its three atomic number-and-unit values in `.measurement-value`; that semantic span is `inline-block`, `white-space:nowrap`, and `overflow-wrap:normal`.

The exact fixture produced `0.1000 in`, `0.1200 in`, and `0.2200 in`. At both 1440 and 390 px each value had one line box, width `58.421875px`, height `22.234375px`, and no document or result overflow. The table-to-warning spacing remained `24px`.

## Browser QA

- Full generated form audit: 50 Tools × 1440/1280/1101/801 = 200 measurements; alignment, overlap, clipping, and horizontal overflow failures `0` after the fix.
- Responsive representatives: five Controls Tools plus Fretboard Radius Matcher, String Tension Matcher, Pickup Height Planner, String Gauge Change Planner, Pickup Route Clearance Checker, and Repair Quote Generator; 11 Tools × 1024/900/768/600/480/390 = 66 measurements. Overflow, off-screen controls/results, and clipping failures `0`.
- The field grid stayed two-column at 1024/900 and changed to one column at 768 and below. Label display was grid only at 1024/900 and flex at 768 and below.
- Functional regression: five Controls Tools at 1440 and 390 = 10 runs. Run, Copy, and Reset passed in every run; result/document overflow failures `0`; console errors/warnings `0`.
- Potentiometer exact-value fixture passed at 1440 and 390; Knob & Shaft alignment was also visually checked at 1440 and 390.
- Evidence is stored in `research/screenshots/form-alignment-2026-08-11/`, including screenshots and the full production-baseline/local-after measurement data.

## Static and fixture QA

- Build: PASS — 87 public HTML pages and 50 Tools.
- Static/SEO/link/module checks: PASS — 0 failures, broken links 0, orphan pages 0, missing assets 0.
- Geometry fixtures: 65 PASS.
- Pickup-fit fixtures: 15 PASS.
- Control-fit fixtures: 33 PASS.
- Content audit: 87 Sufficient; Needs 0, Thin 0, duplicate-risk 0, functionally incomplete 0.
- Regression contracts now assert the desktop label-row rule, narrow measurement span, and all three Potentiometer measurement wrappers.
- Print: `.tool-form` is hidden by the existing print stylesheet, so the screen-only label alignment rule cannot add print height or page breaks. The narrow result span changes only the three short measurements.

## Deployment closeout

- Implementation commit: `f1a93a3e091ae48ab60d351893a26010742d0cf0` (`Align paired tool controls and pot values`).
- Quality checks run `31456216999`: completed successfully.
- GitHub's dynamic Pages run `31456216576`: build, report-build-status, and deploy jobs all completed successfully. Its API `head_sha` remained the immediately preceding commit, but a cache-busted production fetch matched the implementation commit's CSS byte-for-byte and did not match the preceding CSS.
- Production form audit: all 50 Tools at 1440 plus the seven formerly affected Tools at 1280/1101/801 = 71 measurements; misalignment 0, maximum paired-control top difference 0px, horizontal overflow 0.
- Production Pot fixture at 1440 and 390: exact values `0.1000 in`, `0.1200 in`, and `0.2200 in`; one text rect each, computed `nowrap`, document/result overflow 0, table-to-warning gap 24px, console errors/warnings 0.
- Production Knob & Shaft row: both controls at the same `549.375px` top position at 1440, difference 0px, overflow 0.
- Final documentation commit and exact local/remote hashes are recorded in `handover.md` and the final task report.
