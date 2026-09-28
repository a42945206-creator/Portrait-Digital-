self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => self.clients.claim());
self.addEventListener('fetch', e => {
  if (e.request.url.includes('firebase') || e.request.url.includes('googleapis')) return;
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
