# Browser QA — third expansion

Date: 2026-07-31
Surface: Codex in-app browser against `http://127.0.0.1:4173/`

## Responsive matrix

The following 15 pages were checked at 1440, 1280, 1024, 768, and 390 CSS pixels: Home, Luthier/Build hub, Fret Position, Fret Slot, Nut Spacing, Bridge Spacing, Radius Matcher, Saddle Radius, Multiscale, Neck Angle, Break Angle, Tremolo Spring, Repair Quote, String Tension Matcher, and Setup Wizard.

- Combinations: 75
- Document-level horizontal overflow: 0
- Missing H1: 0
- Mobile menu: `aria-expanded=false` to `true`, `nav.open=true`, visible flex navigation
- Console errors/warnings after navigation and interaction: 0

The 360 px width was also checked as an extra narrow case and had no document overflow, but it is not counted in the required 75-combination matrix.

## Functional interaction

All 11 new tools were run through their visible forms with representative measurements. Results were input-dependent and produced no generic tool-error state:

- Fret Position: 25.5 in, 24 frets; fret 12 returned 12.7500 in; reset restored the ready state.
- Fret Slot: 25.5 in tiled full-scale output with page/overlap data.
- Nut Spacing: six mixed gauges; equal-center layout returned individual centers and edge gaps.
- Bridge Spacing: six strings, measured spread, individual saddle width.
- Radius Matcher: 2 in chord and 0.0418 in sagitta returned 11.9826 in.
- Saddle Radius: six per-string action and gauge values returned relative targets.
- Multiscale: 25–27 in, seven strings, 24 frets, perpendicular fret 8 returned 2D coordinates.
- Neck Angle: the representative projection returned 0.850°.
- Break Angle: tuner-post and string-tree triangles returned separate angles.
- Tremolo Spring: supported six-string set returned published-model total tension and an adjustment direction without screw-turn claims.
- Shim Thickness: 1° across 2.36 in and 3 in returned two taper comparisons.

Invalid-state checks passed for a five-gauge/six-string mismatch and a perpendicular fret beyond the entered fret count. A 49 mm measurement of the 50 mm calibration bar displayed `OUTSIDE TOLERANCE — DO NOT USE TEMPLATE`.

Regression interactions passed for Repair Quote, String Tension Matcher, and Setup Wizard after the shared application script changed.

## Accessibility and layout observations

- Inputs expose associated labels and native number/select/text controls.
- Submit and reset controls are keyboard-focusable native buttons.
- Result regions retain `aria-live=polite`.
- Wide geometry and coordinate tables stay inside intentional horizontal-scroll containers on narrow screens rather than widening the document.
- Warning and calibration states use text in addition to color.
- Print controls appear only for outputs where a paper result is useful.

## Remaining browser boundary

Browser print-preview UI is not used as a measurement oracle. PDF size and calibration geometry are verified separately by the PDF QA pipeline, and physical printer output still requires a ruler.
# Content-depth reinforcement QA — 2026-08-01

Local build: 71 public HTML pages / 41 interactive tools.

- Responsive matrix: 15 representative pages × 1440, 1280, 1024, 768, and 390 px = 75 combinations.
- Coverage: home, all six category hubs, Fret Buzz Diagnostic, String Action Converter, Guitar Repair Intake, Ground Hum Diagnostic, Fret Slot Print Template, Setup Order guide, String Tension Formula reference, and Pot Values comparison.
- Results: horizontal document overflow 0, missing H1 0, empty main 0, missing supporting heading 0. At 390 px the menu control was visible and main width remained within the 390 px viewport.
- Fret Buzz Diagnostic: default input run produced an input-dependent “Prioritized buzz investigation”; Copy changed to “Copied”; Reset restored “Ready for measurements”; result overflow 0.
- Fret Position Template: 25.5 in / 24 frets / measured 50.00 mm / tolerance 0.25 mm produced 24 table rows, fret 12 at 12.7500 in, calibration output, Print action, and overflow 0.
- Static content order inspected in the DOM: purpose, workbench UI, result, preparation, input guide, interpretation, method, worked example, assumptions/limits, safety/stop, and related workflow. The obsolete duplicate quick-summary and duplicate related-card block were removed.

Production verification is recorded in `handover.md` after the release workflow completes.

---
