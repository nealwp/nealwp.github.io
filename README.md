# nealwp.github.io

Source for [nealwp.github.io](https://nealwp.github.io/), my personal site.

Static HTML/CSS with a small amount of vanilla JavaScript for the light/dark
theme toggle. No build step, no framework, no dependencies. It's served
directly by GitHub Pages from this repository.

## Structure

```
index.html            page content
styles.css             design tokens + styles
script.js               theme toggle, footer year
hedgehog-noborder.svg   source logo mark (fill="currentColor", inlined in index.html)
favicon.svg             fixed-color favicon derived from the mark above
site.webmanifest        PWA metadata
assets/                 portrait, generated PNG icons + Open Graph image
```

## Local development

No build tools required. Serve the directory with anything static, for example:

```
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Deployment

Pushing to `main` is the deployment: GitHub Pages serves this repository's
root directly at `https://nealwp.github.io/`.

## Regenerating icons / OG image

`favicon.svg`, `assets/favicon-32.png`, `assets/favicon-192.png`,
`assets/apple-touch-icon.png`, and `assets/og-image.png` are generated from
the hedgehog mark. They're committed as static files; there's no build step
that produces them at deploy time. If the mark changes, regenerate them with
an SVG rasterizer of your choice (e.g. `sharp`, `resvg`, or Inkscape) at:

- `favicon-32.png` (32×32)
- `favicon-192.png` (192×192)
- `apple-touch-icon.png` (180×180)
- `og-image.png` (1200×630)
