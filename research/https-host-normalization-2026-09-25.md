# HTTPS and canonical-host normalization audit

Date: 2026-09-25

Repository: `https://github.com/canghun13/guitarsetuplab`

Branch: `main`
Start commit / advertised remote main after synchronization: `24fdfbd9b127be668e8b6dd17fcb24a8087d8975`

## Decision

**BLOCKED — external account setting required**

The live service is not normalized. The apex host serves HTTP and HTTPS independently, the HTTP `www` host redirects only to the HTTP apex, and the HTTPS `www` host presents a certificate that does not cover `www.guitarsetuplab.com`. The repository already emits the intended HTTPS-apex canonical URLs, sitemap URLs, and internal links. A repository redirect, JavaScript redirect, meta refresh, canonical rewrite, or custom-domain delete/re-add would be the wrong fix.

No authenticated GitHub Pages or Cloudflare administration was available in this environment. The public GitHub Pages API endpoint returned 404 without administration credentials, the browser exposed GitHub as signed out, the Cloudflare dashboard exposed its sign-in page, no `gh` or `wrangler` executable was available, and no GitHub/Cloudflare token environment-variable name was present. No external setting was changed.

## Starting state

- The initial local checkout was clean at `9ec7e0cbda46d777de0d0be8663e57823dc54591` and cached `origin/main` matched it.
- `git ls-remote origin refs/heads/main` advertised `24fdfbd9b127be668e8b6dd17fcb24a8087d8975` (`Close out GSC indexability audit`). A safe `fetch` and `pull --ff-only origin main` fast-forwarded the clean checkout to that commit.
- The latest handover and `research/gsc-indexability-audit-2026-09-18.md` already recorded two site-wide conditions: HTTP apex returned 200 and HTTPS `www` failed hostname validation. Both were reproduced rather than assumed.
- The 2026-09-25 HTTP-variant search-impression observation is user-supplied weekly GSC evidence. Search Console itself was not authenticated in this session, so no additional counts or URL details are inferred.

## Before matrix

The same result was measured for home and three representative public paths:

- Tool: `/tools/fret-buzz-diagnostic.html`
- Guide: `/guides/document-guitar-setup.html`
- Reference: `/reference/geometry-measurement.html`

| Request variant | Initial result | Location / TLS result | Hops | Final result | Final canonical |
|---|---:|---|---:|---|---|
| `http://guitarsetuplab.com/path` | 200 | no `Location` | 0 | same HTTP URL, 200 | matching HTTPS apex URL |
| `https://guitarsetuplab.com/path` | 200 | valid TLS | 0 | same HTTPS URL, 200 | self-canonical HTTPS apex URL |
| `http://www.guitarsetuplab.com/path` | 301 | same path on `http://guitarsetuplab.com` | 1 | HTTP apex, 200 | matching HTTPS apex URL |
| `https://www.guitarsetuplab.com/path` | TLS failure before HTTP | `SEC_E_WRONG_PRINCIPAL` / `ERR_CERT_COMMON_NAME_INVALID` | 0 in a validating client | no final page | not reachable with valid TLS |

Ignoring certificate validation only for diagnosis showed that HTTPS `www` returns 301 directly to the same HTTPS-apex path, followed by HTTPS apex 200. This diagnostic result is not a pass.

### Query and 404 behavior

- `http://guitarsetuplab.com/tools/fret-buzz-diagnostic.html?audit=20260925&source=http-variant` remained on the identical HTTP URL and returned 200; no protocol normalization occurred.
- HTTP `www` preserved path and query while redirecting to HTTP apex, not HTTPS apex.
- Insecure-diagnostic HTTPS `www` preserved path and query while redirecting to HTTPS apex.
- The missing path `/definitely-missing-https-normalization-2026-09-25.html` returned 404 directly on HTTP apex and HTTPS apex. HTTP `www` redirected once to HTTP-apex 404. Insecure-diagnostic HTTPS `www` redirected once to HTTPS-apex 404.
- There was no redirect loop in the measured chains, but the required HTTPS-apex destination was not reached by the HTTP variants.

### Headers and browser behavior

