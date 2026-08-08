# Cluster expansion research — 2026-08-08

## Decision summary

**Decision: GO — Pickup Fit & Spacing.** The cluster clears all ten gates when it is limited to user-entered physical measurements and never treats a clearance result as permission to rout, drill, or modify an instrument. The proposed release is one hub, four distinct interactive tools, one measurement guide, and one reference page.

The search review is directional, not a claim of proprietary keyword volume. Demand evidence comes from recurring recent questions, manufacturer FAQs/templates, and purchase-stage fit decisions. Competition was checked for a unified, browser-based retrofit workflow; isolated charts, PDFs, and forum answers do not provide the four-step measurement chain below.

## Current-site baseline

- Start commit after a safe `git pull --ff-only`: `acaafe738b044649d308020abcb1c6231e46eaef`.
- Existing scope: 71 public HTML pages, 41 interactive tools, six hubs, ten guides, six references, three comparisons, and five basic pages.
- Existing pickup coverage is electrical behavior, wiring choice, phase diagnosis, and reversible height/listening tests. It does not check pole alignment, cavity clearance, ring/screw geometry, or project string spread at a pickup location.
- Baseline geometry fixtures passed 65 assertions; content audit classified all 71 pages Sufficient.
- Static baseline had one known failure: root `index.html` contains a user-managed directory badge that is intentionally absent from generated `site/index.html`. The build contract must preserve that exact root-only block.

## Gate model

A candidate may ship only if all ten conditions pass: (1) clear current demand, (2) identifiable search intent, (3) a meaningful competition gap, (4) at least four distinct interactive tools, (5) no material overlap with the current site, (6) authoritative sources, (7) defensible calculations, (8) bounded safety risk, (9) manageable maintenance, and (10) a coherent internal-link path from an existing bench.

Commercial score is 40 points, traffic opportunity 35, and competition gap 25. A score of 80 is necessary but not sufficient; any failed gate forces HOLD or REJECT.

## Candidate 1 — Pickup Fit & Spacing

**Score: 36/40 commercial + 29/35 traffic + 22/25 gap = 87/100. Gate result: 10/10 PASS.**

### Demand and intent

The intent is strongly purchase- and installation-adjacent: “standard or F-spaced,” “will this pickup fit this route,” “will this cover/ring fit,” and “what is the string spread at the neck or bridge pickup?” DiMarzio says guitar makers vary bridge and nut dimensions and recommends measuring with its spacing template. Seymour Duncan documents its 52.6 mm Trembucker spacing. A July 2026 forum question asks about a measured 51.8–52 mm spread and immediately expands into ring and mounting-screw fit. This is a current, repeated compatibility problem rather than an editorial curiosity.

### Competition gap

Manufacturer resources are fragmented by brand and part: a spacing FAQ, a route drawing, a cutout PDF, or a product dimension sheet. Warmoth publishes route types and depths; Fishman maintains model-specific cutout templates. Search did not surface one independent tool chain that accepts the guitar and candidate part measurements, projects string spread at a chosen location, then separately checks pole alignment, route clearance, and ring/screw geometry.

### Four distinct tools

1. **String Spread at Pickup Projector** — linear interpolation between measured outer-string spreads at nut and bridge along the entered scale position.
2. **Pickup Pole Spacing Matcher** — compares measured outer-string spread with outer-pole spread and reports total/per-side mismatch within a user-entered tolerance.
3. **Pickup Route Clearance Checker** — compares rectangular body-cavity and candidate-pickup length, width, and depth with an explicit desired allowance.
4. **Pickup Ring & Mount Fit Checker** — independently checks pickup-to-opening clearance and existing-versus-candidate screw-center spans.

The tools do not contain a product catalog, tonal ranking, or a universal “correct” spacing. Users copy current manufacturer drawings into the fields, which keeps maintenance bounded and avoids stale compatibility claims.

### Safety and sources

Every output is a measurement screen, not installation authorization. Negative or close clearance, inaccessible cavities, curved walls, mounting ears, wires, springs, tabs, covers, or any need to drill/rout triggers a stop condition. The reference and guide instruct users to verify the current manufacturer drawing and make a physical overlay/mock-up before work.

