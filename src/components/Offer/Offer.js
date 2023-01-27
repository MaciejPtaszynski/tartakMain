import React from 'react'
import "./Offer.css"
import firstOfferImg from "../../library/backdrop.jpg"
import logoTartak from "../../library/logoTartak.png"


function Offer() {
  return (
    <div className="offerContainer">
      <div>
        <img alt={"logo"} className={"offer-logo"} src={logoTartak}/>
      </div>
      <h1 className={"section-title"}>NASZA OFERTA</h1>
      <div className="offerWrapper">
        <div className='offer'>
          <h2>Drewno Konstrukcyjne</h2>
          <img alt={""} src={firstOfferImg} />
          <p>Laboris amet occaecat ipsum aliquip voluptate ipsum incididunt.Consequat officia et pariatur incididunt officia eiusmod id consequat voluptate reprehenderit.</p>
        </div>
        <div className='offer'>
        <h2>Drewno Szalunkowe</h2>
        <img alt={""} src={firstOfferImg} />
        <p>Laboris amet occaecat ipsum aliquip voluptate ipsum incididunt.Consequat officia et pariatur incididunt officia eiusmod id consequat voluptate reprehenderit.</p>
        </div>
        <div className='offer'>
        <h2>Transport</h2>
        <img alt={""} src={firstOfferImg} />
        <p>Laboris amet occaecat ipsum aliquip voluptate ipsum incididunt.Consequat officia et pariatur incididunt officia eiusmod id consequat voluptate reprehenderit.</p>
        </div>
      </div>
    </div>
  )
}

export default Offer
