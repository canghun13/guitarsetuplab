# New cluster discovery — 2026-08-11

## Repository baseline

- Date: 2026-08-11.
- Start commit after safe synchronization: `a96aa15010193adc8368a9538dfb8ea7bab65210`.
- Inventory: 78 public HTML pages, 45 interactive Tools, 7 hubs, 11 guides, 7 references, 3 comparisons, 5 basic pages, and 77 sitemap URLs (404 excluded).
- Existing categories: diagnostics, measurement, documents, inspection, electronics, pickup fit, and luthier geometry.
- Recent exclusions were honored: implemented Pickup Fit & Spacing; held Fretwire & Refret Planning; rejected Nut Setup & Slot Diagnosis, Acoustic Saddle Compensation, and Guitar Humidity Monitoring. None was rescored or repackaged.
- No authenticated search-volume source was available, so no volume numbers are claimed. Demand findings below are qualitative and tied to visible queries, current discussions, technical pages, and competitor features.

## Search areas reviewed

The discovery pass reviewed 13 new user-workflow families, then expanded the strongest ones with component, instrument, measurement, replacement, compatibility, installation, clearance, and purchase-preparation variants.

1. Guitar control hardware mounting and cavity fit.
2. Tuner hole, bushing, post, and locating-screw replacement compatibility.
3. Bridge/post/tailpiece replacement geometry.
4. Pickguard outline, screw-hole, pickup-cutout, and bridge clearance fit.
5. Bolt-on neck heel, pocket, scale, shape, and bridge-location compatibility.
6. Guitar finish quantity, solids, batch mixing, coat build, and schedule planning.
7. Binding and purfling length/material yield.
8. Active-electronics battery runtime and battery-compartment planning.
9. Acoustic soundhole pickup and internal control clearance.
10. Acoustic bridge-pin taper and measured replacement fit.
11. Bass tapered-string witness-point and winding-length compatibility.
12. Guitar fastener/screw replacement sizing.
13. Treble-bleed network planning beyond the existing tone-capacitor comparison.

Representative searches included `guitar pot shaft too short body thickness`, `guitar switch cavity depth`, `output jack fitting cavity`, `prewired guitar harness will it fit`, `replacement tuner bushing hole size`, `bridge post spacing replacement`, `replacement pickguard screw holes fit`, `replacement neck heel pocket scale length`, `how much nitro finish for guitar`, `binding length guitar`, `active pickup battery life`, `soundhole pickup minimum diameter`, `bridge pin 3 degree 5 degree`, `bass tapered string witness point`, `guitar screw replacement size`, and `treble bleed calculator`.

## Cross-area findings

