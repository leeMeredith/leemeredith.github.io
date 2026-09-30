// Builds the page from PROJECTS (js/site/projects.js), keeping the layout of index.html:
//   top menu with drop-downs   one menu per category, one item per project
//   picture grid (middle)      one thumbnail per project
//   right column               title, picture, and summary per project
//   project area (top)         the selected project, at index.html?p=<id>
// Nothing here needs editing when a project is added.

var CATEGORIES = [
	{ id: "ceramics", label: "Ceramics" },
	{ id: "projects", label: "Projects" },
	{ id: "experiments", label: "Experiments" }
];
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

function dropdown(category, items) {
	var toggle = el("button", { type: "button", class: "dropdown-toggle button " + FONT, "aria-expanded": "false", "aria-label": category.label }, menuLabel(category.label));
	var body = el("div", { class: "dropdown-body dropdown-body-t-lr dropdown-body-l-lr dropdown-body-ll-lr dropdown-body-lr " + FONT }, items.map(function (p) {
		return el("a", { class: "dropdown-menu-item", href: link(p), text: p.title });
	}));
	var group = el("div", { class: "button-group dropdown " + FONT }, [toggle, body]);
	group.addEventListener("focusout", function (e) {
		if (!group.contains(e.relatedTarget)) closeMenus();
	});
	toggle.addEventListener("click", function () {
		var open = !group.classList.contains("shown");
		closeMenus();
		group.classList.toggle("shown", open);
		toggle.setAttribute("aria-expanded", open);
	});
	return group;
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
	CATEGORIES.forEach(function (c) {
		var items = PROJECTS.filter(function (p) { return p.category === c.id; });
		if (items.length) nav.appendChild(dropdown(c, items));
	});
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

// Like the old right column: the opening of the project's words, cut at 200
// characters, so the text runs down past the picture and wraps under it.
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

// Generated line (was the random paragraph) ---------------------------
function renderLine() {
	var box = document.getElementById("myDIV_MyParagraph");
	var line = el("p", { class: "daily-line", "aria-live": "polite" });
	var again = el("button", { type: "button", class: "button", "aria-label": "Another line", text: "↻" });
	box.appendChild(el("p", {}, [el("a", { href: PAGE + "?p=ortho", text: "Ortho" }), document.createTextNode(": today's invented language")]));
	box.appendChild(line);
	box.appendChild(again);
	ORTHO.then(function (ortho) {
		var next = ortho.dailyLine();
		line.textContent = next() + " " + next();
		again.addEventListener("click", function () { line.textContent = next() + " " + next(); });
	});
}

// Ads on the site's own pages ---------------------------------------------
// This week's Weekly Campaign (made with offbrand), like ads on a real website: a box at the top of
// the right column and a banner above the work map. Both link to the campaign.
function renderAds() {
	var box = el("div", { class: "site-offbrand site-offbrand-box" });
	var banner = el("div", { class: "site-offbrand site-offbrand-banner" });
	var col = document.getElementById("myDIV_TopicNav_1");
	col.insertBefore(box, col.firstChild);
	var map = document.getElementById("myDIV_WorkMap");
	map.parentNode.insertBefore(banner, map);
	import("../vendor/offbrand/offbrand.js").then(function (offbrand) {
		var href = PAGE + "?p=weekly-campaign";
		offbrand.placeAd(box, "rectangle", href);
		offbrand.placeAd(banner, "leaderboard", href);
	});
}

// Work map (bottom left of every page) -------------------------------------------------
// A treemap of the project list: category -> tag -> project. A project with
// several tags appears under each one, so block size shows how much work
// carries that tag. Click a category or tag to zoom in; click a project to open it.
var ECHARTS = "https://cdn.jsdelivr.net/npm/echarts@5.5.1/dist/echarts.min.js";
var CATEGORY_COLORS = { ceramics: "#eb6834", projects: "#2a78d6", experiments: "#1baf7a" };

function workMapData() {
	return CATEGORIES.map(function (c) {
		var projects = PROJECTS.filter(function (p) { return p.category === c.id; });
		var byTag = {};
		var untagged = [];
		projects.forEach(function (p) {
			var leaf = { name: p.title, value: 1, id: c.id + "/" + p.id, projectId: p.id };
			if (!(p.tags || []).length) untagged.push(leaf);
			(p.tags || []).forEach(function (t) {
				(byTag[t] = byTag[t] || []).push({ name: leaf.name, value: 1, projectId: p.id });
			});
		});
		// Tags on only one project in this category fold into "other tags",
		// so the map shows the groups that recur.
		var other = [];
		var children = Object.keys(byTag).sort().filter(function (t) {
			if (byTag[t].length > 1) return true;
			other = other.concat(byTag[t]);
			return false;
		}).map(function (t) {
			return { name: t, children: byTag[t] };
		});
		// A project with several rare tags appears once under "other tags".
		other = other.filter(function (leaf, i) {
			return other.findIndex(function (o) { return o.projectId === leaf.projectId; }) === i;
		});
		if (other.length) children.push({ name: "other tags", children: other });
		children = children.concat(untagged);
		return { name: c.label, children: children, itemStyle: { color: CATEGORY_COLORS[c.id] } };
	}).filter(function (c) { return c.children.length; });
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

// Most-visited map: category -> project, sized by views.
function visitMapData(views) {
	return CATEGORIES.map(function (c) {
		var children = PROJECTS.filter(function (p) { return p.category === c.id && views[p.id] > 0; })
			.map(function (p) { return { name: p.title, value: views[p.id], projectId: p.id }; });
		return { name: c.label, children: children, itemStyle: { color: CATEGORY_COLORS[c.id] } };
	}).filter(function (c) { return c.children.length; });
}

function renderWorkMap() {
	var area = document.getElementById("myDIV_WorkMap");
	var title = el("h2", { class: "work-map-title" });
	var byWork = el("button", { type: "button", class: "button", "aria-pressed": "true", text: "Amount of work" });
	var byVisits = el("button", { type: "button", class: "button", "aria-pressed": "false", text: "Most visited" });
	var note = el("p", { class: "work-map-note", "aria-live": "polite" });
	var box = el("div", { class: "work-map", role: "img",
		"aria-label": "Map of work by category and tag. The same projects are listed in the right-hand column." });
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
			title.textContent = "Work by category and tag";
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
				label: { show: true, color: "#fff", fontFamily: "Geneva, sans-serif", fontSize: 13 },
				upperLabel: { show: true, height: 22, color: "#fff", fontFamily: "Geneva, sans-serif" },
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
	var rel = related(p);
	if (rel.length) {
		main.appendChild(el("p", {}, [document.createTextNode("Related: ")].concat(rel.map(function (r) {
			return el("a", { href: link(r), text: r.title + " " });
		}))));
	}
}

var ORTHO = import("../experiments/ortho.js");

function renderSite() {
	ORTHO.then(function (ortho) {
		fillGaps(ortho);
		renderPage();
	});
}

function renderPage() {
	var id = new URLSearchParams(location.search).get("p");
	var project = PROJECTS.filter(function (p) { return p.id === id; })[0];
	renderMenu();
	if (project) renderProject(project);
	else document.getElementById("myDIV_ConceptMedia").hidden = true;
	renderLine();
	renderGrid();
	renderColumn();
	if (!project || project.id !== "weekly-campaign") renderAds();
	renderWorkMap();
	renderVisits(project);
}
