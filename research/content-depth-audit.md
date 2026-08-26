# Content-depth audit

Generated: 2026-08-26T05:55:10.287Z
Scope: all generated public HTML in `site/` (87 pages expected)

## Initial baseline at `98df55e`

The same main-content extraction was run read-only against the starting commit before reinforcement. The original audit labeled every page sufficient without measuring explanatory body depth. Under the present component and scope floors, the reproducible baseline was Sufficient 4, Needs reinforcement 1, Thin 66; all 66 non-basic supporting/tool pages lacked the newly required structured content set. The baseline word distribution was:

| Page type | Pages | Min | Average | Max |
|---|---:|---:|---:|---:|
| basic | 5 | 30 | 104 | 268 |
| hub | 6 | 28 | 124 | 200 |
| comparison | 3 | 85 | 96 | 109 |
| guide | 10 | 94 | 108 | 132 |
| reference | 6 | 49 | 95 | 129 |
| tool | 41 | 156 | 170 | 184 |

This initial result is retained to show the measured gap; the page-by-page table below is the final post-reinforcement state.

## Final classification

- Strong: 0
- Sufficient: 95
- Needs reinforcement: 0
- Thin: 0
- Duplicate-risk: 0
- Functionally incomplete: 0
- HIGH: 0
- MEDIUM: 0

## Method

The audit reads the built HTML, isolates `<main>`, and excludes the interactive `.workspace` plus the legacy quick summary from explanatory word counts. Navigation, footer, scripts, styles, input labels, placeholders, select options, buttons, and initial result UI therefore do not inflate substantive words. It measures headings and hierarchy; required purpose, preparation, input, interpretation, method, example, limits, safety, and workflow sections; internal inbound/outbound links; repeated sentences within a page; exact normalized sentences across pages; and interactive tool scaffolding. Sentences present on ten or more pages are reported separately as common protocol rather than silently treated as unique editorial content.

Word bands are guidelines, not the sole classifier. A page below its aspirational band can be Sufficient when its actual task is bounded, every required decision component is present, links form a workflow, and no thin, duplicate-risk, or functional flag remains. Contact, Privacy, About, and 404 use scope-specific floors and are not padded.

## Word metrics

- Overall substantive words: min 30, average 540, max 897

| Page type | Pages | Min | Average | Max |
|---|---:|---:|---:|---:|
| basic | 5 | 30 | 181 | 651 |
| hub | 9 | 185 | 287 | 365 |
| comparison | 4 | 327 | 355 | 400 |
| guide | 13 | 336 | 379 | 482 |
| reference | 9 | 287 | 366 | 443 |
| tool | 55 | 565 | 695 | 897 |

## Common protocol sentences

These repeated statements are safety or measurement protocol. Their page-level ratio remains visible in the table so excessive boilerplate cannot masquerade as unique depth.

- 55 pages: “use it when you can describe the current state and need a defensible next check”
- 55 pages: “it is not a shortcut around inspection preserve the starting state change one variable and verify the result under the same conditions”
- 55 pages: “use a stable tuned instrument unless the page specifically investigates tuning”
- 55 pages: “name the physical reference unit and test condition beside every important number”
- 55 pages: “keep the original measurements so any reversible change can be returned to baseline”
- 55 pages: “a placeholder demonstrates format only it is never a recommendation for a particular guitar”
- 55 pages: “save or print the result ticket with the entered conditions so another person can reproduce the decision”
- 55 pages: “the page keeps calculation and diagnostic claims deliberately bounded”
- 55 pages: “display rounding improves readability while the underlying logic uses entered values descriptive branches report relative tendencies and the evidence needed to confirm them”
- 55 pages: “substitute real measurements and repeat the final test before accepting the next action”
- 55 pages: “instrument design service history measurement error and player technique can outweigh a calculator or checklist”
- 55 pages: “where manufacturer instructions exist for the exact hardware use those instructions and record the revision consulted”

## Page-by-page inventory

“Required” is the count of required content components present. “Links” is inbound/outbound within main content. “Common” and “dup” are sentence ratios; cross-page common protocol is separated from duplicate-risk.

