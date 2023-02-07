import React from 'react'
import './Hero.css'
import ContactForm from '../ContactForm/ContactForm'
import MyLocationIcon from '@mui/icons-material/MyLocation';
import Button from '@mui/material/Button';


const sawmillUrl = "https://www.google.com/maps/place/Jantar+Le%C5%9Bnicz%C3%B3wka+20A,+82-103+Jantar+Le%C5%9Bnicz%C3%B3wka/@54.3186839,19.0035752,18z/data=!4m6!3m5!1s0x46fd6abd6a25cbf5:0xf4a594632551f5d7!8m2!3d54.3185417!4d19.0036826!16s%2Fg%2F11hyt2xxlm?hl=pl-PL";

function Hero() {
  return (
    <div className={"heroWrapper"}>
      <div className="locationButon">
        <Button href={sawmillUrl} startIcon={<MyLocationIcon sx={{marginRight:2, marginLeft:2}}/>} sx={{backgroundColor:"green", color:"white", paddingRight: 8, "&:hover":{backgroundColor:"green"}}}>Lokalizacja</Button>
      </div>
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
