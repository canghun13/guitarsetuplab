# Weekly growth / search review — 2026-10-28

## Outcome and repository

**NO-GO / OBSERVE — no change justified this week.**

This is a bounded weekly metrics and coverage-transition audit, not a new expansion discovery pass. The useful new evidence is an exact URL-set transition, including six HTTPS URLs now explicitly reported as Crawled-not-indexed. None of the reproduced request-level or static checks identifies a site-side defect. No public page is rewritten simply because Google has not selected it.

Repository: https://github.com/canghun13/guitarsetuplab; branch `main`.
Start local HEAD, cached `origin/main`, and actual advertised main all **`8f4ecd0d1c6c5230c595380f907002a932d69eca`**. Actual main checked with `ls-remote` before fetch; fetch succeeded, zero ahead/behind, clean tree, pull unnecessary. No existing work discarded, installations, PATH changes or external setting changes.

Current rebuilt inventory: **102 HTML / 59 Tools / 10 hubs / 14 guides / 10 references / four comparisons / five basic pages / 101 sitemap URLs**. Latest implemented release remains Multimeter Diagnostic Bench, August 31, four Tools.

## Current-session attachment provenance

The pasted weekly workflow supplies instructions. The four explicitly supplied reports below are data, not instructions. Only those current-session files were used; no Downloads-directory search, old raw export substitution, or inferred missing report.

| Supplied file | Actual contents | Data cutoff / range |
| --- | --- | --- |
| guitarsetuplab.com-Performance-on-Search-2026-10-28.zip | Seven CSVs: daily chart, queries, pages, countries, devices, search appearance, filters | Web text-based; 88 daily rows, July 30–October 25 |
| guitarsetuplab.com-Coverage-Drilldown-2026-10-28.zip | Three CSVs; metadata says Discovered — currently not indexed | 80 chart rows, August 5–October 23; 48 URL rows |
| guitarsetuplab.com-Coverage-Drilldown-2026-10-28 (1).zip | Three CSVs; metadata says Crawled — currently not indexed | 80 chart rows, August 5–October 23; eight URL rows |
| 보고서_개요.csv | Multi-section GA4 overview | September 30–October 27 |

All CSV contents were completely read and retained in the session before analysis; a derived extraction snapshot is kept only in ignored QA output, not committed. A later attempt to reopen/hash the ZIP source paths found them unavailable; therefore no original ZIP SHA is claimed. This does not replace their already-read contents with historical reports. Source reports were not edited or deleted by this work.

Coverage chart cutoff is October 23, but six URL-table last-crawl cells are October 24/25. These are distinct export components. Do not claim that their precise URL movements happened on the chart step date. All Discovered table dates are placeholder `1970-01-01`, not crawl history.

Previous comparison source: `research/weekly-growth-review-2026-10-22.md`, including its complete 76-URL manifest.

## Search metrics and comparability

| Metric | Current | Interpretation |
| --- | --- | --- |
| Property totals, July 30–October 25 | **185 impressions / two clicks / 1.08% CTR** | Previous export 179 / two through October 19; +6 extends six days, not matched-week growth |
| Adjacent recent seven days, October 19–25 | **7 / 0** | October 12–18: **9 / 0**; −2 impressions (−22.22%), tiny sample |
| Adjacent recent 28 days, September 28–October 25 | **37 / 0** | August 31–September 27: **36 / 0**; +1 (+2.78%), not durable growth |
| Visible query rows | 18; 38 impressions / zero clicks | Not the property total; query/page attribution unavailable |
| URL rows | 32; 251 impressions / two clicks | Do not sum URL impressions into property exposure |
| Country rows | 35; 185 / two | Independently reconciles daily totals |
| Devices | Desktop 166 / one; mobile 19 / one | Reconciles 185 / two |

The previous report's October 13–19 seven-day window overlaps the current October 19–25 window. Its 41 recent-28-day impressions also cover different dates. Neither is a matched-period change; the nonoverlapping comparisons above come from the current daily chart.

Leading visible queries remain `string tension formula` (12 impressions, position 69.92), `neck relief` (four, 74.25), `buzz diagnostic` (three, 7.67), and `check intonation` (three, 72.67). Newly visible `fret12` has one impression at position 13; there is no page/query/date join proving it belongs to the Wizard or demonstrating an unmet workflow.

