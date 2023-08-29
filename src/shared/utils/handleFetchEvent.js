export const handleFetchEvent = (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      console.log(response);
      // Return cached response if available, otherwise fetch from network
      return response || fetch(event.request);
    })
  );
};
