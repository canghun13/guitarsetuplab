# Guitar Setup Lab

Static, browser-only guitar setup diagnostics, measurement helpers, and printable shop records for [guitarsetuplab.com](https://guitarsetuplab.com/).

## Local development

Requires Node.js 20 or newer.

```bash
npm run build
npm test
npm run serve
```

Open `http://127.0.0.1:4173/`. Source templates and tool logic live under `scripts/`; the deployable output is generated into `site/` and committed so it can also be inspected without a build step.

## Safety scope

The tools organize observations and measurements. They do not inspect an instrument, guarantee a repair, prescribe exact truss-rod turns, or authorize irreversible fret, nut, routing, drilling, or structural work.
