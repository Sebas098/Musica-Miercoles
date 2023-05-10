import { useEffect, useState } from "react"

export function Hook(){
    //antes del retorno configuramos variables de estado
    const [contador,setContador]=useState(0)

    //programando el detector de ejecuciones
    useEffect(function(){
        setContador(contador+1)
    },[])

    //funcion para detectar el evento para decir que hacer cuando le den click al boton 
    function incrementarCuenta(){
        setContador(contador+1)
    }

    return(
        <>
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <button type="button" className="btn btn-primary" onClick={incrementarCuenta}>click</button>
                <h2>la cuenta va en: {contador} </h2></div>
            </div>
        </div>
        </>
    )
}