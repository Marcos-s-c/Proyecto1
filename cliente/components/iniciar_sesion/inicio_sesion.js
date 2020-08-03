function validar() {
    var loginEmail = document.getElementById("loginEmail");
    var loginPassword = document.getElementById("loginPassword");
  
    if (valiteBlanks([loginEmail, loginPassword])) {
      if (validateEmail(loginEmail.value)) {
          window.location.href = '/cliente/components/buscarParqueo/buscarParqueo.html';
      } else {
          return false;
      }
    } else {
      return false;
    }
  
  }