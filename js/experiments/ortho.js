// Ortho experiment: a seed names a language; ↻ draws more of it.
import { Ortho, render } from "../vendor/ortho/index.js";

var STYLE = { preset: 0.45 };
// All seven dials on, for fuller text: recurring phrases, grammar words, a
// subject, names, commas, quotations, and scare quotes.
var FULL = { phrases: 0.12, functionWords: 0.5, topics: 0.35, names: 0.3, commas: 0.5, quotation: 0.25, scareQuotes: 0.2 };

// Three paragraphs of four to six sentences each.
function paragraphs(o) {
	o.newSection();
	var out = [];
	for (var i = 0; i < 3; i++) out.push(render(o.paragraph(4 + o.rng.below(3), 12, 8)));
	return out;
}

// Today's language as an endless supply of paragraphs; each call gives one more.
export function dailyStream() {
	var o = new Ortho(todaysSeed(), FULL);
	o.newSection();
	return function () { return render(o.paragraph(4 + o.rng.below(3), 12, 8)); };
}

// The seven dials, each shown as a fluorescent highlighter from the stokes
// ink table (sRGB from its linear emission values), under black text.
export var DIALS = [
	{ key: "phrases", label: "phrases", ink: "#ffb300" },        // fluor_orange
	{ key: "functionWords", label: "function words", ink: "#6ce1ff" }, // fluor_blue
	{ key: "topics", label: "topics", ink: "#f9ff3f" },          // fluor_yellow
	{ key: "names", label: "names", ink: "#ff6cc4" },            // fluor_pink
	{ key: "commas", label: "commas", ink: "#ff6c6c" },          // fluor_red
	{ key: "quotation", label: "quotation", ink: "#b3ff59" },    // fluor_green
	{ key: "scareQuotes", label: "scare quotes", ink: "#f927e1" } // fluor_magenta
];

export function dialLevels() { return FULL; }

function span(cls, text) {
	var e = document.createElement("span");
	if (cls) e.className = cls;
	e.textContent = text;
	return e;
}

// Ortho records why each word appeared (fresh, function word, topic, name,
// or part of a phrase) as it makes it. listen() keeps that record, one entry
// per word, so the marks below show exactly what each dial did.
var SOURCE_DIAL = { 1: "functionWords", 2: "topics", 3: "names", 4: "phrases" };

function listen(o) {
	var log = [];
	var ask = o._recurrentOrNull;
	o._recurrentOrNull = function () {
		var word = ask.call(this);
		log.push(this._lastSource);
		return word;
	};
	return log;
}

// One paragraph as marked-up text: each word tagged with the dial that put it
// there; commas and quotation marks are found by their characters. A quote
// around one word is a scare quote; around several, a quotation.
function markParagraph(o, words, sources) {
	var open = o.tables.quotePair[0], close = o.tables.quotePair[1];
	var marks = open + close + ",.!?;:\u2014";

	var parts = words.map(function (w, i) {
		var pre = "", post = "", core = w;
		while (core && core.charAt(0) === open) { pre += open; core = core.slice(1); }
		while (core && marks.indexOf(core.charAt(core.length - 1)) >= 0) {
			post = core.charAt(core.length - 1) + post; core = core.slice(0, -1);
		}
		return { pre: pre, core: core, post: post, kind: SOURCE_DIAL[sources[i]] || "" };
	});

	var frag = document.createDocumentFragment();
	var inQuote = false;
	parts.forEach(function (t, i) {
		if (i) frag.appendChild(document.createTextNode(" "));
		var scare = t.pre && t.post.indexOf(close) >= 0;
		if (t.pre && !scare) inQuote = true;
		var word = span(inQuote ? "ow ow-quotation" : "ow", "");
		var q = scare ? "ow-scareQuotes" : "ow-quotation";
		if (t.pre) word.appendChild(span("ow-mark " + q, t.pre));
		word.appendChild(span(t.kind ? "ow-" + t.kind : "", t.core));
		t.post.split("").forEach(function (ch) {
			if (ch === ",") word.appendChild(span("ow-mark ow-commas", ch));
			else if (ch === close) word.appendChild(span("ow-mark " + q, ch));
			else word.appendChild(document.createTextNode(ch));
		});
		if (!scare && t.post.indexOf(close) >= 0) inQuote = false;
		frag.appendChild(word);
	});
	return frag;
}

