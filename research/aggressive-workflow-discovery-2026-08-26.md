# Aggressive workflow discovery — 2026-08-26

## Decision

**GO — build Guitar Recording & Reamping Measurement.** The selected cluster scores **87/100** and passes Hard Gates A–K. It adds five independent, measurement-led tools to a workflow that is absent from the existing 50-Tool library: capture a clean DI, verify source loading, match a reamp return, screen a pedal insert, measure round-trip alignment, and plan dual-microphone arrival alignment.

Start commit: `abbc1c27b75a9cf0e804a437fe9647d9a8aed53b`.

## Repository and production baseline

- Branch: `main`; remote: `https://github.com/canghun13/guitarsetuplab.git`.
- Fetch and `pull --ff-only` completed on a clean tree. Local HEAD, `origin/main`, and the advertised remote `main` all began at the start commit.
- Baseline inventory: 87 public HTML pages, 50 interactive Tools, 8 category hubs, 12 guides, 8 references, 4 comparisons, 5 basic pages, and 86 sitemap URLs (404 excluded).
- Preserved contracts: `guitarsetuplab.com`, `canghun13@naver.com`, GA4 `G-TGT88WMVDG`, and the user-managed Boost Domain Rating / Sell With Boost footer badges.

## Exclusion ledger

The search did not reopen the recently implemented Pickup Fit or Control Hardware clusters. It also excluded the recent HOLD/revalidated Fretwire/Refret, Tuning Machine Replacement, and Bridge/Tremolo Retrofit families, and the recent REJECT families for nuts, acoustic saddles, humidity, bolt-on neck/pocket work, finish, transport/cases/shipping, binding/purfling, and pickup winding. Existing setup, tension, intonation, pickup, control-fit, documents, and luthier geometry Tools were treated as occupied intent rather than new opportunities.

## Broad search map

The discovery pass tested 56 genuinely different user problems. Each row states the principal workflow/search intent and the first exclusion pressure; the mid-list below received deeper competitor and Tool-decomposition review.

