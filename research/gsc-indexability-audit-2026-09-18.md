# Targeted GSC crawl and indexability audit

Date: 2026-09-18

Repository: `https://github.com/canghun13/guitarsetuplab`

Branch: `main`
Start commit after synchronization: `9ec7e0cbda46d777de0d0be8663e57823dc54591`

## Decision

**NO-CHANGE — No site-side indexability defect found**

The 15 recently launched Recording & Reamping and Multimeter Diagnostic Bench URLs have no reproduced target-specific crawl or indexability defect. They return the same successful HTML to a normal browser user agent and Googlebot Smartphone, are allowed by robots, have no page- or header-level noindex directive, use one correct absolute HTTPS apex self-canonical, appear once in both repository and production sitemaps, have static inbound anchors, sit at home click depth 1 or 2, contain their core content in raw HTML, render without JavaScript failure, and match the deployed repository output.

The supplied GSC symptom—82 URLs in “Discovered - currently not indexed,” including all 8 Recording URLs and all 7 Multimeter URLs with effectively no final crawl date—therefore remains an observation about crawl scheduling or index selection, not proof of a site defect.

Two site-wide host/protocol conditions were reproduced and classified separately as Type 3: HTTP apex serves the same page with status 200 instead of redirecting to HTTPS, and `https://www.guitarsetuplab.com/` fails certificate hostname validation. Both affect target and control URLs equally. All sitemap, canonical, navigation, and target URLs use the working HTTPS apex host, and Googlebot received the same 200 HTTPS apex HTML as the browser user agent. These conditions do not explain why only the new cluster URLs remain un-crawled and are not suitable for a speculative content or generator change.

## Repository synchronization

- Start local HEAD: `cc3158ecf19e3761ec039882601731feb6430a8e`.
- Start cached `origin/main`: `cc3158ecf19e3761ec039882601731feb6430a8e`.
- Actual remote main from `git ls-remote origin refs/heads/main`: `9ec7e0cbda46d777de0d0be8663e57823dc54591`.
- `git fetch origin main` updated `origin/main` to the same advertised hash.
- The working tree was clean and two commits behind, so `git pull --ff-only origin main` safely fast-forwarded to `9ec7e0c`.
- No existing uncommitted work was present or overwritten.
- Current inventory: 102 public HTML pages, 59 Tools, 10 hubs, 14 guides, 10 references, 4 comparisons, 5 basic pages, and 101 sitemap URLs. The custom 404 is the one public HTML page intentionally excluded from the sitemap.

## GSC symptom and audit boundary

This audit accepts the supplied recent GSC counts as the symptom under investigation; it does not infer additional GSC facts or manipulate Search Console. The narrow question is whether the 15 recent URLs differ technically from known older controls. It does not authorize title rewriting, content expansion, bulk link insertion, sitemap restructuring, URL changes, cluster creation, or crawl bait.

## Target URL set

### Recording & Reamping — 8

1. `/categories/recording.html`
2. `/tools/di-input-loading-checker.html`
3. `/tools/reamp-level-match-planner.html`
4. `/tools/pedal-insert-headroom-checker.html`
5. `/tools/round-trip-alignment-calculator.html`
6. `/tools/dual-mic-phase-alignment-planner.html`
7. `/guides/recording-chain-measurement.html`
8. `/reference/recording-level-latency.html`

### Multimeter Diagnostic Bench — 7

1. `/categories/testing.html`
2. `/tools/pickup-dcr-analyzer.html`
3. `/tools/potentiometer-taper-analyzer.html`
4. `/tools/selector-contact-mapper.html`
5. `/tools/cable-ground-continuity-checker.html`
6. `/guides/multimeter-guitar-electronics.html`
7. `/reference/resistance-continuity-reference.html`

## Control URL set — 10

The controls mix home, older Tools, Guide, References, and a hub; several share the exact templates used by the targets.

