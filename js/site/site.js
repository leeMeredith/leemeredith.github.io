// Builds the page from PROJECTS (js/site/projects.js), in the layout of the original site:
//   top menu                   drop-downs for the groups below; each item lists its work
//   left column                today's Ortho text, with the work map pinned beside the lists
//   middle                     home: the picture grid; a group item: its work as banners;
//                              a project (index.html?p=<id>): the work, then related banners
//   right column               every project as a banner, newest first
// Nothing here needs editing when a project is added; groups follow project tags.

// The menu groups from the original site. Each item gathers the projects
// carrying any of its tags. Colours are for the work map (checked for
// colour-blind separation against the page background).
var GROUPS = [
	{ label: "2D", color: "#2a78d6", items: [
		{ label: "35mm", tags: ["35mm"] },
		{ label: "Coloring Book", tags: ["coloring book"] },
		{ label: "Games", tags: ["game", "games", "board games", "tabletop games"] },
		{ label: "Paint", tags: ["paint", "hand-painted"] } ] },
	{ label: "3D", color: "#eb6834", items: [
		{ label: "Ceramics", tags: ["ceramics"] } ] },
	{ label: "Audio", color: "#1baf7a", items: [
		{ label: "DJ", tags: ["dj", "vj"] },
		{ label: "mp3", tags: ["audio", "mp3"] } ] },
	{ label: "Programming", color: "#eda100", items: [
		{ label: "Arduino", tags: ["arduino"] },
		{ label: "Processing", tags: ["processing"] },
		{ label: "Max", tags: ["max"] },
		{ label: "JavaScript", tags: ["javascript"] },
		{ label: "OF", tags: ["openframeworks"] } ] },
	{ label: "Written", color: "#e87ba4", items: [
		{ label: "Paper", tags: ["paper"] },
		{ label: "Plays", tags: ["plays", "play"] },
		{ label: "Poetry", tags: ["poetry"] },
		{ label: "Prose", tags: ["prose"] } ] }
];

function itemId(item) { return item.label.toLowerCase().replace(/[^a-z0-9]+/g, "-"); }

function inItem(p, item) {
	return (p.tags || []).some(function (t) { return item.tags.indexOf(t) >= 0; });
}

function findItem(id) {
	for (var g = 0; g < GROUPS.length; g++) {
		for (var i = 0; i < GROUPS[g].items.length; i++) {
			if (itemId(GROUPS[g].items[i]) === id) return { group: GROUPS[g], item: GROUPS[g].items[i] };
		}
	}
	return null;
}

var IMG = "assets/img/";
var PAGE = "index.html";
var FONT = "midFont-ms midFont-mm midFont-ml midFont-t midFont-l midFont-ll midBigFont-k";

function el(tag, attrs, children) {
	var node = document.createElement(tag);
	for (var k in attrs || {}) {
		if (k === "text") node.textContent = attrs[k];
		else node.setAttribute(k, attrs[k]);
	}
	(children || []).forEach(function (c) { if (c) node.appendChild(c); });
	return node;
}

function link(p) {
	return PAGE + "?p=" + encodeURIComponent(p.id);
}

function thumb(p, size) {
	var src = p.thumb ? IMG + p.thumb : placeholderImage(p.title);
	return el("img", { src: src, alt: p.title, width: size, height: size });
}

