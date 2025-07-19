const CACHE_NAME = 'fashion-form-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/styles-combined.min.css',
  '/scripts-combined.min.js',
  '/critical.css'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
