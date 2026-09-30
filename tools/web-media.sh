#!/bin/sh
# Make the web copies of one project's images. Originals are only read, never changed.
#
#   tools/web-media.sh <project-id> <thumbnail original> [image originals...]
#
# The first file becomes the thumbnail; any others become the project's images.
# (Pass the same file twice to use it for both.)
#   assets/img/thumbs/<project-id>.jpg     320 x 320, centre-cropped square
#   assets/img/<project-id>/<name>.jpg     longest side 1400px, never enlarged
# Both are JPEG, quality 82, with camera data (including GPS location) removed.
# Needs ImageMagick (Mac: brew install imagemagick).
set -e

if [ $# -lt 2 ]; then
	echo "usage: tools/web-media.sh <project-id> <thumbnail original> [image originals...]" >&2
	exit 1
fi
if command -v magick >/dev/null 2>&1; then IM=magick
elif command -v convert >/dev/null 2>&1; then IM=convert
else echo "ImageMagick not found (Mac: brew install imagemagick)" >&2; exit 1
fi

id=$1; shift
root=$(cd "$(dirname "$0")/.." && pwd)
mkdir -p "$root/assets/img/thumbs"

"$IM" "$1" -auto-orient -resize '320x320^' -gravity center -extent 320x320 \
	-strip -quality 82 "$root/assets/img/thumbs/$id.jpg"
echo "thumb: \"thumbs/$id.jpg\","
shift
[ $# -eq 0 ] && exit 0

mkdir -p "$root/assets/img/$id"
echo "images: ["
for f in "$@"; do
	name=$(basename "$f" | sed 's/\.[^.]*$//' | tr 'A-Z ' 'a-z-')
	"$IM" "$f" -auto-orient -resize '1400x1400>' -strip -quality 82 "$root/assets/img/$id/$name.jpg"
	echo "	{ src: \"$id/$name.jpg\", alt: \"\" },"
done
echo "],"
