// APP_VERSION: __VERSION__
const CACHE = 'kathapetti-__VERSION__';
const ASSETS = ['./','./index.html','./icon-192.svg','./icon-512.svg','./icon-maskable.svg','./manifest.json'];

self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Network first for HTML, cache first for everything else
self.addEventListener('fetch', e => {
  const isHTML = e.request.headers.get('accept')?.includes('text/html');
  if(isHTML){
    e.respondWith(
      fetch(e.request)
        .then(res => {
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
          return res;
        })
        .catch(() => caches.match(e.request))
    );
  } else {
    e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
  }
});

// Tell all open tabs to reload when a new SW takes over
self.addEventListener('message', e => {
  if(e.data === 'skipWaiting') self.skipWaiting();
});
