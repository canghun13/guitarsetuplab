# Whole-site highest-value next-work audit — 2026-08-10

## Repository start state

- Repository: `https://github.com/canghun13/guitarsetuplab`
- Workspace initially contained an empty Git repository and no checkout. The current remote was fetched and `main` was checked out without overwriting user work.
- Branch: `main`
- Start commit: `41446ee4300657ded6ab1471c4ca744ff57c9b3a`
- Start status: clean; local `HEAD` equaled fetched `origin/main`.
- Latest prior release: Pickup Fit & Spacing at implementation commit `f4f38d80aaa96df4521e0882753ab74288ba2f1f`, followed by handover commit `41446ee`.
- Inventory at start: 78 public HTML pages, 45 interactive tools, 7 hubs, 11 guides, 7 references, 3 comparisons, 5 basic pages, and 77 sitemap URLs. `404.html` is intentionally excluded from the sitemap.
- The user-managed `boostdomainrating.com` badge on the root home page was not edited, moved, regenerated, or removed.

## Production state

- `https://guitarsetuplab.com/`: ordinary HTTPS returned `200 OK` from GitHub Pages.
- Apex DNS returned the four GitHub Pages A records `185.199.108.153` through `185.199.111.153`.
- `https://www.guitarsetuplab.com/`: ordinary certificate validation still failed with `SEC_E_WRONG_PRINCIPAL` / curl exit 60.
- The certificate served for `www` had subject `CN=*.github.io`, issuer Let's Encrypt `YR2`, validity 2026-06-05 through 2026-09-03, and SANs for GitHub domains but not `www.guitarsetuplab.com`.
- Ignoring certificate validation only for diagnosis returned `301 Moved Permanently` to `https://guitarsetuplab.com/`. The redirect exists, but the normal HTTPS request remains broken before a browser can trust it.
- HTTP `200`: sitemap, robots, Fit hub, Fret Buzz, Pickup Route Clearance, `style.css`, `app.js`, and `pickup-fit.js`.
- Canonical checks on home, all seven hubs, representative tools, a guide, a reference, and a comparison pointed to the apex HTTPS URL.
- GitHub Actions at the start commit: Quality checks run `31250909365` succeeded; Pages run `31250908870` succeeded.

The `www` failure is real and evidence-backed, but it requires authenticated GitHub Pages/DNS/Cloudflare administration. Production code cannot safely correct a certificate SAN or proxy configuration, so no code workaround was attempted.

## GSC availability and observations

- Availability: **Not available in this session**.
- Direct navigation to the domain property redirected to the public Search Console introduction page, with no authenticated property access.
- No clicks, impressions, CTR, average position, page indexing report, sitemap submission state, or URL-inspection state was inferred.
- Public search checks for the exact new Pickup Fit hub and Pickup Route Clearance title did not return a Guitar Setup Lab result in the sampled engine. This is only a weak discovery observation two days after release, not proof of a Search Console indexing defect.

## GA4 availability and observations

- Availability: **Not available in this session**.
- Direct GA4 navigation reached Google sign-in. No authenticated property or reporting data was available.
- The static suite confirmed the configured GA4 identifier `G-TGT88WMVDG` remains present as required. Sessions, users, landing pages, engagement, and organic behavior were not guessed.

## Technical observations

- Build: 78 public HTML pages and 45 tools.
- Static checks: 0 failures across metadata, canonical, GA4, email, JSON-LD, sitemap, assets, module syntax, root/site mirror, broken links, and orphan pages.
- Geometry fixtures: 65 assertions passed.
- Pickup-fit fixtures: 15 assertions passed.
- Content audit: 78 Sufficient; Needs 0; Thin 0; duplicate-risk 0; incomplete 0.
- The only current HIGH technical issue is the external `www` certificate mismatch. Apex serving, canonical, sitemap, robots, assets, Quality, and Pages were healthy.

## Content observations

Direct samples covered home, all seven hubs, Fret Buzz, String Tension, Ground Hum, Pickup Route Clearance, Fret Position, Repair Quote, Setup Order, String Tension Formula, and the Pot Values comparison.

- Representative pages had task-specific titles/H1s, preparation, input guidance, interpretation, method, examples, limits, stop conditions, and related-workflow sections.
- The content audit measured 78/78 pages as sufficient with no thin, duplicate-risk, or incomplete page.
- No evidence justified a broad metadata rewrite, word-count increase, or another cluster.
- The new Pickup Fit cluster is too recent for a defensible search-signal rewrite.

## Tool quality observations

- Existing static, geometry, and pickup-fit suites passed without loosening fixtures.
- Browser spot checks produced input-dependent results for Ground Hum, Repair Quote, Fret Buzz, and Pickup Route Clearance.
- Repair Quote correctly calculated labor `$150.00`, parts `$12.50`, discount `-$5.00`, tax `$15.75`, total `$173.25`, deposit `-$20.00`, and balance `$153.25` for the entered fixture.
- Pickup Route Clearance returned 1.00 mm per-side/end clearance, 2.00 mm depth clearance, and retained the no-routing boundary for the entered fixture.
- No NaN, Infinity, unsupported-condition leak, or console error appeared in the sampled runs.
- No calculation or diagnostic defect was found that outranked the workflow-link defect.

