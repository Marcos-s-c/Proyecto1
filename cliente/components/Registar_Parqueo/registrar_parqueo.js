const formContainer = document.getElementById('form-container');

var data = {
  password : Math.random().toString(36).slice(-8),
};

setParkingValues();

function getUserValues(){
  data.ownersName = document.getElementById('name').value;
  data.usersId = document.getElementById('user-id').value;
  data.email = document.getElementById('email').value;
  data.dateOfBirth = document.getElementById('birth-date').value;

}

function setParkingValues(){
  data.state = "Pendiente",
  data.parkingName = document.getElementById('parking-name').value,
  data.provincia = document.getElementById('provincias').value,
  data.canton =  document.getElementById('cantones').value,
  data.distrito =  document.getElementById('distritos').value,
  data.address = document.getElementById('full-address').value,
  data.shoppingCent = document.getElementById('mall-name').value,
  data.latitud = document.getElementById('latitud').value,
  data.longitud = document.getElementById('longitud').value
}

// remueve el form de parqueo
function displayUserForm(){
  const userForm = '<div class="first form" id="user-form"><h3>Solicitud de registro</h3><input type="text"id="name"class="form-input"name="ownerName" placeholder= "Nombre físico o jurídico" required /><input type="number" id="user-id" class="form-input" placeholder="Cédula física o jurídica" required /><input type="email" id="email" class="form-input" placeholder="Correo electrónico" required /><div class="birth-date-box"><input type="date" id="birth-date" class="form-input" placeholder="Fecha de nacimiento" /><p>*Opcional</p></div><div class="buttons"><button type="button" onclick="displayParkingForm()">Atras</button><button type="button" id="send-button" onclick="saveRequest()">Enviar</button></div>';
    formContainer.removeChild(document.getElementById('parking-form'));
    formContainer.insertAdjacentHTML("afterbegin", userForm);
}

// remueve el form de usuario
function displayParkingForm() {
  const parkingForm =
    '<div class="second form" id="parking-form"><h3>Solicitud de registro</h3><input type="text" id="parking-name" class="form-input" placeholder="Nombre del parqueo"><div class="address-box"><select id="provincias"><option>Provincia</option></select><select id="cantones"><option>Cantón</option></select><select id="distritos"><option>Distrito</option></select></div><input type="text" id="full-address" class="form-input" placeholder="Dirección exacta"><div class="mall-box"><input type="text" id="mall-name" class="form-input" placeholder="Centro comercial"><p>*Opcional</p></div><div class="coordenadas-box"><p>Coordenadas</p><input type="Number" placeholder="Latitud" id="latitud" class="coordenada"><input type="Number" placeholder="Longitud" id="longitud" class="coordenada"></div><button type="button" id="next-button" onclick="displayUserForm()">Siguiente</button><div/>';
    formContainer.removeChild(document.getElementById('user-form'));
    formContainer.insertAdjacentHTML("afterbegin", parkingForm);
}


async function saveRequest() {
  getUserValues();

  try{
    var response = await fetch('/solicitud_parqueo/guardar', {
      method: "POST",
      body: JSON.stringify(data),
      headers: {"Content-Type": "application/json"}
    });
    var solicitud = await response.json();
    notifyAdmin(solicitud, "Solicitud de registro de parqueo", '../../cliente/assets/plantillas-correos/solicitud_parqueo.html');
  }
  catch(error){
    console.log(error);
  }

};








/*function clearInputFields() {
  document.getElementById('first-form').reset();
}
function init() {
  clearInputFields();
}


init();*/
