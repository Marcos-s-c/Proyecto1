

var birthdate = document.getElementById("birthdate").value = "1990-01-02";




function validar() {
    var birthdate = document.getElementById("birthdate").value = "1990-01-02";
    var edad = document.getElementById("edad").value = "30";
    var username = document.getElementById("username");
    var avatar = document.getElementById("avatar");
    var fotosParqueo = document.getElementById("fotosparqueo")
    if (valiteBlanks([birthdate,edad,username,avatar,fotosParqueo])) {
      window.location.href = '/cliente/components/buscarParqueo/buscarParqueo.html';
    } else {
      return false;
    }
  }
  

