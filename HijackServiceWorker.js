self.addEventListener('fetch', function(event) {
  event.respondWith(
    new Response('Hello World!',{
      headers: {'foo' : 'bar'}
    })
  );
});