import React from 'react'
import { Link } from 'react-router-dom'

export default function AppView() {
  return (
    <>
        <h1>Otra</h1>
        <Link to = {'/otra'}>
            Ir a otra página
        </Link>
        <h1>vista propia</h1>
        <Link to={'/custom'}>
            Custom
        </Link>
    </>
  )
}