- Repeated user questions are measurement-led: owners commonly have a current hole, panel, cavity, heel, soundhole, or hardware item and a candidate component drawing, but no unified way to compare the two before ordering or altering the instrument.
- Manufacturer and retailer pages often answer only their own product. Examples include [Warmoth neck/body fit](https://warmoth.com/guitar-neck-fit), [Gotoh SG381 dimensions](https://g-gotoh.com/product/sg381/?lang=en), [Switchcraft #11 jack data](https://www.switchcraft.com/1/4-mono-2-conductor-jack-w/nut-and-washer-375-long-bushing-open-circuit/), and [ObsidianWire Tele harness fit](https://obsidianwire.com/blogs/product-support/tele-install).
- Community demand is persistent and concrete: current or recurring questions cover [pot thread length](https://www.reddit.com/r/guitars/comments/1edbqao), [control-cavity depth](https://www.reddit.com/r/Luthier/comments/16395f8), [output-jack depth](https://www.reddit.com/r/Luthier/comments/ovhp3p), [tuner replacement measurements](https://www.reddit.com/r/Guitar/comments/1rx4w9b/how_can_i_know_which_tuning_machines_to_replace/), [neck/pocket width](https://www.reddit.com/r/Guitar/comments/150s49i), [pickguard fit](https://www.reddit.com/r/Guitar/comments/e7k524), [soundhole-pickup diameter](https://www.acousticguitarforum.com/forums/showthread.php?t=133850), and [bridge-pin taper](https://www.reddit.com/r/AcousticGuitar/comments/1v5tie4/eastman_bridge_pins_question/).
- Existing interactive competition is fragmented. Wiring simulators model electrical connections, pedal-enclosure layout tools solve a different enclosure problem, fret/neck-angle calculators solve scale geometry, and treble-bleed calculators already serve that circuit niche. No sampled free browser suite accepted user-measured guitar control-panel, component, cavity, knob, jack, and harness geometry as one workflow.

## Initial candidate compression

| Candidate | User workflow | Demand and long-tail | Competition / gap | Existing overlap | Independent tools | Maintenance | Safety | Score | Preliminary decision |
| --- | --- | --- | --- | --- | --- | ---: | --- | --- | ---: | --- |
| Control Hardware Fit & Layout | Measure guitar, compare candidate control parts or harness before purchase/install | Strong pot, knob, switch, jack, cavity, loaded-harness variants; active/current discussions | Product-specific fit pages and static dimensions; sampled wiring tools do not complete physical fit workflow | Electrical-value Tools exist, but no physical mounting workflow | 5 | Low: user-entered dimensions | Safe as screening/stop outputs | 90 | **GO** |
| Tuner Replacement Compatibility | Compare headstock bore, bushing, locating pin/screw, post and array | Strong replacement and `drop-in` intent | Retail charts and manufacturer drawings; little unified interaction | Tuning diagnostics and headstock-angle Tool are adjacent | 3 credible; fourth ideas duplicate fit or require drilling prescriptions | Medium if catalogued | Bounded screening possible, but alterations are risky | 82 | HOLD |
| Bolt-on Neck/Body Compatibility | Compare heel/pocket/shape/scale/bridge relationship | Strong purchase/build intent and current questions | Warmoth has an unusually complete authoritative fit page | Significant overlap with Scale Identifier, Neck Angle, Shim, bridge geometry | 3 after overlap removal | Low with user entry | Routing/drilling decisions need physical alignment | 81 | HOLD |
| Guitar Finish Planning | Estimate material, batches, dry build and schedule from product data | Broad how-much/how-many-coats/mix searches | Generic professional finish calculators exist; guitar guidance is mostly narrative | Low | 3 credible; schedule/coat variants collapse together | Medium: product datasheets change | Solvent/PPE/fire risks require product-specific instructions | 76 | HOLD |
| Acoustic Pickup Retrofit Fit | Check soundhole, braces, bridge plate, controls, battery and jack path | Real product-fit and installation intent | Manufacturer-specific instructions dominate | Pickup route fit is adjacent but not acoustic internal geometry | 3; fourth becomes catalog or invasive install advice | High if useful | Drilling/adhesive/internal-structure risks | 78 | HOLD |
| Pickguard Replacement Fit | Compare outline landmarks, holes, pickup/bridge/neck cutouts | Durable purchase-prep questions | Templates and custom makers dominate; no sampled coordinate comparator | Pickup ring/route fit covers some cutout dimensions | 2–3; outline and hole checks are one workflow | Medium due model/year patterns | Physical overlay mandatory | 72 | HOLD |

Scores use the requested 40/35/25 framework. They are directional judgments, not fabricated search-volume precision.

## Deep validation of the selected candidate

### Demand and long-tail

The control-hardware family remains coherent when narrowed:

- `guitar pot shaft too short`, `short vs long shaft pot`, `pot mounting hole metric vs imperial`, `push pull pot cavity depth`.
- `18 spline vs 24 spline knob`, `6mm vs 1/4 knob`, `set screw knob split shaft`.
- `toggle switch thread too short`, `blade switch cavity depth`, `switch terminal clearance`.
- `output jack bushing length panel thickness`, `stereo jack too long for cavity`, `jack plate hole fit`.
- `prewired harness hole spacing`, `loaded harness cavity depth`, `will wiring harness fit Squier/import guitar`.

The searches lead to repeated product purchases and repair/build decisions rather than a one-time fact. [ObsidianWire's Tele guide](https://obsidianwire.com/blogs/product-support/tele-install) publishes hole size, 63 mm control spacing, 34.5 mm minimum depth, 1/4-inch shaft, and switch-tip dimensions, while its [M1 harness page](https://obsidianwire.com/products/flex-series%E2%84%A2-m1-one-pickup-guitar-wiring-volume-tone-set) separately specifies shaft choice, body thickness, 57 mm spacing, hole diameter, knob types, and pickup restrictions. The need to check several independent dimensions is itself the workflow gap.

### SERP and interactive competition

- Manufacturer/retailer: Switchcraft drawings, CTS/Alpha/StewMac dimensions, ObsidianWire product fit pages, Warmoth control-layout options.
- Static guides/forums: mounting-hole and cavity-depth advice, long/short shaft explanations, forum troubleshooting.
- Interactive tools: sampled guitar wiring simulators focus on electrical topology; [Stompbox Layout](https://stompboxlayout.com/) is a strong interactive enclosure layout tool but is pedal-specific and does not evaluate an existing guitar's panel, knob, switch, jack, or harness fit.
- No sampled competitor completed all five user-measured workflows without a maintained guitar/product catalogue.

Competition does not disappear, but the measured physical-fit workflow remains meaningfully fragmented. Gate C passes.

### Technical evidence

- Switchcraft publishes jack bushing lengths and customer drawings, including thick-panel parts in its [engineering design guide](https://www.switchcraft.com/assets/1/6/EDG41.pdf).
- StewMac's [CTS control-pot dimensions](https://www.stewmac.com/electronics/components-and-parts/potentiometers/cts-control-pots/) distinguish 5.95 mm split and 6.35 mm solid shafts, 9.52 mm thread/hole dimensions, and short/long threaded bushings.
- StewMac's [knob guidance](https://www.stewmac.com/parts-and-hardware/knobs/flat-top-knob) explicitly distinguishes 6 mm and 1/4-inch bores and advises measuring before ordering.
- ObsidianWire publishes real harness fit envelopes and warns that import/metric instruments may need different holes or knobs.
- The calculation layer needs no proprietary catalogue: dimensional differences, Euclidean coordinate mismatch, and user-declared minimum clearances are standard arithmetic. Product pages are measurement examples, not embedded defaults or compatibility guarantees.

### Existing-site overlap

The current electronics Tools answer electrical value, wiring-option, phase, hum, and switching-mode questions. Pickup Fit answers string/pole/body/ring/route questions. The selected cluster instead asks whether control hardware can physically mount through a panel, accept a knob, clear a control cavity, accept a plug, or match an existing multi-hole harness layout. Shared subtraction or clearance primitives do not make the user questions or result workflows the same.

## Tool specifications before implementation

### 1. Potentiometer Mounting Fit Checker — `potentiometer-mounting-fit`

- User problem/search intent: determine whether a measured pot can pass through the existing hole, expose enough threaded bushing through the panel/washer stack, and clear the cavity before purchase.
- Inputs/units: mm/in; existing hole diameter; candidate bushing diameter; panel thickness; candidate threaded-bushing length; outer washer/nut stack; component body depth; cavity depth; user-selected clearance allowance.
- Logic/output: diameter clearance, usable exposed thread, depth clearance, and separate pass/stop/verify states. No universal minimum thread engagement is invented; the user enters the required outer hardware stack from the candidate drawing.
- Safety: no drilling/countersinking authorization; physical dry fit and maker drawing remain mandatory.

### 2. Knob & Pot Shaft Compatibility Checker — `knob-shaft-compatibility`

- User problem/search intent: compare candidate knob attachment/bore/spline with the installed pot shaft.
- Inputs: attachment method; knob bore; shaft diameter; shaft construction (solid/split); knob requirement (smooth, 18-spline, 24-spline, any set-screw); measured height available; knob insertion depth.
- Logic/output: categorical attachment compatibility, diameter delta, height engagement, conflicts, and measurement checklist. Set-screw-to-split alignment is reported as a caution, not a guarantee.
- Safety: do not force a press-fit knob or spread/compress a split shaft from calculator output.

### 3. Control Switch Cavity Clearance Checker — `control-switch-clearance`

- User problem/search intent: determine whether a toggle/blade/push switch envelope, terminals, wire bend, and lever travel fit the measured mounting area.
- Inputs/units: hole or slot type; panel opening size; candidate mounting diameter/slot; panel thickness; threaded mounting length; body depth; terminal/wire allowance; cavity depth; lever travel; available top clearance.
- Logic/output: opening, thread stack, underside depth, and lever-travel clearances as distinct checks.
- Safety: no routing/drilling instruction; stop on structural/brace/unknown-wall conflicts.

### 4. Output Jack Mounting Fit Checker — `output-jack-mounting-fit`

- User problem/search intent: check jack/plate hole, threaded bushing stack, cavity depth, and inserted-plug envelope.
- Inputs/units: jack style; mounting hole; bushing diameter/length; panel stack; jack body depth; plug insertion projection; available cavity depth; side clearance; plug/body width.
- Logic/output: hole, thread, depth, and plug-side clearances plus a cable-service-space warning. This is distinct from pot fit because the inserted plug becomes part of the installed envelope.
- Safety: no cavity deepening or plate alteration authorization.

### 5. Prewired Harness Layout Matcher — `prewired-harness-layout-matcher`

- User problem/search intent: compare multiple existing control-hole centers with a candidate harness/control plate before purchase.
- Inputs/units: existing and candidate x,y coordinate lists from a shared datum; per-hole tolerance; existing/candidate cavity length, width, depth; candidate harness envelope; wire allowance.
- Logic/output: count validation, best shared translation based on centroids, per-hole residual distance, maximum/RMS mismatch, cavity-envelope clearance, and align/verify/stop result. Rotation is not silently optimized; both coordinate sets must use the same physical axes.
- Safety: no hole relocation; print/physical overlay and current maker drawing remain required.

All five Tools have meaningful validation, input-dependent dynamic results, practical examples, method/assumptions/limits, safety stops, Reset, Copy, and explicit related workflow. Each produces a different decision object: mounting stack, knob interface, switch envelope, jack-plus-plug envelope, or multi-point harness alignment.

## Hard Gates

| Gate | Result | Evidence |
| --- | --- | --- |
| A. Actual demand | PASS | Repeated product-fit questions and current forum discussions across five component families |
| B. Long-tail breadth | PASS | Pot, knob, switch, jack, harness; guitar/bass/import/US/pickguard/body variants |
| C. Competition gap | PASS | Strong static/product competition, but no sampled unified user-measured physical-fit suite |
| D. Distinct from current site | PASS | Physical control mounting is absent from the current electrical and pickup-fit Tools |
| E. Four independent Tools | PASS | Five separate search intents, input models, outputs, and visit reasons |
| F. Repeat value | PASS | Reused for each instrument, candidate part, repair job, harness, and build |
| G. Safe implementation | PASS | Measurement screening and stop/verify output; no irreversible authorization |
| H. Maintainable | PASS | User-entered current/candidate dimensions; no SKU or price database |
| I. Technical evidence | PASS | Official drawings/product dimensions plus standard dimensional arithmetic |
| J. Natural workflow | PASS | Measure panel/cavity → screen components → compare complete harness → physical overlay/dry fit |

## Score and final decision

- Monetization: **37/40** — direct connection to pots, knobs, switches, jacks, loaded harnesses, repairs, and builds; repeated candidate comparison.
- Traffic: **30/35** — five durable problem/query families across guitar/bass, import/US, body/pickguard/control-plate, active/passive, replacement/build contexts. No volume numbers are claimed.
- Competition gap: **23/25** — excellent product-specific references and generic layout/wiring tools exist, but the cross-brand user-measured physical-fit workflow is fragmented.
- Total: **90/100**.
- Final decision: **GO — implement one Guitar Control Hardware Fit & Layout cluster.**

Planned cluster: one hub, five interactive Tools, one measurement guide, one dimension reference, and one comparison page explaining metric/import versus imperial/US control hardware without pretending those labels guarantee fit. The cluster will add only measured screening; all routing, drilling, cutting, and structural decisions remain outside authorization.

## Implemented cluster

- Added `/categories/controls.html` with five focused Tool entry points.
- Added the five specified Tool pages, each with mm/in inputs, input-dependent result markup, safety stops, Reset, Copy, and exactly three semantic workflow links.
- Added `/guides/control-hardware-measurement.html`, `/reference/control-hardware-dimensions.html`, and `/comparisons/metric-vs-imperial-control-hardware.html`.
- Added the shared pure calculation module `scripts/assets/control-fit.js`; the build copies the same module to both deploy roots. UI results call that module rather than duplicating its arithmetic.
- Added 33 assertions in `scripts/control-fit-test.mjs`, covering clear and conflict cases, exact tolerance boundaries, metric and converted-imperial examples, coordinate translation, envelope conflict, empty/malformed/mismatched coordinates, zero allowance, negative values, `NaN`, and `Infinity`.
- Expanded the generated inventory from 78 to 87 public HTML pages, 45 to 50 Tools, 7 to 8 hubs, 11 to 12 guides, 7 to 8 references, 3 to 4 comparisons, and 77 to 86 sitemap URLs. The five basic pages are unchanged.
- Preserved the root-only user-managed `boostdomainrating.com` badge exactly; generated `site/index.html` continues to omit it by contract.

## Automated QA

- Build: PASS — 87 public HTML pages and 50 Tools.
- Static/SEO/link/module checks: PASS — 0 failures; broken links 0, orphan pages 0, missing assets 0, and canonical/H1/JSON-LD/GA4/email/sitemap checks passed.
- Geometry fixtures: PASS — 65 assertions.
- Pickup-fit fixtures: PASS — 15 assertions.
- Control-fit fixtures: PASS — 33 assertions.
- Content audit: PASS — Sufficient 87; Needs 0, Thin 0, duplicate-risk 0, functionally incomplete 0.
- `npm` is not installed on this shell PATH, so the package's build/test commands were run directly with the bundled Node executable using the same scripts and arguments.

## Local browser QA

- New pages: 9 pages × 8 requested widths (1440, 1280, 1024, 900, 768, 600, 480, 390) = 72 measured combinations.
- Evidence: 72 viewport screenshots plus `responsive-metrics.json` under `research/screenshots/cluster-2026-08-11/`.
- Bounding-box result: horizontal document overflow 0, header/H1 overlap 0, clipped or off-screen form/result panels 0, abnormal columns 0. Tool workspaces are two columns at 1440/1280 and one column at 1024 and below; the mobile menu appears at 768 and below.
- Dynamic result QA: all five Tools generated distinct valid results at 1440 and 390. Result/document overflow 0, mobile table containment failures 0, and result-table follow-up gap 24 px for warnings and the harness H3.
- Interactions: all ten desktop/mobile runs reached `Copied`; all Reset checks returned `Ready for measurements`.
- Console: 0 errors and 0 warnings across the recorded functional pass.
- Functional evidence: ten result-state viewport screenshots plus `functional-metrics.json` in the same directory. Total retained screenshots: 82.

## Deployment closeout

- Implementation commit: `3d1a1b31ab6598efc7a2f772e10ca3121a9f3a9d` (`Launch control hardware fit cluster`).
- Push: `a96aa15..3d1a1b3 main -> main`; fetched `origin/main` exactly matched the implementation commit.
- GitHub Actions Quality checks run [`31454725037`](https://github.com/canghun13/guitarsetuplab/actions/runs/31454725037): completed successfully.
- GitHub Pages build and deployment run [`31454724432`](https://github.com/canghun13/guitarsetuplab/actions/runs/31454724432): completed successfully.
- Production HTTP: home, new hub, all five Tools, guide, reference, comparison, `/assets/control-fit.js`, and sitemap returned 200 with the expected release markers.
- Production browser: all five Tools generated the expected distinct valid result at 1440 and reached `Copied`; the harness repeated successfully at 390. Document/result overflow 0, mobile table-containment failures 0, table-follow-up gap 24 px, console errors/warnings 0.
- Production home retained Seven connected benches, the Controls route, GA4, email, and the unchanged user-managed `boostdomainrating.com` badge.
- Six production screenshots and `production-functional-metrics.json` bring the retained evidence to 88 screenshots and three metrics files.
- Final documentation commit, push, remote hash, clean tree, and local/remote equality are reported in the final handoff.
