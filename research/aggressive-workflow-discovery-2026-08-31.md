# Aggressive workflow discovery — 2026-08-31

## Decision

**GO — Guitar Electronics Multimeter Diagnostic Bench, 92/100.** The cluster adds four independent, deterministic tools for measurements that users already make on disconnected passive instruments: pickup DCR comparison, potentiometer taper analysis, selector contact mapping, and cable/bridge-ground continuity checking. It does not duplicate the existing symptom-led Ground Hum Diagnostic, feature-led Pickup Wiring Selector, value-selection pages, control-hardware fit pages, or recording-chain impedance tools.

The implementation boundary is intentionally narrow: resistance and continuity only, passive and fully unpowered only, user-entered measurements only, no catalog, no powered-device repair, no solder map, and no part-replacement verdict.

## Starting inventory and exclusions

Work began at `cc3158ecf19e3761ec039882601731feb6430a8e` after a clean fast-forward from the live `origin/main`. The starting generated inventory was 95 public HTML pages: 55 tools, 9 category hubs, 13 guides, 9 references, 4 comparisons, and 5 basic pages.

Excluded before search:

- all existing setup, diagnostic, tension, intonation, document, electronics-selection, recording, pickup-fit, control-fit, and luthier-geometry workflows;
- recently shipped Pickup Fit & Spacing, Control Hardware Fit & Layout, and Recording & Reamping clusters;
- held Fretwire/Refret, Tuning Machine Retrofit, and Bridge/Tremolo Retrofit clusters;
- rejected Nut Setup, Acoustic Saddle Compensation, Humidity, Bolt-on Neck/Pocket Fit, Finish, Transport/Case/Shipping, Binding/Purfling, and Pickup Winding clusters;
- every family reviewed in the 2026-08-26 aggressive pass, including amp/cabinet matching, speaker wiring and power, recording components, cable capacitance, buffer placement, effects loops, balanced/unbalanced routing, MIDI/pedal control, piezo systems, browser-audio diagnosis, sustain/dead spots/tuning drift/pickup balance, instrument balance and mass, bass winding length, headless and 12-string systems, truss-rod installation, acoustic modal/bridge force, resonator work, pickup harmonic position, and cavity/service-envelope work.

## Broad discovery map — 56 different user problems

These are workflow/search families, not proposed page titles. Early exclusions remain in the table so the breadth and rejection reason are auditable.

