import { consultarCanciones } from "../services/servicioCanciones";
import { useState, useEffect } from "react";
export function Music() {
  const [canciones, setCanciones] = useState(null);
  const [estacargando, setEstacargando] = useState(true);
  useEffect(function () {
   consultarCanciones().then(function (respuesta) {
        
      setCanciones(respuesta.tracks);
      setEstacargando(false);
    });
  }, []);

  if (estacargando) {
    return (
      <>
        <h1>Esta cargando</h1>
      </>
    );
  } else {
    return (
      <>
        
        <div className="row row-cols-1 row-cols-md-3 g-5">
        {
            
        canciones.map(function (cancion) {
          return(
            <div>
              
                <div className="col">
                  
                    <div className="card h-100 shadow">
                        {console.log(cancion)}
                        <h3 className="text-center fw-bold">nombre:{cancion.name}</h3>
                        <img src={cancion.foto} alt="" className="img-fluid w-100"/>
                        <audio src={cancion.preview_url} controls className="w-100"></audio>
                        <h4 className="text-center">nombre del album: {cancion.name}</h4>
                        <h5 className="text-center">Duracion:{cancion.duration_ms} mili segundos</h5>
                        <h5 className="text-center">popularidad:{cancion.popularity}M</h5>
                      <center><img src="https://i.scdn.co/image/ab67616d0000b273b4ad7ebaf4575f120eb3f193" width={300}  margin-left={50} height={300} alt="" /></center>  
                        
                    </div>
                </div>
            </div>
            
          ) ;
        })}
        </div>
      </>
      
    );
  }
}
