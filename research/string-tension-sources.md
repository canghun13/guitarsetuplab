# String tension source record

Reviewed: 2026-07-31

## Formula

The String Tension Matcher uses D’Addario’s published relationship:

`T = UW × (2 × L × F)² ÷ 386.4`

- `T`: tension in pounds-force
- `UW`: string unit weight in pounds per linear inch
- `L`: vibrating scale length in inches
- `F`: frequency in hertz
- Newton display: pounds-force × `4.44822`

Primary sources:

- D’Addario, *String Tension Pro / String Tension Calculator*: https://www.daddario.com/pages/string-tension-pro-string-tension-calculator
- D’Addario, *String Tension Guide*: https://www.daddario.com/globalassets/pdfs/accessories/tension_chart_13934.pdf
- D’Addario, *All About String Tension*: https://www.daddario.com/en-gb/blogs/guitar/all-about-string-tension
- D’Addario EXL110 product context: https://www.daddario.com/products/guitar/electric-guitar/xl-nickel/exl110-nickel-wound-regular-light-10-46
- D’Addario EXL170 product context: https://www.daddario.com/products/guitar/bass-guitar/xl-nickel-bass/exl170-nickel-wound-light-45-100-long-scale

## Included data boundary

The repository stores a deliberately limited transcription of published unit weights for commonly used plain-steel and XL nickel-plated round-wound guitar gauges, plus common XL nickel bass gauges. The exact included keys are visible in `scripts/assets/calculations.js` and covered by fixtures.

The implementation does not copy an entire manufacturer chart, infer a wound-string unit weight from diameter, or represent another brand, alloy, winding, coating, or construction as equivalent. An unsupported gauge returns an explicit unavailable-data result.

## Verification fixtures

- Guitar: 25.5-inch scale, E standard, 10p/13p/17p/26w/36w/46w checks approximately 16.2/15.4/16.6/18.4/19.5/17.5 lbf.
- Direction checks: shorter scale lowers tension; longer scale raises it; Drop D lowers sixth-string tension.
- Bass: 34-inch E-standard 45w/65w/80w/100w is accepted from the included bass dataset.
- Invalid scale and unsupported gauge inputs are rejected without estimating missing data.

## Limitations

Calculated values are ideal reference values based on published unit weight, frequency, and vibrating length. Installed results may differ with production tolerance, speaking length, construction, winding, setup, and measurement method. A calculator result is not permission to cut a nut, alter a bridge, or perform structural work.
