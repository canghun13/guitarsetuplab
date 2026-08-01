# Content-depth audit

Generated: 2026-08-01T04:04:01.203Z  
Scope: all generated public HTML in `site/` (71 pages expected)

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
- Sufficient: 71
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

- Overall substantive words: min 30, average 519, max 892

| Page type | Pages | Min | Average | Max |
|---|---:|---:|---:|---:|
| basic | 5 | 30 | 154 | 519 |
| hub | 6 | 185 | 288 | 365 |
| comparison | 3 | 327 | 339 | 362 |
| guide | 10 | 336 | 357 | 384 |
| reference | 6 | 287 | 338 | 379 |
| tool | 41 | 564 | 676 | 892 |

## Common protocol sentences

These repeated statements are safety or measurement protocol. Their page-level ratio remains visible in the table so excessive boilerplate cannot masquerade as unique depth.

- 41 pages: “use it when you can describe the current state and need a defensible next check”
- 41 pages: “it is not a shortcut around inspection preserve the starting state change one variable and verify the result under the same conditions”
- 41 pages: “use a stable tuned instrument unless the page specifically investigates tuning”
- 41 pages: “name the physical reference unit and test condition beside every important number”
- 41 pages: “keep the original measurements so any reversible change can be returned to baseline”
- 41 pages: “a placeholder demonstrates format only it is never a recommendation for a particular guitar”
- 41 pages: “save or print the result ticket with the entered conditions so another person can reproduce the decision”
- 41 pages: “the page keeps calculation and diagnostic claims deliberately bounded”
- 41 pages: “display rounding improves readability while the underlying logic uses entered values descriptive branches report relative tendencies and the evidence needed to confirm them”
- 41 pages: “substitute real measurements and repeat the final test before accepting the next action”
- 41 pages: “instrument design service history measurement error and player technique can outweigh a calculator or checklist”
- 41 pages: “where manufacturer instructions exist for the exact hardware use those instructions and record the revision consulted”

## Page-by-page inventory

“Required” is the count of required content components present. “Links” is inbound/outbound within main content. “Common” and “dup” are sentence ratios; cross-page common protocol is separated from duplicate-risk.

