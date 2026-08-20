# Existing-area search growth review — 2026-08-20

## Decision

**NO ACTION — Observation maintenance.**

No existing page had enough site-specific search or behavior evidence to justify changing production wording, metadata, Tool behavior, navigation, or content. Current external demand is visible for neck-relief measurement and string-tension calculation, but those pages already align with their primary intent and face strong established competition. Authenticated GSC and GA4 were not available, so the review did not turn public SERP presence or a handful of current community questions into inferred impressions, CTR, ranking, or user behavior.

Production HTML, CSS, JavaScript, generator code, metadata, navigation, sitemap membership, analytics configuration, footer, and user-managed badges were unchanged.

## Repository state

- Repository: `https://github.com/canghun13/guitarsetuplab`.
- Branch: `main`.
- Start local HEAD: `a96aa15010193adc8368a9538dfb8ea7bab65210`.
- Start local `origin/main`: `a96aa15010193adc8368a9538dfb8ea7bab65210`.
- Start actual remote main from `git ls-remote origin refs/heads/main`: `3c929f4c731bc00ea292822139892a1455b65df1`.
- The working tree was clean and local was 8 commits behind. `git fetch origin main` updated `origin/main` to the advertised hash, and `git pull --ff-only origin main` safely synchronized local `main`.
- Review start commit after synchronization: `3c929f4c731bc00ea292822139892a1455b65df1`.
- Existing user-managed Boost Domain Rating and Sell With Boost badge block was not edited.

## Current inventory

- Public HTML: 87.
- Interactive Tools: 50.
- Hubs: 8.
- Guides: 12.
- References: 8.
- Comparisons: 4.
- Basic pages: 5.
- Sitemap URLs: 86; `404.html` remains excluded.

## Recent work and excluded directions

The review respected the latest repository state rather than the older 45-Tool inventory. It did not reopen recently completed or rejected work:

- Pickup Fit & Spacing and Control Hardware Fit & Layout are already released and production-verified.
- Explicit three-target workflow links are already enforced for all 50 Tools.
- Shared form alignment, mobile wrapping, header spacing, panel containment, result-follow-up spacing, and print separation already have dedicated regression evidence.
- Fretwire/Refret remains HOLD; Nut Setup, Acoustic Saddle Compensation, and Humidity were rejected; the 2026-08-20 new-workflow discovery ended NO-GO.
- Tuner and bridge fragments were not reconsidered because the latest research found only two independent new Tool problems in each family after existing-site overlap.

## Analytics availability

### GSC

**Not available in this environment.** Direct navigation to the domain property redirected to the public Search Console introduction page. No authenticated property, performance report, sitemap report, coverage report, or URL inspection result was available.

No clicks, impressions, CTR, average position, query-to-page mapping, discovered/crawled/indexed status, or 28-day comparison was inferred.

### GA4

**Not available in this environment.** GA4 redirected to Google sign-in. No property, Organic Search report, landing-page sessions, engaged sessions, engagement time, transitions, or traffic-quality evidence was available.

No direct or QA traffic was treated as real user demand.

### Repository data

No current GSC or GA4 export or authenticated summary exists in `research/` or the latest handover. Earlier records only state that both products were unavailable. Therefore the confidence of page-specific growth prioritization is **low-to-moderate**: external demand and page quality can be observed, but site-specific opportunity cannot.

## SERP and production observations

The review sampled current searches for:

- `guitar string tension formula calculate string tension`;
- `guitar setup documentation measurement sheet setup record`;
- `how to measure guitar neck relief capo feeler gauge`;
- `luthier geometry chord sagitta fretboard radius measurement`;
- exact-title and exact-URL variants for the corresponding Guitar Setup Lab pages.

Findings:

- Neck-relief intent is durable and current. The SERP contains strong manufacturer and specialist instructions, including StewMac's current capo/string/feeler-gauge method, plus current user questions about fret span and confusing action with relief.
- String-tension intent is also durable, but the SERP is crowded with interactive calculators that accept unit weight, scale, frequency, tuning, and sometimes custom strings. Guitar Setup Lab's narrower D'Addario XL boundary is safer and more reproducible, but not an obvious metadata-only growth win.
- Setup-documentation searches were weak and inconsistent in the sampled results. No stable query family or competitor pattern justified rewriting the current Guide or printable measurement workflow.
- Luthier-geometry wording is broad and ambiguous. Results mix general geometry, instrument construction, and unrelated uses of `string tension`; there was no clear single search intent for the current definitions Reference.
- A sampled `site:guitarsetuplab.com` search surfaced the home page but not the exact candidate pages. Exact-URL searches returned no candidate results. This is an observation, not a coverage diagnosis: GSC was unavailable, the site is young, and public search samples are incomplete.
- Production home, `robots.txt`, `sitemap.xml`, the four representative candidate pages, and their canonicals returned HTTP 200. `robots.txt` allows crawling and names the sitemap. The production sitemap contains 86 URLs and includes every sampled candidate plus the current Controls hub.

Primary/current supporting pages used in the comparison:

