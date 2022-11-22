import React from 'react'
import Bithday from './components/Bithday'
import Navbar from './components/Navbar'

const BithdayApp = () => {
  const title = 'Calculadora de Edad'
  return (
    <div>
      <Navbar title={title} />
      <Bithday />
    </div>
  )
}

export default BithdayApp