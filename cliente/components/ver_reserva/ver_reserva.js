const cancel = document.querySelector('#cancel');
const info = document.querySelector('#info');
const botonDos = document.querySelector('#botonDos');
const botox = document.querySelector('#botox');
const botonUno = document.querySelector('#botonUno');
const botonTres = document.querySelector('#botonTres');

boton.addEventListener('click', () => {
    Swal.fire({
        title: 'Esta de seguro de cancelar?',
        text: "!Puede perder su espacio!!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, abandonar reserva'
      }).then((result) => {
        if (result.value) {

            document.getElementById("cancel").innerHTML="";
            info.classList.toggle('active')

            /*cancel.classList.toggle('active');*/
            
          Swal.fire(
            'Eliminado',
            '!Su reserva ha sido eliminada!',
            'success'
            
          )
        }   

      })
});

botonDos.addEventListener('click', () => {

  document.getElementById("botox").innerHTML="";
  botonTres.classList.toggle('active');

});

var alink = document.createElement("a"); alink.href = "http://www.google.com"; alink.text = "Test Link"; document.getElementsByTagName("body")[0].appendChild(alink) 