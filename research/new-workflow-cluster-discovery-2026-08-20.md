# New workflow cluster discovery — 2026-08-20

## Decision summary

**NO-GO — no sufficiently strong new workflow cluster.**

Sixteen genuinely new search families were reviewed after excluding the recent Pickup Fit & Spacing and Control Hardware Fit & Layout releases and the previously held/rejected Fretwire & Refret, Nut Setup, Acoustic Saddle Compensation, and Humidity candidates. Seven candidates reached the shortlist and the three strongest were decomposed into narrow long-tail intents, official technical evidence, current community questions, competing tools, and concrete Tool specifications.

No candidate passed all ten Hard Gates. Tuning-machine replacement has clear demand and excellent measurement documentation, but only two independent new Tool problems survive the current-site overlap test. Bridge/tremolo retrofit has high commercial intent, but most of its plausible Tool set already exists as spacing, radius, cavity-clearance, tremolo-balance, or intonation workflows. Guitar finish planning has recurring material questions, but strong generic calculators already solve coverage, mix ratios, and wet/dry-film math; safe product-specific schedules must come from the current technical data sheet. The remaining candidates failed the four-Tool, competition, safety, or maintenance gates by wider margins.

No production HTML, CSS, JavaScript, generator, navigation, sitemap, metadata, or user-managed badge/footer content was changed.

## Repository baseline

- Date: 2026-08-20 (Asia/Seoul).
- Repository: `https://github.com/canghun13/guitarsetuplab`.
- Branch: `main`.
- Start commit after safe `fetch` and `pull --ff-only`: `aba8d606d50bca5a9070437f88d62a22814eb7df`.
- The initial local checkout was clean at `aec0aafaa6c959e42f868661738a87169214b2c3` and two commits behind remote. The fast-forward preserved the user's later Sell With Boost badge addition and handover instruction.
- Current public HTML: 87.
- Interactive Tools: 50.
- Category hubs: 8.
- Guides: 12.
- References: 8.
- Comparisons: 4.
- Basic pages: 5.
- Sitemap URLs: 86; `404.html` is excluded.

The current Tool inventory was read from the 50 generated files and `scripts/build.mjs`, not copied from an older prompt. It spans diagnostics/setup, measurement, shop documents, inspection, electronics, Pickup Fit, Control Hardware Fit, and luthier geometry. Particularly relevant overlap includes String Gauge Change Planner, Scale Length Identifier, String Spread at Pickup, Pickup Route Clearance, Pickup Ring & Mount Fit, all five Control Hardware tools, Bridge String Spacing, Fretboard/Saddle Radius, Neck Angle, Headstock Break Angle, Tremolo Spring Balance, and the explicit workflow-link contract.

## Recent areas excluded before discovery

The following were not rescored, renamed, split, or adapted to another instrument:

- Pickup Fit & Spacing: string spread at pickup, pole spacing, pickup route clearance, ring/mount fit, and related dimensional compatibility.
- Control Hardware Fit & Layout: pot mounting, knob/shaft compatibility, switch clearance, output-jack mounting, prewired-harness coordinates, and metric/imperial control hardware.
- Fretwire & Refret Planning: crown/profile, quantity, tang/slot, remaining crown, replacement matching, and refret scope.
- Nut Setup & Slot Diagnosis.
- Acoustic Saddle Compensation.
- Guitar Humidity Monitoring.
- Generic maintenance, CSS/layout, metadata, TLS/www, analytics, directory/backlink, and existing-content work were outside this discovery.

## Search method and evidence limits

The search review is directional and makes no claim about keyword volume, CPC, RPM, clicks, impressions, or conversion rates. No numerical search-volume source was available, so none was invented. Demand signals came from query breadth, current manufacturer/retailer documentation, current and recurring forum questions, and whether the problem occurs before a part purchase or irreversible operation.

SERPs were classified by functional capability: official drawings, manufacturer fit guides, retailers, static articles/charts, forums, PDFs, and actual interactive tools. A static guide was not treated as an automatic blocker, but an existing free interactive workflow that already accepts the relevant inputs was.