| # | User problem / search family | Early disposition |
|---:|---|---|
| 1 | Measure a passive pickup directly for DC resistance | advance |
| 2 | Interpret pickup resistance measured at the output jack | advance |
| 3 | Compare a pickup reading with a maker/baseline reference | advance |
| 4 | Distinguish OL/open, near-zero, and numeric pickup readings | advance |
| 5 | Verify a potentiometer’s measured total resistance | advance |
| 6 | Identify a pot’s nearest taper from a measured sweep | advance |
| 7 | Detect non-monotonic or irregular pot sweep readings | advance |
| 8 | Normalize clockwise versus counter-clockwise pot readings | advance |
| 9 | Map unknown selector-switch closed contacts by position | advance |
| 10 | Detect duplicate selector positions from continuity data | advance |
| 11 | Find common and unused selector contacts | advance |
| 12 | Record a passive harness continuity truth table | advance as workflow context |
| 13 | Measure guitar-cable tip and sleeve conductor resistance | advance |
| 14 | Check tip-to-sleeve isolation without inventing a large value for OL | advance |
| 15 | Check output-jack sleeve to bridge/string ground continuity | advance |
| 16 | Record movement-sensitive cable/jack resistance change | advance |
| 17 | Match pedal adapter voltage, polarity, current, and connector | midlist; dense competition |
| 18 | Allocate multiple pedals across supply outputs | midlist; dense competition |
| 19 | Screen daisy-chain versus isolated-output risks | midlist; catalog/spec burden |
| 20 | Estimate pedal battery runtime from current draw | midlist; generic calculator competition |
| 21 | Estimate DC cable voltage drop | reject; generic electrical calculator |
| 22 | Pack pedal footprints onto a board | midlist; exact interactive competitors |
| 23 | Check pedal lid and height clearance | midlist; limited independent breadth |
| 24 | Estimate patch-cable routing length | reject; weak guitar-specific demand |
| 25 | Estimate completed pedalboard carry weight | reject; generic arithmetic |
| 26 | Allocate loop-switcher loops and I/O access | reject; product-specific catalog burden |
| 27 | Plan stereo/mono pedal route compatibility | reject; recording/routing adjacency |
| 28 | Check wireless frequency band by location | finalist; regulation and live-data burden |
| 29 | Coordinate multiple wireless channels | finalist; dominant official tools |
| 30 | Sum wireless-system latency | finalist; only one simple model |
| 31 | Estimate wireless battery/show runtime | finalist; generic and device-specific |
| 32 | Check transmitter plug/instrument mechanical compatibility | reject; control-fit adjacency and catalogs |
| 33 | Compare capo radius and neck-width fit | midlist; narrow cluster |
| 34 | Log capo pressure and tuning displacement | midlist; intonation overlap |
| 35 | Generate sounding notes for a partial capo | reject; dense chord/transposition tools |
| 36 | Plan dual-capo or alternate capo positions | reject; limited technical depth |
| 37 | Track acoustic bridge-lift change over time | finalist; threshold/safety problem |
| 38 | Map acoustic top-belly cross-section measurements | finalist; structural interpretation risk |
| 39 | Screen neck projection against acoustic bridge/saddle state | finalist; overlaps held acoustic geometry |
| 40 | Record loose-brace tap/pressure localization | finalist; physical judgment, weak model |
| 41 | Diagnose acoustic bridge-pin ball-end seating | midlist; narrow and saddle/nut adjacency |
| 42 | Compare bridge-pin taper and protrusion | reject; product fit/catalog burden |
| 43 | Diagnose recurring string breakage by location and event | midlist; one branching diagnostic |
| 44 | Track string service life by hours/events | reject; generic tracker, weak technical model |
| 45 | Check wall-hanger yoke/headstock fit | midlist; structural liability, one workflow |
| 46 | Check stand/body width and height fit | reject; one physical-fit screen |
| 47 | Lay out multiple instrument wall clearances | reject; generic room-layout task |
| 48 | Check neck-rest/workbench fixture clearance | reject; low demand and one model |
| 49 | Plan wood-screw pilot and clearance holes | finalist; generic and irreversible |
| 50 | Check screw usable engagement and penetration | finalist; material/safety assumptions |
| 51 | Plan stripped-hole repair/plug scope | finalist; irreversible repair advice |
| 52 | Match guitar hardware thread pitch | finalist; physical gauge/catalog better |
| 53 | Check countersink/counterbore head clearance | reject; generic machining geometry |
| 54 | Plan scarf-joint blank length | midlist; only one geometric family |
| 55 | Plan neck laminate/blank material allowance | reject; low search evidence |
| 56 | Analyze repeatability, resolution, and bias in setup measurements | midlist; useful but weak guitar-specific demand |

## Midlist — 12 clusters

