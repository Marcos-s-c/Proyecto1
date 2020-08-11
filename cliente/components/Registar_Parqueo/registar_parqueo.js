var firstFormValues = {};

function getPageNodes() {
  return {
    firstFormInputs: document.getElementById("form-input"),
    nextButton: document.getElementById("next-button"),
    formContainer: document.getElementById("form-container"),
    firstForm: document.getElementById("first-form"),
    secondForm: document.getElementById(""),
  };
}

function replaceForm() {
  var ownersName = document.querySelector("#name");
  var usersId = document.querySelector("#user-id");
  var email = document.querySelector("#email");
  var dateOfBirth = document.querySelector("#birth-date");

  firstFormValues = {
    ownersName: ownersName.value,
    usersId: usersId.value,
    email: email.value,
    dateOfBirth: dateOfBirth.value,
  };
  const newForm =
    '<div class="second form" id="secondForm"><h3>Solicitud de registro</h3><input type="text" id="parking-name" class="form-input" placeholder="Nombre del parqueo"><div class="address-box"><select id="provincias"><option>Provincias</option></select><select id="cantones"><option>Cantones</option></select><select id="distritos"><option>Distritos</option></select></div><input type="text" id="complete-address" class="form-input" placeholder="Dirección exacta"><div class="mall-box"><input type="text" id="mall-name" class="form-input" placeholder="Centro comercial"><p>*Opcional</p></div><button type="button" id="send-button" onclick="saveRequest()"><a href="#">Enviar</a></button><div/>';
  getPageNodes().formContainer.removeChild(getPageNodes().firstForm);
  getPageNodes().formContainer.insertAdjacentHTML("afterbegin", newForm);
}

function saveRequest() {
  console.log("enviando datos");
  var parkingName = document.querySelector("#parking-name");
  var address = document.querySelector("#complete-address");
  var shoppingCenter = document.querySelector("#mall-name");

  var values = {
    ownersName: firstFormValues.ownersName,
    usersId: firstFormValues.usersId,
    email: firstFormValues.email,
    dateOfBirth: firstFormValues.dateOfBirth,
    parkingName: parkingName.value,
    address: address.value,
    shoppingCenter: shoppingCenter.value,
  };

  var request = {
    method: "POST",
    body: JSON.stringify(values),
    headers: {
      "Content-Type": "application/json",
    },
  };

  fetch("http://127.0.0.1:4040/solicitud_parqueo/guardar", request)
    .then(function (data) {
      console.log(data);
    })
    .catch(function (error) {
      console.log(error);
    });
}