1. `/`
2. `/tools/fret-buzz-diagnostic.html`
3. `/tools/intonation-problem-diagnostic.html`
4. `/tools/string-tension-matcher.html`
5. `/tools/pickup-route-clearance-checker.html`
6. `/tools/potentiometer-value-selector.html`
7. `/guides/document-guitar-setup.html`
8. `/reference/geometry-measurement.html`
9. `/reference/string-tension-formula.html`
10. `/categories/measurement.html`

## HTTP and Googlebot comparison

Every target and control was fetched from production with a normal Chromium-style user agent and Googlebot Smartphone. For all 25 URLs:

- status was 200 for both agents;
- the final URL was the requested HTTPS apex URL with no redirect;
- content type was `text/html; charset=utf-8`;
- server was `GitHub.com` and the observed cache policy was `max-age=600`;
- browser and Googlebot normalized body hashes were identical;
- no challenge, interstitial, bot-only response, or `X-Robots-Tag` appeared;
- the response did not match the distinct custom-404 baseline, which returned status 404 and a 2,821-byte body.

Response sizes below are decoded HTML byte counts from the browser-agent fetch. `Index controls` means robots, meta/X-Robots, canonical, and sitemap all passed. `Render 3w` means the page was also rendered at 1440, 768, and 390 CSS pixels.

| Group | URL | Browser / bot | Bytes | Index controls | Static inbound | Depth | Raw main words | Render | Nearest 5-gram similarity | Overall |
|---|---|---:|---:|---|---:|---:|---:|---|---:|---|
| target | `/categories/recording.html` | 200 / 200 | 5,630 | PASS | 101 | 1 | 307 | PASS 3w | 0.18 | Type 4 |
| target | `/tools/di-input-loading-checker.html` | 200 / 200 | 9,512 | PASS | 5 | 2 | 766 | PASS 3w | 0.41 | Type 4 |
| target | `/tools/reamp-level-match-planner.html` | 200 / 200 | 9,357 | PASS | 4 | 2 | 749 | raw/static PASS | 0.42 | Type 4 |
| target | `/tools/pedal-insert-headroom-checker.html` | 200 / 200 | 10,906 | PASS | 3 | 2 | 903 | raw/static PASS | 0.40 | Type 4 |
| target | `/tools/round-trip-alignment-calculator.html` | 200 / 200 | 9,303 | PASS | 5 | 2 | 720 | PASS 3w | 0.42 | Type 4 |
| target | `/tools/dual-mic-phase-alignment-planner.html` | 200 / 200 | 9,853 | PASS | 3 | 2 | 775 | raw/static PASS | 0.42 | Type 4 |
| target | `/guides/recording-chain-measurement.html` | 200 / 200 | 6,979 | PASS | 4 | 1 | 491 | PASS 3w | 0.24 | Type 4 |
| target | `/reference/recording-level-latency.html` | 200 / 200 | 6,576 | PASS | 2 | 1 | 451 | raw/static PASS | 0.21 | Type 4 |
| target | `/categories/testing.html` | 200 / 200 | 5,451 | PASS | 101 | 1 | 296 | PASS 3w | 0.18 | Type 4 |
| target | `/tools/pickup-dcr-analyzer.html` | 200 / 200 | 10,158 | PASS | 5 | 2 | 820 | PASS 3w | 0.38 | Type 4 |
| target | `/tools/potentiometer-taper-analyzer.html` | 200 / 200 | 9,462 | PASS | 5 | 2 | 743 | raw/static PASS | 0.38 | Type 4 |
| target | `/tools/selector-contact-mapper.html` | 200 / 200 | 8,969 | PASS | 3 | 2 | 701 | PASS 3w | 0.37 | Type 4 |
| target | `/tools/cable-ground-continuity-checker.html` | 200 / 200 | 11,272 | PASS | 4 | 2 | 903 | raw/static PASS | 0.38 | Type 4 |
| target | `/guides/multimeter-guitar-electronics.html` | 200 / 200 | 7,001 | PASS | 4 | 1 | 478 | raw/static PASS | 0.25 | Type 4 |
| target | `/reference/resistance-continuity-reference.html` | 200 / 200 | 7,066 | PASS | 3 | 1 | 485 | PASS 3w | 0.20 | Type 4 |
| control | `/` | 200 / 200 | 12,630 | PASS | 101 | 0 | 708 | PASS 3w | n/a | Type 4 |
| control | `/tools/fret-buzz-diagnostic.html` | 200 / 200 | 10,900 | PASS | 4 | 1 | 850 | PASS 3w | n/a | Type 4 |
| control | `/tools/intonation-problem-diagnostic.html` | 200 / 200 | 9,615 | PASS | 4 | 1 | 742 | raw/static PASS | n/a | Type 4 |
| control | `/tools/string-tension-matcher.html` | 200 / 200 | 9,813 | PASS | 6 | 2 | 769 | raw/static PASS | n/a | Type 4 |
| control | `/tools/pickup-route-clearance-checker.html` | 200 / 200 | 10,039 | PASS | 3 | 2 | 781 | raw/static PASS | n/a | Type 4 |
| control | `/tools/potentiometer-value-selector.html` | 200 / 200 | 10,347 | PASS | 6 | 2 | 782 | raw/static PASS | n/a | Type 4 |
| control | `/guides/document-guitar-setup.html` | 200 / 200 | 5,802 | PASS | 1 | 1 | 352 | PASS 3w | n/a | Type 4 |
| control | `/reference/geometry-measurement.html` | 200 / 200 | 6,121 | PASS | 10 | 1 | 388 | PASS 3w | n/a | Type 4 |
| control | `/reference/string-tension-formula.html` | 200 / 200 | 5,764 | PASS | 1 | 1 | 358 | raw/static PASS | n/a | Type 4 |
| control | `/categories/measurement.html` | 200 / 200 | 5,874 | PASS | 101 | 1 | 307 | raw/static PASS | n/a | Type 4 |

