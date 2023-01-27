import React from 'react'
import './Hero.css'
import ContactForm from '../ContactForm/ContactForm'


function Hero() {
  return (
    <div className={"heroWrapper"}>
    
      <div className={"companyInfo"}>
        <h1>TARTAK<br/>Markowski Wojtowicz S.C.</h1>
        <h2>Drewno konstrukcyjne</h2>
        <h2>Deski tarasowe</h2>
        <h2>Transport</h2> 
      </div>
      <div className={"contact-form"}>
          <ContactForm/>
        </div>
    </div>
  )
}

export default Hero
