// Ortho experiment: a seed names a language; ↻ draws more of it.
import { Ortho, render } from "../vendor/ortho/index.js";

var STYLE = { preset: 0.45 };

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
		o = new Ortho(seed, STYLE);
		more();
	}
	function more() {
		out.textContent = "";
		o.page(3).forEach(function (para) {
			var p = document.createElement("p");
			p.textContent = render(para);
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
