import React from 'react'
import { Outlet, Link } from 'react-router-dom'

export default function AppLayout() {
  return (
    <>
      <div className='bg-gray-300'>
            <div>
                <h1>Este es un layout</h1>
            </div>
            <div>
                <Outlet/>
            </div>
            <div className='bg-amber-100 flex flexrow gap-x-5'>
                 <Link to={'/custom'} className='text-black font-bold hover:underline hover:text-blue-600'>
                    Custom desde layout
                </Link>
            </div>
      </div>
    </>
  )
}
