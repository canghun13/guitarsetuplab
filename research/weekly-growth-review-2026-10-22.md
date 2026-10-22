# Weekly growth review — 2026-10-22

## Final decision and scope

**NO-GO / OBSERVE — no change justified this week.**

No current site-side defect was reproduced. Existing-page exposure has not established a functional gap or a strong page/query growth opportunity. No production HTML, CSS, JavaScript, generator, navigation, URL, title/H1, sitemap, analytics, email or user-managed badge/footer changes are justified by these reports.

Expansion was considered against the latest exclusion/decision history, but **a new expansion-discovery branch was not executed this session**. There are no new 40-family, midlist, finalist, score or market-gap findings to claim. The October 15 discovery remains historical evidence, not a fresh October 22 search. Low organic traffic alone is not an expansion veto, and the age of the last release is not an automatic HOLD rule. An actual new, non-overlapping search/workflow hypothesis with four defensible Tools would still warrant discovery. This review supplies no such new hypothesis; it does not claim the market contains none.

The useful new repository artifact is the complete 76-URL issue snapshot below, together with matched-window metrics. Earlier summaries did not retain the entire issue set, which prevented identifying some removals. This snapshot makes future exact membership comparison possible without inventing indexing verdicts.

## Repository

- Repository: `https://github.com/canghun13/guitarsetuplab`; branch `main`.
- Start local HEAD, cached `origin/main` and actual advertised remote main: **`b7a8ed4c16d29dc78882f74e6de3ee2e41ea9764`**.
- Actual remote was checked with `ls-remote` before `fetch origin main`; zero ahead/behind, clean tree. No pull was necessary.
- No user work was overwritten, reset, stashed or discarded. No installation, dependency update, PATH/profile change, browser installation or external settings change.
- Inventory rebuilt in a disposable archive: 102 public HTML, 59 Tools; existing inventory contains 10 hubs, 14 guides, 10 references, four comparisons and five basic pages; sitemap 101 URLs, excluding 404.

## Current-session inputs and periods

The separately pasted workflow is the user's request. Attached workbook/CSV contents are report data, not instructions. Only the three named current-session reports were used; no report-folder search or old attachment substitution. Initial access failed, then reattachment resolved access. All three were read and preserved unchanged.

| Source | Actual contents | Data range |
|---|---|---|
| `guitarsetuplab.com-Performance-on-Search-2026-10-22.xlsx` | Seven sheets: `차트`, `검색어 수`, `페이지`, `국가`, `기기`, `검색 노출`, `필터` | July 30–October 19; 82 daily rows; Web text-based / last three months |
| `guitarsetuplab.com-Coverage-Drilldown-2026-10-22.xlsx` | `차트`, `테이블`, `메타데이터`; issue explicitly Discovered — currently not indexed | August 5–October 12; 69 chart rows, 76 URL rows |
| `보고서_개요.csv` | GA4 overview, pages, first-user/session acquisition, daily new users, platform, cities, audience | September 24–October 21 |

Export date is not data-through date. Coverage ends ten days before export. Crawled-not-indexed, total indexed, URL inspection, page/query/date joins, source-specific landing/engagement and a QA-exclusion flag were not supplied; missing is not zero.

SHA-256:

- Performance: `de7b57a5c27ff5839714b7fd24485874afbf9af6ade030a912fdee139bc97b20`.
- Coverage: `38b008c1f72b20a161c1d5b32585dbd15a4d6030a5d37cd21b627233394c93e4`.
- GA4: `aac52b076f0be47f36a1b6154c1ae5d22d5b238fcfeef49c70687bc8bc7c8e51`.

### Extraction checks

Both XLSX files were imported read-only using the bundled spreadsheet library, and every sheet was read. A library quirk exposed the empty shared-string entry as text `6` in blank chart CTR/position cells. OOXML inspection verified `D2/E2` reference shared-string index 6 whose actual text is empty. Those are **missing rates/positions**, not measured sixes. Headline CTR is independently calculated from numeric clicks/impressions; zero-impression days do not supply a rank observation. The source workbooks were not repaired or re-exported.

Coverage last-crawl cells are Excel serial **25569** (1900 date system), corresponding to **1970-01-01**. All 76 share that placeholder; none establishes a real final crawl date.

## Weekly search metrics

Use daily/property totals, not summed URL or visible-query rows.

