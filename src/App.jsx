import { useState } from 'react'
import './App.css'
import Encabezado from './Encabezado'
import Portada from './Portada'
import Novedades from './Novedades'

function App() {
  return (
    <>
      <Encabezado />
      <Portada />
      <Novedades />
    </>
  )
}

export default App
