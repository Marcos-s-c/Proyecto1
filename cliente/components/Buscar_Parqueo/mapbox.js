mapboxgl.accessToken = 'pk.eyJ1Ijoic3p1bmlnYWYiLCJhIjoiY2tlMXBpd3lxMDFtazJ4cXBtbTlqdGM1aSJ9.HYKB-SSvsP34UzUTi5rUbg';

var map = new mapboxgl.Map({
  container: 'map', // map es el nombre del div donde se desea guardar el mapa                          
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-84.1165, 10.0024 ], // AQUI PUEDEN UTILIZAR CUALQUIERA DE LAS COORDENADAS DEVUELTAS 
  zoom: 8
});

const traerParqueos = async () => {
  if (provinciasSelect.value == "Provincia" || cantonesSelect.value == "Cantón" || cantonesSelect.value == "Distrito") {
    return true;
  }

  let values = {
    provincia: provinciasSelect.options[provinciasSelect.value].text,
    canton: cantonesSelect.options[cantonesSelect.value].text,
    distrito: distritosSelect.value
  }

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

    let markers = []
    arrayParqueos.forEach(parqueo => {
      const latitud = parqueo.latitud
      const longitud = parqueo.longitud

      if (latitud && longitud) {
        markers.push(new mapboxgl.Marker()
          .setLngLat([longitud, latitud])
          .addTo(map))
      }

    });

    geocode("Costa Rica " + values.provincia + " " +  values.canton + " " +  values.distrito)

  } catch (e) {
    console.log(e + "El error");
  }
}

traerParqueos()


const geocode = async (address) => {
  const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoic3p1bmlnYWYiLCJhIjoiY2tlMXBpd3lxMDFtazJ4cXBtbTlqdGM1aSJ9.HYKB-SSvsP34UzUTi5rUbg&limit=1';

  console.log(url)
  try {
    let geoCodeResponse = await fetch(url)
    geoCodeResponse = await geoCodeResponse.json()
    const latitud = geoCodeResponse.features[0].center[1]
    const longitud = geoCodeResponse.features[0].center[0]

    console.log(latitud + " " +  longitud)

    map.flyTo({
      center: [
        longitud,
        latitud
      ],
      zoom: 12,
      essential: true 
    });

  } catch (e) {
    console.log("Error al utilizar el servicio de GEOCODE")
  }
}