- HTTPS apex response: 200, `Server: GitHub.com`, `Content-Type: text/html; charset=utf-8`, `Cache-Control: max-age=600`.
- `Strict-Transport-Security` was absent from the sampled final responses.
- An actual Chromium browser navigated an entered HTTP Tool URL to HTTPS with its own HTTPS-first behavior and rendered the correct page and canonical. The HTTP client proved this was not a server redirect: it received HTTP 200 with zero hops.
- The same browser refused `https://www.guitarsetuplab.com/` with `net::ERR_CERT_COMMON_NAME_INVALID`; the warning was not bypassed.
- A Googlebot Smartphone user agent received the same server behavior as the normal HTTP client: HTTP apex 200, HTTPS apex 200, HTTP `www` 301 to HTTP apex, and validating HTTPS `www` failed TLS.

## TLS evidence

| Host | Subject | SAN | Validity observed | Hostname validation |
|---|---|---|---|---|
| `guitarsetuplab.com` | `CN=guitarsetuplab.com` | `DNS:guitarsetuplab.com` | 2026-07-31 through 2026-10-29 UTC | PASS |
| `www.guitarsetuplab.com` | `CN=*.github.io` | GitHub domains only; no `www.guitarsetuplab.com` | 2026-08-02 through 2026-10-31 UTC | FAIL: name mismatch |

Both were issued by Let's Encrypt `YR1`. The current `www` endpoint is therefore not merely waiting on an untrusted chain; the served certificate has the wrong hostname coverage.

## DNS observation

- Apex A: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` (GitHub Pages addresses).
- Apex AAAA: none observed.
- Apex CNAME: none observed.
- `www` CNAME: `canghun13.github.io`.
- Nameservers: `conrad.ns.cloudflare.com`, `jade.ns.cloudflare.com`.
- Repository `CNAME`: `guitarsetuplab.com`.

The returned origin addresses and `Server: GitHub.com` response indicate that the sampled records are DNS-only/direct to GitHub Pages, not currently proxied through Cloudflare. Cloudflare is authoritative DNS, but its authenticated proxy flags, SSL/TLS mode, Always Use HTTPS, Redirect Rules, Bulk Redirects, and Page Rules could not be read from the signed-out environment.

## GitHub Pages observation

- A live GitHub Pages deployment exists for `main`; the latest public deployment and Pages workflow were successful for start commit `24fdfbd9b127be668e8b6dd17fcb24a8087d8975`.
- Latest observed runs: Quality checks `35293419734` success; Pages build and deployment `35293417835` success.
- The repository and deployed page identify the custom domain as `guitarsetuplab.com`.
- The unauthenticated Pages-settings API returned 404 and the browser's direct repository Settings > Pages URL showed GitHub signed out. Therefore the private DNS-check panel, certificate provisioning message, custom-domain error state, and Enforce HTTPS checkbox could not be read authoritatively.
- Public behavior strongly indicates that HTTPS enforcement is disabled or ineffective: direct GitHub Pages IP responses on the apex return HTTP 200 and no edge proxy is in the path. This is an evidence-based inference, not an authenticated setting read.

## Root-cause assessment

1. The apex reaches GitHub Pages directly and does not enforce HTTP-to-HTTPS.
2. HTTP `www` uses GitHub Pages host canonicalization, but because HTTPS enforcement is absent it redirects only from `www` to the HTTP apex.
3. HTTPS `www` reaches GitHub Pages, but GitHub serves its `*.github.io` certificate rather than a certificate with `www.guitarsetuplab.com` in the SAN.
4. Cloudflare is authoritative DNS but is not visibly proxying the sampled traffic, so Cloudflare edge HTTPS/redirect settings cannot currently normalize these requests.

## Selected correction and exact external action

The smallest preferred correction is GitHub Pages native HTTPS, because production currently terminates directly at GitHub Pages. An authenticated repository administrator should:

1. Open `https://github.com/canghun13/guitarsetuplab/settings/pages`.
2. Under **Custom domain**, keep `guitarsetuplab.com`; do not remove and re-add it.
3. Confirm the displayed DNS check succeeds for the existing apex A records and `www` CNAME `canghun13.github.io`.
4. Inspect the certificate/provisioning message. Wait for or resolve GitHub's certificate provisioning until the live certificate SAN covers both `guitarsetuplab.com` and `www.guitarsetuplab.com`. Do not accept the current `*.github.io` certificate as complete.
5. As soon as GitHub makes the control available, enable **Enforce HTTPS**.
6. Recheck all URLs in the verification list below. GitHub may use two minimal hops for HTTP `www`; all other noncanonical variants should be 301/308 and must end on the same HTTPS-apex path with the query intact.

