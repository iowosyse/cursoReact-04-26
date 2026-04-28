import React from 'react'

export default function PropsComponent(props) {
  return (
    <div className='w-fit mx-auto px-4 py-4 bg-gray-800 text-emerald-400 flex justify-center border rounded-2xl'>
      <h1>{props.title} <br /></h1>
      <p>{props.content}</p>
    </div>
  )
}
