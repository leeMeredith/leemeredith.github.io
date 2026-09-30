// Make a real page for every project, at work/<id>/, so each one has its own
// address, shows up properly in search, and gets a picture card when the link
// is shared. Each page is a copy of index.html with that project's title,
// description and preview tags; the site's JavaScript does the rest.
// Also writes sitemap.xml. tools/stamp.sh runs this; needs Node.
//
//   node tools/pages.mjs
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

var SITE = "https://leemeredith.github.io/";
var root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
var PROJECTS = new Function(fs.readFileSync(path.join(root, "js/site/projects.js"), "utf8") + "; return PROJECTS;")();
var index = fs.readFileSync(path.join(root, "index.html"), "utf8");

function esc(s) {
	return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

// Preview tags for a page. The image must be a JPEG or PNG for most services.
function meta(title, description, url, image) {
	var tags = [
		'<link rel="canonical" href="' + url + '">',
		'<meta property="og:type" content="website">',
		'<meta property="og:site_name" content="Lee Meredith">',
		'<meta property="og:title" content="' + esc(title) + '">',
		'<meta property="og:description" content="' + esc(description) + '">',
		'<meta property="og:url" content="' + url + '">'
	];
	if (image) tags.push('<meta property="og:image" content="' + SITE + "assets/img/" + image + '">');
	tags.push('<meta name="twitter:card" content="' + (image ? "summary_large_image" : "summary") + '">');
	return "\t" + tags.join("\n\t") + "\n";
}

// Replace whatever preview tags a page had with new ones.
function withMeta(html, tags) {
	html = html.replace(/\t<link rel="canonical"[^\n]*\n|\t<meta (property="og:|name="twitter:)[^\n]*\n/g, "");
	return html.replace("</head>", tags + "</head>");
}

function page(p) {
	var title = p.title + " — Lee Meredith";
	var html = index
		.replace("<head>", '<head>\n\t<base href="../../">')
		.replace(/<title>[^<]*<\/title>/, "<title>" + esc(title) + "</title>")
		.replace(/<meta name="description" content="[^"]*">/, '<meta name="description" content="' + esc(p.summary) + '">')
		.replace("<script>var SITE_VERSION", '<script>var PAGE_ID = "' + p.id + '";</script>\n\t<script>var SITE_VERSION');
	return withMeta(html, meta(title, p.summary, SITE + "work/" + p.id + "/", p.banner || p.thumb));
}

fs.rmSync(path.join(root, "work"), { recursive: true, force: true });
PROJECTS.forEach(function (p) {
	var dir = path.join(root, "work", p.id);
	fs.mkdirSync(dir, { recursive: true });
	fs.writeFileSync(path.join(dir, "index.html"), page(p));
});

var desc = (index.match(/<meta name="description" content="([^"]*)">/) || [])[1] || "";
fs.writeFileSync(path.join(root, "index.html"), withMeta(index, meta("Lee Meredith", desc, SITE, null)));

fs.writeFileSync(path.join(root, "sitemap.xml"),
	'<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
	[SITE].concat(PROJECTS.map(function (p) { return SITE + "work/" + p.id + "/"; }))
		.map(function (u) { return "\t<url><loc>" + u + "</loc></url>\n"; }).join("") + "</urlset>\n");

console.log(PROJECTS.length + " project pages written to work/");