| Cluster / user workflow | Example searches | Demand / long-tail / SERP | Potential independent tools | Existing overlap | Main weakness | Decision |
|---|---|---|---:|---|---|---|
| Guitar electronics multimeter diagnostics — enter physical readings to isolate one passive path | `test guitar pickup multimeter`, `pot taper measured resistance`, `selector switch continuity map`, `guitar cable ground continuity` | High recurring repair questions; broad component and action modifiers; SERP dominated by articles/videos | 4 strong | Adjacent to, but different from, hum diagnosis and wiring selection | Must keep in-circuit readings and powered work out of scope | finalist / GO |
| Pedal power and battery planning — allocate documented loads before wiring a board | `pedal power calculator`, `daisy chain current draw`, `pedal battery runtime` | Very high demand and repeat use; exact interactive tools and catalogs already rank | 4–5 | Recording/pedal insert is adjacent only | Competition gap is small and catalog maintenance is costly | finalist / reject |
| Acoustic structural condition tracking — compare repeated bridge/top/neck measurements | `measure guitar bridge lift`, `top belly gauge`, `neck projection acoustic guitar` | High-stakes recurring searches; mostly articles/forums | 3 strong, fourth weak | Acoustic checklist and held neck/saddle work | No safe universal action threshold; physical judgment dominates | finalist / reject |
| Guitar fastener planning — evaluate screw, hole, and repair geometry | `guitar screw pilot hole`, `stripped neck screw repair`, `guitar thread pitch` | Frequent repair questions; generic woodworking tools present | 3 strong, fourth marginal | Control fit and held retrofit work | Material condition and drilling make browser advice unsafe | finalist / reject |
| Wireless performance planning — coordinate band, channels, latency, and runtime | `guitar wireless frequency finder`, `wireless guitar latency`, `wireless battery gig` | Strong live-use demand; Shure and specialist tools dominate | 3–4 | Recording latency is adjacent | Location/regulation/device data change; only two static models are strong | finalist / reject |
| Pedalboard physical layout — compare footprints, height, routing, and weight | `pedalboard layout planner`, `pedal height clearance`, `patch cable length planner` | Strong purchase intent; mature free builders and catalogs | 3–4 | Control/pickup fit uses similar envelopes | Exact interactive packing competition closes the opportunity | midlist / reject |
| Capo fit and intonation — compare radius, pressure response, and partial positions | `capo radius fit`, `capo makes guitar sharp`, `partial capo notes` | Recurring player problem; transposition tools are dense | 2 strong | Radius and intonation tools already exist | Remaining pages would be thin variants | midlist / reject |
| Active electronics battery and power — test drain and runtime for an active guitar | `active pickup battery drain`, `TRS jack battery disconnect`, `18V active pickup` | Recurring questions and variants | 2–3 | Output jack and recording headroom adjacent | Manufacturer-specific compatibility and powered-circuit scope | midlist / reject |
| Neck blank and scarf fabrication — plan stock before cutting | `guitar scarf joint calculator`, `neck blank length`, `headstock angle stock` | Narrow maker demand; article/video SERP | 2–3 | Existing luthier geometry | One geometry family split by stock labels | midlist / reject |
| String breakage and seating diagnosis — localize repeat breaks by event/location | `guitar string keeps breaking at bridge`, `string breaks at tuner` | Very frequent symptom search | 1 diagnostic, 1 tracker | Tuning stability, nut, bridge, and setup diagnostics | Primarily one decision tree rather than a cluster | midlist / reject |
| Shop measurement uncertainty — decide whether a setup change exceeds instrument/tool noise | `guitar measurement repeatability`, `feeler gauge resolution`, `measurement bias comparison` | Technically useful; weak guitar-specific SERP intent | 3–4 | Measurement record pages | Demand belongs to generic metrology, not guitar workflows | midlist / reject |
| Storage/display fixture fit — screen stand, hanger, and room clearances | `guitar hanger headstock fit`, `guitar stand body width`, `guitar wall spacing` | Purchase-prep questions recur | 2–3 | Recent physical-fit clusters | Structural mounting liability and insufficient independent breadth | midlist / reject |

## Finalists and scoring

Scoring uses the required 100-point rubric: demand/long-tail 30, competition gap 20, independent tool breadth 20, repeat use 10, static feasibility 10, differentiation 5, and maintenance/safety 5.

| Finalist | Demand | Gap | Breadth | Repeat | Static | Diff. | Maintain/safety | Total | Gate result |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---|
| Guitar electronics multimeter diagnostic bench | 27 | 18 | 20 | 9 | 9 | 4 | 5 | **92** | A–K pass |
| Pedal power and battery planning | 29 | 7 | 17 | 10 | 9 | 5 | 5 | **82** | C fails: exact integrated tools and catalogs already exist |
| Acoustic structural condition tracking | 26 | 18 | 10 | 9 | 7 | 5 | 3 | **78** | E/G/J fail: four safe independent models not established |
| Guitar fastener selection and repair planning | 23 | 16 | 11 | 8 | 6 | 4 | 4 | **72** | E/G/J fail: generic tools, material assumptions, irreversible action |
| Wireless performance planning | 28 | 6 | 12 | 8 | 8 | 5 | 5 | **72** | C/E/H fail: official coordination tools, changing location/device data |

