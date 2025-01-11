if (!localStorage.getItem("cookiesAccepted")) {
  document.getElementById("cookies-popup").style.display = "block";
}

document
  .getElementById("accept-cookies")
  .addEventListener("click", function () {
    document.getElementById("cookies-popup").style.display = "none";

    localStorage.setItem("cookiesAccepted", "true");
  });
