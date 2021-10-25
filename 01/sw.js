const CACHE_ELEMENTS = [
    "./",
    "./componentes/Contador.js",
    "https://unpkg.com/axios/dist/axios.min.js",
    "https://unpkg.com/@babel/standalone/babel.min.js",
    "https://unpkg.com/react@17/umd/react.development.js",
    "https://unpkg.com/react-dom@17/umd/react-dom.development.js",
];

const CACHE_NAME = "v1_cache_contador_react";

self.addEventListener("install", (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            cache
                .addAll(CACHE_ELEMENTS)
                .then(() => {
                    self.skipWaiting();
                })
                .catch((error) => {
                    console.log(error);
                });
        })
    );
});

self.addEventListener("activate", (e) => {
    const cacheWhitelist = [CACHE_NAME];

    e.waitUntil(
        caches.keys().then((cachesNames) => {
            return Promise.all(
                cachesNames.map((cachename) => {
                    return (
                        cacheWhitelist.indexOf(cachename) === -1 && caches.delete(cachename)
                    );
                })
            );
        }).then(() => { self.clients.claim() })
    );
});


self.addEventListener("fetch", (e) => {
    e.respondeWith(() => {
        caches.match(e.request).then((res) => (res ? res : fetch(e.request)));
    });
});