## Search evidence and competitive checks

Research moved broad → narrow → action intent for each finalist. Search-result snippets were used only to find pages; claims below are bounded to the linked source itself.

### Winner: passive guitar multimeter diagnostics

Broad queries included “guitar electronics multimeter,” “test guitar pickup multimeter,” and “guitar continuity test.” Narrow queries included “pickup DCR at output jack volume pot parallel,” “identify potentiometer taper measured resistance,” and “guitar selector switch continuity map.” Action-intent queries included “online guitar pickup DCR analyzer,” “pot taper analyzer measured resistance,” “switch continuity mapper tool,” and “guitar cable ground continuity checker.”

- Seymour Duncan publishes a procedural article for testing pickup resistance, showing demand and a credible measurement method, but not an entered-reading analyzer or integrated workflow: <https://www.seymourduncan.com/blog/latest-updates/how-to-test-guitar-pickups-with-a-multimeter>
- Premier Guitar likewise provides a DCR procedure rather than an interactive comparison model: <https://www.premierguitar.com/diy/mod-garage/diy-dcr-test>
- Fluke documents resistance measurement and the requirement to remove power before measuring resistance: <https://www.fluke.com/en-us/learn/blog/digital-multimeters/how-to-measure-resistance>
- Fluke documents continuity testing as establishing whether a complete path exists: <https://www.fluke.com/en-ph/learn/blog/digital-multimeters/how-to-test-for-continuity>
- Bourns publishes potentiometer taper curves in a manufacturer datasheet, supporting reference-curve comparison while also showing that actual product curves are specified rather than universal: <https://www.bourns.com/docs/Product-Datasheets/PTA.pdf>
- Potentiometers.com explains taper percentage as output at a stated rotation point, useful for defining what must be recorded: <https://www.potentiometers.com/potcomFAQ.cfm?FAQID=29>
- Circuit Codex has an interactive taper visualization, but it visualizes selected/reference tapers rather than classifying a user’s measured resistance sweep: <https://circuitcodex.com/reference/guides/pot-tapers/>

Sampled discussion searches repeatedly showed “pickup reads OL,” “how to identify audio or linear pot,” “unknown DPDT/selector continuity,” and “test output jack with multimeter” questions. No sampled result offered one free, guitar-specific suite that accepts measured pickup, pot, switch, cable, and bridge-ground data. The gap is tool-level, not an absence of educational articles.

### Pedal power

Broad and action queries covered current draw, voltage/polarity, port allocation, daisy chains, battery runtime, and voltage drop. Exact competition is strong:

- Guitar Chalk offers a pedal power calculator with custom inputs and a large pedal/power-supply catalog: <https://www.guitarchalk.com/pedal-power-calculator/>
- Pedalboard.app includes power compatibility inside its builder: <https://pedalboard.app/docs/builder/power-compatibility/>
- Riffwork combines pedalboard layout and power planning: <https://tools.gpdoom.com/pedalboard/>
- Sweetwater’s guide clearly documents voltage, polarity, and sufficient-current checks: <https://www.sweetwater.com/sweetcare/articles/guitar-pedal-power-demystified/>
- DigiTech’s official FAQ reinforces exact voltage/polarity and adequate-current requirements: <https://digitech.com/faqs/>
- Truetone already sells a current-measurement workflow/tool: <https://truetone.com/mA-Meter/>

Demand is excellent, but the sampled free interactive market already answers the central tasks more directly and with catalogs this static site will not maintain. Hard Gate C fails.

### Acoustic structure