- [StewMac — How to Measure Neck Relief](https://www.stewmac.com/video-and-ideas/online-resources/neck-building-and-repair-and-setup/neck-relief-gauge-instructions/)
- [D'Addario — String Tension Pro](https://www.daddario.com/pages/string-tension-pro-string-tension-calculator)
- [Omni Calculator — Guitar String Tension Calculator](https://www.omnicalculator.com/other/guitar-string-tension)

## Existing-area candidates

Scoring uses Impact /35, Evidence /30, Efficiency /20, and Risk /15, where a high Risk score means lower implementation risk.

| Candidate existing page/workflow | Signal and search intent | Current weakness after reading the page | Impact | Evidence | Efficiency | Risk | Total | Decision |
| --- | --- | --- | ---: | ---: | ---: | ---: | ---: | --- |
| `guides/measure-neck-relief.html` + `tools/neck-relief-measurement.html` | Strong current `how to measure neck relief`, capo, feeler gauge, measurement fret/span intent | Possible extra nuance about measuring both outer strings and distinguishing the chosen span, but title/H1, method, example, interpretation, limitations, safety, and next workflow are already aligned | 26 | 17 | 18 | 13 | **74** | HOLD; best candidate, but no site-specific impression/position/CTR signal and no material defect |
| `reference/string-tension-formula.html` + `tools/string-tension-matcher.html` | Strong formula/calculator/tuning/gauge intent; substantial interactive competition | Tool deliberately supports a sourced subset rather than guessing unit weight. Expanding input breadth would require new manufacturer data/fixtures; title/meta/content already state formula and boundary | 27 | 16 | 14 | 11 | **68** | HOLD; external demand alone does not justify weakening the sourced-data boundary |
| `guides/document-guitar-setup.html` + `tools/setup-measurement-sheet.html` | Possible documentation, worksheet, before/after, shop-record intent | Current Guide already separates baseline, symptom, observation, work, final test, and links to the printable record; sampled SERP did not establish a meaningful query cluster | 21 | 9 | 17 | 14 | **61** | HOLD; evidence too weak |
| `guides/setup-order.html` + `tools/guitar-setup-wizard.html` | Broad beginner setup-order intent and recurring dependency questions | Sequence, worked example, bounded interpretation, and explicit next steps are already present; broad SERP competition makes a wording-only change uncertain | 23 | 10 | 15 | 12 | **60** | HOLD; no measured mismatch or UX defect |
| Index/discovery technical correction | Sampled engine showed home but not exact candidate URLs | No production defect found: HTTP 200, canonical, robots, sitemap, URL membership, metadata, internal links, and static checks are healthy | 29 | 12 | 10 | 6 | **57** | NO ACTION; requires authenticated GSC coverage/inspection evidence before code changes |
| `reference/geometry-measurement.html` and linked geometry Tools | Niche chord/sagitta/datum/projection/calibration intent | Reference already defines the terms and links to radius, neck-angle, and print workflows; sampled query intent is too diffuse for a safe title/H1 rewrite | 18 | 8 | 16 | 12 | **54** | HOLD; intent and demand are unproven |

## Why the highest-scoring candidate was not changed

Neck relief is the strongest external topic, but the current Guide already satisfies the core query with an ordered capo/string/feeler-gauge method, records the measurement fret and held fret, warns that one number does not authorize a truss-rod change, gives a worked example, and routes to the measurement helper and Fret Buzz Diagnostic. The helper preserves the raw value, converts units, interprets symptom context, and refuses to prescribe a truss-rod turn.

Adding another paragraph, FAQ, or title variant without GSC query/page evidence would be a speculative content change against a page whose primary intent is already exact. The same reasoning applies more strongly to the lower-scoring candidates.

## Technical observation: build-before-test contract

Running `scripts/test.mjs` directly against the clean checkout reported `index.html: root differs beyond user-managed directory badge`. Read-only comparison found only a trailing two-byte CRLF after the user-managed badge block; all semantic root content matched `site/index.html` after removing the approved block.

This is not a production or search defect. The repository workflow runs `npm run build` before `npm test`; build preserves the approved badge block and normalizes the end of the generated root file, after which the static suite passes. The existing 2026-08-20 research had already recorded the same end-of-file normalization and deliberately avoided committing a cosmetic-only root change.

No production file or test was changed for this observation. A workflow-equivalent build and full test were instead run in a temporary archive of the current commit, leaving the working tree untouched.

## QA

- Temporary workflow-equivalent build: PASS — 87 public HTML pages and 50 Tools.
- Static/SEO/link/module/root-site checks after build: PASS, 0 failures.
- Broken links: 0.
- Orphan pages: 0.
- Geometry fixtures: 65 PASS.
- Pickup-fit fixtures: 15 PASS.
- Control-fit fixtures: 33 PASS.
- Content audit: 87 Sufficient; Needs 0, Thin 0, duplicate-risk 0, functionally incomplete 0.
- Production HTTP/canonical sample: home plus four candidate pages PASS.
- Production robots/sitemap: HTTP 200; allow rule and sitemap declaration present; 86 sitemap URLs.
- Changed-page browser QA: not applicable because no production page or shared asset changed.

## Production

Production changes: **None**.

No implementation, visual, functional, metadata, internal-link, or deployment content change was justified. The documentation-only closeout will still run the repository Quality and Pages workflows; those runs are recorded in the handover after push.

## Observation and revisit conditions

Reopen an existing-area growth change only when at least one of these conditions is observed:

1. Authenticated GSC shows a page/query pair with meaningful accumulated impressions, approximately position 5–20, growing demand, or a clear CTR mismatch.
2. Authenticated GSC coverage or URL inspection shows a sitemap, discovery, crawl, canonical, or indexing problem for URLs that currently return 200 and are listed correctly.
3. Authenticated GA4 shows a repeatable organic landing-page or workflow drop-off after excluding QA/direct contamination.
4. A reproducible Tool result-interpretation, validation, navigation, print, responsive, or console defect appears.
5. A stable long-tail family exposes a specific missing measurement method or result interpretation on an otherwise promising existing page.

Until one of those triggers exists, preserve current titles, metadata, page intent, Tool logic, explicit workflows, and production layout.
