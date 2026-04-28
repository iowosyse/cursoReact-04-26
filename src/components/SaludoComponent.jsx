import React from 'react'

export default function SaludoComponent(props) {
  return (
    <div className='bg-gray-800 border rounded'>
      <h1 className='text-mauve-400'>Hola desde un componente, {props.nombre} {props.apellido}</h1>
    </div>
  )
}
