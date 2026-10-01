// Lets the site be installed and read offline.
// Pages, scripts and styles: always fetched fresh when online, so updates show
// at once; the copy saved last time is used only when there's no connection.
// Pictures and the chart library: saved the first time they're seen and reused.
// Other sites (museum pictures, the visit counter) are left alone.
var CACHE = "site-v1";
var OFFLINE = "offline.html";

self.addEventListener("install", function (e) {
	e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(["./", OFFLINE, "assets/icons/icon.svg"]); }));
	self.skipWaiting();
});

self.addEventListener("activate", function (e) {
	e.waitUntil(caches.keys().then(function (keys) {
		return Promise.all(keys.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
	}).then(function () { return self.clients.claim(); }));
});

function keep(req, res) {
	if (res && (res.ok || res.type === "opaque")) {
		var copy = res.clone();
		caches.open(CACHE).then(function (c) { c.put(req, copy); });
	}
	return res;
}

self.addEventListener("fetch", function (e) {
	var req = e.request;
	if (req.method !== "GET") return;
	var url = new URL(req.url);
	var local = url.origin === self.location.origin;
	var library = url.hostname === "cdn.jsdelivr.net";
	if (!local && !library) return;

	if (library || req.destination === "image") {
		e.respondWith(caches.match(req).then(function (hit) {
			return hit || fetch(req).then(function (res) { return keep(req, res); });
		}));
		return;
	}
	e.respondWith(fetch(req).then(function (res) { return keep(req, res); }).catch(function () {
		return caches.match(req, { ignoreSearch: req.mode === "navigate" }).then(function (hit) {
			return hit || (req.mode === "navigate" ? caches.match(OFFLINE) : Response.error());
		});
	}));
});