| # | Search/workflow family | Initial disposition |
|---:|---|---|
| 1 | amplifier-to-cabinet load compatibility | Mid-list; high demand, dense calculators and architecture-specific safety |
| 2 | multiple-cabinet series/parallel impedance | Folded into #1; abundant direct calculators |
| 3 | internal speaker wiring topology | Folded into #1; diagram-heavy and manufacturer-dependent |
| 4 | mixed-speaker power allocation | Narrow subproblem; unsafe to imply a universal amp verdict |
| 5 | attenuator/load-box signal chain | High purchase value but exact-device manuals govern |
| 6 | speaker sensitivity/loudness comparison | Commodity SPL calculator market |
| 7 | speaker-cable loss and gauge | Commodity electrical calculator |
| 8 | guitar-cabinet net volume | Generic enclosure calculation, not guitar-setup specific |
| 9 | bass-reflex port tuning | Mature loudspeaker-design calculators |
| 10 | baffle cutout and rear-clearance planning | One fit tool, not a cluster |
| 11 | DI input loading | Finalist component |
| 12 | reamp level calibration | Finalist component |
| 13 | pedal/external-hardware insert level | Finalist component |
| 14 | measured recording round-trip latency | Finalist component |
| 15 | dual-microphone arrival alignment | Finalist component |
| 16 | direct/amped track alignment | Covered by measured round-trip alignment |
| 17 | guitar cable capacitance loading | Existing passive-loading adjacency plus direct competitors |
| 18 | buffer placement | Advice-driven; no stable universal optimum |
| 19 | effects-loop headroom | Covered more safely by measured pedal-insert screening |
| 20 | balanced/unbalanced interconnect planning | Standards explainer, weak independent Tool set |
| 21 | expression-pedal electrical compatibility | Mid-list physical-control component |
| 22 | TRS MIDI type A/B compatibility | Mid-list physical-control component |
| 23 | analog amplifier footswitch compatibility | Mid-list physical-control component |
| 24 | MIDI preset/bank map | Strong direct interactive competition |
| 25 | MIDI CC/channel collision | Strong direct interactive competition |
| 26 | MIDI clock/subdivision planning | Commodity music-time calculator |
| 27 | hex-pickup placement/sensitivity | Model-specific and adjacent to existing pickup fit |
| 28 | MIDI pitch-bend range matching | One configuration check |
| 29 | MIDI-guitar tracking latency/setup | Mid-list; system-specific and too few stable calculations |
| 30 | piezo input-impedance matching | Mid-list technical component |
| 31 | piezo cable-capacitance loading | Same electrical model as #30 |
| 32 | piezo/magnetic blend level planning | Product/circuit specific |
| 33 | acoustic feedback-frequency finder | Browser audio competitors already cover it |
| 34 | notch-filter starting plan | Depends on live measured audio and device capability |
| 35 | sustain-decay measurement | Browser/audio-analysis competition |
| 36 | dead-spot mapping | Useful protocol, weak calculation diversity |
| 37 | tuning-drift logging | Existing tuning diagnostic plus tuner/app competition |
| 38 | pickup output-balance measurement | Existing pickup-height/phase workflows |
| 39 | instrument center-of-mass calculation | Mid-list component |
| 40 | neck-dive diagnosis | Mid-list component |
| 41 | component-weight swap effect | Same mass-moment model as #39 |
| 42 | strap playing-angle geometry | Same mass-moment model with uncertain body contact |
| 43 | body-blank mass estimate | Generic density/volume calculation |
| 44 | chambering weight removal | Irreversible design advice and same mass model |
| 45 | bass string winding-length fit | Strong single Tool, insufficient cluster |
| 46 | bass taper/tuner-post position | Same single purchase-fit workflow as #45 |
| 47 | headless string length/tuner travel | Product-system specific; adjacent to excluded tuner family |
| 48 | 12-string course tension | Existing tension model and direct calculators |
| 49 | 12-string pair intonation | Existing intonation intent; bridge-specific |
| 50 | truss-rod channel/envelope planning | Mid-list but irreversible and maker-specific |
| 51 | acoustic-top monopole mobility | Direct specialist interactive competitor |
| 52 | acoustic bridge force/torque | Direct specialist calculator and structural limits |
| 53 | resonator cone/spider setup | Small search surface; physical judgment and irreversible risk |
| 54 | pickup position versus harmonics | Direct response calculators; adjacent to pickup intent |
| 55 | remaining-wall/cavity assessment after modification | Unsafe without imaging/material inspection |
| 56 | component service/access envelope | Generic fit method; already represented in Control Hardware |

## Ten-family mid-list

| Rank | Family | Demand / competition / decomposition result |
|---:|---|---|
| 1 | Guitar recording & reamping measurement | Repeated objective setup questions, five stable models, fragmented rather than cluster-level competition |
| 2 | Pedal control & MIDI compatibility | Real purchase pain, but only three physical checks survive and mapping has strong free apps |
| 3 | Amp/cab load and speaker planning | Strong commercial demand; saturated calculators and manufacturer-specific safety rules |
| 4 | Guitar weight and balance | Visible neck-dive demand and gap, but four proposed Tools collapse to one mass-moment equation |
| 5 | Piezo signal matching | Technical demand and a gap, but impedance/capacitance/blend reduce to two or three related circuit checks |
| 6 | MIDI-guitar tracking setup | Current product interest, but latency, bend range, and hex-pickup setup are device-specific |
| 7 | Browser audio diagnostics | Strong demand; SonaVyx, Fiume, tuner and spectrum tools already aggregate the workflow |
| 8 | Bass string winding-length fit | Clear buying query and official measurement data, but only one genuinely independent Tool remains |
| 9 | Truss-rod installation planning | Measurable envelope, but irreversible routing and manufacturer geometry fail safety/repeat gates |
| 10 | Acoustic modal/top measurement | Specialist demand; direct monopole and bridge-force calculators occupy the gap |

