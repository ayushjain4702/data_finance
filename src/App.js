import React from 'react'
import Navbar from './Components/Navbar.jsx'
import Hero from './Components/Hero.jsx'
import Analytics from './Components/Analytics.jsx'
import Newsletter from './Components/Newsletter.jsx'
import Cards from './Components/Cards.jsx'
import Footer from './Components/Footer.jsx'

const App = () => {
  return (
    <div >
      <Navbar/>
      <Hero/>
      <Analytics/>
      <Newsletter/>
      <Cards/>
      <Footer/>
    </div>
  )
}

export default App