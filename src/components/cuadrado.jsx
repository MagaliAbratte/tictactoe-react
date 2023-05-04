import React from 'react'

export const Cuadrado = (props) => {

  const colorTurno = (props)=>{
    if (props.value === 'X'){
      return ('color-x')
    } else if (props.value === 'O'){
      return ('color-o')
    }
  }

  return (
    <button className='cuadrado' onClick={props.onClick}>
        {props.value}
    </button>
  )
}
 