// Today's language as marked-up paragraphs; each call gives one more fragment.
export function dailyMarkedStream() {
	var o = new Ortho(todaysSeed(), FULL);
	var log = listen(o);
	o.newSection();
	return function () {
		log.length = 0;
		var words = o.paragraph(4 + o.rng.below(3), 12, 8);
		return markParagraph(o, words, log.slice());
	};
}

// Dial colours are off until a visitor asks for them; the choice is remembered
// in their browser. The marks are always in the text; CSS shows or hides them
// by the "ortho-dials-on" class on <body>.
function dialsOn() {
	try { return localStorage.getItem("ortho-dials") === "on"; } catch (e) { return false; }
}

function setDials(on) {
	document.body.classList.toggle("ortho-dials-on", on);
	try { localStorage.setItem("ortho-dials", on ? "on" : "off"); } catch (e) {}
	document.querySelectorAll(".ortho-dials-toggle").forEach(function (b) {
		b.setAttribute("aria-pressed", on);
		b.textContent = on ? "Hide the dials" : "Show the dials";
	});
}

// A button that turns the dial colours on and off, with the key beneath it.
export function dialToggle() {
	var wrap = document.createElement("div");
	wrap.className = "ortho-dials";
	var b = document.createElement("button");
	b.type = "button";
	b.className = "button ortho-dials-toggle";
	b.addEventListener("click", function () { setDials(!document.body.classList.contains("ortho-dials-on")); });
	wrap.appendChild(b);
	wrap.appendChild(dialKey());
	setTimeout(function () { setDials(dialsOn()); });
	return wrap;
}

// The key: each dial's ink, name, and setting.
export function dialKey() {
	var box = document.createElement("div");
	box.className = "ortho-key";
	DIALS.forEach(function (d) {
		var item = span("ortho-key-item", "");
		item.appendChild(span("ortho-key-ink ow-" + d.key, d.label));
		item.appendChild(span("ortho-key-level", " " + FULL[d.key]));
		box.appendChild(item);
	});
	return box;
}

// Homepage text: today's language, three paragraphs at a time.
export function dailyText() {
	var o = new Ortho(todaysSeed(), FULL);
	return function () { return paragraphs(o); };
}

export function todaysSeed() {
	var d = new Date();
	return d.getFullYear() * 10000 + (d.getMonth() + 1) * 100 + d.getDate();
}

// Homepage line: one sentence from today's language, and more on each call.
export function dailyLine() {
	var o = new Ortho(todaysSeed(), STYLE);
	return function () { return render(o.sentence(6, 8)); };
}

export function mount(el) {
	el.innerHTML =
		'<form class="ortho-controls">' +
		'<label>Seed <input name="seed" inputmode="numeric" pattern="[0-9]*"></label> ' +
		'<button type="submit">New language</button> ' +
		'<button type="button" name="more">↻ More</button>' +
		'</form><div class="ortho-out" aria-live="polite"></div>';
	el.insertBefore(dialToggle(), el.querySelector(".ortho-out"));
	var form = el.querySelector("form");
	var out = el.querySelector(".ortho-out");
	var o, log;

	function start(seed) {
		form.seed.value = seed;
		o = new Ortho(seed, FULL);
		log = listen(o);
		more();
	}
	function more() {
		out.textContent = "";
		o.newSection();
		for (var i = 0; i < 3; i++) {
			var p = document.createElement("p");
			log.length = 0;
			var words = o.paragraph(4 + o.rng.below(3), 12, 8);
			p.appendChild(markParagraph(o, words, log.slice()));
			out.appendChild(p);
		}
	}
	form.addEventListener("submit", function (e) {
		e.preventDefault();
		var n = parseInt(form.seed.value, 10);
		start(isNaN(n) ? Math.floor(Math.random() * 4294967296) : n >>> 0);
	});
	form.more.addEventListener("click", more);
	start(todaysSeed());
}

// Placeholder text for a project without its own yet. The project id is the
// seed, so the same project always gets the same stand-in words.
export function filler(id) {
	var seed = 2166136261;
	for (var i = 0; i < id.length; i++) seed = Math.imul(seed ^ id.charCodeAt(i), 16777619) >>> 0;
	var o = new Ortho(seed, STYLE);
	return {
		sentence: function () { return render(o.sentence(8, 8)); },
		paragraphs: function (n) { return o.page(n).map(function (p) { return render(p); }); }
	};
}