Searches covered bridge lift, top belly, neck reset/projection, and loose-brace localization. StewMac demonstrates that loose-brace diagnosis is a physical inspection/repair workflow, not a reliable browser-only classification: <https://www.stewmac.com/video-and-ideas/online-resources/learn-about-repair-tools-and-repair-techniques/loose-brace-in-a-martin-d-35-how-to-fix-the-rattle/>. A published vintage Yamaha neck-reset procedure shows the model-specific, structural nature of neck-joint work: <https://yamahavintagefg.com/wp-content/uploads/2021/02/Vintage-Yamaha-Neck-Reset-Procedure-v2021.2.pdf>. A lutherie modal-measurement tool exists for monopole mobility, but that is specialized instrumentation rather than a safe four-tool consumer workflow: <https://rickmolloyguitars.com/lab/tools/monopole_mobility/index.html>.

The cluster cannot safely convert bridge/top/neck readings into universal action thresholds, and the fourth independent model remains weak. Hard Gates E, G, and J fail.

### Fasteners

Searches covered loose/stripped screws, pilot holes, engagement, and thread identification. Premier Guitar and StewMac provide repair methods and specialized physical tools:

- <https://www.premierguitar.com/gear/guitar-shop-101-got-a-loose-screw>
- <https://www.stewmac.com/video-and-ideas/online-resources/neck-building-and-repair-and-setup/video-plugging-stripped-holes-in-bolt-on-guitar-necks/>
- <https://www.stewmac.com/video-and-ideas/online-resources/hardware-installation/guitar-screw-rescue-kit-instructions/>
- <https://www.stewmac.com/video-and-ideas/tool-demo-videos/luthier-tools-and-supplies-videos/thread-detective-for-guitars-will-find-the-correct-fit-for-guitar-parts/>

Pilot and repair choices depend on wood condition, screw geometry, existing damage, and physical inspection; generic woodworking calculators already handle much of the arithmetic. Hard Gates E, G, and J fail.

### Wireless

Shure already provides a location-aware Frequency Finder and documented Wireless Workbench coordination process:

- <https://www.shure.com/en-US/support/tools/frequency-finder>
- <https://content-files.shure.com/Pubs/WWB/en-US/en-US/frequency-coordination-and-calculation.html>

Frequency legality and usable channels change with location, regulation, device band, and live RF conditions. Latency addition and battery runtime alone do not supply four independent guitar-specific tools. Hard Gates C, E, and H fail.

## Winner hard gates A–K

| Gate | Result | Evidence |
|---|---|---|
| A — search demand | PASS | Pickup readings, pot identification, unknown switch contacts, and cable/ground checks recur independently in search and community results. |
| B — long-tail breadth | PASS | Direct versus jack DCR, OL/short states, taper sweeps, switch truth tables, conductor isolation, bridge ground, and movement checks retain action intent. |
| C — free SERP opportunity | PASS | Sampled results are articles, videos, generic continuity tools, or reference-curve visualizers; no equivalent four-tool guitar bench was found. |
| D — at least four strong independent tools | PASS | Each tool has a different input schema, algorithm, result, and user decision. |
| E — repeat-use value | PASS | Reused per guitar, pickup, pot, selector, cable, repair intake, and before/after check. |
| F — static-web feasibility | PASS | Pure JavaScript arithmetic/parsing; no account, database, catalog, live price, or changing regulation. |
| G — technical/source support | PASS | Fluke measurement procedures, Bourns taper curves, pickup-service documentation, and standard parallel-resistance math support the bounded models. |
| H — existing-site differentiation | PASS | Ground Hum ranks symptoms; Wiring Selector chooses desired features; DI Loading uses AC source/input specifications; the new tools analyze physical meter evidence. |
| I — maintainability | PASS | All specifications and thresholds are user-entered; there is no product or regional database. |
| J — safe implementation | PASS | Passive, disconnected, unpowered only; no mains, stored charge, active devices, solder plan, or replacement verdict. |
| K — natural cluster cohesion | PASS | Meter preparation → source coil → control sweep → selector truth table → output/ground path. |

## Tool-level specification and model boundaries

### 1. Pickup DCR Analyzer

