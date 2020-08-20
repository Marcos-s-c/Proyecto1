
const provinciasSelect = document.getElementById('provincias');
const cantonesSelect = document.getElementById('cantones');
const distritosSelect = document.getElementById('distritos');

async function traerProvincias(){
    try{
        const resp = await fetch('https://ubicaciones.paginasweb.cr/provincias.json')
        const provincias = await resp.json();
        for (const provincia in provincias) {
            const option = document.createElement('option');
            option.value = provincia;
            option.innerHTML = provincias[provincia];
            provinciasSelect.appendChild(option);
        }
    }
    catch(error){
        console.log(error)
    }
}

async function traerCantones(num){

    try{
        const resp = await fetch(`https://ubicaciones.paginasweb.cr/provincia/${num}/cantones.json`)
        const cantones = await resp.json();
        
        for (const canton in cantones) {
            const option = document.createElement('option');
            option.value = canton;
            option.innerHTML = cantones[canton];
            cantonesSelect.appendChild(option);
        }
    }
    catch(error){
        console.log(error)
    }
}

async function traerDistritos(prov, cant){

    try{
        const resp = await fetch(`https://ubicaciones.paginasweb.cr/provincia/${prov}/canton/${cant}/distritos.json`)
        const distritos = await resp.json();
        for (const distrito in distritos) {
            const option = document.createElement('option');
            option.value = distritos[distrito];
            option.innerHTML = distritos[distrito];
            distritosSelect.appendChild(option);
        }
    }
    catch(error){
        console.log(error)
    }
}

provinciasSelect.addEventListener("change", function() {
    traerCantones(provinciasSelect.value)
});
cantonesSelect.addEventListener("change", function() {
    traerDistritos(provinciasSelect.value, cantonesSelect.value)
});
traerProvincias();