import React from 'react'
import './Hero.css'
import ContactForm from '../ContactForm/ContactForm'

function Hero() {
  return (
    <div className='HeroContainer' >
      
      <div className='HeroWrapper'>
        <div className='TextWrapper' src="https://i.postimg.cc/cHqxVfnF/pexels-joey-kyber-129743.jpg">
          <h1 style={{fontSize: '70px', fontFamily: 'Roboto , sans-serif'}}>TARTAK<br/>Markowski Wojtowicz S.C.</h1>
          <h2>Drewno konstrukcyjne</h2>
          <h2>Deski tarasowe</h2>
          <h2>Transport</h2>
        </div>
        <ContactForm/>
      </div>
    </div>
  )
}

export default Hero