Representative query modifiers included electric/acoustic/bass, 6/7/8/12-string, replacement, compatibility, before buying, installation, measurement, hole/post/screw spacing, clearance, depth, thickness, geometry, repair, build, DIY, luthier, metric, and imperial.

## Sixteen new search areas explored

| # | Search family | Representative searches and SERP finding | Compression decision |
| --- | --- | --- | --- |
| 1 | Tuning-machine replacement geometry | `guitar tuner replacement hole size`, `conversion bushing`, `headstock thickness tuner post`, `tuner screw holes do not line up`, `tuner body spacing` | Strong demand and fragmented drawings; shortlist. |
| 2 | Fixed bridge/tailpiece replacement | `guitar bridge post spacing replacement`, `ABR Nashville stud fit`, `wraparound bridge compatibility`, `saddle travel replacement` | Strong purchase intent but heavy overlap with current bridge/intonation Tools; merged into Bridge/Tremolo shortlist. |
| 3 | Tremolo retrofit fit | `tremolo post spacing`, `stud diameter`, `block depth cavity`, `string spacing`, `Floyd replacement fit` | Strong measured workflow; merged with bridge because the independent Tool set collapses after overlap. |
| 4 | Bolt-on neck and pocket fit | `replacement neck heel pocket dimensions`, `bolt pattern`, `neck pocket depth`, `scale position` | Real replacement questions; shortlist. |
| 5 | Pickguard/component layout | `replacement pickguard screw holes`, `pickguard cutout fit`, `scratchplate template` | Mostly one coordinate/cutout comparison and duplicates the current harness/layout and pickup-fit models; rejected before shortlist scoring. |
| 6 | Guitar finish material planning | `how much lacquer guitar body`, `finish coverage`, `paint mix ratio`, `wet dry film thickness` | Recurring build questions and consumable intent; shortlist. |
| 7 | Binding and purfling material planning | `guitar binding strip length`, `purfling quantity`, `binding thickness` | Material demand exists; shortlist, but only one safe independent calculation survived. |
| 8 | Pickup winding workshop | `pickup winding turns calculator`, `wire resistance`, `bobbin fill`, `winder speed` | Technically coherent and repeatable; shortlist, but direct comprehensive competition is strong. |
| 9 | Active-electronics battery/runtime | `active pickup 9V battery life`, `pickup current draw`, `18V runtime` | One runtime equation depends on current draw/capacity/discharge conditions; fit duplicates Controls and product data changes. Rejected before shortlist. |
| 10 | Acoustic soundhole hardware fit | `soundhole pickup diameter fit`, `acoustic pickup clearance`, `soundhole control fit` | Official fit ranges and purchase intent exist, but variants are the same clearance problem and cannot form four Tools. Rejected before shortlist. |
| 11 | Acoustic bridge-pin interface | `bridge pin taper size replacement`, `3 degree 5 degree pin fit`, `bridge pin hole measurement` | Recurring fit problem, but one taper/diameter comparison; corrective reaming/slotting is irreversible. Rejected before shortlist. |
| 12 | Pedalboard power and layout | `pedalboard power current planner`, `voltage polarity output assignment`, `pedal layout` | High demand, but multiple powerful free planners already combine layout, current, voltage, polarity, cables, and catalogs. Rejected before shortlist. |
| 13 | Guitar case fit | `guitar case finder by dimensions`, `case internal measurements`, `odd shape guitar case fit` | Commercial and repeatable; merged into Transport shortlist. Sweetwater and Pelican already provide dimension finders. |
| 14 | Guitar shipping/packaging | `guitar shipping box size`, `dimensional weight`, `packing clearance`, `case shipping` | Real seller workflow; merged into Transport shortlist. Carrier rules and rates create maintenance, while generic box/DIM tools are abundant. |
| 15 | Guitar fastener/pilot-hole planning | `guitar screw pilot hole size`, `tuner screw pilot`, `strap button pilot` | Generic wood calculators compete directly; species, grain, screw root, edge distance, prior damage, and irreversible drilling make universal outputs unsafe. Rejected before shortlist. |
| 16 | Body/neck/fretboard blank yield | `guitar body blank yield`, `neck blank cut list`, `fretboard blank dimensions` | Builder interest exists; shortlist, but four proposed pages reduce to rectangular stock fit/nesting and changing design assumptions. |

