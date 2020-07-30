function validar() {
  var loginEmail = document.getElementById("loginEmail");
  var loginPassword = document.getElementById("loginPassword");
  if (valiteBlanks([loginEmail, loginPassword])) {
    return validateEmail(loginEmail.value);
  } else {
    return false;
  }
}