## Finalists and score

Scoring: Monetization 40, Traffic 35, Gap 25.

| Finalist | Monetization | Traffic | Gap | Total | Decision |
|---|---:|---:|---:|---:|---|
| Guitar recording & reamping measurement | 35 | 30 | 22 | **87** | GO |
| Pedal control & MIDI compatibility | 35 | 29 | 20 | 84 | Reject: C/E/K; mapping competitors, only three independent physical checks |
| Amp/cab load and speaker planning | 37 | 32 | 14 | 83 | Reject: C/H; dense calculators and unsafe universal mismatch guidance |
| Guitar weight and balance | 31 | 27 | 22 | 80 | Reject: E/K; apparent Tool set collapses to mass moments |
| Piezo signal matching | 31 | 26 | 21 | 78 | Reject: E/K; only two to three independent circuit decisions |

### Finalist deep validation

| Candidate | Representative queries and demand | SERP / free interactive competition | Why Guitar Setup Lab? | Existing overlap, Tool count, repeat use, maintenance, safety |
|---|---|---|---|---|
| Guitar recording & reamping measurement | “match reamp level to guitar,” “DI input impedance passive guitar,” “line level into guitar pedal,” “measure external hardware latency samples,” “two guitar cab mics phase distance”; repeated objective questions appear in audio-engineering communities | Official manuals and articles explain individual steps; LuthierCalc covers one impedance calculation, CMUSE one delay conversion, DAWs offer device-specific ping, and faGuitarAlign is paid. No sampled free page joins the five measurement decisions. | It combines user-measured loading, level, headroom, electrical delay, and acoustic arrival into a no-account, guitar-specific chain with explicit safety boundaries. | No existing Tool calculates these outputs. Five independent Tools; repeat per guitar/session/device; no catalogue; speaker output and powered-device work excluded. |
| Pedal control & MIDI compatibility | “TRS MIDI type A or B,” “expression pedal resistance polarity compatibility,” “amp footswitch latching momentary,” “MIDI pedalboard CC map,” “bank select calculator” | Korg/Strymon/Mission/Morningstar explain hardware; MIDI Map and MIDI Rover provide strong interactive preset/CC mapping. | A measurement-first physical checker could beat forum guesswork, but the complete cluster would duplicate capable mapping apps. | Three physical compatibility Tools survive; the fourth/fifth become mapping variants. Fails E/K and partly C; exact device circuitry governs safety. |
| Amp/cab load and speaker planning | “can I use 8 ohm head with 16 ohm cab,” “two cabinets impedance,” “mixed speaker wattage,” “attenuator impedance chain,” “guitar cab volume calculator” | Sound Certified, Starlight, enclosure calculators, wiring diagrams, and maker guidance already cover most calculations. | A unified chain could reduce fragmented arithmetic, but a brand-independent pass/fail would be less trustworthy than the amplifier and load-box manuals. | Four apparent Tools exist, yet safe limits vary by tube/solid-state topology and exact outputs. Fails C/H despite strong repeat/commercial intent. |
| Guitar weight and balance | “guitar neck dive calculator,” “move strap button neck dive,” “how much will lighter tuners change balance,” “guitar center of gravity” | Articles and forum explanations dominate; direct interactive competition is weak. | User-entered component masses and positions could quantify a before/after balance shift. | Center of mass, neck dive, component swap, and strap angle reduce to one mass-moment model with uncertain contact/strap geometry. Fails E/K. |
| Piezo signal matching | “piezo pickup input impedance,” “piezo cable capacitance,” “blend piezo magnetic pickup levels,” “piezo sounds thin into interface” | Technical chapters, preamp maker articles, circuit calculators, and Guitar Response tools cover the electrical foundations. | A bounded input-loading workflow could be clearer than scattered circuit articles. | Impedance and capacitance are one coupled response model; blend depends on product circuitry. Only two to three Tools remain, so E/K fail. |

