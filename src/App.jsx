import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Aboutus from './components/Aboutus'
import Gallery from './components/Gallery'
import Contact from './components/Contact'

const App = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <About />
      <Aboutus />
      <Gallery />
      <Contact />
    </div>
  )
}

export default App