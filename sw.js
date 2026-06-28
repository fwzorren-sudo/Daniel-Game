// Daniel-saurus Rawr! — offline service worker
const CACHE = 'daniel-saurus-v2';
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

// stale-while-revalidate: serve the cached copy instantly (works offline), and
// refresh it from the network in the background so the next launch is current.
// (GitHub Pages sends ETags, so the background check is a cheap 304 when nothing
// changed, and only re-downloads when the game has actually been updated.)
self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  if (new URL(e.request.url).origin !== location.origin) return; // leave cross-origin alone
  e.respondWith(
    caches.open(CACHE).then((cache) =>
      cache.match(e.request).then((cached) => {
        const fromNet = fetch(e.request).then((resp) => {
          if (resp && resp.ok) cache.put(e.request, resp.clone());
          return resp;
        }).catch(() => cached || cache.match('./index.html'));
        return cached || fromNet; // instant cache when we have it; otherwise wait for network
      })
    )
  );
});
