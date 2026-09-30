# Site plan: steps 1–3

Guiding rule: **adding an ordinary project means adding one small JavaScript entry, without editing the layout or navigation.**

This document covers the three planning steps. Steps 4–8 are implementation and happen later, working from what is agreed here.

---

## 1. Project-entry specification

### The three reference projects

| Role | Project | Why it's representative |
|---|---|---|
| Ceramics | **Ceramics** (`myWorkData.js`, "Clear Glaze Vessels") | Mostly a gallery: 21 photos and almost no text |
| Media-heavy | **Talking Art** (`talkingArt.html`, `myTalkingArtWorkData.js`) | Vimeo embed, several text sections, many images, outside links (GitHub, Flickr, MET MediaLab) |
| Interactive experiment | **Ortho** ([leeMeredith/ortho](https://github.com/leeMeredith/ortho)) | The page *is* the work: an invented-language generator runs live. It replaces Generative Poetry (`jsPoetry.html`) and the old `randomWord.js` it grew out of |

### What each one actually needs

- **Ceramics:** a title, a short line, a thumbnail, an ordered list of images (each with alt text), and a category.
- **Talking Art:** everything Ceramics needs, plus a date, a video link, a few paragraphs, and a few labelled outside links.
- **Ortho:** a title, a short line, a thumbnail, a category, a link to its repository, and the script that runs on its page.

### The entry format

One object per project. **Required fields:**

```js
{
  id: "talking-art",            // short, unique, used in the URL (?p=talking-art)
  title: "Talking Art",
  summary: "Face-tracking mouths that give museum portraits a voice.",  // one line, used on cards and in the page description
  category: "projects",         // one of: "ceramics" | "projects" | "experiments"
  thumb: "talking-art.jpg",     // path under assets/img/; if missing, a text tile shows the title
}
```

**Optional fields.** Include a field only when the project uses it:

```js
  year: 2014,
  video: "vimeo:83160270",      // or "youtube:ID"
  text: ["Paragraph one…", "Paragraph two…"],
  images: [{ src: "talking-art/washington.jpg", alt: "George Washington portrait with animated mouth" }],
  links: [{ label: "Code on GitHub", url: "https://github.com/…" }],
  tags: ["face tracking", "museum"],   // lower-case, used for "related" only
  script: "js/experiments/ortho.js"    // experiments only: runs inside the project area
```

**Rules**

- Categories come from the `category` field. Listings, menus, and "related" links are all derived from entries and never written by hand.
- The file contains no sizes, CSS styles, "mode" flags, `"_"` placeholders, or empty audio/video blocks. The renderer handles presentation.
- A project with its own HTML page is the exception, not the rule. The same entry still produces its card and menu item.

---

## 2. Existing machinery: one entry, traced

This section traces **Ceramics** through the active rendering path (`index.html`, `myWorkMedia.js`, `myNavData.js`).

1. **The data.** The Ceramics object in `myWorkData.js` (lines ~7146–7490) is about 340 lines long. Most of it is boilerplate: empty `audio` and `video` blocks, and 21 `srcImg` blocks where only `img` differs. The titles and captions live in parallel arrays (`srcName`, `concept`) padded with `"_"`, and categories are free text in `mainTag` and `myTag` (`#Ceramics#3D#Clay`).
2. **The thumbnail.**
   - `topicNav()` renders `iconsImg[0]` (`navTopic/CeramicsTopic_0.jpg`) in the right-hand column.
   - `relatedNav()` renders `iconsImg[1]` (`navRelated/…`).
   - The homepage grid is a *separate, hand-kept* list in `myNavData.js` → `navMain`, with a third image (`navMain/newHopeCeramics_0.jpg`).
3. **The navigation item.** The "3D ▸ Ceramics" item in the top menu is also hand-written, in `navUpper`, and its `url` is empty. The tag dropdown (`allFromOpt`) is built by splitting every `myTag` string, so near-duplicates appear side by side (`Game`, `game`, `games`, `Games`).
4. **The displayed project.** Clicking a thumbnail submits a `<form><input type="image">`, which calls `onChangeStrFun(display)` or `onChangeSrcStrFun(...)`. The matching entry's HTML is then concatenated into `myDIV_ConceptMedia` at a hard-coded 700×515. The URL doesn't change, so a project can't be linked to, bookmarked, or reached with Back.

### Keep / simplify / replace

| | Item | Reason |
|---|---|---|
| **Keep** | Plain HTML/CSS/JS, no build step | Suits the site and GitHub Pages |
| Keep | Data in JS files loaded by `<script>` | Already the working habit, and it matches the guiding rule |
| Keep | `escapeAttribute()` | Correct idea; apply it everywhere |
| Keep | Existing images under `assets/img/` | Already web-sized (see README) |
| Keep | The experimental tone: the clock, generated text, the playful colours | This is the site's character (see §3 for where each part goes) |
| **Simplify** | Project entries | Use the §1 format; that cuts roughly 340 lines to 30 for Ceramics |
| Simplify | Tags (`mainTag`/`myTag`) | One `category`, plus optional lower-case `tags` |
| Simplify | Four near-identical renderers (`onChangeFun`, `onChangeStrFun`, `onChangeSrcStrFun`, `onChangeSrcStrFun_AllNoNav`, each about 200 lines) | One `renderProject(entry)` |
| Simplify | The `idMatchMedia` branches, which all set the same values | Replace with CSS media queries |
| **Replace** | Hand-kept `navMain` and `navUpper` project lists | Derive both from entries |
| Replace | `<form><input type="image">` as a link | Use a real `<a href="?p=id">` that works with the keyboard, can be shared, and supports Back |
| Replace | Per-project data copies (`myARMWorkData.js`, `myTalkingArtWorkData.js`, etc., which duplicate `myWorkData.js`) | One entry per project |
| Replace | Per-project HTML shells, each a copy of `index.html` | One project view; a separate page only for special cases |

### Concrete defects to fix in step 5

- Missing spaces between attributes in generated HTML (`'"title="'`, `'"alt="'`, `'"style="'`).
- `<li>` placed directly in `<div>` for the upper and bottom navigation.
- IDs repeated inside loops (`myDIV_NavMain`, `myDIV_6_1`).
- `window.onbeforeunload` scrolls to the top, which fights the browser.
- Fixed 700×515 video and 100/140 px inline styles.
- Placeholder alt text ("Test Work") and empty alt text on the ceramics photos.
- `console.log` calls left in production.
- Upper-menu items with empty `url`s that lead nowhere.
- Page descriptions that don't match their content: `jsPoetry.html` loads all project data it never uses, and `monstermayhem.html` has no author in its title.

---

## 3. Creative space

### Page sketch (homepage)

```
┌───────────────────────────────────────────────────────────┐
│ 1111444400007777 LEE MEREDITH 1111444400007777          │  ← number-field banner (the time,
│ 1111444 Ceramics · Projects · Experiments · Contact 777 │    repeated) with name + links on it
├───────────────────────────────────────────────────────────┤
│  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐       │
│  │  CERAMICS    │ │  PROJECTS    │ │ EXPERIMENTS  │       │  ← three large entrances,
│  │  [photo]     │ │  [photo]     │ │ [live thing] │       │    each with a short line
│  └──────────────┘ └──────────────┘ └──────────────┘       │
├───────────────────────────────────────────────────────────┤
│  "Today's generated line"  ↻                               │  ← replaces the random paragraph
├───────────────────────────────────────────────────────────┤
│  Recent  [card][card][card][card]                         │  ← derived from entries (newest year)
├───────────────────────────────────────────────────────────┤
│  GitHub · Instagram · Vimeo · SoundCloud          © Lee   │  ← footer
└───────────────────────────────────────────────────────────┘
Phone: the banner keeps a fixed height, the links sit in one row on it, and everything below stacks in one column.
Project pages: the same banner as a thinner strip, so the work is visible without scrolling.
```

**Replacing the random paragraph.** A single line of Ortho, set large, with a ↻ button and a link to the Ortho experiment. The seed is today's date, so the site speaks one invented language per day and ↻ draws more from it. The *Experiments* entrance shows the same generator running live.

### Navigation map

```
Home
├── Ceramics        → grid of ceramics entries → project view (?p=id)
├── Projects        → grid of project entries  → project view (?p=id)
├── Experiments     → grid of experiments      → project view (runs entry.script)
│                      e.g. Ortho, later the Fake-Ad Creator (step 7)
└── Contact (mailto)
```

The section grids come from `category`, and the "Related" row on a project view comes from shared `tags`. Nothing on this map is edited by hand when a project is added.

### What stays recognizable across all areas

- The same header, section links, and footer.
- The number-field banner: the current time's digits repeated to fill the top of the screen. It is the site's signature. Each section tints it differently. It is hidden from screen readers and holds still when the visitor's device is set to reduce motion.
- One type scale and the existing colour tokens from `leemere.css`.
- The same card shape (square thumbnail, title, one line).

Sections may vary their accent colour and the layout of the project body. Ceramics can be image-led and Experiments can be full-bleed, but the frame stays the same.

---

## Decisions

1. **Three categories: Ceramics, Projects, Experiments.** Writing (the plays and prose PDFs) goes under Projects with a `writing` tag. A fourth category waits until the writing needs its own treatment.
2. **One project page, addressed as `?p=id`** (for example, `index.html?p=talking-art`). This avoids a copied HTML shell per project, needs no server configuration, and keeps links shareable. A separate `.html` file is used only for a project that genuinely needs its own page.
3. **The number field stays in the header as the site banner.** It is full height on the homepage and a thinner strip on other pages. The name and section links sit on top of it.
4. **Ortho replaces Generative Poetry.** Copy Ortho's three browser-ready files (`src/index.js`, `engine.js`, `prng.js`, with no dependencies) into `js/vendor/ortho/`, and note the source commit (currently `58f9c0f`) in a short README there. Load them with `<script type="module">`, with no build step. To update, copy the files again. The Ortho repository stays the authority, and the site only displays it. `jsPoetry.html` and `js/randomParagraph/randomWord.js` are removed once the Ortho page works. The Ortho experiment offers a seed box and a ↻ button to begin with; the seven dials are added only if they earn their place.