| Representative page | Current cumulative impressions / clicks / position | Movement versus October 22 export |
| --- | --- | --- |
| Tension formula reference | 65 / 0 / 66.75 | Unchanged |
| Setup-document guide | 20 / 1 / 33.8 | Unchanged |
| Geometry measurement reference | 13 / 1 / 12.31 | Unchanged |
| Fret Buzz Diagnostic | 18 / 0 / 17.22 | Unchanged |
| Measurement points reference | 15 / 0 / 13.4 | +1 impression from 14 |
| HTTPS neck-relief guide | 10 / 0 / 53.3 | +1 from nine |
| Repair-intake guide | 7 / 0 / 6.14 | Unchanged |
| Maintenance Schedule | 2 / 0 / 8 | Newly visible URL row, not necessarily new indexing |
| String Spread at Pickup | 1 / 0 / 1 | Newly visible URL row; no stable-rank inference |
| Guitar Setup Wizard | 1 / 0 / 13 | Newly visible URL row; no query attribution |
| Meter guide / resistance reference | 2 / 0 / 44; 1 / 0 / 1 | Unchanged |

Seven HTTP URL rows still total 21 cumulative impressions. Historical exposure is not itself a current redirect failure.

## Coverage: exact identities, not an indexing estimate

- Discovered chart: 76 since October 5, 75 on October 17, **48 on October 20–23**.
- Crawled chart: **two before October 20, eight October 20–23**. The previous weekly attachment did not supply this group; eight must not be described as eight newly affected pages.
- Exact URL diff against the previous 76: **48 retained, 28 removed, zero added**.
- Of the 28 removed, **six now occur in the supplied Crawled group; 22 are absent from both supplied groups**.
- Current exact-URL intersection between the two groups: zero. The other two Crawled entries are HTTP identities, while their HTTPS counterparts remain Discovered.
- **No indexed total is available. The 22 absent URLs are not confirmed indexed.** Do not calculate indexed pages as sitemap minus these issue groups.

### Newly identifiable HTTPS Crawled group

| URL path | Last-crawl cell | Distinct incoming pages / shortest static home depth |
| --- | --- | --- |
| /comparisons/series-parallel-coil-split.html | October 25 | 2 / 1 |
| /guides/choosing-pot-capacitor-values.html | October 25 | 3 / 1 |
| /guides/recording-chain-measurement.html | October 25 | 4 / 1 |
| /reference/unit-conversion.html | October 25 | 1 / 1 |
| /tools/string-action-converter.html | October 24 | 5 / 2 |
| /tools/tone-capacitor-comparison.html | October 24 | 3 / 2 |

Static HTML includes scope/method/examples/verification/limits or the complete Tool workbench and explanatory sections. The six are not raw empty shells, orphan pages or unusually deep static routes. The content audit classifies each Sufficient. These checks do not prove Google's quality judgement, and no word-count padding or bulk-link intervention is justified by this status alone.

The two historical HTTP Crawled entries are pickup-wiring-terms and string-gauge-setup-effects, both with August 11 last-crawl cells. Their HTTPS counterparts are separate current Discovered entries. All six tested noncanonical variants (HTTP apex, HTTP www, HTTPS www for each path) redirect **301 directly to the matching HTTPS apex**, with validating TLS and final 200. No external setting was changed.

Recent-cluster membership: Recording has three still Discovered; Meter has five, **8/15 combined** versus 13/15 previously. Recording measurement guide is now Crawled. The other six recent-cluster URLs are absent from both supplied groups (Meter guide/reference plus Recording hub/reamp/round-trip/dual-mic). Neither absence nor cumulative impression is a present URL Inspection verdict.

## GA4: supplementary, QA-sensitive evidence

September 30–October 27: **14 active / 13 new / 20.57 seconds average engagement / 54 events**.
Previous September 24–October 21: 28 / 27 / 13.25 seconds / 118; the windows overlap 22 days. This is not a matched weekly acquisition decline, and a rolling-window expiry explanation remains a hypothesis.