## Robots, meta directives, and headers

Production `robots.txt` returned 200 as `text/plain; charset=utf-8`:

```text
User-agent: *
Allow: /
Sitemap: https://guitarsetuplab.com/sitemap.xml
```

Programmatic path matching found no disallow rule for any target. None of the 25 pages has a `robots` or `googlebot` meta directive, and neither browser nor Googlebot responses include `X-Robots-Tag`. No `noindex`, `nofollow`, `none`, or `unavailable_after` condition was found.

## Canonical and URL consistency

- All 25 pages have exactly one canonical.
- Every canonical is the absolute HTTPS apex URL matching its own production path exactly.
- Sitemap URL, canonical URL, static href path, production final URL, and repository file path agree for all 15 targets.
- No `.html` omission, trailing-slash mix, wrong host, wrong protocol, uppercase path, encoded-character mismatch, or duplicate canonical was found.
- Direct HTTPS apex requests had no redirect anomaly and ended on the requested URL.

## Sitemap

- Repository `sitemap.xml`: HTTP-independent local parse valid, 101 `<loc>` values, 101 unique.
- Production `sitemap.xml`: 200, XML envelope valid, 101 `<loc>` values, 101 unique.
- All 15 targets and all 10 controls are present exactly once using HTTPS apex URLs.
- Repository contains 102 public HTML pages. The 101 sitemap URLs correspond to every indexable public page; the intentional custom `404.html` exclusion explains the difference.
- No wrong protocol, host, stale slug, duplicate, or target omission was found.

## Static inbound discovery and crawl depth

The graph uses only initial raw-HTML `<a href>` anchors; it does not count links injected after JavaScript execution.

- Both hubs are linked in the global static navigation and have 101 inbound source pages; they are depth 1 from home.
- Recording Tools have 3–5 static inbound links and depth 2. Sources include the Recording hub plus guide/reference or adjacent workflow Tools.
- Multimeter Tools have 3–5 static inbound links and depth 2. Sources include the Testing hub plus guide/reference or adjacent workflow Tools.
- Recording Guide/Reference have 4 and 2 inbound links respectively and depth 1.
- Multimeter Guide/Reference have 4 and 3 inbound links respectively and depth 1.
- The controls range from 1 to 101 inbound links and depth 0–2. Targets are not structurally deeper and are not orphaned.

Representative target source paths include:

