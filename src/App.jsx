import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/about/About'
import Projects from './components/projects/Projects'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Projects />
      <Contact />
      <Footer/>
    </div>
  )
}

export default App
