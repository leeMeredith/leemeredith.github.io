#!/bin/sh
# Give the site's files a new version before publishing, so browsers fetch the
# new copies at once instead of reusing ones they saved (GitHub Pages lets
# browsers keep files for 10 minutes). Run it, then commit and push.
set -e
root=$(cd "$(dirname "$0")/.." && pwd)
v=$(date -u +%Y%m%d%H%M)
sed -i.bak -E "s/\?v=[0-9]+\"/?v=$v\"/g; s/SITE_VERSION = \"[0-9]+\"/SITE_VERSION = \"$v\"/" "$root/index.html"
rm -f "$root/index.html.bak"
echo "site version $v"
