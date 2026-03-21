self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('portal-estado-v1').then(cache => cache.addAll([
      './',
      './index.html',
      './logo.png',
      './manifest.webmanifest'
    ]))
  );
});
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
