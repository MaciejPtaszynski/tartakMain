import React from 'react';
import "./Offer.css";
import logoTartak from "../../library/logoTartak.png";
import woodPlanks from "../../assetss/icons8-wooden-planks-100.png";
import wood from "../../assetss/icons8-wood-100.png";
import truck from "../../assetss/icons8-delivered-100.png";


function Offer() {
  return (
    <div className="offerContainer">
      <div>
        <img alt={"logo"} className={"offer-logo"} src={logoTartak}/>
      </div>
      <h1 className={"section-title"}>NASZA OFERTA</h1>
      <div className="offerWrapper">
        <div className='offer'>
          <img className={"offer-icon"} alt={"construction wood"} src={wood} />
          <h2>Drewno Konstrukcyjne</h2>
          <p>Laboris amet occaecat ipsum aliquip voluptate ipsum incididunt.Consequat officia et pariatur incididunt officia eiusmod id consequat voluptate reprehenderit.</p>
        </div>
        <div className='offer'>
          <img className={"offer-icon"} alt={"shuttering wood"} src={woodPlanks} />
          <h2>Drewno Szalunkowe</h2>
        <p>Laboris amet occaecat ipsum aliquip voluptate ipsum incididunt.Consequat officia et pariatur incididunt officia eiusmod id consequat voluptate reprehenderit.</p>
        </div>
        <div className='offer'>
          <img className={"icon-truck"} alt={"transport truck"} src={truck} />
          <h2 style={{marginTop: "25px"}}>Transport</h2>
        <p>Laboris amet occaecat ipsum aliquip voluptate ipsum incididunt.Consequat officia et pariatur incididunt officia eiusmod id consequat voluptate reprehenderit.</p>
        </div>
      </div>
    </div>
  )
}

export default Offer;
