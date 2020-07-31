/*Función para mostrar y ocultar los inputs de agregar*/
function showAddSpaces() {
  var add = document.getElementById("add");

  if (add.offsetWidth > 0 && add.offsetHeight > 0) {
    add.style.display = "none";
  } else {
    add.style.display = "block";
  }
}