If GitHub Pages cannot provision the `www` certificate while the documented DNS is valid, use Cloudflare only as an explicit alternative, not concurrently as a second independent redirect layer:

1. Open `https://dash.cloudflare.com/`, select `guitarsetuplab.com`, and review **DNS > Records**.
2. Proxy the apex A records and `www` CNAME only if adopting Cloudflare as the TLS/redirect layer; first confirm Universal SSL covers both hostnames.
3. In **Rules > Redirect Rules > Single Redirects**, create one permanent redirect that matches requests whose scheme is HTTP or whose host is `www.guitarsetuplab.com`, targets `https://guitarsetuplab.com` plus the unchanged URI path, and preserves the query string.
4. Keep the HTTPS apex request outside the rule and remove/disable any overlapping Page Rule, Bulk Redirect, or second host-normalization rule that would create an extra hop or loop.
5. Use a strict origin mode for proxied apex traffic only after confirming the GitHub apex certificate validates. Do not lower TLS verification to hide the `www` hostname mismatch.

No external setting was changed in this session because neither service had authenticated administration. No credentials, tokens, tools, or permission changes were requested or created.

## Verification URLs after the external change

Repeat all four variants for each of the following, first with normal certificate validation and then with a Googlebot Smartphone user agent:

- `/`
- `/tools/fret-buzz-diagnostic.html?audit=20260925&source=http-variant`
- `/guides/document-guitar-setup.html`
- `/reference/geometry-measurement.html`
- `/definitely-missing-https-normalization-2026-09-25.html`

Pass only when HTTP apex, HTTP `www`, and HTTPS `www` use 301/308 and terminate on the same HTTPS-apex path; queries are preserved; the missing path terminates as HTTPS-apex 404; validating HTTPS `www` has no certificate warning; redirect loops are zero; and final HTML has the matching HTTPS-apex canonical.

## SEO sanity check

- Repository scan: 204 HTML copies across source and generated `site/`, 204 canonical tags, bad canonical 0, noindex files 0.
- Repository sitemap: 101 unique URLs, all HTTPS apex.
- Production sitemap: 101 URLs, all HTTPS apex.
- Production robots: allows `/` and declares `https://guitarsetuplab.com/sitemap.xml`.
- Production home, Tool, Guide, and Reference each expose the exact matching HTTPS-apex canonical and no robots noindex directive.
- No absolute internal references to HTTP apex or HTTPS/HTTP `www` were found in HTML, XML, text, or JavaScript.

No SEO or production-code change is warranted. The unresolved fault is exclusively at the authenticated hosting/DNS/edge configuration layer.

## Automated regression

The unchanged start commit was archived to a temporary directory so generated output could be rebuilt without touching the live working tree.

- Build: 102 public HTML pages and 59 Tools.
- Static/metadata/link/asset/structured-data/sitemap/JavaScript checks: PASS, 0 failures.
- Geometry fixtures: 65 PASS.
- Pickup-fit fixtures: 15 PASS.
- Control-fit fixtures: 33 PASS.
- Recording fixtures: 44 PASS.
- Electrical-test fixtures: 30 PASS.
- Content audit: 102 Sufficient; Needs 0, Thin 0, duplicate-risk 0, incomplete 0.

## Documentation deployment closeout

- Audit documentation commit: `628efc700f6f60bc74b4c316a853c5e722197e07` (`Document HTTPS host normalization blocker`), pushed to `origin/main`.
- Quality checks run `36070986222`: completed successfully for the audit commit.
- Pages build and deployment run `36070986055`: completed successfully for the audit commit.
- Post-deploy production replay remained intentionally unchanged: HTTP apex 200, HTTPS apex 200, HTTP `www` 301 to HTTP apex, and validating HTTPS `www` certificate failure. HTTPS-apex home retained its exact self-canonical and the production sitemap retained 101 HTTPS-apex URLs.
- Final closeout commit: the commit containing this subsection. Its exact hash is reported after push; it must be fetched and compared with local `HEAD`, `origin/main`, and advertised remote main.

## Changes and after state

- GitHub setting changes: none.
- Cloudflare setting changes: none.
- Repository production-code changes: none.
- Repository documentation changes: this audit record and the handover entry only.
- After matrix: unchanged from the Before matrix because external authority was unavailable.
- Unresolved limitation: the requested normalization remains incomplete until an authenticated administrator completes and verifies the external steps above.
