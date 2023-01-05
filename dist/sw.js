// модуль работы Service Worker

const cacheName = "app_cache_09b887f6-968a-4357-8149-02c1355ebaea"; // имя кэша приложения

// установка и открытие кэша
self.addEventListener("install", (e) => {
    e.waitUntil(
        caches.open(cacheName).then((cache) => cache.addAll([
            "./",
            "./index.html",
            "./manifest.json",

            "./app_bundle_09b887f6-968a-4357-8149-02c1355ebaea.css",
            "./images/icon_any.png",
            "./images/icon_x48.png",
            "./images/icon_x72.png",
            "./images/icon_x96.png",
            "./images/icon_x128.png",
            "./images/icon_x192.png",
            "./images/icon_x384.png",
            "./images/icon_x512.png",
            "./images/icon.png",

            "./app_bundle_09b887f6-968a-4357-8149-02c1355ebaea.js"
        ])),
    );
});

// считывание файлов приложения из кэша или из сети
self.addEventListener("fetch", function (event) 
{ 
    event.respondWith((async () => 
    {
        const cachedResponse = await caches.match(event.request);
        if (cachedResponse) {
          return cachedResponse;
        }
      
        const response = await fetch(event.request);
      
        if (!response || response.status !== 200 || response.type !== "basic") {
          return response;
          
        }
        
        //caches.put(event.request, response.clone()) 
        const cache = await caches.open(cacheName);
        cache.put(event.request,response.clone());
      
        return response;
    })());
});

// активация и очистка старого кэша
self.addEventListener("activate", e =>
{
    e.waitUntil(
        caches.keys().then(keys => Promise.all(
            keys.map(key => {
                if (cacheName !== key) 
                {
                    return caches.delete(key);
                }
            })
        )).then(() => {
            //
        })
    );
});

// получение сообщения на очистку старого кэша и использование нового
self.addEventListener("message", (event) => 
{
    if (event.data === "SKIP_WAITING") 
    {
        self.skipWaiting();
    }
});