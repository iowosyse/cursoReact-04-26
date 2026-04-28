import React from 'react'
import PropsComponent from '../components/PropsComponent'
import ChildrenComponents from '../components/ChildrenComponents'

export default function ComponentsView() {
  return (
    <>
        <PropsComponent title={'Titulos'} content={'lorem ipsum'}>
            hola
        </PropsComponent>

        <ChildrenComponents>
            <h1 className='text-slate-50'>Esta es una lista</h1>

            <ul className='text-slate-50'>
                <li>Micol</li>
                <li>Cande</li>
                <li>Alberto</li>
            </ul>
        </ChildrenComponents>

    </>
  )
}
