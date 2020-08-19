mapboxgl.accessToken = 'pk.eyJ1Ijoic3p1bmlnYWYiLCJhIjoiY2tlMXBpd3lxMDFtazJ4cXBtbTlqdGM1aSJ9.HYKB-SSvsP34UzUTi5rUbg';

var map = new mapboxgl.Map({
    container: 'map', // map es el nombre del div donde se desea guardar el mapa                          
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [8.550343, 4.665957], // AQUI PUEDEN UTILIZAR CUALQUIERA DE LAS COORDENADAS DEVUELTAS 
    zoom: 8
});

let values = {
    provincia: "San José",
    canton: "Pérez Zeledón",
    distrito: "San Isidro"
}

const traerParqueos = async () => {
    var request = {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      };
      try {
        let response =  await fetch("/parqueos/buscar/cliente", request)
        parqueos = await response.json()
        arrayParqueos = parqueos.parqueos

        arrayParqueos.forEach(parqueo => {
          const latitud = parqueo.latitud
          const longitud = parqueo.longitud
        });

      } catch(e) {
        console.log(e);
      }
 }
 
 traerParqueos()


new mapboxgl.Marker()
    .setLngLat([8.550343, 4.665957])
    .addTo(map);

var marker2 = new mapboxgl.Marker()
    .setLngLat([8.56, 4.7])
    .addTo(map);
