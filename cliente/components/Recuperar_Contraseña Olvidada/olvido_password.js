function sendEmail() {
  var validateResult = validateEmptySpaces();
  if (validateResult == true) {
    window.location =
      "/cliente/components/envio_correo_olvido_password/envio_correo_olvido_password.html";
  }
}
function validateEmptySpaces() {
  var result = false;
  var email = document.querySelector("#email");
  regexCorreo = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  if (email.value == "" || !regexCorreo.test(email.value)) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "El correo no ha sido registrado",
      footer: "<a href>Why do I have this issue?</a>",
    });
    email.classList.add("error");
  } else {
    result = true;
  }
  return result;
}