User problem/search intent: interpret a physical pickup reading before diagnosis or replacement. Representative queries: `test guitar pickup resistance multimeter`, `pickup DCR at output jack`, `guitar pickup reads OL`. It earns repeat visits for each pickup, switch position, temperature/baseline, and before/after job record. The closest existing pages choose pickup wiring or model recording input loading; neither solves a meter reading.

Inputs: meter state; direct-lead or output-jack measurement; measured kΩ; user-entered expected kΩ; user-entered tolerance; optional known parallel volume-pot kΩ.

Model: direct readings compare unchanged. The narrowly defined jack model solves `1/Rpickup = 1/Rmeasured − 1/Rpot`. It rejects impossible `Rmeasured >= Rpot` input. OL and near-zero are explicit states rather than invented numeric values.

Output/decision: estimated pickup DCR, signed percent difference, entered-band result, or open/short stop. It explicitly does not infer output, tone, magnet condition, AC impedance, or replacement need.

### 2. Potentiometer Taper Analyzer

User problem/search intent: identify the nearest response law or an irregular track from actual sweep readings. Representative queries: `identify audio linear pot multimeter`, `pot taper measured resistance`, `guitar volume pot sweep test`. It repeats per part, orientation, control section, and wear check. Existing pot pages select nominal loading and physical fit; they do not analyze a measured curve.

Inputs: measured total kΩ; five or more `rotation %, resistance kΩ` rows including 0 and 100; rising/falling direction; user-entered maximum residual.

Model: normalize the measured sweep; compare RMSE and maximum residual with linear, 10%-midpoint audio reference, and reverse-audio reference curves; count monotonic reversals.

Output/decision: nearest reference curve, fit metrics, normalized table, and repeat/inspect flag. The label is a reference comparison because actual audio laws vary and in-circuit loads distort measurements.

### 3. Selector Switch Contact Mapper

User problem/search intent: discover what an unknown passive switch physically connects in each position. Representative queries: `guitar selector switch continuity test`, `map unknown DPDT contacts multimeter`, `5 way switch contact map`. It repeats for each unknown, replacement, or suspect switch. The existing Wiring Selector starts from desired functions; this tool starts from measured closed pairs.

Inputs: comma-separated lug names; position names; one row of measured closed lug pairs per position.

Model: validate lugs, canonicalize undirected pairs, build a truth table, find contacts closed in every position, duplicate position maps, and unused lugs.

Output/decision: measured position map and anomalies to recheck. It never assigns pickup functions or tells the user what to solder.

### 4. Cable & Guitar Ground Continuity Checker

User problem/search intent: verify separate passive conductor, isolation, bridge-ground, and movement paths against the user’s own meter threshold. Representative queries: `test guitar cable continuity multimeter`, `output jack tip sleeve continuity`, `guitar bridge ground resistance`. It repeats for every cable/instrument and intermittent movement state. Ground Hum ranks audible symptoms; this tool evaluates recorded low-ohm evidence.

Inputs: explicit disconnected/unpowered confirmation; shorted-lead Ω; user continuity threshold; cable tip-tip and sleeve-sleeve Ω; tip-sleeve OL or numeric state; sleeve-to-bridge Ω; maximum movement change.

Model: subtract lead resistance from low-ohm paths with a zero floor; evaluate conductor, isolation, bridge-ground, and movement gates independently. OL remains a display state.

Output/decision: path-by-path record and the next path to remeasure. It does not diagnose insulation safety, authorize powered testing, or name a replacement part.

## Implemented cluster

- category hub: `/categories/testing.html`
- tools: `/tools/pickup-dcr-analyzer.html`, `/tools/potentiometer-taper-analyzer.html`, `/tools/selector-contact-mapper.html`, `/tools/cable-ground-continuity-checker.html`
- guide: `/guides/multimeter-guitar-electronics.html`
- reference: `/reference/resistance-continuity-reference.html`
- deterministic module: `scripts/assets/electrical-test.js`
- fixture suite: `scripts/electrical-test-test.mjs`

The finished generated inventory is 102 public HTML pages: 59 tools, 10 category hubs, 14 guides, 10 references, 4 comparisons, and 5 basic pages. The user-managed Boost and Sell badge areas remain outside generated-content edits.
