//Función para mostrar y ocultar los inputs de agregar
function showAndHideAdd() {
    var add = document.getElementById("add");
    var edit = document.getElementById("edit");
    edit.style.display = "none";
    if (add.offsetWidth > 0 && add.offsetHeight > 0) {
      add.style.display = "none";
    } else {
      add.style.display = "block";
    }
  }
  
  //Función para mostrar y ocultar el espacios de editar
  
  function showAndHideEdit() {
    var add = document.getElementById("add");
    var edit = document.getElementById("edit");
    add.style.display = "none";
    if (edit.offsetWidth > 0 && edit.offsetHeight > 0) {
      edit.style.display = "none";
    } else {
      edit.style.display = "block";
    }
  }
  
  //Validar espacios agregar
  function validateAddSpaces() {
    var validateResult = validateCompany() && validateDiscount("#discountAdd");
    if (validateResult == true) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "El convenio se ha agregado correctamente",
        showConfirmButton: false,
        timer: 2000,
      });
    }
  }
  
  //Validar editar general
  function validateEditInput() {
    var validateResult = validateDiscount("#discountEdit");
    if (validateResult == true) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "El convenio se ha editado correctamente",
        showConfirmButton: false,
        timer: 2000,
      });
    }
  }
  
  //Validar input nombre de la compañía
  function validateCompany() {
    var company = document.querySelector("#company");
    var firstError = "";
    var result = false;
    company.classList.remove("error");
    if (company.value == "") {
      if (firstError == "") {
        firstError = "La empresa no ha sido registrado";
      }
      company.classList.add("error");
    }
    if (firstError != "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: firstError,
        footer: "<a href>Why do I have this issue?</a>",
      });
    } else {
      result = true;
    }
    return result;
  }
  
  //Validar input porcentaje de descuento
  function validateDiscount(elementId) {
    var elementDiscount = document.querySelector(elementId);
    var discountRegex = /^([0-9])*$/;
    var firstError = "";
    var result = false;
  
    elementDiscount.classList.remove("error");
    if (
      elementDiscount.value == "" ||
      !discountRegex.test(elementDiscount.value)
    ) {
      if (firstError == "") {
        firstError = "El monto de descuento no ha sido registrado";
      }
      elementDiscount.classList.add("error");
    }
    if (firstError != "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: firstError,
        footer: "<a href>Why do I have this issue?</a>",
      });
    } else {
      result = true;
    }
    return result;
  }
  
  //Función Eliminar
  
  function deleteIcon() {
    Swal.fire({
      title: "¿Está seguro de que desea eliminar?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Eliminar",
    }).then((result) => {
      if (result.value) {
        Swal.fire("Eliminado", "El convenio ha sido eliminado.", "success");
      }
    });
  }
  