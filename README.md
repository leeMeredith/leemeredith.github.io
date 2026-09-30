# Lee Meredith

Art, creative coding, ceramics, and experiments: [leemeredith.github.io](https://leemeredith.github.io/).

The site is plain HTML, CSS, and JavaScript, with no framework or build step, published by GitHub Pages from the root of `main`.

## Adding a project

Every project is one entry in `js/site/projects.js`. The menus, picture grid, right-hand column, work map, and related links are all built from that list, so adding a project means adding one entry:

```js
{ id: "new-thing", title: "New Thing", category: "projects" }
```

Until you add a `thumb`, a grey placeholder picture with the title stands in. Until you add a `summary` and `text`, italic Ortho words stand in. The other fields (`year`, `video`, `images`, `links`, `tags`, `script`) are described in `docs/site-plan.md`. Each project has its own address, `index.html?p=<id>`; the old project pages (`ARM.html`, `EMG.html` and so on) redirect there.

## Images

See `docs/media.md`. In short: originals stay off the site; `tools/web-media.sh` makes a 320px thumbnail and 1400px project images, and removes camera and location data.

## Publishing

Run `tools/stamp.sh` before committing. It gives the site's files a new version number, so visitors' browsers fetch the new copies at once instead of reusing ones saved for up to 10 minutes.

## Preview

Run `python3 -m http.server 8000` in this folder, then open `http://127.0.0.1:8000/`.

## Borrowed pieces

- [Ortho](https://github.com/leeMeredith/ortho) (invented language) and [offbrand](https://github.com/leeMeredith/offbrand) (the generated ads) are copied into `js/vendor/`; see the README in each folder to update them.
- The work map uses [Apache ECharts](https://echarts.apache.org/), loaded from jsDelivr.
- Visit counts are kept by [Abacus](https://abacus.jasoncameron.dev/), which stores only numbers.
