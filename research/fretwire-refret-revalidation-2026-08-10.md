# Fretwire & Refret Planning revalidation — 2026-08-10

## Decision

**HOLD — 79/100 (Monetization 34/40, Traffic 27/35, Gap 18/25).**

The earlier 2026-08-08 HOLD remains correct. Current demand and a sampled interactive-tool gap are real, but the cluster still cannot support four genuinely independent, repeat-use tools whose outputs are both useful and safely bounded. Two candidates are ready in principle: a user-entered crown/profile comparator and a fretwire quantity/cut planner. Tang/slot fit and remaining-crown decisions still require physical evidence that a browser cannot infer, while the remaining ideas either duplicate those two or overlap the current 45-tool site.

No production page, asset, style, calculation, navigation item, sitemap entry, or generated output was changed.

Current automated verification passed without rebuilding production files: static/SEO/link/module checks covered 78 HTML pages and 45 tools with 0 failures; geometry fixtures passed 65 assertions; pickup-fit fixtures passed 15 assertions; content audit reported 78 Sufficient with 0 Needs, Thin, duplicate-risk, or incomplete pages. The first `npm test` command could not start because `npm` was absent from the shell PATH, so the same four package-script commands were executed with the Codex-bundled Node executable and all passed.

## Repository state

- Repository: `https://github.com/canghun13/guitarsetuplab`.
- Branch: `main`.
- Local start before synchronization: `41446ee4300657ded6ab1471c4ca744ff57c9b3a`.
- Remote state found after fetch: `9761f45bf8389c49f31c6fa65bb8f4ffb9b50b9e`.
- The working tree was clean, so `git pull --ff-only origin main` safely fast-forwarded local `main` to `9761f45` before research.
- Revalidation start commit: `9761f45bf8389c49f31c6fa65bb8f4ffb9b50b9e`.
- Inventory at revalidation: 78 public HTML pages, 45 interactive tools, 7 hubs, 11 guides, 7 references, 3 comparisons, 5 basic pages, and 77 sitemap URLs.

## Previous HOLD

The 2026-08-08 audit scored this candidate 79/100 and held it because tang fit depends on barbs, slot condition, wood, compression, binding, adhesive practice, and real dimensions; a level-versus-refret decision also cannot be reduced to a universal remaining-crown number. The adjacent Fret Position Template, Fret Slot Print Template, Fretboard Radius Matcher, Multiscale Fretboard Planner, Fret Buzz Diagnostic, condition/reporting pages, and shop-document tools already cover several neighboring workflows.

This revalidation tested whether new evidence had removed those blockers. It did not assume that a current search result or recent forum post equaled verified keyword volume. Authenticated GSC, GA4, and paid keyword-volume data were not available, so traffic evidence is qualitative and the score retains that uncertainty.

## Current demand and long-tail validation

Four distinct current query families remain visible:

1. **Profile and size choice:** `what fretwire size do I need`, `6105 vs 6150`, `medium jumbo dimensions`, `match existing fretwire`.
2. **Tang and slot fit:** `fret tang width vs slot width`, `0.023 fret slot`, `fret slots too wide`, `fretwire will not seat`.
3. **Quantity:** `how much fretwire do I need`, `how many fretwire lengths for a guitar`, `fretwire cut allowance`.
4. **Wear decision:** `level and crown or refret`, `minimum fret height after leveling`, `enough fret life left`.

