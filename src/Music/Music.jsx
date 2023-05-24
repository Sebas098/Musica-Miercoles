import { consultarCanciones } from "../services/servicioCanciones";
import { useState, useEffect } from "react";
export function Music() {
  const [canciones, setCanciones] = useState(null);
  const [estacargando, setEstacargando] = useState(true);
  useEffect(function () {
    consultarCanciones().then(function (respuesta) {
        console.log(respuesta)
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
        {canciones.map(function () {
          return <audio controls src={canciones.preview_url}></audio>;
        })}
      </>
    );
  }
}
