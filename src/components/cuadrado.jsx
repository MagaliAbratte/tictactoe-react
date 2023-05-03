import React from 'react'

export const Cuadrado = (props) => {
  return (
    <button className='cuadrado' onClick={props.onClick}>
        {props.value}
    </button>
  )
}