The ten-family mid-list used the same visit test: recording/reamping supplies a complete entered-measurement workflow; pedal/MIDI supplies only a partial physical-compatibility gap; amp/cab is crowded and architecture-specific; weight/balance collapses mathematically; piezo collapses electrically; MIDI guitar is device-specific; browser diagnostics are already aggregated; bass winding length is one purchase check; truss-rod installation is irreversible; acoustic modal calculation has specialist competitors.

## Hard Gates A–K for the winner

| Gate | Result | Evidence |
|---|---|---|
| A — Demand | PASS | Current community questions repeatedly ask how to match reamp output, measure latency, avoid line/pedal overload, and align microphones. |
| B — Long-tail breadth | PASS | Search intent separates into DI impedance/loading, reamp level, line-to-pedal headroom, insert latency, track alignment, mic distance, samples, and phase. |
| C — Competition opportunity | PASS | Individual impedance or delay calculators exist, but the sampled market did not offer a free guitar-specific five-stage measurement bench. |
| D — Existing-site differentiation | PASS | The current 50 Tools stop at instrument setup, passive wiring/loading choice, hardware fit, build geometry, and shop records; none measures a recording/reamp path. |
| E — At least 4 independent strong Tools | PASS | Five different models: parallel resistance, logarithmic level difference, headroom envelope, sample timing, and acoustic arrival/phase. |
| F — Repeat-use value | PASS | The tools can be rerun for each guitar, interface, pedal, reamp device, sample rate, session, and microphone placement. |
| G — Static-web feasibility | PASS | Every result is deterministic from user-entered specifications or measured readings; no backend/audio permission is required. |
| H — Safe implementation | PASS | Speaker outputs are explicitly prohibited; powered gear remains closed; current maker maximum levels override calculator results. |
| I — Maintainability | PASS | User-measured inputs avoid a product catalogue, price feed, account, audio upload, or device database. |
| J — Technical/source support | PASS | Ohm/voltage-divider and dB equations, sample-rate timing, speed-of-sound arrival, and official DI/reamp/DAW/microphone guidance are available. |
| K — Natural workflow cohesion | PASS | The sequence follows one recording chain from DI capture through external processing/reamp to electrical and acoustic alignment. |

## Exact Tool specification gate

### 1. DI Input Loading Checker

- Intent: determine the combined resistive load seen by a measured guitar source when a DI and optional parallel/thru destination are connected.
- Inputs: source impedance Ω; DI input impedance kΩ; optional parallel input kΩ; user-selected minimum load ratio.
- Model: parallel load `1 / (1/Rdi + 1/Rparallel)`; load ratio `Rload/Rsource`; retained voltage `Rload/(Rload+Rsource)`; level change `20 log10(Vretained)`.
- Outputs: equivalent load, ratio, retained voltage percentage, level change, and entered-ratio pass/stop.
- Boundary: pickup DCR is not frequency-dependent source impedance; the result does not predict tone or approve a connection.

### 2. Reamp Level Match Planner

- Intent: match a reamped loopback to an original DI reference without inventing a universal guitar level.
- Inputs: original DI reference reading dBFS; reamp loopback reading dBFS; current reamp trim dB; user tolerance dB.
- Model: required delta `reference - returned`; proposed trim `current trim + delta`; absolute residual comparison to entered tolerance.
- Outputs: raise/lower/hold direction, dB delta, proposed trim, and verification procedure.
- Boundary: both readings must use the same DI/interface input, gain, meter mode, passage, and cable path; clipping invalidates the test.

### 3. Pedal Insert Headroom Checker

