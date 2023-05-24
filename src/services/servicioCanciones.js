export async function consultarCanciones() {
  //RESETA PARA CONSUMIR APIS CON JS

  //1. PA' ONDE VAS OME
  //URL+EP DEL SERVICIO

  const IDARTISTA = "4q3ewBCX7sLwd24euuV69X ";
  const URI = `https://api.spotify.com/v1/artists/4q3ewBCX7sLwd24euuV69X/top-tracks?market=us`
  const TOKEN ="Bearer BQBKJh1-jxAPMFUGMqK0VmpR7TJujtEkMpHeBHmRRduNJNpTjwRVUEL2zFilOtaMi31HTr9hlVIitkdcfEmi5MTdUA9bF1w0aOlGhEGrG2rbW3G5RCM  ";

  //2. QUE VAS A HACER ALLA OME...
  //CONFIGURO LA PETICION
  let peticion = { 
    method: "GET", 
    headers: { Authorization: TOKEN },
 
}

//3.PIDA EL TAXI
//utilice la promesa FETCH para ir al back y consumir el API
let respuesta=await fetch(URI,peticion)
let canciones=await respuesta.json()
console.log(canciones)
return canciones
}
