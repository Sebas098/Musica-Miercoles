import axios from "axios"   
export async function consultarCancionesConAxios(){

    //URI=URL+EP DEL SERVICIO
    const IDARTISTA = "6M2wZ9GZgrQXHCFfjv46we"
    const URI = `https://api.spotify.com/v1/artists/${IDARTISTA}/top-tracks?market=us`

    const TOKEN ="Bearer BQCaf_iXzvuVG8pTBI63vLrX0fOvKp6ig6LhfsEsgBWu8bWiCsaa8w3wha1rguFx90h-lxH2bn7A2iv9VfxUDwIucCzl6svAngGPc7Iff0GKYwnuJNk ";

    //CONSTRUYO LA PETICION 
    const PETICION={
        method:"GET",
        Headers:{
            "Authorization":TOKEN
        }
    }
   

    //ORDENAR MI RESPUESTA
    try{

 //UTILIZAMOS LA PROMESA ENCARGADA DE CONSUMIR EL API
 let respuesta=await axios.get(URI,PETICION)
 let canciones=respuesta.data
 return canciones
    }catch(error){
        throw new Error("upsss fallamos"+error)
    }
}