- DI Loading: Recording hub, recording guide, Pedal Insert, Potentiometer Value Selector, Reamp Level.
- Round-Trip Alignment: Recording hub, recording guide, recording reference, Dual-Mic, Reamp Level.
- Pickup DCR: Testing hub, multimeter guide, resistance reference, Cable/Ground, Pot Taper.
- Selector Mapper: Testing hub, multimeter guide, Pot Taper.

No target depends on JavaScript execution for discovery.

## Raw HTML and content depth

All targets contain the H1, introduction, form inputs where applicable, initial result ticket, explanatory sections, methods, limitations, safety/stop conditions, and related workflow links in raw HTML. They are not SPA shells.

- Target raw main-content words: minimum 296, average 639.2, maximum 903.
- Control raw main-content words: minimum 307, average 603.7, maximum 850.
- Target raw bodies range from 5,451 to 11,282 repository bytes; control bodies occupy the same template/size range.
- The target group is not unusually small relative to controls.

## Rendered DOM and responsive browser audit

Eight representative targets and four controls were loaded from production at 1440, 768, and 390 CSS pixels: 36 rendered states.

Representative targets:

- Recording hub, DI Loading, Round-Trip Alignment, recording guide.
- Testing hub, Pickup DCR, Selector Mapper, resistance/continuity reference.

Representative controls:

- Home, Fret Buzz Diagnostic, Document Guitar Setup guide, Geometry Measurement reference.

Results:

- the correct unique H1 and core main content appeared in every state;
- main text length remained identical across all three widths for each page;
- Tools retained visible form and initial result panels;
- header/H1 overlaps: 0;
- horizontal page overflows: 0;
- console errors/warnings: 0;
- the 390-pixel Recording hub and home mobile menu expanded, exposed the Recording route, and reported `aria-expanded="true"`;
- no critical content disappeared, depended on lazy loading, or differed between target and control templates.

## JavaScript and module dependencies

The production entry module and every direct import used by the shared Tool application returned 200 with `application/javascript; charset=utf-8`, no `X-Robots-Tag`, and content matching the repository:

- `/assets/app.js`
- `/assets/calculations.js`
- `/assets/geometry/index.js`
- `/assets/pickup-fit.js`
- `/assets/control-fit.js`
- `/assets/recording.js`
- `/assets/electrical-test.js`

The six recursive geometry modules also returned 200 with the correct MIME type and matched the repository: `core.js`, `frets.js`, `spacing.js`, `radius.js`, `multiscale.js`, and `angles.js`. Browser console checks found no import, MIME, syntax, CSP, runtime, or 404 failure.

## JSON-LD, title, description, and H1

- All 25 JSON-LD blocks parsed successfully.
- Each has a non-empty name and type and the exact expected HTTPS apex page URL.
- No duplicate or malformed `@id` was present.
- All 25 titles are unique.
- All 25 meta descriptions are present and unique.
- Every page has exactly one non-empty, page-specific H1.
- No placeholder brand, wrong domain, or accidental duplicate title/H1 was found.

## Duplicate and near-duplicate check

Common navigation, footer, scripts, and styles were excluded. Main-content five-word shingles were compared across targets and controls.

- Highest target nearest-neighbor similarity: 0.42.
- The highest pair was Reamp Level Match Planner versus Round-Trip Alignment Calculator, reflecting their shared Tool explanation structure rather than copied intent or calculation.
- The two hubs scored 0.18 against one another.
- Recording and Multimeter guides scored 0.24–0.25 against the older documentation guide.
- References scored 0.20–0.21 against older reference controls.

No target approaches a template-only or near-duplicate threshold. The current content audit independently reports 102 Sufficient, Thin 0, Needs 0, duplicate-risk 0, and functionally incomplete 0.

## Production versus repository output

- All 15 targets and all 9 non-home controls matched their repository deployment files after newline normalization.
- Production home matched root `index.html` exactly. Its expected difference from generated `site/index.html` is the preserved user-managed Boost/Sell badge block defined by the build contract, not a stale deploy.
- Production sitemap matched the 101-URL repository sitemap membership.
- Current remote commit `9ec7e0c` Quality run `33404227052` and Pages run `33404226211` both completed successfully.
- No stale target, missing content, missing module, old sitemap, or recent-cluster-only generator defect was found.