The demand is not merely historical. Recent 2026 discussions include a player asking what size to buy for a refret, a builder unable to seat wire in oversized/shallow slots, and repeated level-versus-refret questions. Those discussions also demonstrate why the risky outputs cannot be automated: answers diverge based on inspection, tooling, remaining material, slot preparation, and player preference. See the [recent size-selection question](https://www.reddit.com/r/Luthier/comments/1rw5i6m/i_have_to_change_frets_on_my_explorer_and_saw_on/), [recent slot/seating failure](https://www.reddit.com/r/Luthier/comments/1tqwdf0/im_having_trouble_getting_my_fret_wire_to_seat/), [recent level-versus-refret question](https://www.reddit.com/r/Luthier/comments/1udrbr0/do_i_need_to_take_this_in_for_a_refret_or_will_a/), and [current refretting-tool discussion](https://www.reddit.com/r/Luthier/comments/1sts65h/tools_for_refretting/).

**Demand gate: PASS. Long-tail gate: PASS.** The traffic ceiling remains niche and no numeric volume was invented.

## Competition and interactive gap

The sampled results are dominated by static manufacturer charts, guides, retailer FAQs, and ordinary fret-position calculators:

- [Jescar's specification table](https://jescarmusic.com/pages/fret-wire-specifications) publishes crown, tang, alloy, and packaging data.
- [Dunlop's official fretwire chart](https://www.jimdunlop.com/content/manuals/DUNLOP_FRET_WIRE_CHART.pdf) publishes dimensional profiles and tolerances.
- [Fender's fret-size description](https://support.fender.com/hc/en-us/articles/42507821116571-A-Description-of-Fret-Sizes) maps common names/numbers while warning that actual dimensions can vary by lot and that preference is subjective.
- [StewMac's size guide](https://www.stewmac.com/video-and-ideas/online-resources/learn-about-guitar-and-instrument-fretting-and-fretwork/fretwire-size/) explains crown, tang, material, player feel, and installation constraints.
- [Touchstone Tonewoods' FAQ](https://www.touchstonetonewoods.co.uk/technical-resources/general-questions.html) answers how many straight lengths are usually enough, but does not calculate a cut plan.
- StewMac offers a strong interactive fret-position calculator, but that solves slot coordinates, not wire profile, quantity, tang compatibility, or remaining crown; Guitar Setup Lab already has position and print-template tools.

No browser-native competitor dedicated to crown/profile comparison, fretwire quantity/cut planning, tang/slot compatibility, or remaining-crown planning surfaced in the sampled exact and long-tail searches. This is evidence of a tool gap, not proof that every missing tool is safe or valuable.

**Competition tool-gap gate: PASS.**

## Technical support and safety boundary

The official sources support descriptive dimensions but not a universal compatibility verdict:

- Jescar states that most of its 0.020-inch tang profiles are typically recommended for a 0.023-inch slot, while other tang sizes need other slots. Its table also shows that tang width varies across profiles and packaging/availability differs by product.
- StewMac explicitly says tang width is measured without barbs, and its [Fret Barber instructions](https://www.stewmac.com/video-and-ideas/online-resources/learn-about-guitar-and-instrument-fretting-and-fretwork/fret-barber-instructions/) state that barbs can add enough compression to impede seating or back-bow a neck even when nominal tang and slot widths appear to match. The prescribed verification is a physical test piece, not a numeric browser threshold.
- StewMac's [Fret Slot Depth Gauge guidance](https://www.stewmac.com/video-and-ideas/tool-demo-videos/luthier-tools-and-supplies-videos/fret-slot-depth-gauge/) requires checking the entire slot for debris, glue, binding, and shallow regions. One depth number cannot represent that condition.
- Fender says common fret-size labels are approximate, actual dimensions can vary by lot, and the preferred crown size is subjective.
- No manufacturer or standards body found in this pass defines a universal remaining-crown threshold that decides level/crown versus partial/full refret. Recent technicians instead describe inspecting the deepest wear and, when available, measuring predicted removal with a PLEK before cutting.

A browser may safely subtract user-entered measurements, but presenting the resulting delta as `fits`, `safe to install`, `level`, or `refret` would exceed the evidence. Refretting, slot widening/deepening, tang alteration, and fret leveling are irreversible operations.

**Official/technical support gate: FAIL for the full four-tool cluster. Safe bounded-output gate: FAIL for the two decision-critical candidates.**

## Potential tool audit

| Potential tool | Independent workflow | Search intent | Repeat use | Existing-site overlap | Decision |
| --- | --- | --- | --- | --- | --- |
| User-entered Fretwire Crown/Profile Comparator | Yes: compares crown width, crown height, tang dimensions, material, and measured deltas without choosing a brand | Strong size/match/6105-vs-6150 intent | High for repair shops and builders; moderate for one-instrument owners | Low; current geometry tools do not compare wire profiles | **VIABLE IN PRINCIPLE** only with user-entered current/candidate measurements and no fit or feel verdict |
| Fretwire Quantity & Cut Planner | Yes: totals per-fret board widths, end allowance, waste, stock lengths, and cut allocation | Meaningful but narrower `how much/how many lengths` intent | High for builders and shops | Low; position/template tools calculate slot locations, not metal length or stock allocation | **VIABLE IN PRINCIPLE** with explicit waste assumptions and no purchasing catalog |
| Tang/Slot Fit Checker | Yes as a measurement workflow, but not as a decisive compatibility tool | Strong tang/slot/kerf/too-wide intent | High for refret/build work | Low computational overlap | **HOLD**; nominal width/depth omits barbs, compression, wood, slot damage, binding, debris, radius, and batch variation. A physical test piece remains required |
| Remaining Crown / Leveling Budget | Partly: arithmetic is distinct, but the intended answer is a repair decision | Strong level-or-refret and minimum-height intent | High for repair shops | Moderate overlap with Fret Buzz Diagnostic, condition reporting, before/after records, and quote workflow | **HOLD**; required removal is unknown before controlled leveling/measurement, and no universal acceptable remaining height is authoritative |
| Replacement Fretwire Matcher | No; it is the profile comparator plus a maintained product catalog | Strong purchase intent | Moderate/high | Low direct overlap | **REJECT**; duplicates the comparator and creates ongoing brand, SKU, tolerance, alloy, packaging, and availability maintenance |
| Tang Depth Clearance Checker | No; it is one dimension of tang/slot fit | Narrow but real | Moderate | Low direct overlap | **MERGE/REJECT**; still requires whole-slot physical inspection and cannot become a separate repeat-use tool |
| Refret Cost Estimator | Yes as a commercial workflow, not as fretwire planning | Strong service-price intent | High for shops | High overlap with Repair Quote Generator, Repair Intake, Approval Checklist, and Parts/Labor Job Sheet | **REJECT** for this cluster |
| Fretwire Radius / Pre-bend Planner | Partly, but a numeric overbend prescription lacks a universal model | Narrow builder intent | Moderate | High overlap with Fretboard Radius Matcher and geometry workflow | **REJECT**; physical springback, alloy, profile, method, and tooling dominate |

Count of genuinely independent, repeat-use, presently implementable tools: **2**. Tang/slot and remaining-crown candidates are independent search intents but are not implementable as useful decision tools within the site's bounded-safety contract. The required minimum is 4.

## Ten-gate result

| Gate | Result | Evidence |
| --- | --- | --- |
| Current search demand | PASS | Multiple active query families and recent 2026 questions |
| At least one meaningful long-tail set | PASS | Size, tang/slot, quantity, and wear-decision families |
| Competition has a real interactive-tool gap | PASS | Sampled market is charts/guides; no dedicated four-workflow browser suite found |
| At least four independent repeat-use tools | **FAIL** | Only comparator and quantity planner are presently viable |
| Distinct from the current 45 tools | **FAIL** | Cost, radius, wear diagnosis, and documentation ideas substantially overlap current tools |
| No overdependence on a maintained catalog | **FAIL** | A useful replacement matcher needs changing vendor/SKU/tolerance data; user-entry avoids maintenance but collapses it into the comparator |
| Official/technical support | **FAIL** | Dimensions are supported; decisive tang fit and remaining-crown thresholds are not |
| Safe bounded outputs | **FAIL** | The two most important decisions require physical testing/inspection before irreversible work |
| Coherent hub workflow | **FAIL** | Two safe tools plus duplicated/worksheet content do not justify a full hub |
| User value exceeds maintenance cost | **FAIL** | A seven-page cluster and catalog/safety upkeep are not justified by two viable tools |

Because GO requires all ten gates, the result is HOLD regardless of the numeric score.

## Score

- **Monetization: 34/40.** Fretwire purchasing, specialist tools, and paid refret/level work have strong commercial intent. The highest-value users are a relatively small professional/builder audience.
- **Traffic: 27/35.** Four durable long-tail families and fresh discussions are present. The subject remains niche, and no authenticated query-volume or site-demand data was available.
- **Gap: 18/25.** There is a visible interactive gap, especially for user-entered profile comparison and stock planning. The gap shrinks sharply once unsafe decisions, catalog upkeep, and current-site overlap are removed.
- **Total: 79/100 — HOLD.** This matches the prior score because new evidence confirms both the demand and the original blockers rather than changing either side materially.

## Revisit conditions

Reopen this candidate only when all of the following are available:

1. Four separately named query/workflow groups demonstrate demand through authenticated GSC or credible keyword data, rather than one broad `refret` topic split into thin pages.
2. A sourced, non-prescriptive tang/slot protocol accounts for tang body, barb-to-barb width, slot width and depth along the full fret, wood/slot condition, binding, and a mandatory physical test coupon; bench fixtures reproduce its stop/uncertain outputs without a false `fits` verdict.
3. A sourced remaining-crown model uses measured lowest wear and measured/predicted removal, avoids a universal level/refret threshold, and is validated against technician or PLEK before/after records.
4. The fourth tool remains independent after removing product catalogs, current Repair Quote/condition/document workflows, and current radius/geometry tools.
5. A maintenance plan either uses only user-entered manufacturer measurements or identifies an authoritative machine-readable source with explicit update ownership.

Until those conditions are met, the exact next product decision is: **do not build the Fretwire & Refret Planning cluster.**
