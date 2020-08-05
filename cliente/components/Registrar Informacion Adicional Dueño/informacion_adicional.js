

function validar() {
  var username = document.getElementById("username");
  var birthday = document.getElementById("birthdate");
  var fotosParqueo = document.getElementById("fotosparqueo");
  if (valiteBlanks([username,birthday, fotosParqueo])) {
    return window.location.href =
      '/cliente/components/modificarPerfil/modificarPerfil.html';
  } else {
    return false;
  }
}


