self.addEventListener("push", function (event) {
  event.waitUntil(
    self.registration.showNotification("TITULO DA MENSAGEM", {
      body: "TEXTO DA MENSAGEM",
      icon: "ICONE DA MENSAGEM",
    })
  );
});
