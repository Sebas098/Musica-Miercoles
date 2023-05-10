import { useState, useEffect } from "react";
export function Carga() {
  const [Estacargando, setEstacargando] = useState(true);
  const [tiempo, setTiempo] = useState(0);

  useEffect(
    function () {
      if (tiempo > 0) {
        setEstacargando(false);
      } else {
        setEstacargando(true);
      }
    },
    [tiempo]
  );

  setTimeout(function () {
    setTiempo(1);
  }, 5000);

  if (Estacargando) {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <img
                src="../../src/assets/img/Linkinpark.gif"
                alt=""
                className="img-fluid mx-auto d-block"
              />
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <h4>Ya cargamos Todo Bienvenido</h4>
      </>
    );
  }
}