| URL | Type | Category | Words | Headings | Required | Common | Dup | Within repeats | Links in/out | Tool UI | Missing | Classification |
|---|---|---|---:|---:|---:|---:|---:|---:|---:|---|---|---|
| `/404.html` | basic | site | 30 | 1 | 0/scope | 0.0% | 0.0% | 0 | 0/1 | yes | — | **Sufficient** |
| `/about.html` | basic | site | 106 | 4 | 0/scope | 0.0% | 0.0% | 0 | 0/0 | yes | — | **Sufficient** |
| `/categories/controls.html` | hub | controls | 295 | 5 | 4/4 | 0.0% | 20.0% | 0 | 2/5 | yes | — | **Sufficient** |
| `/categories/diagnostics.html` | hub | diagnostics | 297 | 5 | 4/4 | 0.0% | 17.6% | 0 | 1/8 | yes | — | **Sufficient** |
| `/categories/documents.html` | hub | documents | 305 | 5 | 4/4 | 0.0% | 18.8% | 0 | 1/8 | yes | — | **Sufficient** |
| `/categories/electronics.html` | hub | electronics | 281 | 5 | 4/4 | 0.0% | 21.4% | 0 | 1/6 | yes | — | **Sufficient** |
| `/categories/fit.html` | hub | fit | 265 | 5 | 4/4 | 0.0% | 21.4% | 0 | 1/4 | yes | — | **Sufficient** |
| `/categories/inspection.html` | hub | inspection | 185 | 5 | 4/4 | 0.0% | 30.0% | 0 | 0/1 | yes | — | **Sufficient** |
| `/categories/luthier.html` | hub | luthier | 365 | 5 | 4/4 | 0.0% | 15.8% | 0 | 1/11 | yes | — | **Sufficient** |
| `/categories/measurement.html` | hub | measurement | 295 | 5 | 4/4 | 0.0% | 18.8% | 0 | 1/7 | yes | — | **Sufficient** |
| `/categories/recording.html` | hub | recording | 297 | 5 | 4/4 | 0.0% | 21.4% | 0 | 1/5 | yes | — | **Sufficient** |
| `/comparisons/equal-center-vs-equal-gap.html` | comparison | site | 329 | 7 | 4/4 | 19.0% | 14.3% | 0 | 1/2 | yes | — | **Sufficient** |
| `/comparisons/metric-vs-imperial-control-hardware.html` | comparison | site | 400 | 8 | 4/4 | 21.1% | 10.5% | 0 | 2/4 | yes | — | **Sufficient** |
| `/comparisons/pot-values.html` | comparison | site | 362 | 8 | 4/4 | 21.1% | 21.1% | 0 | 3/2 | yes | — | **Sufficient** |
| `/comparisons/series-parallel-coil-split.html` | comparison | site | 327 | 7 | 4/4 | 23.5% | 11.8% | 0 | 2/2 | yes | — | **Sufficient** |
| `/contact.html` | basic | site | 44 | 2 | 0/scope | 0.0% | 0.0% | 0 | 0/0 | yes | — | **Sufficient** |
| `/guides/choosing-pot-capacitor-values.html` | guide | site | 369 | 9 | 4/4 | 31.8% | 9.1% | 0 | 3/3 | yes | — | **Sufficient** |
| `/guides/control-hardware-measurement.html` | guide | site | 451 | 9 | 4/4 | 25.9% | 0.0% | 0 | 5/5 | yes | — | **Sufficient** |
| `/guides/diagnose-guitar-hum-safely.html` | guide | site | 352 | 8 | 4/4 | 31.8% | 4.5% | 0 | 2/2 | yes | — | **Sufficient** |
| `/guides/document-guitar-setup.html` | guide | site | 347 | 9 | 4/4 | 31.8% | 0.0% | 0 | 1/2 | yes | — | **Sufficient** |
| `/guides/measure-neck-relief.html` | guide | site | 339 | 8 | 4/4 | 33.3% | 4.8% | 0 | 1/2 | yes | — | **Sufficient** |
| `/guides/measure-pickup-fit.html` | guide | site | 428 | 9 | 4/4 | 28.0% | 4.0% | 0 | 5/4 | yes | — | **Sufficient** |
| `/guides/measure-string-spacing.html` | guide | site | 381 | 9 | 4/4 | 30.4% | 4.3% | 0 | 2/2 | yes | — | **Sufficient** |
| `/guides/print-actual-size.html` | guide | site | 384 | 8 | 4/4 | 28.0% | 0.0% | 0 | 3/2 | yes | — | **Sufficient** |
| `/guides/recording-chain-measurement.html` | guide | site | 482 | 9 | 4/4 | 25.0% | 3.6% | 0 | 4/4 | yes | — | **Sufficient** |
| `/guides/repair-intake-workflow.html` | guide | site | 368 | 9 | 4/4 | 30.4% | 0.0% | 0 | 1/3 | yes | — | **Sufficient** |
| `/guides/setup-order.html` | guide | site | 340 | 8 | 4/4 | 30.4% | 4.3% | 0 | 1/2 | yes | — | **Sufficient** |
| `/guides/string-gauge-setup-effects.html` | guide | site | 352 | 9 | 4/4 | 31.8% | 0.0% | 0 | 2/2 | yes | — | **Sufficient** |
| `/guides/used-guitar-inspection.html` | guide | site | 336 | 9 | 4/4 | 35.0% | 0.0% | 0 | 1/2 | yes | — | **Sufficient** |
| `/` | basic | site | 651 | 12 | 0/scope | 0.0% | 0.0% | 0 | 0/37 | yes | — | **Sufficient** |
| `/privacy.html` | basic | site | 72 | 4 | 0/scope | 0.0% | 0.0% | 0 | 0/0 | yes | — | **Sufficient** |
| `/reference/control-hardware-dimensions.html` | reference | site | 414 | 7 | 4/4 | 15.4% | 7.7% | 0 | 3/3 | yes | — | **Sufficient** |
| `/reference/fret-position-formula.html` | reference | site | 323 | 8 | 4/4 | 20.0% | 10.0% | 0 | 1/2 | yes | — | **Sufficient** |
| `/reference/geometry-measurement.html` | reference | site | 379 | 7 | 4/4 | 16.0% | 8.0% | 0 | 10/3 | yes | — | **Sufficient** |
| `/reference/measurement-points.html` | reference | site | 323 | 7 | 4/4 | 19.0% | 14.3% | 0 | 3/3 | yes | — | **Sufficient** |
| `/reference/pickup-dimensions.html` | reference | site | 407 | 7 | 4/4 | 14.3% | 10.7% | 0 | 4/3 | yes | — | **Sufficient** |
| `/reference/pickup-wiring-terms.html` | reference | site | 364 | 7 | 4/4 | 16.7% | 8.3% | 0 | 4/2 | yes | — | **Sufficient** |
| `/reference/recording-level-latency.html` | reference | site | 443 | 7 | 4/4 | 12.9% | 9.7% | 0 | 2/4 | yes | — | **Sufficient** |
| `/reference/string-tension-formula.html` | reference | site | 352 | 9 | 4/4 | 18.2% | 9.1% | 0 | 1/2 | yes | — | **Sufficient** |
| `/reference/unit-conversion.html` | reference | site | 287 | 7 | 4/4 | 22.2% | 16.7% | 0 | 1/2 | yes | — | **Sufficient** |
| `/tools/acoustic-guitar-setup-checklist.html` | tool | Diagnostics & setup | 609 | 10 | 9/9 | 50.0% | 16.7% | 0 | 2/3 | yes | — | **Sufficient** |
| `/tools/alternate-tuning-string-selector.html` | tool | Measurement & adjustment | 631 | 10 | 9/9 | 47.4% | 15.8% | 0 | 4/3 | yes | — | **Sufficient** |
| `/tools/bass-setup-checklist.html` | tool | Diagnostics & setup | 603 | 10 | 9/9 | 48.6% | 24.3% | 0 | 1/3 | yes | — | **Sufficient** |
| `/tools/before-after-setup-card.html` | tool | Shop documents | 619 | 10 | 9/9 | 40.5% | 26.2% | 0 | 10/3 | yes | — | **Sufficient** |
| `/tools/bridge-string-spacing.html` | tool | Luthier geometry & build | 723 | 10 | 9/9 | 46.7% | 13.3% | 0 | 3/3 | yes | — | **Sufficient** |
| `/tools/control-switch-clearance.html` | tool | Control hardware fit & layout | 825 | 10 | 9/9 | 40.0% | 15.6% | 0 | 4/3 | yes | — | **Sufficient** |
| `/tools/customer-approval-checklist.html` | tool | Shop documents | 746 | 10 | 9/9 | 39.1% | 17.4% | 0 | 4/3 | yes | — | **Sufficient** |
| `/tools/di-input-loading-checker.html` | tool | Recording & reamping | 703 | 10 | 9/9 | 37.5% | 22.5% | 0 | 5/3 | yes | — | **Sufficient** |
| `/tools/dual-mic-phase-alignment-planner.html` | tool | Recording & reamping | 695 | 10 | 9/9 | 37.5% | 20.0% | 1 | 3/3 | yes | — | **Sufficient** |
| `/tools/electric-guitar-setup-checklist.html` | tool | Diagnostics & setup | 596 | 10 | 9/9 | 46.2% | 17.9% | 0 | 1/3 | yes | — | **Sufficient** |
| `/tools/fret-buzz-diagnostic.html` | tool | Diagnostics & setup | 715 | 10 | 9/9 | 40.0% | 24.4% | 0 | 4/3 | yes | — | **Sufficient** |
| `/tools/fret-position-template.html` | tool | Luthier geometry & build | 716 | 10 | 9/9 | 47.7% | 15.9% | 0 | 6/3 | yes | — | **Sufficient** |
| `/tools/fret-slot-print-template.html` | tool | Luthier geometry & build | 783 | 10 | 9/9 | 43.8% | 16.7% | 0 | 4/3 | yes | — | **Sufficient** |
| `/tools/fretboard-radius-matcher.html` | tool | Luthier geometry & build | 649 | 10 | 9/9 | 51.2% | 7.3% | 0 | 3/3 | yes | — | **Sufficient** |
| `/tools/ground-hum-diagnostic.html` | tool | Electronics & wiring | 798 | 10 | 9/9 | 36.0% | 10.0% | 0 | 6/3 | yes | — | **Sufficient** |
| `/tools/guitar-condition-report.html` | tool | Shop documents | 649 | 10 | 9/9 | 42.9% | 23.8% | 0 | 8/3 | yes | — | **Sufficient** |
| `/tools/guitar-repair-intake.html` | tool | Shop documents | 897 | 10 | 9/9 | 31.6% | 15.8% | 0 | 6/3 | yes | — | **Sufficient** |
| `/tools/guitar-setup-wizard.html` | tool | Diagnostics & setup | 641 | 10 | 9/9 | 45.0% | 22.5% | 0 | 5/3 | yes | — | **Sufficient** |
| `/tools/headstock-break-angle.html` | tool | Luthier geometry & build | 645 | 10 | 9/9 | 52.5% | 5.0% | 0 | 2/3 | yes | — | **Sufficient** |
| `/tools/high-action-diagnostic.html` | tool | Diagnostics & setup | 640 | 10 | 9/9 | 47.4% | 23.7% | 0 | 7/3 | yes | — | **Sufficient** |
| `/tools/intonation-problem-diagnostic.html` | tool | Diagnostics & setup | 655 | 10 | 9/9 | 46.2% | 20.5% | 0 | 4/3 | yes | — | **Sufficient** |
| `/tools/knob-shaft-compatibility.html` | tool | Control hardware fit & layout | 812 | 10 | 9/9 | 38.3% | 12.8% | 0 | 4/3 | yes | — | **Sufficient** |
| `/tools/maintenance-schedule.html` | tool | Shop documents | 703 | 10 | 9/9 | 40.9% | 9.1% | 0 | 3/3 | yes | — | **Sufficient** |
| `/tools/multiscale-fretboard-planner.html` | tool | Luthier geometry & build | 705 | 10 | 9/9 | 50.0% | 11.9% | 0 | 2/3 | yes | — | **Sufficient** |
| `/tools/neck-angle-planner.html` | tool | Luthier geometry & build | 708 | 10 | 9/9 | 50.0% | 7.1% | 0 | 3/3 | yes | — | **Sufficient** |
| `/tools/neck-relief-measurement.html` | tool | Measurement & adjustment | 619 | 10 | 9/9 | 47.4% | 15.8% | 0 | 8/3 | yes | — | **Sufficient** |
| `/tools/nut-string-spacing.html` | tool | Luthier geometry & build | 706 | 10 | 9/9 | 47.7% | 13.6% | 0 | 4/3 | yes | — | **Sufficient** |
| `/tools/output-jack-mounting-fit.html` | tool | Control hardware fit & layout | 857 | 10 | 9/9 | 38.3% | 12.8% | 0 | 3/3 | yes | — | **Sufficient** |
| `/tools/parts-labor-job-sheet.html` | tool | Shop documents | 769 | 10 | 9/9 | 36.0% | 22.0% | 0 | 4/3 | yes | — | **Sufficient** |
| `/tools/pedal-insert-headroom-checker.html` | tool | Recording & reamping | 809 | 10 | 9/9 | 31.9% | 17.0% | 0 | 3/3 | yes | — | **Sufficient** |
| `/tools/pickup-height-planner.html` | tool | Measurement & adjustment | 631 | 10 | 9/9 | 47.4% | 13.2% | 0 | 4/3 | yes | — | **Sufficient** |
| `/tools/pickup-phase-troubleshooter.html` | tool | Electronics & wiring | 686 | 10 | 9/9 | 42.9% | 16.7% | 0 | 6/3 | yes | — | **Sufficient** |
| `/tools/pickup-pole-spacing-matcher.html` | tool | Pickup fit & spacing | 652 | 10 | 9/9 | 47.4% | 13.2% | 0 | 5/3 | yes | — | **Sufficient** |
| `/tools/pickup-ring-mount-fit.html` | tool | Pickup fit & spacing | 743 | 10 | 9/9 | 41.9% | 16.3% | 0 | 5/3 | yes | — | **Sufficient** |
| `/tools/pickup-route-clearance-checker.html` | tool | Pickup fit & spacing | 706 | 10 | 9/9 | 42.9% | 16.7% | 0 | 3/3 | yes | — | **Sufficient** |
| `/tools/pickup-wiring-selector.html` | tool | Electronics & wiring | 721 | 10 | 9/9 | 39.1% | 13.0% | 0 | 8/3 | yes | — | **Sufficient** |
| `/tools/potentiometer-mounting-fit.html` | tool | Control hardware fit & layout | 785 | 10 | 9/9 | 42.9% | 19.0% | 0 | 6/3 | yes | — | **Sufficient** |
| `/tools/potentiometer-value-selector.html` | tool | Electronics & wiring | 666 | 10 | 9/9 | 45.0% | 15.0% | 0 | 6/3 | yes | — | **Sufficient** |
| `/tools/prewired-harness-layout-matcher.html` | tool | Control hardware fit & layout | 825 | 10 | 9/9 | 38.3% | 10.6% | 0 | 4/3 | yes | — | **Sufficient** |
| `/tools/reamp-level-match-planner.html` | tool | Recording & reamping | 680 | 10 | 9/9 | 38.5% | 20.5% | 0 | 4/3 | yes | — | **Sufficient** |
| `/tools/repair-quote-generator.html` | tool | Shop documents | 773 | 10 | 9/9 | 38.3% | 19.1% | 0 | 7/3 | yes | — | **Sufficient** |
| `/tools/round-trip-alignment-calculator.html` | tool | Recording & reamping | 653 | 10 | 9/9 | 37.5% | 20.0% | 0 | 5/3 | yes | — | **Sufficient** |
| `/tools/saddle-radius-planner.html` | tool | Luthier geometry & build | 740 | 10 | 9/9 | 46.7% | 8.9% | 0 | 4/3 | yes | — | **Sufficient** |
| `/tools/scale-length-identifier.html` | tool | Measurement & adjustment | 574 | 10 | 9/9 | 51.4% | 11.4% | 0 | 3/3 | yes | — | **Sufficient** |
| `/tools/series-parallel-coil-split-selector.html` | tool | Electronics & wiring | 662 | 10 | 9/9 | 42.9% | 7.1% | 0 | 3/3 | yes | — | **Sufficient** |
| `/tools/setup-measurement-sheet.html` | tool | Shop documents | 646 | 10 | 9/9 | 43.9% | 22.0% | 0 | 11/3 | yes | — | **Sufficient** |
| `/tools/shim-thickness-planner.html` | tool | Luthier geometry & build | 609 | 10 | 9/9 | 56.8% | 5.4% | 0 | 2/3 | yes | — | **Sufficient** |
| `/tools/string-action-converter.html` | tool | Measurement & adjustment | 565 | 10 | 9/9 | 52.9% | 14.7% | 0 | 5/3 | yes | — | **Sufficient** |
| `/tools/string-gauge-change-planner.html` | tool | Measurement & adjustment | 647 | 10 | 9/9 | 45.0% | 20.0% | 0 | 8/3 | yes | — | **Sufficient** |
| `/tools/string-spread-at-pickup.html` | tool | Pickup fit & spacing | 666 | 10 | 9/9 | 46.2% | 12.8% | 0 | 4/3 | yes | — | **Sufficient** |
| `/tools/string-tension-matcher.html` | tool | Measurement & adjustment | 671 | 10 | 9/9 | 46.2% | 15.4% | 0 | 6/3 | yes | — | **Sufficient** |
| `/tools/tone-capacitor-comparison.html` | tool | Electronics & wiring | 640 | 10 | 9/9 | 48.6% | 10.8% | 0 | 3/3 | yes | — | **Sufficient** |
| `/tools/tremolo-spring-balance.html` | tool | Luthier geometry & build | 715 | 10 | 9/9 | 45.5% | 9.1% | 0 | 4/3 | yes | — | **Sufficient** |
| `/tools/tuning-stability-troubleshooter.html` | tool | Diagnostics & setup | 669 | 10 | 9/9 | 45.0% | 20.0% | 0 | 4/3 | yes | — | **Sufficient** |
| `/tools/used-guitar-inspection.html` | tool | Inspection | 650 | 10 | 9/9 | 41.5% | 17.1% | 0 | 3/3 | yes | — | **Sufficient** |

## Completion gate

PASS — Needs reinforcement 0, Thin 0, Duplicate-risk 0, Functionally incomplete 0.