First-user sources: Direct 12, ChatGPT two. Session sources: Direct 11, ChatGPT two. Google organic has no row, not proven zero users. ChatGPT is the only listed non-Direct source, but engaged landings and human/QA segmentation are unavailable; do not label it established genuine referral growth.

Home has six views/seven active users, Diagnostics hub two/one, nine other rows one view each, including a Page Not Found row with no URL/date/referrer. That row does not identify a current broken link. New-user daily data do not provide returning-user counts. City labels, Direct and one-user Tool activity are insufficient to declare real demand or bots. QA contamination remains unresolved.

## Decision tree

### A — Technical action required: No

Read-only production sampling covered the six HTTPS Crawled targets, both HTTPS canonical counterparts of historical HTTP entries, Recording hub, Fret Buzz and measurement points: **11 pages**. Every normal and Googlebot Smartphone request returned 200, identical HTML, repository match after newline normalization, exact HTTPS-apex self-canonical, no meta noindex or X-Robots noindex, and presence in the production sitemap. Robots/sitemap returned 200, matched repository files, allowed crawling and listed 101 URLs. Six redirect variants above passed. This is a request-level audit, not a fresh full TLS or browser-render certification.

### B — Existing growth candidates (maximum three)

| Page / workflow | Evidence | Potential opportunity | Current score | Decision |
| --- | --- | --- | --- | --- |
| Fret Buzz Diagnostic | 18 cumulative impressions, position 17.22; unchanged | Validate query/output alignment if repeated demand broadens | N/A: no new ROI model or demonstrated missing output | OBSERVE; preserve URL/title/H1/output |
| Measurement points reference | 14→15 impressions, position 13.4; three incoming pages, home depth one | Watch measurement-specific query/landing demand | N/A: +1 is insufficient for a new score | OBSERVE; no generic explanatory padding |
| Maintenance Schedule | Newly visible two impressions at position eight; absent from both supplied issue groups | Investigate recurrence/maintenance intent if repeated | N/A: two impressions, no page-query join | OBSERVE; no presumed indexing success or redesign |

Tension's 65 impressions do not overcome position ~67 and unchanged demand; no high-ROI missing decision output is established.

### C — Expansion checkpoint, not a fresh discovery result

Expansion considered: **Yes**. The latest recorded exclusion boundary and October 15/22 decisions were reviewed. No genuinely new sourced four-independent-Tool hypothesis was established by this week's inputs. Low organic traffic is **not** used as a prohibition. The current useful bounded action is the newly supplied two-group transition audit.

**New expansion discovery was not executed this session.** No new 40-family breadth, 10–14 mid-list, four–six finalists, score or A–K gate result is claimed. October 15 remains the latest historical broad expansion NO-GO, not a current market search or exhaustion proof. Do not rebrand old families or reuse old finalist scores as fresh evidence. If a genuinely new strong hypothesis is proposed, the required full breadth and external validation still apply before GO; lack of Bing data alone is not a veto.

Exclusion boundary unchanged: implemented core/measurement/geometry/electronics/documents/pickup-fit/control-fit/recording/multimeter plus all examined/HOLD/REJECT history carried by October 15, October 9, September and August research. No new exclusion family is added by this observation-only session.

## Changes and QA

Production pages/CSS/JS/generator/navigation/metadata/sitemap/GA4/email: **unchanged**. User-managed footer, Boost/Sell and directory badges untouched. Changed only this report and the latest handover entry.

QA executed in an isolated archived checkout of the start commit, not by rebuilding user working files:

- Build: 102 HTML / 59 Tools.
- Static: 102 pages, metadata, structured data, sitemap, internal links, assets, JavaScript syntax; **zero failures, broken links and orphans**.
- Fixtures: **geometry 65 / pickup-fit 15 / control-fit 33 / recording 44 / electrical-test 30**, all PASS.
- Content: **102 Sufficient**, Strong zero, Needs zero, Thin zero, duplicate-risk zero, incomplete zero.
- Supplemental static graph: 101 public non-404 pages, zero orphans; target inbound/depth table above.
- New browser screenshots, eight viewports, bounding boxes, console, Run/Copy/Reset/refill/Print: **not repeated or claimed** for documentation-only scope. Existing automated checks do not stand in for new browser evidence.
- Production: scoped request/bot/HTML/indexability/redirect checks above; post-push request replay and commit-specific Quality/Pages must be verified before final closeout.
- A non-escalated network probe hit the sandbox's socket restriction; the same read-only request check succeeded with approved network access. A graph-harness path typo for measurement points was corrected to `/reference/measurement-points.html`; it was not a public broken URL.

