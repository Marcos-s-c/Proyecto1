function validateEmptySpaces() {
  var email = document.querySelector("#email");
  regexCorreo = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  if (email.value == "" || !regexCorreo.test(email.value)) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "El correo no ha sido registrado",
      footer: "<a href>Why do I have this issue?</a>",
    });
  }
  email.classList.add("error");
}
