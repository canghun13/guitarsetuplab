# Information architecture

Updated: 2026-07-31

## Current inventory

- Public HTML: 54
- Interactive tools: 30
- Category hubs: 5
- Guides: 8
- References: 4
- Comparisons: 2
- Basic pages: 5 (home, about, contact, privacy, 404)

## Tool clusters

| Cluster | Hub | Tool count | Workflow |
|---|---|---:|---|
| Diagnostics and setup | `/categories/diagnostics.html` | 8 | symptom → safe isolation → measurement → record |
| Measurement and adjustment | `/categories/measurement.html` | 7 | scale/gauge/clearance → calculation or plan → setup recheck |
| Shop documents | `/categories/documents.html` | 8 | intake → quote/approval → job sheet → completion record |
| Inspection | `/categories/inspection.html` | 1 | pre-purchase inspection → condition report → quote |
| Electronics and wiring | `/categories/electronics.html` | 6 | isolate noise/phase → confirm hardware → select wiring/load |

The home page links all category hubs and every guide, reference, and comparison through the Bench Library. Static tests build an inbound-link graph and fail on any public orphan page. Each category hub links every tool in its cluster; tool result pages continue into relevant measurement or record tools.

## Second expansion

The repair-shop document cluster added intake, quote, parts/labor job sheet, customer approval checklist, and maintenance schedule tools. The electronics cluster added ground/hum diagnosis, pickup phase troubleshooting, wiring configuration, potentiometer selection, tone capacitor comparison, and series/parallel/coil-split selection. The measurement cluster added the published-unit-weight String Tension Matcher.

Supporting content adds five workflow guides, two references, and two comparisons. The String Tension Matcher is linked to gauge-change planning and a formula/data-boundary reference. Electronics tools are supported by a safe hum guide, wiring terminology, component selection guide, and switching comparisons.

## Deferred expansion

The next high-value cluster remains maker/luthier geometry: fret positions and calibrated print templates, string spacing, multiscale planning, neck angle/shim geometry, and build cost. These remain deferred until exact geometry fixtures and print-scale calibration can be verified; page count alone is not a reason to publish them.
