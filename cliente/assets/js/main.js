// valida los espacios en blanco de los elementos ingresados en el parametro
function valiteBlanks(elements) {
  console.log("entra");
  for (var key in elements) {
    var element = elements[key];
    if (element.value === "") {
      Swal.fire("Hay espacios en blanco sin completar");
      return false;
    }
  }
  return true;
}

// validar si el formato del email es corrento por medio de parametro
function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(String(email).toLowerCase())) {
    return true;
  } else {
    Swal.fire("Formato del correo no es correcto");
    return false;
  }
}

// MENU INICIAR SESION  Y CERRAR SESION
function displayDropMenu() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