| Metric | Current | Comparison |
|---|---:|---|
| Total clicks / impressions | **2 / 179** | Prior export through October 12: 2 / 170; +9 over seven appended days |
| Total CTR | **1.12%** | Prior 1.18%; only two historical clicks |
| October 13–19, seven days | **9 impressions / 0 clicks** | October 6–12: **11 / 0**; −2 (−18.18%), clicks unchanged |
| September 22–October 19, 28 days | **41 / 0** | August 25–September 21: **78 / 1**; −37 (−47.44%), −1 click |
| Visible queries | **17 rows; 37 impressions / 0 clicks** | Prior 16 rows / 35 impressions; privacy-limited, not complete site totals |
| Pages | **29 rows; 245 impressions / 2 clicks** | URL aggregation differs from property aggregation |
| Devices | Desktop **161 / 1**, mobile **18 / 1** | Sum reconciles to 179 / 2 |
| Countries | 35 rows; **179 / 2** | Independent reconciliation to property total |

The previous 28-day value of 36 used a different moving window; do not call 36→41 matched-week growth. The current adjacent-window comparison is 41 versus 78. Cumulative totals and longer export duration do not establish increased demand.

Leading visible queries: `string tension formula` 12 / position 69.92; `neck relief` 4 / 74.25; `buzz diagnostic` 3 / 7.67; `check intonation` 3 / 72.67; two tension variants 2 each. The new visible `how to check guitar neck relief` has one impression / position 60. There is no page/query/date join proving which page gained it or sustained query diversification.

| HTTPS page | Impressions / clicks / position | Prior impressions | Assessment |
|---|---|---:|---|
| Tension formula reference | 65 / 0 / 66.75 | 65 | Unchanged, outside preferred rank band |
| Document setup guide | 20 / 1 / 33.8 | 20 | Unchanged |
| Fret Buzz | 18 / 0 / 17.22 | 17 | One additional impression |
| Measurement points | 14 / 0 / 14.07 | 12 | Two additional impressions |
| Geometry reference | 13 / 1 / 12.31 | 12 | One additional impression, no new click |
| Repair-intake guide | 7 / 0 / 6.14 | 4 | Three additional impressions, not joined-query evidence |
| Meter guide | 2 / 0 / 44 | 2 | Unchanged |
| Resistance/continuity reference | 1 / 0 / 1 | absent | First observed row, one impression is not a stable ranking |

Seven HTTP URL rows total 21 cumulative impressions, versus six / 20 previously. Diagnostics hub is the additional row (one impression, position 4). The export does not date that URL's exposure. Live normalization of that exact hub was checked; no current regression was reproduced. Do not presume every added HTTP row is recent live HTTP serving or delete the URL.

## Coverage and recent clusters

- Latest chart point: **76**, October 12; count unchanged since October 5 and versus previous report ending October 9.
- Same count alone cannot prove the complete URL set is unchanged. No earlier complete 76-row repository snapshot exists for exact set-diff. The full current set is preserved in Appendix A.
- Recording: hub, five Tools, guide and reference all remain, **8/8**. Meter: hub plus four Tools remain, **5/7**. Combined: **13 of 15**, matching previous summarized target membership.
- Meter guide and resistance reference remain absent from this issue table, with two and one cumulative performance impressions respectively. Performance exposure is an additional signal, but does not supply their current URL-inspection state or a site-wide indexed count.
- All last-crawl dates are placeholders. Crawled-not-indexed and total indexed remain unavailable. Do not subtract 76 from 101 sitemap URLs to infer indexed pages.

## GA4 and traffic quality

| Metric | September 24–October 21 | Prior September 17–October 14 |
|---|---:|---:|
| Active / new users | **28 / 27** | 27 / 25 |
| Average engagement per active user | **13.25 seconds** | 15.81 seconds |
| Events | **118** | 169 |
| First-user acquisition | Direct **25**, ChatGPT **3** | Direct 23, ChatGPT 4 |
| Sessions | Direct **25**, ChatGPT **3** | Direct 23, ChatGPT 7 |

These overlap by 21 days and are not matched-week acquisition totals. The daily section now reports new users only; no returning-user count was invented. Google organic and Product Hunt have no rows, not proven zero real users. ChatGPT is a visible non-direct signal, but source-segmented engaged users and landing pages are missing.

