import React from 'react'

export default function ChildrenComponents({children}) {
  return (
    <div className=' w-fit mx-auto bg-pink-900 text-shadow-slate-50 p-4 border rounded-2xl'>
      {children}
    </div>
  )
}
