// キャッシュ名
const CACHE_NAME = 'ec-game-v1';

// キャッシュするファイル
const urlsToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/game.js'
];

// インストール時
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// リクエスト時
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