## Shortlist comparison

Scores compare commercial potential /40, traffic opportunity /35, and competition gap /25. A high score is not a GO unless every Hard Gate passes.

| Candidate | Monetization | Traffic | Gap | Total | Independent new Tools after overlap | Gate result | Decision |
| --- | ---: | ---: | ---: | ---: | ---: | --- | --- |
| Tuning Machine Replacement Fit & Headstock Layout | 35 | 29 | 22 | **86** | 2 | D, E, J fail | HOLD / NO-GO |
| Bridge & Tremolo Retrofit Geometry | 37 | 31 | 18 | **86** | 2 | D, E fail | HOLD / NO-GO |
| Bolt-on Neck & Pocket Replacement Fit | 34 | 26 | 18 | **78** | 1–2 | D, E, G fail | REJECT |
| Guitar Finish Material Planning | 33 | 27 | 12 | **72** | 2–3 | C, E, G, I fail | REJECT |
| Guitar Transport, Case & Shipping Planning | 32 | 29 | 8 | **69** | 2 | C, E, H fail | REJECT |
| Binding & Purfling Material Planning | 28 | 19 | 18 | **65** | 1 | E, G, J fail | REJECT |
| Pickup Winding Workshop | 34 | 24 | 5 | **63** | 4 in theory | C fails decisively | REJECT |

## Candidate details

### 1. Tuning Machine Replacement Fit & Headstock Layout — 86/100

- User workflow: remove or measure one current tuner, compare the existing peghole/headstock/anchor pattern and neighboring clearance with a candidate before buying or modifying the headstock.
- Demand: official Fender support says vintage and modern mounting holes differ and warns that conversion may require modification; Sweetwater and StewMac publish recurring hole/bushing/screw-pattern guidance. Recent and older Reddit threads repeatedly report wrong peghole sizes, screw holes that nearly but do not align, and insufficient body spacing.
- Long-tail breadth: vintage/modern, press-in/threaded bushing, 6-inline/3+3/12-string, guitar/bass, locking/open/closed gear, conversion bushing, post height, headstock thickness, string-hole diameter, anchor screw/index pin, metric/imperial.
- SERP: manufacturer drawings and static retrofit articles are fragmented by product. No sampled independent browser tool accepted the complete set of user measurements.
- Interactive competitors: none found for a cross-brand measured retrofit; Graph Tech's InvisoMatch is a brand-specific plate selector and StewMac sells physical jigs.
- Why an independent site could win: it could combine current and candidate measurements without a product catalog and screen before purchase.
- Maintenance: favorable when every dimension is user-entered from a current drawing; no model database required.
- Safety: result must be pass/physical-confirmation/stop only. Fender explicitly recommends skilled work for hole enlargement, and no result may authorize reaming or drilling.

Proposed Tool decomposition and independence audit:

1. **Peghole & Bushing Fit Checker** — meaningful new diameter/stepped-hole problem.
2. **Headstock Thickness & Post Stack Checker** — meaningful new axial stack and string-hole exposure problem.
3. **Anchor Screw / Index-Pin Pattern Matcher** — mathematically and structurally duplicates the current Prewired Harness Layout Matcher: shared-datum coordinates, translation, residuals, and tolerance.
4. **Neighboring Tuner Body Clearance Planner** — normally belongs in the same overall candidate envelope as Tools 1–2; splitting it creates an artificial page.
5. **String Gauge Through Post Hole Checker** — one subtraction, and the gauge selection workflow already exists; too trivial for an independent Tool.
6. **Staggered Post / Break-Angle Planner** — duplicates Headstock String Break-Angle Tool.

Only the first two survive all eight independent-Tool criteria. The cluster therefore fails Gate E, and reusing existing coordinate, string-gauge, and break-angle models would also fail Gate D. A natural user workflow is one comprehensive tuner-fit screen, not four forced pages, so Gate J fails at cluster scale.

