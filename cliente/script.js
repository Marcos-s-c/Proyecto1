

/*function getRegisterParkingNodes(){
    return{
        firstFormInputs: document.getElementById('form-input'),
        nextButton: document.getElementById('next-button'),
        firstForm: document.getElementById('first')
    }
}

function replaceForm(){
    const newForm = '<div class="secondForm"><input type="text" id="parking-name" class="form-input" placeholder="Nombre del parqueo"><div class="address-box"><select id="provincias"><option>Provincias</option></select><select id="cantones"><option>Cantones</option></select><select id="distritos"><option>Distritos</option></select></div><input type="text" id="complete-address" class="form-input" placeholder="Dirección exacta"><div class="mall-box"><input type="text" id="mall-name" class="form-input" placeholder="Centro comercial"><p>*Opcional</p></div></div>'
    getRegisterParkingNodes().firstForm.classList.add('')
    })

}
*/


function displayDropMenu() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }