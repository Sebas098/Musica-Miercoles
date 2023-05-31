export async function consultarCanciones() {
  //RECETA PARA CONSUMIR APIS CON JS

  //1. PA' ONDE VAS OME
  //URL+EP DEL SERVICIO

  const IDARTISTA ="6XyY86QOPPrYVGvF9ch6wz"
  const URI=`https://api.spotify.com/v1/artists/${IDARTISTA}/top-tracks?market=us`
  const TOKEN ="Bearer BQCMHgTc9qCMxOP4elxWA4IQhNgGGf1ezGNX3yLB9g0rBYxAG_sndXP9gKZrSKd-ue9Yiyb8_8DoiYZUAuZvnvXYofhMZFINEXw5pFtA_2StvH7dcc8"

  //2. QUE VAS A HACER ALLA OME...
  //CONFIGURO LA PETICION
  let peticion = { 
    method: "GET", 
    headers: { "Authorization": TOKEN },
 
}

//3.PIDA EL TAXI
//utilice la promesa FETCH para ir al back y consumir el API
let respuesta=await fetch(URI,peticion)
let canciones=await respuesta.json()
return canciones
}