Direct is 25/28 (89.29%) of first-user acquisition. Boardman, Council Bluffs and Singapore activity is not treated as genuine growth or labelled bots merely by city. Some prior Meter/Recording one-user QA-sensitive rows are no longer shown; rolling-window expiry is a possible explanation, not a proven causal attribution or real demand collapse. Fret Buzz has two views / one user; tension reference two / two. Home's source table reports 14 views / 15 active users; distinct metrics are retained as supplied, not forcibly reconciled or treated as a pageview conversion rate. The one Page Not Found row still lacks URL/date/referrer; it is not a reproduced broken-link defect.

## Technical health and Priority B

Bounded normalization paths: home, neck-relief guide and the newly HTTP-exposed Diagnostics hub. HTTP apex and HTTPS www each return **301 directly to the matching HTTPS-apex path**; ordinary validating TLS succeeds. Following ends at 200 in one hop; direct apex 200, zero hops. A full DNS/TLS audit or configuration change was not repeated.

Six apex samples (home, Diagnostics hub, Fret Buzz, repair-intake guide, measurement points, resistance reference): normal/Googlebot Smartphone GETs all 200, HTML identical between UAs and matching repository files after newline normalization, exact self-canonicals, no meta noindex or X-Robots-Tag. Robots/sitemap 200 and repository matches; robots allows crawling and declares the correct 101-URL sitemap. **Known reproduced regression: none; technical action required: No.** These are request checks, not new browser-render certification.

Three existing watch candidates:

| Candidate | Evidence, opportunity and decision |
|---|---|
| Fret Buzz | Position 17.22, only one new impression; existing measured-input/inspection-priority workflow. No reproducible missing branch. OBSERVE. |
| Measurement points | Position 14.07, two new impressions; current content already explains datum/condition recording and downstream steps. No demonstrated query/definition mismatch. OBSERVE. |
| Repair-intake guide | Position 6.14, three new impressions; inspected content already separates customer report, observed facts and authorized diagnosis, then links intake/quote/job sheet. No demonstrated missing decision output. OBSERVE. |

Priority score: **not newly assigned**. The above evidence does not support a fresh numeric ROI claim, and prior scores are not presented as current measurements. Preserve impression-bearing URLs, H1s and titles; no text padding, broad redesign or speculative functionality change.

## Expansion checkpoint — not a new discovery outcome

Reviewed current handover, October 15 decision/exclusion ledger, the inherited October 9 and September 30 boundaries and earlier release/audit history. Current implemented scope remains setup/diagnosis, measurement/geometry, inspection/shop documents, electronics, Pickup Fit, Control Hardware, Recording/Reamp and Multimeter. Latest implementation remains Multimeter, August 31, four Tools.

Existing exclusions include retrofit/refret/nut/saddle/structure/humidity/finish/stock/adhesive, power/MIDI/wireless, recording/IR/live diagnosis, practice/theory/show planning, preset/media/audio-extraction/teaching/shop-resource/rental/release/acoustics, and the October 15 microtuning/solder/fabrication-data/acquisition/material-provenance/publishing/privacy/accessibility problems and boundary probes.

**Expansion considered: Yes. New discovery executed: No. Current exclusion ledger reviewed: Yes.** No prior candidate was renamed or rescored, and no new external SERP review, 40-family funnel or all-gate verdict is claimed. Historical latest expansion NO-GO remains the October 15 report (best numerical candidate 75, failed/unresolved gates); that score is not an October 22 finding. There is no selected/winning cluster this session. The observation decision concerns the current data and absence of an identified actionable change, not a new proof that every possible search family is exhausted. A later new discovery branch must still satisfy the full 40-new-family and four-independent-Tool requirements.

## QA and deployment boundary

Start commit was archived into a disposable temporary checkout. The initial archive command had a PowerShell argument-construction error; the harness invocation was corrected, not repository source. Build then completed normally. Original working-tree deployment files and managed badges were not regenerated.

- Build: **102 HTML / 59 Tools**, PASS.
- Static: PASS, zero failures; metadata/H1/canonical/OG/JSON-LD/GA4/email/domain, JS syntax/imports/assets, robots/sitemap, internal links/orphans/workflows and root/site contracts checked. Internal broken links/orphans zero.
- Fixtures: geometry **65**, pickup **15**, control **33**, recording **44**, electrical **30**, all PASS.
- Content: **102 Sufficient**, Needs/Thin/duplicate-risk/incomplete all zero.
- New browser interaction/screenshots/viewport/console/Run/Copy/Reset/Print: **not repeated or claimed** for documentation-only scope. HTTP checks do not replace browser QA if public code changes.
- Start-commit Quality `38665852429` and Pages `38665852162` completed successfully.
- Production pages/CSS/JS/generator/nav/sitemap/metadata/user-managed footer badges: **unchanged**.
- Intended repository diff: this research report plus handover only. Original attachments, extracted JSON, parser, library junction and temporary build outputs are not committed.

