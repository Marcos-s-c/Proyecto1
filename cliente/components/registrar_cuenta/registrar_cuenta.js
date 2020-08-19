

async function getParkingForm(){
    const resp = fetch('http://localhost:4040/cliente/components/registrar_cuenta.html')
    window.location.href = 'http://localhost:4040/cliente/components/registrar_cuenta.html';
}