// A generated stand-in picture, like a form's empty image slot: a grey box,
// crossed corner to corner, with the project's title.
function placeholderImage(title) {
	var svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">' +
		'<rect width="100" height="100" fill="#d2d2d2"/>' +
		'<path d="M0 0L100 100M100 0L0 100" stroke="#bbb" stroke-width="1"/>' +
		'<rect x="4" y="40" width="92" height="20" fill="#d2d2d2"/>' +
		'<text x="50" y="54" font-family="Arial, sans-serif" font-size="10" fill="#666" text-anchor="middle">' +
		title.replace(/[<&"]/g, "") + '</text></svg>';
	return "data:image/svg+xml," + encodeURIComponent(svg);
}

// A wide stand-in for projects without a banner image.
function placeholderBanner(title) {
	var svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 231 100">' +
		'<rect width="231" height="100" fill="#d2d2d2"/>' +
		'<path d="M0 0L231 100M231 0L0 100" stroke="#bbb" stroke-width="1"/>' +
		'<rect x="10" y="40" width="211" height="20" fill="#d2d2d2"/>' +
		'<text x="115" y="54" font-family="Arial, sans-serif" font-size="11" fill="#666" text-anchor="middle">' +
		title.replace(/[<&"]/g, "") + '</text></svg>';
	return "data:image/svg+xml," + encodeURIComponent(svg);
}

// A project as a banner: wide picture, title, and its tags.
function banner(p) {
	var src = p.banner ? IMG + p.banner : p.thumb ? IMG + p.thumb : placeholderBanner(p.title);
	return el("a", { class: "work-banner", href: link(p) }, [
		el("img", { src: src, alt: "", loading: "lazy" }),
		el("span", { class: "work-banner-title", text: p.title + (p.year ? " (" + p.year + ")" : "") }),
		(p.tags || []).length ? el("span", { class: "work-banner-tags", text: p.tags.slice(0, 6).join(" \u00b7 ") }) : null
	]);
}

function bannerList(list, extraClass) {
	return el("div", { class: "work-banners" + (extraClass ? " " + extraClass : "") }, list.map(banner));
}

// Anything a project doesn't have yet is filled with Ortho words, marked
// with p.placeholder so it can be styled as a stand-in.
function fillGaps(ortho) {
	PROJECTS.forEach(function (p) {
		var f = ortho.filler(p.id);
		p.placeholder = {};
		if (!p.summary) { p.summary = f.sentence(); p.placeholder.summary = true; }
		if (!p.text && !p.images && !p.video && !p.script) { p.text = f.paragraphs(2); p.placeholder.text = true; }
	});
}

function newestFirst(list) {
	return list.slice().sort(function (a, b) { return (b.year || 0) - (a.year || 0); });
}

function related(project) {
	var tags = project.tags || [];
	return PROJECTS.filter(function (p) {
		return p !== project && (p.tags || []).some(function (t) { return tags.indexOf(t) >= 0; });
	});
}

// Top menu ------------------------------------------------------------
// Full name on wide screens, shorter as the screen narrows, using the old
// menu's limits: 5 letters below 768px, 3 below 425px, 2 below 375px
// (Experiments -> EXPER -> EXP -> EX). CSS picks which one shows.
function menuLabel(label) {
	return [el("span", { class: "label-full", text: label })].concat([5, 3, 2].map(function (n) {
		return el("span", { class: "label-" + n, "aria-hidden": "true", text: label.slice(0, n).toUpperCase() });
	}));
}

function menuButton(label, href) {
	return el("a", { class: "dropdown-toggle button " + FONT, href: href, "aria-label": label }, menuLabel(label));
}

function dropdown(group) {
	var toggle = el("button", { type: "button", class: "dropdown-toggle button " + FONT, "aria-expanded": "false", "aria-label": group.label }, menuLabel(group.label));
	var body = el("div", { class: "dropdown-body dropdown-body-t-lr dropdown-body-l-lr dropdown-body-ll-lr dropdown-body-lr " + FONT }, group.items.map(function (item) {
		var n = PROJECTS.filter(function (p) { return inItem(p, item); }).length;
		return el("a", { class: "dropdown-menu-item", href: PAGE + "?t=" + itemId(item), text: item.label + " (" + n + ")" });
	}));
	var box = el("div", { class: "button-group dropdown " + FONT }, [toggle, body]);
	box.addEventListener("focusout", function (e) {
		if (!box.contains(e.relatedTarget)) closeMenus();
	});
	toggle.addEventListener("click", function () {
		var open = !box.classList.contains("shown");
		closeMenus();
		box.classList.toggle("shown", open);
		toggle.setAttribute("aria-expanded", open);
	});
	return box;
}

function closeMenus() {
	document.querySelectorAll(".dropdown.shown").forEach(function (d) {
		d.classList.remove("shown");
		d.querySelector("button").setAttribute("aria-expanded", "false");
	});
}

function renderMenu() {
	var nav = document.getElementById("myDIV_ButtonNav");
	nav.appendChild(menuButton("Lee", PAGE));
	GROUPS.forEach(function (g) { nav.appendChild(dropdown(g)); });
	document.addEventListener("click", function (e) { if (!e.target.closest(".dropdown")) closeMenus(); });
	document.addEventListener("keydown", function (e) {
		if (e.key !== "Escape") return;
		var open = document.querySelector(".dropdown.shown");
		if (open) { closeMenus(); open.querySelector("button").focus(); }
	});
}

// Picture grid and right column --------------------------------------
function renderGrid() {
	var grid = document.getElementById("myDIV_NavMain");
	newestFirst(PROJECTS).forEach(function (p) {
		grid.appendChild(el("div", { class: "boxZero xMainNavPic_ xMainNavPic_m floatL tooltip" }, [
			el("span", { class: "tooltiptext", text: p.title }),
			el("a", { href: link(p) }, [thumb(p, 100)])
		]));
	});
}

// Right column, as on the original site: a square picture with the opening
// words wrapping around it, cut at 200 characters.
function blurb(p) {
	var words = [p.summary].concat(p.text || []).join(" ");
	return words.length > 200 ? words.slice(0, 199) + "..." : words;
}

function renderColumn() {
	var col = document.getElementById("myDIV_TopicNav_1");
	newestFirst(PROJECTS).forEach(function (p) {
		var picture = el("a", { href: link(p), class: "topic-thumb" }, [thumb(p, 100)]);
		col.appendChild(el("div", { class: "box navRight colorBorder0 " + FONT }, [
			el("h2", {}, [el("a", { href: link(p), text: p.title })]),
			el("p", {}, [picture, el("span", { class: p.placeholder.summary ? "placeholder" : "", text: blurb(p) })])
		]));
		col.appendChild(el("div", { class: "clearthefloats x2" }));
	});
}

// Today's Ortho text (was the random paragraph) -----------------------
// Paragraphs keep coming until the left column is as tall as the middle one,
// so the two columns end together. It refills when pictures finish loading
// or the window changes size; the button starts the text over.
function renderLine() {
	var box = document.getElementById("myDIV_OrthoText");
	var left = document.getElementById("myDIV_MyParagraph");
	var middle = document.getElementById("myDIV_Middle");
	var text = el("div", { class: "daily-text", "aria-live": "polite" });
	var again = el("button", { type: "button", class: "button", "aria-label": "New text", text: "\u21bb" });
	box.appendChild(el("p", {}, [el("a", { href: PAGE + "?p=ortho", text: "Ortho" }), document.createTextNode(": today's invented language"), again]));
	box.appendChild(text);
	ORTHO.then(function (ortho) {
		var next = ortho.dailyStream();
		function fill() {
			// Side by side only on wide screens; stacked, three paragraphs is enough.
			var sideBySide = window.matchMedia("(min-width: 1024px)").matches;
			var guard = 0;
			while (guard++ < 200 && (text.children.length < 3 ||
				(sideBySide && left.offsetHeight < middle.offsetHeight - 24))) {
				text.appendChild(el("p", { text: next() }));
			}
		}
		fill();
		again.addEventListener("click", function () { text.textContent = ""; next = ortho.dailyStream(); fill(); });
		window.addEventListener("load", fill);
		window.addEventListener("resize", fill);
		middle.addEventListener("load", fill, true);   // each picture that loads may lengthen the middle
	});
}

// Ads on the site's own pages ---------------------------------------------
// Two campaigns made with offbrand run like ads on a real website, both
// linking to the Weekly Campaign page:
//   every 3 days   a box at the top of the right column, and a banner under the work map
//   every 12 hours a tall skyscraper partway down the right column
function renderAds() {
	var box = el("div", { class: "site-offbrand site-offbrand-box" });
	var sky = el("div", { class: "site-offbrand site-offbrand-sky" });
	var banner = el("div", { class: "site-offbrand site-offbrand-banner" });
	var col = document.getElementById("myDIV_TopicNav_1");
	col.insertBefore(box, col.firstChild);
	// After the sixth project in the column (each project is two elements).
	col.insertBefore(sky, col.children[1 + 6 * 2] || null);
	document.getElementById("myDIV_WorkMap").appendChild(banner);
	import("../vendor/offbrand/offbrand.js").then(function (offbrand) {
		var href = PAGE + "?p=weekly-campaign";
		offbrand.placeAd(box, "rectangle", href, "3d");
		offbrand.placeAd(banner, "leaderboard", href, "3d");
		offbrand.placeAd(sky, "skyscraper", href, "12h");
	});
}

// Work map (beneath the left and middle columns) -----------------------
// A treemap of the menu groups: group -> item -> project. A project in
// several items appears under each, so block size shows how much work each
// kind holds. Click a group or item to zoom in; click a project to open it.
var ECHARTS = "https://cdn.jsdelivr.net/npm/echarts@5.5.1/dist/echarts.min.js";

function workMapData() {
	return GROUPS.map(function (g) {
		var children = g.items.map(function (item) {
			var leaves = PROJECTS.filter(function (p) { return inItem(p, item); }).map(function (p) {
				return { name: p.title, value: 1, projectId: p.id };
			});
			return { name: item.label, children: leaves };
		}).filter(function (c) { return c.children.length; });
		return { name: g.label, children: children, itemStyle: { color: g.color } };
	}).filter(function (g) { return g.children.length; });
}

// Visit counts --------------------------------------------------------
// GitHub Pages can't count visits, so counts live with Abacus, a free counter
// service with no account and no cookies: it stores only numbers. Each browser
// counts once per session for the site and once per project, so reloads don't
// inflate them. To switch services, change these three functions.
var COUNTER = "https://abacus.jasoncameron.dev";
var COUNTER_NS = "leemere-site";

function countGet(key) {
	return fetch(COUNTER + "/get/" + COUNTER_NS + "/" + key)
		.then(function (r) { return r.status === 404 ? { value: 0 } : r.json(); })
		.then(function (d) { return d.value || 0; })
		.catch(function () { return null; });
}

function countHit(key) {
	return fetch(COUNTER + "/hit/" + COUNTER_NS + "/" + key)
		.then(function (r) { return r.json(); })
		.then(function (d) { return d.value || 0; })
		.catch(function () { return null; });
}

// Count once per browser session; later loads only read the number.
function countOnce(key) {
	var seen = false;
	try { seen = sessionStorage.getItem("counted-" + key) === "1"; } catch (e) {}
	if (seen) return countGet(key);
	try { sessionStorage.setItem("counted-" + key, "1"); } catch (e) {}
	return countHit(key);
}

function renderVisits(project) {
	var box = document.getElementById("myDIV_Visits");
	countOnce("site").then(function (n) {
		if (n !== null) box.textContent = n.toLocaleString() + " visits";
	});
	if (!project) return;
	var line = el("p", { class: "project-views" });
	document.getElementById("myDIV_ConceptMedia").appendChild(line);
	countOnce("p-" + project.id).then(function (n) {
		if (n !== null) line.textContent = "Viewed " + n.toLocaleString() + (n === 1 ? " time" : " times");
	});
}

// Views for every project, read once per session when the map asks for them.
var viewsCache = null;
function allViews() {
	if (viewsCache) return viewsCache;
	try {
		var saved = JSON.parse(sessionStorage.getItem("all-views") || "null");
		if (saved) return (viewsCache = Promise.resolve(saved));
	} catch (e) {}
	viewsCache = Promise.all(PROJECTS.map(function (p) { return countGet("p-" + p.id); })).then(function (list) {
		var views = {};
		PROJECTS.forEach(function (p, i) { views[p.id] = list[i] || 0; });
		try { sessionStorage.setItem("all-views", JSON.stringify(views)); } catch (e) {}
		return views;
	});
	return viewsCache;
}

// Most-visited map: group -> project, sized by views.
function visitMapData(views) {
	return GROUPS.map(function (g) {
		var seen = {};
		var children = PROJECTS.filter(function (p) {
			return views[p.id] > 0 && g.items.some(function (item) { return inItem(p, item); });
		}).map(function (p) { return { name: p.title, value: views[p.id], projectId: p.id }; });
		return { name: g.label, children: children, itemStyle: { color: g.color } };
	}).filter(function (g) { return g.children.length; });
}

function renderWorkMap() {
	var area = document.getElementById("myDIV_WorkMap");
	var title = el("h2", { class: "work-map-title" });
	var byWork = el("button", { type: "button", class: "button", "aria-pressed": "true", text: "Amount of work" });
	var byVisits = el("button", { type: "button", class: "button", "aria-pressed": "false", text: "Most visited" });
	var note = el("p", { class: "work-map-note", "aria-live": "polite" });
	var box = el("div", { class: "work-map", role: "img",
		"aria-label": "Map of work by kind. The same projects are listed as banners in the right-hand column." });
	area.appendChild(title);
	area.appendChild(el("div", { class: "work-map-toggle", role: "group", "aria-label": "Map shows" }, [byWork, byVisits]));
	area.appendChild(note);
	area.appendChild(box);

	var chart = null;
	var mode = "work";
	try { mode = localStorage.getItem("work-map-mode") || "work"; } catch (e) {}

	function draw() {
		byWork.setAttribute("aria-pressed", mode === "work");
		byVisits.setAttribute("aria-pressed", mode === "visits");
		try { localStorage.setItem("work-map-mode", mode); } catch (e) {}
		note.textContent = "";
		if (mode === "work") {
			title.textContent = "Work by kind";
			show(workMapData(), 2, "project");
			return;
		}
		title.textContent = "Most visited work";
		note.textContent = "Counting\u2026";
		allViews().then(function (views) {
			if (mode !== "visits") return;
			var data = visitMapData(views);
			note.textContent = data.length ? "Block size is the number of visits." : "No project visits counted yet.";
			show(data, 2, "visit");
		});
	}

	function show(data, depth, unit) {
		chart.setOption({
			tooltip: {
				formatter: function (info) {
					var path = info.treePathInfo.slice(1).map(function (n) { return n.name; }).join(" \u203A ");
					if (unit === "project" && info.data.projectId) return path;
					return path + " (" + info.value + " " + unit + (info.value === 1 ? ")" : "s)");
				}
			},
			series: [{
				type: "treemap",
				name: "All work",
				data: data,
				roam: false,
				nodeClick: "zoomToNode",
				leafDepth: depth,         // work: categories and tags, click a tag for projects
				left: 0, right: 0, top: 0, bottom: 32,
				breadcrumb: { show: true, bottom: 0, itemStyle: { color: "#d2d2d2", borderColor: "#d2d2d2", textStyle: { color: "#333" } } },
				label: { show: true, color: "#1d1d1b", fontFamily: "Geneva, sans-serif", fontSize: 13 },
				upperLabel: { show: true, height: 22, color: "#1d1d1b", fontFamily: "Geneva, sans-serif" },
				itemStyle: { borderColor: "#ebebeb", borderWidth: 2, gapWidth: 2, borderRadius: 4 },
				levels: [
					{ itemStyle: { borderWidth: 0, gapWidth: 4 }, upperLabel: { show: false } },
					{ itemStyle: { borderWidth: 0, gapWidth: 2 }, upperLabel: { show: true, color: "#333", fontSize: 14 } },
					{ colorSaturation: [0.35, 0.6], itemStyle: { borderColorSaturation: 0.6, gapWidth: 2 } }
				]
			}]
		}, true);
	}

	byWork.addEventListener("click", function () { mode = "work"; draw(); });
	byVisits.addEventListener("click", function () { mode = "visits"; draw(); });

	var script = el("script", { src: ECHARTS });
	script.onload = function () {
		chart = echarts.init(box);
		chart.on("click", function (e) {
			if (e.data && e.data.projectId) location.href = link({ id: e.data.projectId });
		});
		window.addEventListener("resize", function () { chart.resize(); });
		draw();
	};
	document.head.appendChild(script);
}

// Selected project ------------------------------------------------------
function videoEmbed(ref) {
	var parts = ref.split(":");
	var src = parts[0] === "vimeo"
		? "https://player.vimeo.com/video/" + parts[1]
		: "https://www.youtube.com/embed/" + parts[1];
	return el("div", { class: "video" }, [
		el("iframe", { src: src, title: "Video", allow: "fullscreen; picture-in-picture", allowfullscreen: "" })
	]);
}

function renderProject(p) {
	var main = document.getElementById("myDIV_ConceptMedia");
	document.title = p.title + " — Lee Meredith";
	document.querySelector('meta[name="description"]').setAttribute("content", p.summary);

	main.appendChild(el("h1", { text: p.title }));
	main.appendChild(el("p", { class: p.placeholder.summary ? "summary placeholder" : "summary", text: p.summary + (p.year ? " (" + p.year + ")" : "") }));
	if (p.placeholder.text) main.appendChild(el("img", { class: "placeholder-image", src: placeholderImage(p.title), alt: "" }));
	if (p.video) main.appendChild(videoEmbed(p.video));
	if (p.script) {
		var stage = el("div", { class: "stage" });
		main.appendChild(stage);
		import("../../" + p.script).then(function (mod) { mod.mount(stage); });
	}
	(p.text || []).forEach(function (t) { main.appendChild(el("p", { class: p.placeholder.text ? "placeholder" : "", text: t })); });
	if (p.images) {
		main.appendChild(el("div", { class: "gallery" }, p.images.map(function (img) {
			return el("img", { src: IMG + img.src, alt: img.alt, loading: "lazy" });
		})));
	}
	if (p.links) {
		main.appendChild(el("ul", { class: "links" }, p.links.map(function (l) {
			return el("li", {}, [el("a", { href: l.url, rel: "noopener", text: l.label })]);
		})));
	}
	// More work as banners: related by tag first, then the newest of the rest.
	var rel = related(p);
	var more = rel.concat(newestFirst(PROJECTS).filter(function (q) { return q !== p && rel.indexOf(q) < 0; })).slice(0, 8);
	main.appendChild(el("h2", { class: "column-title", text: rel.length ? "Related work" : "More work" }));
	main.appendChild(bannerList(more, "work-banners-big"));
}

var ORTHO = import("../experiments/ortho.js");

function renderSite() {
	ORTHO.then(function (ortho) {
		fillGaps(ortho);
		renderPage();
	});
}

// A menu item: its projects as banners.
function renderItem(found) {
	var main = document.getElementById("myDIV_ConceptMedia");
	var list = newestFirst(PROJECTS.filter(function (p) { return inItem(p, found.item); }));
	document.title = found.item.label + " \u2014 Lee Meredith";
	document.querySelector('meta[name="description"]').setAttribute("content", found.group.label + " / " + found.item.label + ": work by Lee Meredith.");
	main.appendChild(el("p", { class: "crumb", text: found.group.label }));
	main.appendChild(el("h1", { text: found.item.label }));
	main.appendChild(list.length ? bannerList(list, "work-banners-big") : el("p", { text: "Nothing here yet." }));
}

function renderPage() {
	var q = new URLSearchParams(location.search);
	var project = PROJECTS.filter(function (p) { return p.id === q.get("p"); })[0];
	var found = !project && q.get("t") ? findItem(q.get("t")) : null;
	renderMenu();
	if (project) renderProject(project);
	else if (found) renderItem(found);
	else {
		document.getElementById("myDIV_ConceptMedia").hidden = true;
		renderGrid();
	}
	if (!project && !found) document.body.classList.add("is-home");
	renderLine();
	renderColumn();
	renderWorkMap();
	if (!project || project.id !== "weekly-campaign") renderAds();
	renderVisits(project);
}
