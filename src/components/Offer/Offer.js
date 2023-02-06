import React, {useState} from 'react';
import "./Offer.css";
import logoTartak from "../../library/logoTartak.png";
import CustomModal from "../modal/CustomModal";


function Offer() {
  const [openModal, setOpenModal] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const handleOpen = () => {
    setOpenModal(true)
  };
  const handleClose = () => {
    setOpenModal(false)
  };

  return (
    <div className="offerContainer">
      <div>
        <img alt={"logo"} className={"offer--logo"} src={logoTartak}/>
      </div>
      <h1 className={"section-title"}>NASZA OFERTA</h1>
      <div className="offerWrapper">

        <div className='offer slate--roof'>
          <h2>Kosnstrukcje dachowe<br/>(z montażem)<br/> łaty i kontrłaty</h2>
          <button onClick={() => {
            handleOpen();
            setModalContent("roof")
          }}>WIĘCEJ
          </button>
        </div>

        <div className='offer slate--planks'>
          <h2 style={{marginTop: "25px"}}>Deski tarasowe</h2>
          <button onClick={() => {
            handleOpen();
            setModalContent("planks")
          }}>WIĘCEJ
          </button>
        </div>

        <div className='offer slate--bench'>
          <h2 style={{marginTop: "25px"}}>Altanki, stoły, ławki i płoty</h2>
          <button onClick={() => {
            handleOpen();
            setModalContent("bench")
          }}>WIĘCEJ
          </button>
        </div>

        <div className='offer slate--stairs'>
          <h2 style={{marginTop: "25px"}}>Schody</h2>
          <button onClick={() => {
            handleOpen();
            setModalContent("stairs")
          }}>WIĘCEJ
          </button>
        </div>

        <div className='offer slate--pallets'>
          <h2>Palety</h2>
          <button onClick={() => {
            handleOpen();
            setModalContent("pallets")
          }}>WIĘCEJ
          </button>
        </div>

        <div className='offer slate--formwork'>
          <h2>Drewno Szalunkowe</h2>
          <button onClick={() => {
            handleOpen();
            setModalContent("formwork")
          }}>WIĘCEJ
          </button>
        </div>

        <div className='offer slate--transport'>
          <h2 style={{marginTop: "25px"}}>Transport</h2>
          <button onClick={() => {
            handleOpen();
            setModalContent("transport")
          }}>WIĘCEJ
          </button>
        </div>
      </div>
      {openModal && <CustomModal handleClose={handleClose} modalContent={modalContent}/>}
    </div>
  )
}

export default Offer;
