// Ortho experiment: a seed names a language; ↻ draws more of it.
import { Ortho, render } from "../vendor/ortho/index.js";

var STYLE = { preset: 0.45 };
// All seven dials on, for fuller text: recurring phrases, grammar words, a
// subject, names, commas, quotations, and scare quotes.
var FULL = { phrases: 0.35, functionWords: 0.5, topics: 0.35, names: 0.3, commas: 0.5, quotation: 0.25, scareQuotes: 0.2 };

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
	var form = el.querySelector("form");
	var out = el.querySelector(".ortho-out");
	var o;

	function start(seed) {
		form.seed.value = seed;
		o = new Ortho(seed, FULL);
		more();
	}
	function more() {
		out.textContent = "";
		paragraphs(o).forEach(function (t) {
			var p = document.createElement("p");
			p.textContent = t;
			out.appendChild(p);
		});
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
