import React from 'react'
import { useParams } from 'react-router-dom'

export default function ParamView() {
    const param = useParams()
    const id = param.id

    return (
        <div>
            <h1 className='text-3xl text-red-700'>Este es el parametro {id}</h1>
        </div>
    )
}