Primary/current sources:

- [DiMarzio FAQ — F-spacing and standard spacing](https://www.dimarzio.com/faq)
- [Seymour Duncan — Parallel Axis Trembuckers and 52.6 mm spacing](https://www.seymourduncan.com/blog/faqs/what-are-parallel-axis-trembuckers)
- [Warmoth — guitar body pickup routs](https://warmoth.com/guitar-pickup-routs)
- [Fishman — electric cutout templates](https://fishman.com/electric-cutout-templates/)
- [Fishman — electric pickup dimension drawings](https://www.fishman.com/wp-content/uploads/2025/01/Fluence_Electric_Guitar_Pickup_Dimensions.pdf)
- [Recent Seymour Duncan forum fit question (July 2026)](https://forum.seymourduncan.com/threads/trembucker-or-not.6326679/)

### Internal-link path and boundaries

The new Fit bench is linked from Home and primary navigation. Existing Pickup Height, Pickup Wiring, and Pickup Phase tools link into the fit workflow; the new tools link back to Pickup Height and the new guide/reference. This preserves a clear boundary: physical fit first, electrical configuration second, height/listening after reversible installation.

## Candidate 2 — Fretwire & Refret Planning

**Score: 34/40 + 27/35 + 18/25 = 79/100. Gate result: HOLD.**

Demand and purchase intent are real. Jescar publishes crown and tang dimensions, StewMac explains why crown width, height, tang width, material, and player feel are separate decisions, and recent luthier discussions show users struggling with names such as “medium jumbo.” Possible tools include a crown-profile comparator, wire-quantity estimator, tang/slot comparison, and remaining-crown estimator.

The fatal weakness is that four outputs cannot all be made safely decisive from browser inputs. Tang fit depends on barbs, wood species, slot condition, compression, binding, adhesive practice, and real batch dimensions; refretting is irreversible. Product specifications and availability also change. The existing fret-position, fret-slot, radius, and geometry tools already cover adjacent planning, so this is held until a sourced non-prescriptive model and physical fixtures exist.

Sources: [Jescar 45100 specification](https://jescarmusic.com/products/jescar-fret-wire-45100), [StewMac fretwire size guide](https://www.stewmac.com/video-and-ideas/online-resources/learn-about-guitar-and-instrument-fretting-and-fretwork/fretwire-size/), and a [recent selection-confusion discussion](https://www.reddit.com/r/Luthier/comments/1sjgme4/overwhelmed_trying_to_pick_the_right_frets/).

## Candidate 3 — Nut Setup & Slot Diagnosis

**Score: 32/40 + 30/35 + 12/25 = 74/100. Gate result: REJECT for this expansion.**

First-fret sharpness, open-string buzz, binding after gauge changes, and first-fret clearance are common problems with strong service intent. The defensible pieces are a first-fret measurement recorder and a symptom router. Reaching four interactive tools, however, would duplicate the existing Fret Buzz Diagnostic, Tuning Stability Troubleshooter, Gauge Change Planner, Nut String Spacing Generator, and measurement references.

More importantly, a target-depth calculator can encourage irreversible filing from a generic number. StewMac’s own instructions emphasize direct first-fret measurement and repeated physical checking, and note that suitable height changes with instrument and playing style. The cluster fails the non-overlap, distinct-tool, and bounded-safety gates.

Sources: [StewMac Digital Nut Slotting Gauge instructions](https://www.stewmac.com/video-and-ideas/online-resources/learn-about-guitar-nut-and-saddle-setup-and-repair/digital-nut-slotting-gauge-instructions/) and [StewMac feeler-gauge method](https://www.stewmac.com/video-and-ideas/online-resources/learn-about-guitar-nut-and-saddle-setup-and-repair/using-feeler-gauges-to-control-nut-slot-depth/).

## Candidate 4 — Acoustic Saddle Compensation

**Score: 30/40 + 23/35 + 8/25 = 61/100. Gate result: REJECT.**

The topic has real builder and repair intent, but capable free competition already exists. Liutaio Mottola provides both a new-instrument saddle compensation calculator and an existing-instrument intonation-error calculator with a documented physical model. Guitar Setup Lab already covers scale, fret positions, intonation direction, saddle radius, action, and neck angle. A new cluster would either duplicate this work or add a more complex model with string stiffness/core data and substantial validation burden. The likely action—moving or reshaping a saddle witness point—is irreversible.

Sources: [Mottola bridge saddle compensation calculator](https://www.liutaiomottola.com/formulae/compensation.htm), [Mottola existing-saddle adjustment calculator](https://www.liutaiomottola.com/formulae/saddle.htm), and [intonation/compensation model paper](https://arxiv.org/abs/0906.0127).

## Candidate 5 — Guitar Humidity Monitoring

**Score: 24/40 + 26/35 + 7/25 = 57/100. Gate result: REJECT.**

Questions recur and official care guidance exists, but four useful browser tools would require forecasts, alerts, sensor histories, or product-runtime assumptions. FretCast, TaylorSense, Humiditrak, and Wi-Fi sensors already occupy monitoring and notification intent. The current Acoustic Setup Checklist already routes humidity symptoms without pretending that a web form can measure an instrument’s environment. This candidate fails the distinct-tool, competition-gap, and maintenance gates.

Sources: [Taylor dry-guitar guidance](https://www.taylorguitars.com/support/spot-fix-dry-guitar), [TaylorSense](https://www.taylorguitars.com/taylorsense), and [FretCast listing](https://apps.apple.com/jp/app/fretcast-guitar-humidity-care/id6762030585).

## Release contract

The GO implementation must add exactly seven public pages (four tools, one hub, one guide, one reference), dedicated pure-calculation fixtures, static link/SEO/module checks, content audit, browser behavior and responsive QA, production verification, and handover evidence. No product database, recommendation affiliate content, audio-quality promise, or cutting template is in scope. If the measured part requires routing, drilling, unknown wiring clearance, or forced fit, the result stops and directs the user to the current manufacturer drawing and a qualified technician.

## Implemented release and QA evidence

The release added the planned seven pages with no comparison or print feature:

- `/categories/fit.html`
- `/tools/string-spread-at-pickup.html`
- `/tools/pickup-pole-spacing-matcher.html`
- `/tools/pickup-route-clearance-checker.html`
- `/tools/pickup-ring-mount-fit.html`
- `/guides/measure-pickup-fit.html`
- `/reference/pickup-dimensions.html`

The pure calculation module rejects empty, zero/negative where prohibited, out-of-range, NaN, and Infinity inputs. Fifteen pickup-fit assertions cover endpoints, linear interpolation, tolerance boundaries, positive and negative clearances, screw-span tolerance, and invalid inputs. Existing geometry remains a separate 65-assertion suite.

Static checks passed 78 HTML pages and 45 tools with zero broken links, zero orphans, required metadata/canonical/H1/JSON-LD/GA4/email/sitemap checks, JavaScript syntax, module assets, and the intentional root-only badge contract. Content audit classified all 78 pages Sufficient with Needs 0, Thin 0, duplicate-risk 0, and functionally incomplete 0.

Browser responsive QA rendered all seven new pages at 1440, 1280, 1024, 900, 768, 600, 480, and 390 px: 56 combinations. Two existing representatives (String Gauge Change Planner and Pickup Height Setup Planner) added 16 regression combinations. Across all 72 measured combinations, H1/header overlap, document overflow, clipped/off-screen panels, and abnormal columns were zero. The workspace measured as two columns at 1440 and one column at 1024 and below; mobile navigation appeared at 768 and below. Seventy-five screenshots are stored in `research/screenshots/cluster-2026-08-08/` (72 responsive/regression captures and three direct functional-result captures).

Direct browser runs returned distinct valid results for all four tools. Changing pole spread from 2.070 to 1.900 inches changed the result from wider to narrower; Copy reached `Copied`, Reset returned `Ready for measurements`, and no tool-error result or abnormal document overflow appeared. Print was intentionally omitted because these are comparison screens, not physical templates or required records.
