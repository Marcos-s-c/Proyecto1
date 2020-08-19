mapboxgl.accessToken = 'pk.eyJ1Ijoic3p1bmlnYWYiLCJhIjoiY2tlMXBpd3lxMDFtazJ4cXBtbTlqdGM1aSJ9.HYKB-SSvsP34UzUTi5rUbg';

var map = new mapboxgl.Map({
  container: 'map', // map es el nombre del div donde se desea guardar el mapa                          
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-84.100814, 9.932318], // AQUI PUEDEN UTILIZAR CUALQUIERA DE LAS COORDENADAS DEVUELTAS 
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
    let response = await fetch("/parqueos/buscar/cliente", request)
    parqueos = await response.json()
    arrayParqueos = parqueos.parqueos

    // map.fitBounds([
    //   [-84.098574,9.938277],
    //   [-84.100814, 9.932318]
    // ]);

    arrayParqueos.forEach(parqueo => {
      const latitud = parqueo.latitud
      const longitud = parqueo.longitud

      if (latitud && longitud) {
        new mapboxgl.Marker()
          .setLngLat([longitud, latitud])
          .addTo(map);
      }

    });

  } catch (e) {
    console.log(e);
  }
}

traerParqueos()


// new mapboxgl.Marker()
//   .setLngLat([-84.100814, 9.932318])
//   .addTo(map);

// var marker2 = new mapboxgl.Marker()
//   .setLngLat([-84.098574, 9.938277])
//   .addTo(map);
