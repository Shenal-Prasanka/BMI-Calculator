import { useState } from 'react'
import Navbar from './Components/Navbar'
import Calculator from './Components/Calculator'
import About from './Components/About'
import Values from './Components/Values'
import Cal from './Components/Cal'
import Footer from './Components/Footer'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Calculator/>
      <About/>
      <Values/>
      <Cal/>
      <Footer/>
    </>
  )
}

export default App
