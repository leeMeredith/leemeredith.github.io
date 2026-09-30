# Media policy

The site is published with GitHub Pages, which serves exactly what's in the repository and doesn't resize anything. So the small web copies live in Git, and the full-size originals don't.

## What goes where

| | Where | In Git? |
|---|---|---|
| Originals (camera files, full-size scans, source video) | `media/<project-id>/` on your computer | **No.** `media/` is ignored; back it up separately |
| Thumbnail, 320 × 320 JPEG | `assets/img/thumbs/<project-id>.jpg` | Yes |
| Project images, longest side 1400px, JPEG | `assets/img/<project-id>/` | Yes |
| Video | Vimeo or YouTube, referenced as `video: "vimeo:ID"` | No |

**Sizes**
- Thumbnails are 320px square, so they stay sharp at the 100px grid size on high-density phone screens. This matches the existing navigation images.
- Project images are at most 1400px on the longest side and are never enlarged.

**Format**
- Use JPEG at quality 82. The script strips camera data, including GPS location.
- Keep a PNG by hand only for drawings with flat colour, where JPEG smudges edges.

**Limits to stay well inside**
- Git rejects any single file over 100 MB.
- Pages publishes a site of at most 1 GB.
- Don't use Git LFS for site images; Pages may not serve them.

## Adding one project's media

1. Put the originals in `media/<project-id>/`, for example `media/new-thing/`.
2. Make the web copies. The first file is the thumbnail, and the rest are the project images:
   ```
   tools/web-media.sh new-thing media/new-thing/front.jpg media/new-thing/front.jpg media/new-thing/detail.jpg
   ```
   This needs ImageMagick; on a Mac, run `brew install imagemagick` once. The script only reads the originals.
3. The script prints `thumb:` and `images:` lines. Paste them into the project's entry in `js/site/projects.js`, and write each image's `alt` text: a short description of what the picture shows.
4. Preview, then commit the new files in `assets/img/`. Nothing in `media/` gets committed.

A project with no thumbnail yet shows a generated placeholder, so step 2 can wait.

## The three examples

- **Ceramics** and **Talking Art:** thumbnails made with the script from the existing 320px navigation images (the originals weren't available here). Ceramics' gallery images are already web copies in `assets/img/Ceramics/`, and they stay there while the old `index.html` still uses them.
- **Ortho:** no picture yet, so it shows the placeholder.
