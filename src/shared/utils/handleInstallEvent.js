export const handleInstallEvent = (event) => {
  const CACHE_NAME = "api-cache-v1";

  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("asdad");
      cache.addAll([
        // List the URLs of API endpoints you want to cache
        "/api/play",
      ]);
    })
  );
};
