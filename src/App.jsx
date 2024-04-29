import { useState } from 'react'

import './App.css'
import Navbar from './component/Navbar/Navbar'
import Hero from './component/Hero/Hero'
import About from './component/About/About'
import Services from './component/Services/Services'
import MyWork from './component/MyWork/MyWork'
import Contact from './component/Contact/Contact'
import Footer from './component/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Services/>
    <MyWork/>
    <Contact/>
    <Footer/>
     
    </>
  )
}

export default App
