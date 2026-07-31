# Luthier geometry formulas, sources, and limits

Last verified: 2026-07-31

## Primary references

- R. M. Mottola, “Fret Position Calculation”: https://www.liutaiomottola.com/formulae/fret.htm
- StewMac Fret Calculator: https://www.stewmac.com/fret-calculator/
- StewMac String Spacing Rule Instructions: https://www.stewmac.com/video-and-ideas/online-resources/learn-about-guitar-nut-and-saddle-setup-and-repair/string-spacing-rule-instructions/
- W3C CSS Values and Units Level 3, absolute lengths: https://www.w3.org/TR/css-values-3/#absolute-lengths
- Playwright `page.pdf()` API: https://playwright.dev/docs/api/class-page#page-pdf

The sources support the fret equation, the distinction between proportional and uniform string-spacing ideas, CSS absolute-length conversion, and the PDF page-size controls. The project does not copy StewMac’s proprietary graduated-rule increments; its equal-center and equal-edge-gap modes are derived directly from entered geometry.

## Shared calculation modules

The browser UI imports pure functions from `scripts/assets/geometry/`:

- `core.js`: finite-number validation, mm/in conversion, degrees/radians, rounding, print calibration, and tiled-length planning.
- `frets.js`: 12-tone equal-tempered cumulative fret positions and adjacent spacing.
- `spacing.js`: equal-center and equal-edge-gap string layouts plus bridge-center layouts.
- `radius.js`: circular radius from chord/sagitta, compound-radius interpolation, and saddle-center offsets.
- `multiscale.js`: per-string scale interpolation and two-dimensional nut, bridge, and fret coordinates around a selected perpendicular fret.
- `angles.js`: break angle, simplified neck-plane projection, and tapered-shim thickness difference.

All internal distances are millimetres. Conversion happens at the input/output boundary. Display rounding does not feed back into calculations.

## Formula definitions

### Fret position

For nominal scale `s` and fret number `n`:

`d = s - s / 2^(n/12)`

`d` is the cumulative distance from the nut witness point. Adjacent spacing is the current cumulative coordinate minus the preceding coordinate. Fret 12 is `s/2`; fret 24 is `3s/4`. Saddle compensation is deliberately outside this nominal fret-location equation.

### Equal-center string spacing

For usable outer-center spread `W` and `N` strings:

`centerStep = W / (N - 1)`

The edge gap between adjacent strings is `centerStep - (g_i + g_(i+1))/2`, where `g` is string diameter.

### Equal-edge-gap string spacing

After subtracting the entered margins and all string diameters from the available width:

`edgeGap = remainingWidth / (N - 1)`

Each next center advances by half the previous diameter, the shared edge gap, and half the next diameter. Equal gauges make equal-center and equal-edge-gap layouts coincide; mixed gauges do not.

### Radius from chord and sagitta

For chord width `c` and perpendicular center sagitta `s`:

`R = c² / (8s) + s/2`

The inputs must describe one circular cross-section. A small sagitta error can create a large radius error, so the tool also reports sensitivity.

### Saddle-center target

At lateral coordinate `x` on radius `R`, surface rise is:

`rise = R - sqrt(R² - x²)`

The planner compares `rise + desired action + string diameter/2` across strings and reports relative offsets. These are target string-center comparisons, not filing or cutting depths.

### Compound-radius interpolation

The tool uses linear interpolation between documented start and end radii over a named longitudinal reference length. This is a planning model, not a claim that every compound board follows a linear conical surface.

### Multiscale coordinates

Each string receives its own nominal scale interpolated between the entered treble and bass scales. For fret fraction `f_n = 1 - 2^(-n/12)`:

`x_(n,i) = nutX_i + f_n × scale_i`

The selected perpendicular fret constrains its string intersections to one common x coordinate; y coordinates follow each string line. Equal bass and treble scales collapse to an ordinary straight-fret layout.

### Angles and shims

- Break angle: `atan(|height difference| / horizontal distance)`.
- Simplified neck angle: `atan(required rise / projection distance)`.
- Tapered-shim thickness difference: `tan(angle) × covered length`.

These are measured right-triangle models. Carved tops, set necks, acoustic neck joints, relief, bridge travel, structural deformation, and ambiguous datums can invalidate a simplified projection.

### Print calibration and tiling

W3C absolute CSS lengths define `1in = 96px = 25.4mm`. Templates render both a 50 mm bar and a 2 inch bar. The browser fixture checks their CSS-pixel lengths (`188.976…px` and `192px`). PDF generation uses CSS `@page`, `preferCSSPageSize`, `printBackground`, and scale 1.

For a long template, each page covers a bounded usable length and the next page begins before the prior page ends by the chosen overlap. Page number, start/end coordinates, registration edges, and repeated fret marks in the overlap preserve order and alignment.

## Verified fixtures

`scripts/geometry-test.mjs` currently runs 65 independent assertions covering:

- 25.5 in, 24.75 in, 34 in, 628 mm, and 650 mm scales.
- The 12th- and 24th-fret identities, monotonic positions, decreasing adjacent spacing, and invalid counts/scales.
- Equal-center/equal-gap equivalence for equal gauges and divergence for mixed gauges; 4-, 5-, and 6-string layouts; preserved margins and spreads.
- Radius/chord/sagitta inverse cases, invalid geometry, sensitivity, compound interpolation, and saddle offsets.
- Ordinary and 6-/7-/8-string multiscale plans, exact selected perpendicular fret, coordinate ordering, and invalid relationships.
- Known triangles, zero angle, neck projection, shim taper, mm/in identity, calibration pass/fail/correction factor, and tiled page order/overlap.

## Deliberately uncalculated or deferred

- No exact nut-slot depth, saddle filing amount, fret cutting instruction, neck-reset verdict, or exact truss-rod turn count.
- No universal break-angle, neck-angle, radius, action, spacing, or tremolo spring target.
- No spring rate or claw-screw turns inferred from string tension.
- No unit weight inferred for unsupported string brands or constructions.
- No printer correction silently applied to cutting dimensions.
- No claim that the generated PDF guarantees physical printer accuracy; the printed calibration bars must be measured.
- Body/neck blank optimization and build-cost planning remain separate future tools because they need material, kerf, nesting, inventory, and costing models rather than the current geometry primitives.