| URL | Type | Category | Words | Headings | Required | Common | Dup | Within repeats | Links in/out | Tool UI | Missing | Classification |
|---|---|---|---:|---:|---:|---:|---:|---:|---:|---|---|---|
| `/404.html` | basic | site | 30 | 1 | 0/scope | 0.0% | 0.0% | 0 | 0/1 | yes | — | **Sufficient** |
| `/about.html` | basic | site | 106 | 4 | 0/scope | 0.0% | 0.0% | 0 | 0/0 | yes | — | **Sufficient** |
| `/categories/diagnostics.html` | hub | diagnostics | 297 | 5 | 4/4 | 0.0% | 17.6% | 0 | 1/8 | yes | — | **Sufficient** |
| `/categories/documents.html` | hub | documents | 305 | 5 | 4/4 | 0.0% | 18.8% | 0 | 1/8 | yes | — | **Sufficient** |
| `/categories/electronics.html` | hub | electronics | 281 | 5 | 4/4 | 0.0% | 21.4% | 0 | 1/6 | yes | — | **Sufficient** |
| `/categories/inspection.html` | hub | inspection | 185 | 5 | 4/4 | 0.0% | 30.0% | 0 | 0/1 | yes | — | **Sufficient** |
| `/categories/luthier.html` | hub | luthier | 365 | 5 | 4/4 | 0.0% | 15.8% | 0 | 1/11 | yes | — | **Sufficient** |
| `/categories/measurement.html` | hub | measurement | 295 | 5 | 4/4 | 0.0% | 18.8% | 0 | 1/7 | yes | — | **Sufficient** |
| `/comparisons/equal-center-vs-equal-gap.html` | comparison | site | 329 | 7 | 4/4 | 19.0% | 14.3% | 0 | 1/2 | yes | — | **Sufficient** |
| `/comparisons/pot-values.html` | comparison | site | 362 | 8 | 4/4 | 21.1% | 21.1% | 0 | 2/2 | yes | — | **Sufficient** |
| `/comparisons/series-parallel-coil-split.html` | comparison | site | 327 | 7 | 4/4 | 23.5% | 11.8% | 0 | 1/2 | yes | — | **Sufficient** |
| `/contact.html` | basic | site | 44 | 2 | 0/scope | 0.0% | 0.0% | 0 | 0/0 | yes | — | **Sufficient** |
| `/guides/choosing-pot-capacitor-values.html` | guide | site | 369 | 9 | 4/4 | 31.8% | 9.1% | 0 | 1/3 | yes | — | **Sufficient** |
| `/guides/diagnose-guitar-hum-safely.html` | guide | site | 352 | 8 | 4/4 | 31.8% | 0.0% | 0 | 1/2 | yes | — | **Sufficient** |
| `/guides/document-guitar-setup.html` | guide | site | 347 | 9 | 4/4 | 31.8% | 0.0% | 0 | 1/2 | yes | — | **Sufficient** |
| `/guides/measure-neck-relief.html` | guide | site | 339 | 8 | 4/4 | 33.3% | 4.8% | 0 | 1/2 | yes | — | **Sufficient** |
| `/guides/measure-string-spacing.html` | guide | site | 381 | 9 | 4/4 | 30.4% | 4.3% | 0 | 2/2 | yes | — | **Sufficient** |
| `/guides/print-actual-size.html` | guide | site | 384 | 8 | 4/4 | 28.0% | 0.0% | 0 | 3/2 | yes | — | **Sufficient** |
| `/guides/repair-intake-workflow.html` | guide | site | 368 | 9 | 4/4 | 30.4% | 0.0% | 0 | 1/3 | yes | — | **Sufficient** |
| `/guides/setup-order.html` | guide | site | 340 | 8 | 4/4 | 30.4% | 4.3% | 0 | 1/2 | yes | — | **Sufficient** |
| `/guides/string-gauge-setup-effects.html` | guide | site | 352 | 9 | 4/4 | 31.8% | 0.0% | 0 | 2/2 | yes | — | **Sufficient** |
| `/guides/used-guitar-inspection.html` | guide | site | 336 | 9 | 4/4 | 35.0% | 0.0% | 0 | 1/2 | yes | — | **Sufficient** |
| `/` | basic | site | 519 | 9 | 0/scope | 0.0% | 0.0% | 0 | 0/28 | yes | — | **Sufficient** |
| `/privacy.html` | basic | site | 72 | 4 | 0/scope | 0.0% | 0.0% | 0 | 0/0 | yes | — | **Sufficient** |
| `/reference/fret-position-formula.html` | reference | site | 323 | 8 | 4/4 | 20.0% | 10.0% | 0 | 1/2 | yes | — | **Sufficient** |
| `/reference/geometry-measurement.html` | reference | site | 379 | 7 | 4/4 | 16.0% | 8.0% | 0 | 9/3 | yes | — | **Sufficient** |
| `/reference/measurement-points.html` | reference | site | 323 | 7 | 4/4 | 19.0% | 14.3% | 0 | 3/3 | yes | — | **Sufficient** |
| `/reference/pickup-wiring-terms.html` | reference | site | 364 | 7 | 4/4 | 16.7% | 8.3% | 0 | 2/2 | yes | — | **Sufficient** |
| `/reference/string-tension-formula.html` | reference | site | 352 | 9 | 4/4 | 18.2% | 9.1% | 0 | 1/2 | yes | — | **Sufficient** |
| `/reference/unit-conversion.html` | reference | site | 287 | 7 | 4/4 | 22.2% | 16.7% | 0 | 1/2 | yes | — | **Sufficient** |
| `/tools/acoustic-guitar-setup-checklist.html` | tool | Diagnostics & setup | 611 | 10 | 9/9 | 50.0% | 16.7% | 0 | 1/3 | yes | — | **Sufficient** |
| `/tools/alternate-tuning-string-selector.html` | tool | Measurement & adjustment | 627 | 10 | 9/9 | 50.0% | 13.2% | 0 | 8/3 | yes | — | **Sufficient** |
| `/tools/bass-setup-checklist.html` | tool | Diagnostics & setup | 603 | 10 | 9/9 | 48.6% | 24.3% | 0 | 1/3 | yes | — | **Sufficient** |
| `/tools/before-after-setup-card.html` | tool | Shop documents | 624 | 10 | 9/9 | 45.2% | 23.8% | 0 | 10/3 | yes | — | **Sufficient** |
| `/tools/bridge-string-spacing.html` | tool | Luthier geometry & build | 723 | 10 | 9/9 | 46.7% | 11.1% | 0 | 3/3 | yes | — | **Sufficient** |
| `/tools/customer-approval-checklist.html` | tool | Shop documents | 734 | 10 | 9/9 | 43.5% | 13.0% | 0 | 1/3 | yes | — | **Sufficient** |
| `/tools/electric-guitar-setup-checklist.html` | tool | Diagnostics & setup | 604 | 10 | 9/9 | 46.2% | 20.5% | 0 | 1/3 | yes | — | **Sufficient** |
| `/tools/fret-buzz-diagnostic.html` | tool | Diagnostics & setup | 714 | 10 | 9/9 | 40.0% | 24.4% | 0 | 10/3 | yes | — | **Sufficient** |
| `/tools/fret-position-template.html` | tool | Luthier geometry & build | 716 | 10 | 9/9 | 47.7% | 15.9% | 0 | 6/3 | yes | — | **Sufficient** |
| `/tools/fret-slot-print-template.html` | tool | Luthier geometry & build | 783 | 10 | 9/9 | 43.8% | 16.7% | 0 | 4/3 | yes | — | **Sufficient** |
| `/tools/fretboard-radius-matcher.html` | tool | Luthier geometry & build | 649 | 10 | 9/9 | 51.2% | 7.3% | 0 | 3/3 | yes | — | **Sufficient** |
| `/tools/ground-hum-diagnostic.html` | tool | Electronics & wiring | 795 | 10 | 9/9 | 40.0% | 10.0% | 0 | 2/3 | yes | — | **Sufficient** |
| `/tools/guitar-condition-report.html` | tool | Shop documents | 645 | 10 | 9/9 | 47.6% | 21.4% | 0 | 2/3 | yes | — | **Sufficient** |
| `/tools/guitar-repair-intake.html` | tool | Shop documents | 892 | 10 | 9/9 | 35.1% | 12.3% | 0 | 2/3 | yes | — | **Sufficient** |
| `/tools/guitar-setup-wizard.html` | tool | Diagnostics & setup | 645 | 10 | 9/9 | 45.0% | 20.0% | 0 | 10/3 | yes | — | **Sufficient** |
| `/tools/headstock-break-angle.html` | tool | Luthier geometry & build | 645 | 10 | 9/9 | 52.5% | 5.0% | 0 | 1/3 | yes | — | **Sufficient** |
| `/tools/high-action-diagnostic.html` | tool | Diagnostics & setup | 638 | 10 | 9/9 | 47.4% | 23.7% | 0 | 11/3 | yes | — | **Sufficient** |
| `/tools/intonation-problem-diagnostic.html` | tool | Diagnostics & setup | 651 | 10 | 9/9 | 46.2% | 23.1% | 0 | 2/3 | yes | — | **Sufficient** |
| `/tools/maintenance-schedule.html` | tool | Shop documents | 710 | 10 | 9/9 | 45.5% | 6.8% | 0 | 1/3 | yes | — | **Sufficient** |
| `/tools/multiscale-fretboard-planner.html` | tool | Luthier geometry & build | 705 | 10 | 9/9 | 50.0% | 11.9% | 0 | 2/3 | yes | — | **Sufficient** |
| `/tools/neck-angle-planner.html` | tool | Luthier geometry & build | 708 | 10 | 9/9 | 50.0% | 7.1% | 0 | 3/3 | yes | — | **Sufficient** |
| `/tools/neck-relief-measurement.html` | tool | Measurement & adjustment | 629 | 10 | 9/9 | 50.0% | 15.8% | 0 | 23/3 | yes | — | **Sufficient** |
| `/tools/nut-string-spacing.html` | tool | Luthier geometry & build | 706 | 10 | 9/9 | 47.7% | 11.4% | 0 | 4/3 | yes | — | **Sufficient** |
| `/tools/parts-labor-job-sheet.html` | tool | Shop documents | 766 | 10 | 9/9 | 40.0% | 18.0% | 0 | 2/3 | yes | — | **Sufficient** |
| `/tools/pickup-height-planner.html` | tool | Measurement & adjustment | 630 | 10 | 9/9 | 47.4% | 15.8% | 0 | 2/3 | yes | — | **Sufficient** |
| `/tools/pickup-phase-troubleshooter.html` | tool | Electronics & wiring | 684 | 10 | 9/9 | 47.6% | 11.9% | 0 | 2/3 | yes | — | **Sufficient** |
| `/tools/pickup-wiring-selector.html` | tool | Electronics & wiring | 722 | 10 | 9/9 | 43.5% | 10.9% | 0 | 3/3 | yes | — | **Sufficient** |
| `/tools/potentiometer-value-selector.html` | tool | Electronics & wiring | 649 | 10 | 9/9 | 50.0% | 12.5% | 0 | 3/3 | yes | — | **Sufficient** |
| `/tools/repair-quote-generator.html` | tool | Shop documents | 758 | 10 | 9/9 | 42.6% | 17.0% | 0 | 2/3 | yes | — | **Sufficient** |
| `/tools/saddle-radius-planner.html` | tool | Luthier geometry & build | 740 | 10 | 9/9 | 48.9% | 6.7% | 0 | 3/3 | yes | — | **Sufficient** |
| `/tools/scale-length-identifier.html` | tool | Measurement & adjustment | 564 | 10 | 9/9 | 52.9% | 8.8% | 0 | 3/2 | yes | — | **Sufficient** |
| `/tools/series-parallel-coil-split-selector.html` | tool | Electronics & wiring | 658 | 10 | 9/9 | 47.6% | 7.1% | 0 | 2/3 | yes | — | **Sufficient** |
| `/tools/setup-measurement-sheet.html` | tool | Shop documents | 651 | 10 | 9/9 | 48.8% | 19.5% | 0 | 11/3 | yes | — | **Sufficient** |
| `/tools/shim-thickness-planner.html` | tool | Luthier geometry & build | 609 | 10 | 9/9 | 56.8% | 5.4% | 0 | 2/3 | yes | — | **Sufficient** |
| `/tools/string-action-converter.html` | tool | Measurement & adjustment | 580 | 10 | 9/9 | 52.9% | 14.7% | 0 | 21/3 | yes | — | **Sufficient** |
| `/tools/string-gauge-change-planner.html` | tool | Measurement & adjustment | 645 | 10 | 9/9 | 47.5% | 15.0% | 0 | 9/3 | yes | — | **Sufficient** |
| `/tools/string-tension-matcher.html` | tool | Measurement & adjustment | 673 | 10 | 9/9 | 46.2% | 17.9% | 0 | 4/3 | yes | — | **Sufficient** |
| `/tools/tone-capacitor-comparison.html` | tool | Electronics & wiring | 629 | 10 | 9/9 | 54.1% | 10.8% | 0 | 3/3 | yes | — | **Sufficient** |
| `/tools/tremolo-spring-balance.html` | tool | Luthier geometry & build | 715 | 10 | 9/9 | 45.5% | 9.1% | 0 | 1/3 | yes | — | **Sufficient** |
| `/tools/tuning-stability-troubleshooter.html` | tool | Diagnostics & setup | 660 | 10 | 9/9 | 45.0% | 22.5% | 0 | 7/3 | yes | — | **Sufficient** |
| `/tools/used-guitar-inspection.html` | tool | Inspection | 645 | 10 | 9/9 | 46.3% | 12.2% | 0 | 2/3 | yes | — | **Sufficient** |

## Completion gate

PASS — Needs reinforcement 0, Thin 0, Duplicate-risk 0, Functionally incomplete 0.
