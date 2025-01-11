emailjs.init("YOUR_USER_ID");

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const form = event.target;

    emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form).then(
      function (response) {
        console.log("Wiadomość wysłana:", response);
        alert("Wiadomość została wysłana!");
      },
      function (error) {
        console.error("Błąd wysyłania wiadomości:", error);
        alert("Coś poszło nie tak. Spróbuj ponownie.");
      }
    );
  });
