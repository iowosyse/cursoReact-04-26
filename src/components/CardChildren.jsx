import React from 'react'

export default function CardChildren({children, titulo}) {
  return (
    <div className='bg-green-400 border rounded-2xl shadow-2xl p-5 flex justify-center'>
      <h1>{titulo}</h1>
        {children}
      <button className='button-simple'>soy un boton simple</button>
    </div>
  )
}