## Deployment and next state

The review commit is the commit containing this report and latest handover entry. Record verified review-SHA Quality/Pages and post-deploy request replay in a closeout; verify that closeout's own workflows, actual remote SHA, tracking SHA and clean tree before final reporting. No deployment success is presumed here.

Verified review deployment: **`b79a246105ff5d543704d5dce811d21b81c74d77`** was pushed and matched advertised remote main. [Quality 40646738504](https://github.com/canghun13/guitarsetuplab/actions/runs/40646738504) and [Pages 40646738511](https://github.com/canghun13/guitarsetuplab/actions/runs/40646738511) completed successfully for that exact SHA. After completion, home, Recording measurement guide, unit-conversion reference, String Action Converter and Fret Buzz all returned 200 with exact canonicals and newline-normalized repository HTML matches. This is request-level post-deploy verification, not new rendered/interaction QA.

Both current Coverage manifests were independently checked against the retained extracted input: 48 and eight unique URLs, zero omitted from this report. The extraction snapshot SHA-256 is `3a43f77c13e030c2f0a02e5fece18d2aad53b3cf9ad9d2d2f9dc0f659384af7d` (derived JSON bytes, **not an original ZIP hash**). The closeout removes one trailing blank line flagged by the initial staged whitespace check; final diff checks are rerun. Final closeout SHA is the commit containing this deployment evidence; verify its own workflows and clean three-way equality before reporting completion.

Next state (three):
1. Compare future exact URL identities against both manifests below; obtain indexed/URL Inspection evidence for the 22 absent, six HTTPS Crawled and two historical HTTP identities rather than infer indexing.
2. Obtain matched-window page/query/date and organic landing/engagement detail before one targeted upgrade; monitor newly visible maintenance/spread/Wizard rows without equating one exposure to growth.
3. Reopen expansion only with genuinely new sourced four-Tool workflows; run the complete fresh discovery funnel if that branch is opened. Preserve all historical exclusions.

## Appendix A — complete current Discovered URL manifest (48)

Exact scheme/host/path retained. All last-crawl cells are placeholder 1970-01-01.

```text
https://guitarsetuplab.com/about.html
https://guitarsetuplab.com/categories/luthier.html
https://guitarsetuplab.com/categories/testing.html
https://guitarsetuplab.com/comparisons/equal-center-vs-equal-gap.html
https://guitarsetuplab.com/comparisons/metric-vs-imperial-control-hardware.html
https://guitarsetuplab.com/comparisons/pot-values.html
https://guitarsetuplab.com/contact.html
https://guitarsetuplab.com/guides/diagnose-guitar-hum-safely.html
https://guitarsetuplab.com/guides/measure-string-spacing.html
https://guitarsetuplab.com/guides/print-actual-size.html
https://guitarsetuplab.com/guides/setup-order.html
https://guitarsetuplab.com/guides/string-gauge-setup-effects.html
https://guitarsetuplab.com/guides/used-guitar-inspection.html
https://guitarsetuplab.com/reference/fret-position-formula.html
https://guitarsetuplab.com/reference/pickup-wiring-terms.html
https://guitarsetuplab.com/reference/recording-level-latency.html
https://guitarsetuplab.com/tools/acoustic-guitar-setup-checklist.html
https://guitarsetuplab.com/tools/alternate-tuning-string-selector.html
https://guitarsetuplab.com/tools/bridge-string-spacing.html
https://guitarsetuplab.com/tools/cable-ground-continuity-checker.html
https://guitarsetuplab.com/tools/control-switch-clearance.html
https://guitarsetuplab.com/tools/customer-approval-checklist.html
https://guitarsetuplab.com/tools/di-input-loading-checker.html
https://guitarsetuplab.com/tools/fret-position-template.html
https://guitarsetuplab.com/tools/fret-slot-print-template.html
https://guitarsetuplab.com/tools/fretboard-radius-matcher.html
https://guitarsetuplab.com/tools/guitar-repair-intake.html
https://guitarsetuplab.com/tools/headstock-break-angle.html
https://guitarsetuplab.com/tools/high-action-diagnostic.html
https://guitarsetuplab.com/tools/knob-shaft-compatibility.html
https://guitarsetuplab.com/tools/multiscale-fretboard-planner.html
https://guitarsetuplab.com/tools/neck-angle-planner.html
https://guitarsetuplab.com/tools/nut-string-spacing.html
https://guitarsetuplab.com/tools/output-jack-mounting-fit.html
https://guitarsetuplab.com/tools/parts-labor-job-sheet.html
https://guitarsetuplab.com/tools/pedal-insert-headroom-checker.html
https://guitarsetuplab.com/tools/pickup-dcr-analyzer.html
https://guitarsetuplab.com/tools/pickup-phase-troubleshooter.html
https://guitarsetuplab.com/tools/pickup-pole-spacing-matcher.html
https://guitarsetuplab.com/tools/potentiometer-taper-analyzer.html
https://guitarsetuplab.com/tools/repair-quote-generator.html
https://guitarsetuplab.com/tools/saddle-radius-planner.html
https://guitarsetuplab.com/tools/selector-contact-mapper.html
https://guitarsetuplab.com/tools/shim-thickness-planner.html
https://guitarsetuplab.com/tools/string-gauge-change-planner.html
https://guitarsetuplab.com/tools/tremolo-spring-balance.html
https://guitarsetuplab.com/tools/tuning-stability-troubleshooter.html
https://guitarsetuplab.com/tools/used-guitar-inspection.html
```

## Appendix B — complete current Crawled URL manifest (8)

| Exact URL | Last-crawl cell |
| --- | --- |
| https://guitarsetuplab.com/comparisons/series-parallel-coil-split.html | 2026-10-25 |
| https://guitarsetuplab.com/reference/unit-conversion.html | 2026-10-25 |
| https://guitarsetuplab.com/guides/recording-chain-measurement.html | 2026-10-25 |
| https://guitarsetuplab.com/guides/choosing-pot-capacitor-values.html | 2026-10-25 |
| https://guitarsetuplab.com/tools/tone-capacitor-comparison.html | 2026-10-24 |
| https://guitarsetuplab.com/tools/string-action-converter.html | 2026-10-24 |
| http://guitarsetuplab.com/reference/pickup-wiring-terms.html | 2026-08-11 |
| http://guitarsetuplab.com/guides/string-gauge-setup-effects.html | 2026-08-11 |

## Appendix C — 22 previous Discovered URLs absent from both current groups

These are **not confirmed indexed**.

```text
https://guitarsetuplab.com/categories/controls.html
https://guitarsetuplab.com/categories/diagnostics.html
https://guitarsetuplab.com/categories/documents.html
https://guitarsetuplab.com/categories/recording.html
https://guitarsetuplab.com/guides/measure-pickup-fit.html
https://guitarsetuplab.com/reference/pickup-dimensions.html
https://guitarsetuplab.com/tools/before-after-setup-card.html
https://guitarsetuplab.com/tools/dual-mic-phase-alignment-planner.html
https://guitarsetuplab.com/tools/ground-hum-diagnostic.html
https://guitarsetuplab.com/tools/guitar-condition-report.html
https://guitarsetuplab.com/tools/guitar-setup-wizard.html
https://guitarsetuplab.com/tools/maintenance-schedule.html
https://guitarsetuplab.com/tools/pickup-height-planner.html
https://guitarsetuplab.com/tools/pickup-ring-mount-fit.html
https://guitarsetuplab.com/tools/pickup-route-clearance-checker.html
https://guitarsetuplab.com/tools/pickup-wiring-selector.html
https://guitarsetuplab.com/tools/potentiometer-value-selector.html
https://guitarsetuplab.com/tools/reamp-level-match-planner.html
https://guitarsetuplab.com/tools/round-trip-alignment-calculator.html
https://guitarsetuplab.com/tools/series-parallel-coil-split-selector.html
https://guitarsetuplab.com/tools/setup-measurement-sheet.html
https://guitarsetuplab.com/tools/string-spread-at-pickup.html
```
