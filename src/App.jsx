import React from 'react'
import Navbar from './Components/Navbar'
import LandingPage from './Components/LandingPage'
import Marque from './Components/Marque'
import About from './Components/About'
import Eyes from './Components/Eyes'
import Featrues from './Components/Featrues'
import Cards from './Components/Cards'
import Footer from './Components/Footer'
import LocomotiveScroll from 'locomotive-scroll'

const App = () => {
  
  const locomotiveScroll = new LocomotiveScroll();
  return (
    


    <div className='w-full min-h-screen text-white bg-zinc-900'>
      <Navbar />
      <LandingPage/>
      <Marque/>
      <About/>
      <Eyes/>
      <Featrues/>
      <Cards />
      <Footer/>
    </div>
  )
}

export default App
