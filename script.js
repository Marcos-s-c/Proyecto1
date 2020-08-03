
function getPageNodes(){
    return{
        firstFormInputs: document.getElementById('form-input'),
        nextButton: document.getElementById('next-button'),
        formContainer: document.getElementById('form-container'),
        firstForm: document.getElementById('first-form'),
        secondForm: document.getElementById('')
    }
}

function replaceForm(){
    const newForm = '<div class="second form" id="secondForm"><h3>Solicitud de registro</h3><input type="text" id="parking-name" class="form-input" placeholder="Nombre del parqueo"><div class="address-box"><select id="provincias"><option>Provincias</option></select><select id="cantones"><option>Cantones</option></select><select id="distritos"><option>Distritos</option></select></div><input type="text" id="complete-address" class="form-input" placeholder="Dirección exacta"><div class="mall-box"><input type="text" id="mall-name" class="form-input" placeholder="Centro comercial"><p>*Opcional</p></div><button type="button" id="send-button"><a href="#">Enviar</a></button><div/>'
    getPageNodes().formContainer.removeChild(getPageNodes().firstForm);
    getPageNodes().formContainer.insertAdjacentHTML('afterbegin', newForm)
}