- Intent: screen an interface/loop send against a pedal maximum input and screen the pedal maximum output against a return nominal level.
- Inputs: send nominal level and unit (dBu, dBV, Vrms); peak above nominal dB; pedal maximum input and unit; pedal maximum output and unit; return nominal and unit; user-required input headroom.
- Model: normalize through Vrms (`dBu = 20 log10(V/0.775)`, `dBV = 20 log10(V/1)`); send peak; input headroom; output-to-return margin.
- Outputs: normalized levels, input headroom pass/stop, output margin, and missing-spec warning.
- Boundary: never connect a speaker output; nominal/maximum specs are not interchangeable; manufacturer limits govern.

### 4. Round-trip Alignment Calculator

- Intent: calculate measured external-hardware/recording delay and the remaining sample offset after an existing compensation value.
- Inputs: sample rate; reference transient sample; returned transient sample; existing compensation samples.
- Model: measured delay `return - reference`; milliseconds `samples/sampleRate × 1000`; remaining offset `measured - existing compensation`.
- Outputs: measured samples/ms, remaining samples/ms, and nudge/compensation direction.
- Boundary: use the same clearly identifiable transient; conversion does not diagnose variable plugin, converter, or operating-system latency.

### 5. Dual-Mic Phase Alignment Planner

- Intent: convert two measured source-to-capsule distances into arrival delay, sample offset, and phase relation at one user-selected frequency.
- Inputs: distance unit; microphone 1 and 2 distances; air temperature °C; sample rate; frequency Hz.
- Model: `c = 331.3 + 0.606T` m/s; delay from distance difference; samples from delay × rate; unwrapped and normalized phase from `360 f delay`.
- Outputs: nearer/farther identity, distance delta, delay, sample offset, wavelength, phase, and delay/move direction.
- Boundary: one-frequency phase is not broadband tone prediction; reflections, capsule acoustic centers, polarity, and room response require measurement.

### Tool-level search intent, validation, fixtures, and workflow

| Tool / URL | Representative queries | Units and validation | Fixture coverage | Existing relationship / next workflow |
|---|---|---|---|---|
| DI Input Loading Checker — `/tools/di-input-loading-checker.html` | “DI input impedance guitar,” “passive pickup loading calculator,” “DI thru parallel impedance” | Ω and kΩ; all resistances and entered ratio must be finite and >0; optional parallel input may be blank | DI-only, equal parallel loads, ratio boundary, retained voltage/loss, zero/negative/blank rejection | Existing Potentiometer Value Selector links in; result links to it for passive-load context, then Reamp Level Match or the guide |
| Reamp Level Match Planner — `/tools/reamp-level-match-planner.html` | “match reamp level to guitar,” “reamp loopback dBFS,” “reamp box output calibration” | dBFS ≤0, finite trim, tolerance ≥0; identical comparison path required | raise, lower, within tolerance, trim arithmetic, >0 dBFS and negative-tolerance rejection | Links to DI Loading, Round-Trip Alignment, and existing Ground Hum Diagnostic |
| Pedal Insert Headroom Checker — `/tools/pedal-insert-headroom-checker.html` | “line level into guitar pedal,” “effects loop pedal headroom,” “dBu dBV pedal input” | dBu/dBV/Vrms conversion; Vrms >0; peak and required margin ≥0; all maximum specs required | 0 dBu, mixed Vrms/dBV, pass boundary, invalid unit, zero Vrms, negative peak | Links to DI Loading, Level & Latency Reference, and existing Ground Hum Diagnostic |
| Round-Trip Alignment Calculator — `/tools/round-trip-alignment-calculator.html` | “measure external hardware latency,” “samples to ms track alignment,” “reamp latency compensation” | Hz and samples; rate >0; positions/compensation ≥0; return cannot precede reference | 48 kHz exact 10 ms, 44.1 kHz aligned boundary, over-compensation direction, negative/contradictory rejection | Links to Reamp Level, Dual-Mic Alignment, and existing Before-and-After Setup Card for preserved comparison evidence |
| Dual-Mic Phase Alignment Planner — `/tools/dual-mic-phase-alignment-planner.html` | “guitar cab two mic phase calculator,” “mic distance to samples,” “phase degrees from delay” | cm/in, °C, Hz; distances ≥0; temperature −50…60; sample rate/frequency >0 | cm, imperial equal-distance boundary, temperature speed, sample/phase outputs, unit/range/zero rejection | Links to Round-Trip Alignment, recording guide, and existing Pickup Phase Troubleshooter to separate acoustic arrival from electrical pickup phase |

