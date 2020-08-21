var date = new Date();

async function registerUser() {
  var data = {
    name: document.getElementById("userName").value,
    idType: document.getElementById("userId-type").value,
    userID: document.getElementById("userID").value,
    birthDate: document.getElementById("birthDate").value,
    phoneNumber: document.getElementById("phoneNumber").value,
    password: Math.random().toString(36).slice(-8),
    email: document.getElementById('email').value,
  };
  try {
    if(data.idType == 'fisica'){
      data.rol = "cliente";
      await fetch('/personas', { 
        method: 'POST', 
        body: JSON.stringify(data), 
        headers: { 'Content-Type': 'application/json' } })     
      await sendEmail(data, "Confirmación de correo");
      window.location.href = "/";
      
    }else{
      data.rol = "empresa";
      await fetch('/empresas', {
        method: 'POST', 
        body: JSON.stringify(data), 
        headers: { 'Content-Type': 'application/json' } })     
      await sendEmail(data, "Confirmación de correo", '../../cliente/assets/plantillas-correos/verificar_cliente.html');  
      window.location.href = "/";
    }
  } catch (e) {
    console.log(e + "");
  }
}

///////////////////////////////////////////////////////////////////////
function verifyAge() {
  if (data.birthDate - date.getDate >= 18) {
    return true;
  } else {
    return false;
  }
}

function validateBlanks(obj) {
  var completed = true;
  for (var key in obj) {
    if (obj[key] === "") {
      console.log(key);
      document.getElementById(key).classList.remove("regular-input");
      document.getElementById(key).classList.add("red-input");
      completed = false;
    }
  }
  return completed;
}

function clearInputFields() {
  document.getElementById("register-form").reset();
}
function init() {
  clearInputFields();
}

init();

/*let fieldsCompleted = await validateBlanks(data);
  let adult = await verifyAge();

  if(fieldsCompleted == false){
    Swal.fire("Hay espacios en blanco sin completar");
  }else if(adult == false){
    console.log("no es mayor de edad");
    /*
    document.getElementById('error-msg').classList.remove('hidden');
    document.getElementById('error-msg').classList.add('visible');
  }else{*/
