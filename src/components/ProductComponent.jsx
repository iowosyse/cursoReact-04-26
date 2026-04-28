import React from 'react'

export default function ProductComponentp(props) {
  return (
    <div className='bg-amber-300 border-2 rounded-2xl flex flex-col items-center px-4 py-4 w-150 mx-2'>
      <h1>Producto: {props.name} | Precio: {props.price} | ID: {props.id}</h1>
    </div>
  )
}
