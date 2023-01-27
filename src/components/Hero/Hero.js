import React from 'react'
import './Hero.css'
import ContactForm from '../ContactForm/ContactForm'
import logoTartak from "../../library/logoTartak.png";

function Hero() {
  return (
    <div className={"heroWrapper"}>
      <div className={"logo"}>
        <img className={"company-img"} alt="company logo" src={logoTartak}/>
      </div>
      <div className={"companyInfo"}>
        <h1>TARTAK<br/>Markowski Wojtowicz S.C.</h1>
        <h2>Drewno konstrukcyjne</h2>
        <h2>Deski tarasowe</h2>
        <h2>Transport</h2>
        <div className={"contact-form"}>
          <ContactForm/>
        </div>
      </div>
    </div>
  )
}

export default Hero
