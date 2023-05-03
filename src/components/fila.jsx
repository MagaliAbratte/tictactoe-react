import React from 'react'
import { Cuadrado } from './cuadrado'

export const Fila = ({cuadrado, handleClick, posicion}) => {

    const renderCuadrado = (i)=>{
        return (
            <Cuadrado 
            value = {cuadrado[i]}
            onClick = {()=> handleClick (i)}
            />
        )
    }

  return (
    <div className='fila'>
        {
            posicion.map (pos => (
                renderCuadrado(pos)
            ))
        }
    </div>
  )
}
