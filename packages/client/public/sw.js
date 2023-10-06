const CACHE_NAME = 'cache-name-v1';

const URLS = [
  '/',
  '/src/Apple.png',
  '/src/images/avatar.png',
  '/src/images/game_over.png',
  '/src/images/logo_login.png',
  '/src/images/logo.png',
  '/src/images/robot.png',
];

function timeout(delay) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      reject(
        new Response('', {
          status: 408,
          statusText: 'Request timed out.',
        }),
      );
    }, delay);
  });
}

self.addEventListener('install', (event) => {
  console.log('install');
  self.skipWaiting();
  event
    .waitUntil(
      caches.open(CACHE_NAME).then((cache) => {
        cache.addAll(URLS); //загрузка тяжелых данных (дополнительные данные)
        return cache.addAll(URLS); //вернет важные данные в метод waitUntil (необходимые данные)
      }),
    )
    .catch((err) => console.log(err));
});

self.addEventListener('fetch', function (event) {
  const request = event.request;

  if (request.method === 'GET') {
    event.respondWith(
      caches.open(CACHE_NAME).then(function (cache) {
        return Promise.race([timeout(300), fetch(event.request)])
          .then(function (response) {
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            cache.put(event.request, response.clone());
            return response;
          })
          .catch(() => {
            return caches.match(event.request).then(function (response) {
              if (response) {
                return response;
              }
            });
          });
      }),
    );
  } else {
    event.respondWith(fetch(request));
  }
});

self.addEventListener('activate', function (event) {
  console.log('activate');
  if (self.clients && clients.claim) {
    clients.claim();
  }
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => {
            return name !== CACHE_NAME;
          })
          .map((name) => caches.delete(name)),
      );
    }),
  );
});
