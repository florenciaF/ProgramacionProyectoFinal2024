import React, { useState } from 'react'


export const Contador = () => {

    // Declara una variable de estado llamada "contador" y una función para actualizarla llamada "setContador"
    const [contador, setContador] = useState(0); // 0 es el valor inicial
    // Función para manejar el clic del botón
    const incrementar = () => {
        setContador(contador + 1);
    };


    return (
        <div>
             <p>Contador: {contador}</p>
             <button onClick={incrementar}>Incrementar</button>
        </div>
    )
}
