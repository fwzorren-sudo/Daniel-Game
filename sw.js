// Daniel-saurus Rawr! — offline service worker
const CACHE = 'daniel-saurus-v3';
const ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icon-192.png',
  './icon-512.png',
  './icon-maskable-512.png',
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Network-first for the page itself, so updates ALWAYS show when online; the
// cache is only the offline fallback. Static assets (icons/manifest) are
// cache-first since they rarely change. This avoids "I pushed an update but
// still see the old version" — the live HTML is fetched fresh every online load
// (cheap 304 from GitHub when unchanged), and offline still works from cache.
self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  if (new URL(e.request.url).origin !== location.origin) return; // leave cross-origin alone
  const isDoc = e.request.mode === 'navigate' || e.request.destination === 'document';
  if (isDoc) {
    e.respondWith(
      fetch(e.request).then((resp) => {
        if (resp && resp.ok) { const copy = resp.clone(); caches.open(CACHE).then((c) => c.put(e.request, copy)); }
        return resp;
      }).catch(() => caches.match(e.request).then((r) => r || caches.match('./index.html')))
    );
  } else {
    e.respondWith(
      caches.match(e.request).then((hit) =>
        hit || fetch(e.request).then((resp) => {
          if (resp && resp.ok) { const copy = resp.clone(); caches.open(CACHE).then((c) => c.put(e.request, copy)); }
          return resp;
        }).catch(() => undefined)
      )
    );
  }
});