Technical evidence:

- [Hipshot 6FEL0 official dimension drawing](https://docs.hipshotproducts.com/6FEL0_-_FENDER_DIRECTROFIT_LOCKING_CLOSED_GUITAR_TUNER_DIMENSIONS.pdf) specifies compatible peghole, post geometry, headstock-thickness ranges, dimensions, and tolerance.
- [Schaller official guitar-post drawing](https://schaller.info/media/pdf/2d/ca/53/1014-Schaller_Original_G-Series_Deluxe_Keystone_Single_Left_Single_Right_Stellachsen_fuer_Gitarre_posts_for_guitar.pdf) distinguishes post length, string-hole center, diameters, maximum string gauge, and maximum headstock thickness.
- [Fender official tuner differences](https://support.fender.com/hc/en-us/articles/42584536827547-What-are-the-differences-between-different-types-of-Fender-Guitar-Tuning-Machines) documents different vintage/modern hole diameters, conversion bushings, and the modification boundary.
- [GOTOH 2025 catalog](https://www.hosco.co.jp/en/wp-content/themes/hosco_en/dl/gotoh-catalog2025.pdf) provides model drawings and tuner spacing, illustrating why current candidate drawings remain necessary.
- [Graph Tech InvisoMatch](https://graphtech.com/pages/invisomatch-mounting-plates) is a useful brand-specific alternative for existing anchor patterns, but not a general measured calculator.
- Community samples: [recent replacement identification failure](https://www.reddit.com/r/SchecterGuitars/comments/1ul31vo/how_to_identify_which_replacement_tuners_i_need/), [peghole mismatch during a build](https://www.reddit.com/r/Guitar/comments/1t8ci6a/tuning_peg_hole_diameter_nightmare_with/), and [anchor screw misalignment](https://www.reddit.com/r/Luthier/comments/1cui67q/do_i_need_to_redrill_screw_holes_for_my_tuners/).

### 2. Bridge & Tremolo Retrofit Geometry — 86/100

- User workflow: compare the installed posts/screws, body route, plate/block, string spread, and available saddle travel with a replacement bridge or tremolo.
- Demand: recent bridge/tremolo fit guides call out post spacing, stud diameter, block depth, and string spacing; forum threads repeatedly ask about unusual post spacing, licensed-Floyd replacement, narrower string spread, and exhausted saddle travel.
- Long-tail breadth: fixed/Tune-o-matic/wraparound/hardtail/2-point/6-screw/locking tremolo, guitar/bass, import/US, post/stud/bushing/screw spacing, block depth, plate footprint, saddle travel, string-through alignment, radius, and string spread.
- SERP: official Floyd Rose routing PDFs and Hipshot drawings coexist with retailer/static guides. The information is fragmented, but the current site already implements most required primitives.
- Interactive competitors: no sampled unified retrofit calculator, but that gap alone does not overcome internal duplication.
- Maintenance: user-entered drawings avoid a catalog, though bridge-family-specific constraints still require careful modeling.
- Safety: any failed interface means stop; no plugging, drilling, routing, saddle slotting, or post relocation may be approved.

Proposed Tool decomposition and independence audit:

1. **Stud/Post Interface Checker** — potentially new, including center spacing, post diameter/thread declaration, and bushing fit.
2. **Tremolo Block & Route Motion Envelope** — substantially duplicates Pickup Route Clearance and Control Switch Clearance; a moving swept envelope adds complexity but remains one part of overall fit.
3. **Saddle Travel Coverage Checker** — potentially new only when the user supplies measured required saddle positions; predicting compensation universally would duplicate/re-enter the rejected Acoustic Saddle problem and risk false precision.
4. **Bridge String Spread vs Neck Edge** — duplicates Bridge String Spacing and String Spread at Pickup.
5. **Bridge Radius Compatibility** — duplicates Fretboard Radius Matcher and Saddle Radius Planner.
6. **Mounting-Screw Pattern Matcher** — duplicates Prewired Harness Layout Matcher.
7. **Tremolo Spring/neutral planning** — already served by Tremolo Spring Balance Planner.

Only the stud/post screen and a narrowly bounded measured travel checker are genuinely new. Gate E fails, and the candidate fails Gate D because four other plausible pages would be renamed existing Tools.

Technical and demand evidence:

- [Floyd Rose Original official page](https://www.floydrose.com/products/frto) links current dimensions and routing diagrams and identifies block depth and bridge radius.
- [Hipshot official bridge drawing](https://docs.hipshotproducts.com/4TM070.PDF) demonstrates current manufacturer geometry for string spacing, stud spacing, radius, and intonation dimensions.
- [StewMac Schaller Roller Bridge](https://www.stewmac.com/parts-and-hardware/all-hardware-and-parts-by-instrument/electric-guitar-parts/electric-guitar-bridges-and-tailpieces/tune-o-matic-bridges/schaller-roller-bridge/) exposes post spacing, threads, radius, and adjustable spread on one product.
- [Current tremolo fit guide](https://www.beyondeleven.com/blog/tremolo-fitment-guide/) presents the four core measured interfaces.
- Community samples: [odd Tune-o-matic post spacing](https://www.reddit.com/r/Luthier/comments/1m109ol/new_project_needs_replacement_tom_cant_find/), [hardtail string-spacing replacement](https://www.reddit.com/r/Luthier/comments/1qyei1e/replacement_bridge_with_narrower_string_spacing/), [licensed Floyd post fit](https://www.reddit.com/r/guitars/comments/1i4ivt1/is_there_a_floyd_replacement_out_there_that_will/), and [measured saddle-travel shortage](https://www.reddit.com/r/guitarrepair/comments/1rmtiu3/new_bridge_to_fix_maxed_out_intonation/).

### 3. Guitar Finish Material Planning — 72/100

- User workflow: estimate material from surface area and product coverage, prepare a batch from the current product ratio, and relate wet film, volume solids, and dry film.
- Demand: recurring luthier questions ask how many aerosol cans/coats are needed and whether quoted quantities are excessive.
- Long-tail breadth: body/neck, lacquer/poly/oil, aerosol/HVLP/brush, sealer/color/clear, coverage, reducer, hardener, solids, wet/dry film, coats, waste, metric/imperial.
- SERP and interactive competition: [FinishCalc](https://finishcalc.com/) already combines area, coverage, coats, waste, volume, wet film, volume solids, and dry film in one free calculator. Jotun and multiple coating/paint tools separately solve WFT/DFT and mix ratios.
- Why an independent site loses: the only guitar-specific input is surface area or an approximate instrument preset. Guitar shapes, edge radii, cavities, masking, transfer efficiency, sanding loss, and technique make a generic preset less defensible than entering area and using the product TDS in the existing calculators.
- Maintenance: safe calculations can be user-entered, but schedules, compatibility, pot life, flash/recoat/cure, PPE, ventilation, and product chemistry remain product-specific and changing.
- Safety: a generic workflow must not normalize incompatible coatings or hazardous catalyzed products. The current product instructions and SDS/TDS must control.

Potential Tools were surface-area estimation, coverage/quantity, mix ratio, and WFT/DFT. The latter three are already solved by capable generic interactive competitors, and surface-area estimation is too approximate to create a unique cluster. A schedule planner would require product-specific rules and could become unsafe. Gates C, E, G, and I fail.

Evidence:

- [StewMac ColorTone official instructions](https://www.stewmac.com/globalassets/video-and-ideas/online-resources/finishing/colortone-aerosol-finishing-set-instructions/colortone-aerosol-finishing-set-with-50s-classic-color-lacquer-instructions) show that coat counts, intervals, sanding, and cure are specific to the named system and technique.
- [Jotun technical calculator](https://paintcalculator.jotun.com/) directly calculates wet film, dry film, spreading rate, and consumption.
- [DeFelsko WFT technical explanation](https://www.defelsko.com/resources/how-to-measure-wet-film-paint-thickness-before-cure) explains the solids relationship and effect of reducer.
- Community samples: [how many cans for a full guitar](https://www.reddit.com/r/Luthier/comments/1jlhjwy/how_many_cans_of_lacquer_for_full_guitar/), [how much clear is enough](https://www.reddit.com/r/Luthier/comments/pmeb7f/im_in_the_clear_coat_phase_of_painting_a_guitar/), and [finish sourcing and quantity](https://www.reddit.com/r/telecaster/comments/fz8dsc/finishing_advice_source_and_needs/).

### 4. Bolt-on Neck & Pocket Replacement Fit — 78/100

- User workflow: determine whether a measured replacement heel physically fits the pocket and preserves the scale/bridge relationship before purchase or drilling.
- Demand/SERP: Warmoth publishes a detailed fit guide and emphasizes that nominal Fender-style dimensions are not universal. Community questions recur around heel shape, pocket depth, bolt holes, and scale position.
- Potential Tools: heel/pocket envelope, bolt-coordinate match, projected scale/bridge check, and neck-plane/height check.
- Existing-site overlap: bolt coordinates repeat the harness matcher, projected scale repeats Scale Length Identifier/fret geometry, and plane/height repeats Neck Angle Planner. Only heel/pocket shape is clearly new, and a rectangle cannot establish rounded/squared heel compatibility.
- Safety: final fit requires physical templates and controlled woodwork; drilling/routing cannot be approved.
- Decision: REJECT; Gates D, E, and G fail.
- Evidence: [Warmoth official neck/body fit guide](https://warmoth.com/guitar-neck-fit), [StewMac neck-pocket template instructions](https://www.stewmac.com/video-and-ideas/online-resources/routing-and-templates/neck-pocket-routing-template-for-fender-instructions/), and a [replacement bolt-pattern discussion](https://www.reddit.com/r/Luthier/comments/vics2s/the_holes_on_the_neck_i_bought_dont_line_up_with/).

### 5. Guitar Transport, Case & Shipping Planning — 69/100

- User workflow: fit an instrument/case/box, estimate packed dimensions, then compare actual and dimensional weight.
- Demand: case and shipping questions recur, particularly for nonstandard bodies and marketplace sales.
- Interactive competitors: [Sweetwater Case Finder](https://www.sweetwater.com/shop/cases/finder/dimensions) and [Pelican Case Calculator](https://www.pelican.com/us/en/case-calculator) already search cases by dimensions. Generic box and dimensional-weight tools are mature.
- Potential Tools: instrument-to-case clearance, case-to-box clearance, dimensional weight, and packing material list.
- Failure: the first two are the same orthogonal-envelope model, dimensional weight is generic and carrier-rule dependent, and a material list is a checklist rather than a Tool. Carrier divisors, oversize thresholds, rates, insurance, and regional rules add maintenance. Gates C, E, and H fail.
- Evidence: [U-Haul guitar packing guidance](https://www.uhaul.com/Tips/Packing/How-To-Pack-A-Guitar-for-Shipping-OR-Moving-21560/) and a [recent Reverb shipping discussion](https://www.reddit.com/r/Reverb/comments/1qvtk7f/how_do_you_determine_shipping_cost/).

### 6. Binding & Purfling Material Planning — 65/100

- User workflow: estimate strip length and joints from an instrument perimeter and purchased strip lengths.
- Demand/SERP: suppliers discuss linear-inch quantities and luthiers ask about thickness/channel combinations.
- Potential Tools: perimeter/strip quantity, layer-stack thickness, joint plan, and routing-channel plan.
- Failure: quantity and joints belong in one calculator; layer thickness is simple addition; routing depth/width is an irreversible operation controlled by the actual material and fixture. There are not four independent Tools. Gates E, G, and J fail.
- Evidence: [DePaule linear-inch purfling listing](https://luthiersupply.com/127/826/product/straight-shell-purfling-strips---price-per-linear-inch.html) and [StewMac binding installation guide](https://www.stewmac.com/video-and-ideas/online-resources/how-to-install-and-repair-instrument-binding-and-purfling/how-to-install-bindings/).

### 7. Pickup Winding Workshop — 63/100

- User workflow: model turns, wire length/resistance, bobbin fill, winding layers/speed, and approximate electrical behavior.
- Demand and repeat use: real among pickup builders, with consumable/equipment purchase intent.
- Potential Tools: target-resistance/turns, bobbin capacity/fill, winding-time/traverse, and coil electrical estimate.
- Decisive competition: [Pickup Forge's free winding calculator](https://pickupforge.com/pickup-winding-calculator.html) already accepts bobbin/core geometry, two wire gauges, insulation, dual-coil resistance split, fill factor, pole geometry, spacing and clearance; it outputs layers, turns, wire length, resistance, thickness, inductance, resonance, and a generated 3D bobbin. Its separate [coil winder planner](https://pickupforge.com/pickup-winder.html) covers layers, reversals, and spindle speed. This is stronger than the proposed cluster without requiring a weaker duplicate.
- Decision: REJECT; Gate C fails decisively even though four theoretical tasks exist. Adding pickup presets would also create a maintained product database and empirical-model validation burden.

## Hard Gates for the best candidate

The best candidate is reported explicitly because a score of 86 does not override a failed gate.

| Gate | Tuning Machine Replacement result | Evidence |
| --- | --- | --- |
| A. Actual demand | PASS | Official support plus repeated current and historical fit questions |
| B. Long-tail breadth | PASS | Hole, bushing, post, thickness, string hole, pattern, spacing, layout, instrument variants |
| C. Competition gap | PASS | No sampled cross-brand measured browser workflow |
| D. Distinct from current site | **FAIL** | Coordinate matching, string gauge, and break angle already exist |
| E. Four independent Tools | **FAIL** | Only peghole/bushing and post-stack checks remain genuinely new |
| F. Repeat value | PASS | Reused per instrument and candidate tuner set |
| G. Safe implementation | PASS with strict boundary | Screening is safe; drilling/reaming must remain a stop condition |
| H. Maintainable | PASS | User-entered current drawings avoid a catalog |
| I. Technical evidence | PASS | Multiple current official drawings define required dimensions |
| J. Natural cluster | **FAIL** | The natural product is one integrated tuner-fit Tool, not four independent pages |

## Final decision

**NO-GO — no sufficiently strong new workflow cluster.**

The search produced several useful single Tools, especially a comprehensive tuning-machine fit screen and a bridge stud/travel screen. The assignment, however, requires one natural cluster with at least four independent, non-overlapping, repeat-use Tools. Creating extra tuner pages from coordinate math, break angle, or string gauge would repackage current functionality. Creating extra bridge pages from string spread, radius, cavity clearance, and tremolo balance would do the same. Finish, transport, and pickup winding have stronger existing interactive competition or changing product/carrier dependencies.

The correct outcome is therefore research-only. Production remains at 87 public HTML pages, 50 Tools, 8 hubs, 12 guides, 8 references, 4 comparisons, and 86 sitemap URLs.

## Repository QA

- `node scripts/build.mjs`: PASS; generated 87 public HTML pages and retained the 50-Tool inventory.
- `node scripts/test.mjs`: PASS; static checks reported 0 failures, including broken-link and orphan-page checks.
- Geometry fixtures: 65 PASS.
- Pickup-fit fixtures: 15 PASS.
- Control-fit fixtures: 33 PASS.
- Content audit: 87 Sufficient; every failure group reported 0.
- Production diff: 0 files. The generator's end-of-file normalization of root `index.html` was discarded, leaving the user's Sell With Boost badge and every production file byte-for-byte at the start commit.
- Changed representative browser QA: not applicable because the decision is NO-GO and there is no production HTML, CSS, JavaScript, asset, or generated-output change to render.

## Observation state

Do not revisit the excluded recent clusters or implement a two-Tool tuner/bridge fragment simply to create pages. A future tuner candidate may be reconsidered only if four independent search intents emerge that do not reuse coordinate matching, string gauge, or headstock break angle. A future bridge candidate requires four new workflows after excluding existing spacing, radius, route clearance, tremolo balance, and intonation logic. Otherwise the next discovery should start from a different user workflow family with current external evidence.