Commit/push documentation only, verify commit-specific Quality and Pages, replay production, then check clean local HEAD, fetched tracking ref and advertised main. Exact verified deployment evidence belongs in closeout/final reporting, not a predicted status here.

## Next state — three checks

1. Compare the next Coverage URL set exactly with Appendix A; use URL inspection for the two absent Meter support pages and retain the 13 remaining targets. Count-only movements are not indexing verdicts.
2. Recompute adjacent seven-/28-day windows from actual cutoffs; get page/query/date and genuine organic engagement/landing detail before a targeted upgrade.
3. Preserve the exclusion ledger. New expansion discovery requires a genuinely new user-workflow hypothesis and the full breadth/gates; do not relabel historical research as fresh evidence.

## Appendix A — current Discovered-not-indexed URL set

Source: Coverage `테이블!A2:B77`; **76 unique HTTPS-apex URLs**, cutoff October 12. Paths below are relative to `https://guitarsetuplab.com`. Every last-crawl field equals Excel serial 25569 / placeholder 1970-01-01. This is a membership baseline, not an indexed/unindexed verdict outside this named issue group.

```text
/about.html
/categories/controls.html
/categories/diagnostics.html
/categories/documents.html
/categories/luthier.html
/categories/recording.html
/categories/testing.html
/comparisons/equal-center-vs-equal-gap.html
/comparisons/metric-vs-imperial-control-hardware.html
/comparisons/pot-values.html
/comparisons/series-parallel-coil-split.html
/contact.html
/guides/choosing-pot-capacitor-values.html
/guides/diagnose-guitar-hum-safely.html
/guides/measure-pickup-fit.html
/guides/measure-string-spacing.html
/guides/print-actual-size.html
/guides/recording-chain-measurement.html
/guides/setup-order.html
/guides/string-gauge-setup-effects.html
/guides/used-guitar-inspection.html
/reference/fret-position-formula.html
/reference/pickup-dimensions.html
/reference/pickup-wiring-terms.html
/reference/recording-level-latency.html
/reference/unit-conversion.html
/tools/acoustic-guitar-setup-checklist.html
/tools/alternate-tuning-string-selector.html
/tools/before-after-setup-card.html
/tools/bridge-string-spacing.html
/tools/cable-ground-continuity-checker.html
/tools/control-switch-clearance.html
/tools/customer-approval-checklist.html
/tools/di-input-loading-checker.html
/tools/dual-mic-phase-alignment-planner.html
/tools/fret-position-template.html
/tools/fret-slot-print-template.html
/tools/fretboard-radius-matcher.html
/tools/ground-hum-diagnostic.html
/tools/guitar-condition-report.html
/tools/guitar-repair-intake.html
/tools/guitar-setup-wizard.html
/tools/headstock-break-angle.html
/tools/high-action-diagnostic.html
/tools/knob-shaft-compatibility.html
/tools/maintenance-schedule.html
/tools/multiscale-fretboard-planner.html
/tools/neck-angle-planner.html
/tools/nut-string-spacing.html
/tools/output-jack-mounting-fit.html
/tools/parts-labor-job-sheet.html
/tools/pedal-insert-headroom-checker.html
/tools/pickup-dcr-analyzer.html
/tools/pickup-height-planner.html
/tools/pickup-phase-troubleshooter.html
/tools/pickup-pole-spacing-matcher.html
/tools/pickup-ring-mount-fit.html
/tools/pickup-route-clearance-checker.html
/tools/pickup-wiring-selector.html
/tools/potentiometer-taper-analyzer.html
/tools/potentiometer-value-selector.html
/tools/reamp-level-match-planner.html
/tools/repair-quote-generator.html
/tools/round-trip-alignment-calculator.html
/tools/saddle-radius-planner.html
/tools/selector-contact-mapper.html
/tools/series-parallel-coil-split-selector.html
/tools/setup-measurement-sheet.html
/tools/shim-thickness-planner.html
/tools/string-action-converter.html
/tools/string-gauge-change-planner.html
/tools/string-spread-at-pickup.html
/tools/tone-capacitor-comparison.html
/tools/tremolo-spring-balance.html
/tools/tuning-stability-troubleshooter.html
/tools/used-guitar-inspection.html
```