## HTTP, HTTPS, and www variants

Home, DI Loading, Pickup DCR, and the Geometry Reference were sampled:

- `https://guitarsetuplab.com/...`: 200 on the requested canonical URL.
- `http://guitarsetuplab.com/...`: 200 with the same page instead of an HTTPS redirect.
- `https://www.guitarsetuplab.com/...`: TLS hostname validation failed with `ERR_TLS_CERT_ALTNAME_INVALID` before an HTTP response.

These are site-wide Type 3 operational issues, not target-only discovery defects. They are already consistent with the repository's historical `www` certificate handover record. The canonical host remains the working HTTPS apex everywhere visible to crawlers. This audit does not introduce a code workaround for DNS/TLS or rewrite otherwise correct target pages.

## QA

- Static suite: PASS, 102 HTML pages, 59 Tools, metadata/assets/structured data/sitemap/links/orphans/JS checks, 0 failures.
- Broken links: 0.
- Orphans: 0.
- Geometry fixtures: 65 PASS.
- Pickup-fit fixtures: 15 PASS.
- Control-fit fixtures: 33 PASS.
- Recording fixtures: 44 PASS.
- Electrical-test fixtures: 30 PASS.
- Content audit: 102 Sufficient; all failure groups 0.
- Production browser: 36 target/control states at 1440/768/390, all PASS; console errors/warnings 0.
- A local build was not required because no production source or generated output was changed. The current commit's Quality and Pages workflows both passed their build steps, and production/repository equality was checked directly.

## Root-cause assessment

- Type 1 — hard site-side defect: none.
- Type 2 — strong structural disadvantage: none.
- Type 3 — minor/site-wide issue unlikely to explain the crawl delay: HTTP apex does not force HTTPS; `www` TLS hostname mismatch.
- Type 4 — no defect found: all 15 target URLs and all 10 control URLs.

Site-side defect found: **No**.

Exact evidence: target and control groups are equivalent on status, browser/Googlebot body, robots/index directives, canonical, sitemap, static discovery, depth, raw-content availability, render stability, module loading, JSON-LD, metadata uniqueness, and production deployment. The target group is neither deeper nor thinner than the controls and has no cluster-only failure.

## Changes and next state

Production changes: **none**. No title, description, body content, internal link, robots rule, sitemap entry, URL, generator, JavaScript, CSS, structured data, or navigation was changed.

Next state: observe Google crawl scheduling and index selection. Recheck the supplied GSC group in the next weekly review, but do not treat an unchanged count alone as authorization to modify the site. Reopen site-side work only if a specific URL develops a reproducible 4xx/5xx, robots/noindex/canonical/sitemap defect, orphan condition, Googlebot-only response, render/module failure, production mismatch, or target-only structural regression. Handle the HTTP redirect and `www` certificate at the DNS/hosting layer when authenticated administration is available; do not use page-content changes as a workaround.

## Deployment closeout

- Audit documentation commit: `06190ab6459a89190a72b273f0ea500ff5dd411f` (`Document GSC indexability audit`), pushed to `origin/main`.
- Quality checks run [`35293221705`](https://github.com/canghun13/guitarsetuplab/actions/runs/35293221705): completed successfully.
- Pages build and deployment run [`35293221126`](https://github.com/canghun13/guitarsetuplab/actions/runs/35293221126): completed successfully.
- Post-deploy replay: all 15 targets again returned 200 to browser and Googlebot Smartphone, browser/bot bodies were identical, every response matched the repository deployment file, robots and sitemap returned 200, the sitemap retained 101 URLs, and all 15 targets remained present.
- Production HTML/CSS/JavaScript/navigation/sitemap content diff: none. The documentation-only deployment did not change the served site.
- Final handover closeout commit: the commit containing this subsection. After push, verify its own Quality and Pages runs, then fetch and confirm clean local `HEAD == origin/main ==` advertised remote main.