## UX observations

- Production home was measured at 1440, 1280, 1024, 900, 768, 600, 480, and 390 px: H1/header overlap 0, horizontal overflow 0, and off-screen elements 0.
- Sixteen representative production pages at 1280 px had correct H1/canonical structure, overlap 0, overflow 0, and off-screen elements 0.
- Because common CSS had not changed since the prior 78 × 8 visual release audit, a full-site matrix was not repeated.
- After the selected link-only change, Fret Buzz, Ground Hum, Repair Quote, and Tone Capacitor were checked at all eight required widths: 32 combinations, with overlap 0, horizontal overflow 0, and off-screen elements 0.
- Local dynamic runs confirmed the result panels, long quote output, mobile menu, and workflow content. Browser console errors/warnings: 0.
- Two key screenshots were retained in the session artifact directory rather than committed as repository bulk data.

## Internal-link observations

This audit found a reproducible semantic defect that link-count and orphan checks could not detect:

- Only 19 of 45 tools had an explicit `workflowLinks` entry.
- The remaining 26 tools used an array-order fallback that selected the first three same-category or global setup links, regardless of the actual next task.
- Production Ground Hum linked to Neck Relief, String Action, and Before/After Setup instead of phase/wiring/safe hum diagnosis.
- Production Repair Quote linked to Neck Relief, String Action, and Setup Measurement instead of intake/approval/job-sheet workflow.
- Production Fret Buzz linked to three neighboring diagnostic pages instead of the measurements and record needed after diagnosis.
- The fallback made the graph non-orphaned but contradicted the site's stated symptom → measurement → action/check → record model.

## Candidate work and scoring

Scores use Impact /35, Evidence /30, Efficiency /20, and Risk-maintenance /15. A higher risk-maintenance score means lower regression and maintenance burden.

| Candidate | Impact | Evidence | Efficiency | Risk / maintenance | Total | Decision |
|---|---:|---:|---:|---:|---:|---|
| Replace fallback workflow links with explicit next steps for all 45 tools and make missing/invalid definitions fail the build | 34 | 30 | 19 | 14 | **97** | **GO** |
| Correct the `www` TLS certificate and normal redirect | 27 | 30 | 3 | 4 | **64** | External authenticated operation; no code workaround |
| Rewrite existing page metadata/content for search signals | 20 | 8 | 11 | 9 | **48** | HOLD; GSC/GA4 unavailable and no stable query evidence |
| Expand calculation fixtures beyond the passing geometry and Pickup Fit suites | 18 | 12 | 8 | 10 | **48** | HOLD; no reproduced calculation failure |
| Add another content/tool cluster immediately after Pickup Fit | 14 | 5 | 5 | 5 | **29** | REJECT; no stronger demand evidence and recent cluster still unobserved |

## Final selection

**GO — UX/internal-link improvement.**

The selected work is a single coherent objective: make every tool's result-to-next-action path explicit and enforce that contract during the build. It has direct production evidence, affects the entire 45-tool inventory, improves both user workflow and crawlable contextual linking, requires no speculative analytics interpretation, and leaves tool calculations, metadata, CSS, and the user-managed badge unchanged.

## Implementation

- Added an explicit three-target workflow definition for all 45 tools.
- Replaced misleading fallbacks across diagnostics, measurement, documents, electronics, and string workflows.
- Refined physical-fit and electrical-wiring boundaries so phase/hum/wiring links no longer jump to unrelated setup measurements.
- Added build-time validation that fails on a missing workflow, any count other than three, duplicate targets, self-links, or unknown targets.
- Removed the order-dependent fallback entirely.
- Regenerated root and `site/` mirrors. Twenty-nine tool pages changed because their prior next steps were generic or were deliberately refined; the other sixteen already had suitable explicit paths.

## QA after implementation

- Build: PASS — 78 public HTML, 45 tools.
- Static/SEO/link/module/root-site checks: PASS — 0 failures.
- Broken links: 0.
- Orphan pages: 0.
- Geometry fixtures: PASS — 65 assertions.
- Pickup-fit fixtures: PASS — 15 assertions.
- Content audit: PASS — 78 Sufficient, all failure gates 0.
- Browser functional: Ground Hum, Repair Quote, Fret Buzz, and Pickup Route Clearance PASS.
- Changed-page responsive: 4 pages × 8 widths = 32 combinations PASS.
- Console errors/warnings: 0.
- User-managed root badge: preserved by the existing build contract and static checks.

## Observation and next trigger

After deployment, do not add another cluster by default. Reopen work when one of these occurs:

1. authenticated GitHub Pages/DNS/Cloudflare access is available to reissue a certificate covering `www.guitarsetuplab.com` and verify the normal redirect;
2. authenticated GSC shows sufficient impressions, a position 5–30 query, CTR weakness, sitemap/index coverage trouble, or discovery/index evidence for the seven Pickup Fit URLs;
3. authenticated GA4 shows a repeatable landing-page or workflow drop-off rather than a few low-volume visits;
4. a reproducible calculation, diagnostic, print, or responsive defect appears;
5. a new cluster demonstrates demand, a competition gap, four distinct interactive tasks, primary sources, and lower maintenance risk than improving the existing 45 tools.