Each Tool has a dynamic output whose numeric result changes when its principal measurement changes. Placeholders demonstrate a valid format but are not target recommendations. Print is intentionally omitted because none of these transient calculations needs a calibrated or shop-form print workflow; Copy and Reset are available on every Tool.

## Source and competitor evidence

Primary/official method sources:

- [Radial JCR Reamp manual](https://www.radialeng.com/wp-content/uploads/2018/04/JCReamp-Manual.pdf) — balanced line input, variable instrument output, and level workflow.
- [Radial J48 manual](https://www.radialeng.com/wp-content/uploads/2018/03/manual-j48.pdf) — active DI input/headroom context.
- [Shure Microphone Techniques for Recording](https://www.shure.com/damfiles/default/global/documents/publications/en/performance-production/microphone_techniques_for_recording_english.pdf-bb0469316afdb6118691d2f3f5e3ff01.pdf) and [SM57 user guide](https://www.shure.com/en-US/docs/guide/sm57) — microphone distance and placement practice.
- [Ableton: using external audio effects](https://help.ableton.com/hc/en-us/articles/360005113200-Using-external-audio-effects) and [How latency works](https://help.ableton.com/hc/en-us/articles/360010545559-How-Latency-Works) — external routing and latency boundaries.
- [Apple Logic Pro I/O plug-in ping](https://support.apple.com/en-lamr/guide/logicpro/lgcef2d8c7d2/mac) — measured round-trip compensation workflow.
- [Rohde & Schwarz dB calculator note](https://cdn.rohde-schwarz.com.cn/pws/dl_downloads/dl_application/application_notes/1gp77/1GP77_8e_dB_Calculator.pdf) — logarithmic voltage-level conversion.

Demand samples:

- [Objective reamp-output matching question](https://www.reddit.com/r/audioengineering/comments/gkh1lt/) and [reamp level discussion](https://www.reddit.com/r/audioengineering/comments/sq9bkj/).
- [External-hardware latency measurement question](https://www.reddit.com/r/audioengineering/comments/kmckvu/).

Representative competition and rejection evidence:

- [LuthierCalc pickup impedance](https://luthiercalc.com/en/pickup-impedance) and [CMUSE delay compensation](https://www.cmuse.org/delay-compensation-calculator/) cover individual calculations, not the full selected workflow.
- [faGuitarAlign](https://www.forward-audio.com/products/plugins/faguitaralign) is a paid alignment plug-in, not a transparent measurement planner.
- [Sound Certified speaker-ohms calculator](https://soundcertified.com/speaker-ohms-calculator/), [Starlight speaker impedance](https://starlighttools.org/studio/speaker-impedance-calculator), [DIYAudioAndVideo box designer](https://www.diyaudioandvideo.com/Calculator/SpeakerBoxVolume/), and [Fender speaker wiring guidance](https://support.fender.com/hc/en-gb/articles/42508019902875-Speaker-Wiring-and-Impedance-Explained) demonstrate the amp/cab crowding and model-specific safety problem.
- [MIDI Map](https://midimap.app/), [MIDI Rover Map Studio](https://www.midirover.com/tools/midi-map-studio/), [Korg TRS-MIDI types](https://support.korg.co.uk/en-US/understanding-trs-midi-adapters-778911), and [Mission expression-pedal guide](https://missionengineering.com/understanding-expression-pedals/) show both demand and direct competition in pedal control.
- [SonaVyx browser audio tools](https://sonavyx.com/en/tools) and [Fiume browser audio tools](https://fiume.app/) occupy the browser-diagnostic bundle.
- [D’Addario bass scale/winding-length guide](https://support.daddario.com/hc/en-us/articles/4402235053460-What-are-the-scale-lengths-for-your-bass-strings) supports a useful single buying check, not a four-Tool cluster.
- [Rick Molloy monopole mobility calculator](https://rickmolloyguitars.com/lab/tools/monopole_mobility/index.html) and [Iulius bridge forces calculator](https://www.iuliusguitars.com/bridge-forces/) occupy the acoustic-top specialist gap.

## Implementation scope

The GO authorizes five Tool pages, one Recording & Reamping hub, one measurement guide, one audio level/latency reference, shared pure calculation logic, fixtures, navigation/home/workflow links, and generated sitemap/index updates. It does not authorize amplifier repair, powered-device disassembly, a recording upload feature, product endorsements, or a universal sound-quality verdict.

## Implemented result and QA

- Added hub: `/categories/recording.html`.
- Added Tools: `/tools/di-input-loading-checker.html`, `/tools/reamp-level-match-planner.html`, `/tools/pedal-insert-headroom-checker.html`, `/tools/round-trip-alignment-calculator.html`, and `/tools/dual-mic-phase-alignment-planner.html`.
- Added guide/reference: `/guides/recording-chain-measurement.html` and `/reference/recording-level-latency.html`.
- Shared logic: `scripts/assets/recording.js`, generated as `/assets/recording.js`; UI rendering remains in the shared `scripts/assets/app.js` path.
- Common CSS was not changed. Existing desktop two-column fields, mobile single-column layout, result-follow-up spacing, table containment, numeric wrapping, and print isolation were reused.
- Explicit workflows connect every new Tool to two cluster steps plus a meaningful existing Tool or guide/reference. The existing Potentiometer Value Selector now links to DI Input Loading so the new cluster has a semantic inbound path beyond its hub.
- Fixtures: 44 recording assertions, including normal, alternative, parallel, dBu/dBV/Vrms, centimetre/inch, boundary, aligned, invalid, negative, contradictory, range, and unsupported-unit cases. Existing geometry 65, pickup-fit 15, and control-fit 33 assertions remain green.
- Static QA: build 95 public HTML / 55 Tools; title, description, canonical, one H1, Open Graph, JSON-LD, GA4, email, domain, imports/JavaScript, links, orphans, sitemap, robots, explicit workflows, and root/site mirrors pass with 0 failures. Sitemap has 94 URLs because 404 is excluded.
- Content audit: 95 Sufficient; Thin 0, Needs 0, duplicate-risk 0, functionally incomplete 0.
- Browser QA: all eight new pages at 1440, 1280, 1024, 900, 768, 600, 480, and 390 pixels — 64 states. Bounds failures 0, header/H1 overlaps 0, horizontal page overflows 0, table overflows 0, console warnings/errors 0.
- Functional browser QA: all five Tools generated real results, changed Copy state, reset to Ready for measurements, and reran. Print is intentionally absent because none of the five results is a calibrated template or shop record.
- Regression browser QA: home at 1440/390 including mobile menu expansion; existing Potentiometer Value Selector at 1440/390; Fretboard Radius Matcher result at 390. Overflow/console failures 0; the radius result table-to-heading gap remains 24 px.
- Evidence: `research/aggressive-workflow-qa-2026-08-26/browser-matrix.json` and 64 new-page plus 5 regression screenshots in the same directory.
- Final generated inventory: 95 public HTML, 55 Tools, 9 hubs, 13 guides, 9 references, 4 comparisons, 5 basic pages, and 94 sitemap URLs.
