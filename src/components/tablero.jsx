import React from 'react'
import { Fila } from './fila'
import { useState } from 'react'


export const Tablero = () => {

    const [cuadrado, setCuadrado] = useState(Array(9).fill (null))
    const [turno, setTurno] = useState('X')

    const handleClick = (i) =>{
      if (cuadrado[i] || ganador (cuadrado)) {
        return;
      }
       
        const nuevoCuadrado = [...cuadrado]
        nuevoCuadrado[i] = turno 
        setCuadrado (nuevoCuadrado)
        setTurno (turno === 'X' ? 'O' : 'X')
    }

    const resultado = ganador(cuadrado);
    let status;
    if (resultado) {
      status = "Ganador: " + resultado;
    } 
    
  return (
    <div className='juego'>
        <h1 className='titulo'>  Tic Tac Toe </h1>
        <div className='tablero'>
        <Fila cuadrado={cuadrado} handleClick={handleClick} posicion= {[0,1,2]}/>
        <Fila cuadrado={cuadrado} handleClick={handleClick} posicion= {[3,4,5]}/>
        <Fila cuadrado={cuadrado} handleClick={handleClick} posicion= {[6,7,8]}/>
        </div>
        <h3 className='ganador'>{status}</h3>
    </div>
  )

  function ganador (cuadrado) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (cuadrado[a] && cuadrado[a] === cuadrado[b] && cuadrado[a] === cuadrado[c]) {
        return cuadrado[a];
      }
    }
    return null;
  }
}
