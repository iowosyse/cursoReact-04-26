import React, { use, useState } from 'react'
import { Link } from 'react-router-dom'
import SaludoComponent from '../components/SaludoComponent';
import CardChildren from '../components/CardChildren';
import ButtonActionComponent from '../components/ButtonActionComponent'
import ListaComponent from '../components/ListaComponent';
import ProductComponentp from '../components/ProductComponent';

export default function AppView() {
  const parametro = "sexo";

  const user = {
    nombre: "Omar",
    edad: 23
  }

  const [usuario, setUser] = useState();

  const handleClick = () => {
    console.log("Me has presionado")
    setUser("Omar")
  }

  const handleSelection = (elemento) => {
    console.log(elemento)
  }

  const incrementar = () => {
    setContador(contador + 1)
  }

  const [contador, setContador] = useState(0);

  const reset = () => {
    setContador(0)
  }

  const [isTrue, setIsTrue] = useState(true);

  if (!isTrue) {
    return <div>soy verdadero</div>
  }

  const [products, setProducts] = useState([
    {
      id: 1, name: "laptop", price: 1500
    },
    {
      id: 2, name: "celular", price: 1200
    },
    {
      id: 3, name: "monitor", price: 800
    },
    {
      id: 4, name: "mouse", price: 200 
    }
  ]);

  const [LOLItems, setItems] = useState([
    {id: 1, name: "Collector", price: 3100},
    {id: 2, name: "Hexoptics C-44", price: 3000},
    {id: 3, name: "Infinity Edge", price: 3300},
    {id: 4, name: "Lord Domink's Regards", price: 3300},
    {id: 5, name: "Bloodthirster", price: 3400},
    {id: 6, name: "Guardian Angel", price: 3200},
    {id: 7, name: "Berserker Greaves", price: 1100}
  ])

  return (
    <>
      <h1 className='text-4xl font-bold text-center'>App View</h1>

      {/* SALUDOS */}
      <SaludoComponent nombre={"Cande"} apellido={"Ortega"} />
      <SaludoComponent nombre={"Micol"} apellido={"Villalon"} />
      <SaludoComponent />
      <SaludoComponent />

      <CardChildren titulo={'Soy un modal'}>
        <p>Hola soy el children</p>
      </CardChildren>

    <ProductComponentp name={'Tenis'} price = {2200} id = {5}/>
    {
      products.map( (producto) => (
        <ProductComponentp
          name = {producto.name}
          price = {producto.price}
          id = {producto.id}
        />
      ))
    }

    <h1 className='text-2xl flex justify-center'>Caitlyn sape build: </h1>
    {
      LOLItems.map((items) => (
        <ProductComponentp
          name = {items.name}
          price = {items.price}
          id = {items.id}
        />
      ))
    }

      {/* NAVEGACIÓN */}
      <div className='flex flex-col gap-y-2'>
        <Link to="/otra">Ir a otra página</Link>
        <Link to="/custom">Custom</Link>
        <Link to={`/parametro/${parametro}`}>Ir al parámetro</Link>
        <Link to={"/components"}>Ir a los componentes</Link>
      </div>

      <ButtonActionComponent onClick={handleClick}/>
      <ListaComponent onSeleccionar={handleSelection}/>

      <ButtonActionComponent onClick={incrementar}/>
      <h1 className='text-3xl flex justify-center'>El contador va en: {contador}</h1>
      <ButtonActionComponent onClick={reset}/>

      <h1>{usuario}</h1>
    </>
  )
}
