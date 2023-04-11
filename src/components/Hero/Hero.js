import React, {useEffect, useState} from 'react'
import './Hero.css'
import ContactForm from '../ContactForm/ContactForm'
import MyLocationIcon from '@mui/icons-material/MyLocation';
import Button from '@mui/material/Button';
import {useMediaQuery} from "@mui/material";
import MovingComponent from 'react-moving-text'
import CloseIcon from '@mui/icons-material/Close';
import CustomModal from '../modal/CustomModal';

const sawmillUrl = "https://www.google.com/maps/place/Jantar+Le%C5%9Bnicz%C3%B3wka+20A,+82-103+Jantar+Le%C5%9Bnicz%C3%B3wka/@54.3186839,19.0035752,18z/data=!4m6!3m5!1s0x46fd6abd6a25cbf5:0xf4a594632551f5d7!8m2!3d54.3185417!4d19.0036826!16s%2Fg%2F11hyt2xxlm?hl=pl-PL";

function Hero() {

  const isMobile = useMediaQuery('(max-width: 800px)');

  const [accepted, setAccepted] = useState(localStorage.getItem('acceptedPrivacyPolicy'));
  const [openModal, setOpenModal] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [openBanner, setOpenBanner] = useState(true);
  const [delay, setDelay] = useState(false);


  useEffect(() => {
    const timer = setTimeout(() => {
      setDelay(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, [])

  const handleCloseBanner = () => {
    setOpenBanner(false)
  };

  const handleOpenModal = () => {
    setOpenModal(true)
  };

  const handleCloseModal = () => {
    setOpenModal(false)
  };

  const handleAccept = () => {
    localStorage.setItem('acceptedPrivacyPolicy', true);
    setAccepted(true);
  };

  return (
    <div className={"heroWrapper"}>
      <div className="locationButton">
        {!isMobile && <Button href={sawmillUrl} startIcon={<MyLocationIcon sx={{marginRight: 2, marginLeft: 2}}/>}
                              sx={{
                                backgroundColor: "green",
                                color: "white",
                                paddingRight: 8,
                                "&:hover": {backgroundColor: "green"}
                              }}>Lokalizacja</Button>}
      </div>
      <div className={"companyInfo"}>
        {delay && <MovingComponent
          type="fadeInFromBottom"
          duration="2000ms"
          direction="alternate"
          timing="ease"
          iteration="1"
          fillMode="none">
          <h1>TARTAK<br/>Markowski Wojtowicz S.C.</h1>
          <h4>Konstrukcje Dachowe, Deski Tarasowe</h4>
          <h4>Altanki, Stoły, Ławki i Płoty</h4>
          <h4>Schody, Palety, Drewno szalunkowe</h4>
        </MovingComponent>}
      </div>
      <div className={"contact-form"}>
        <ContactForm/>
      </div>
      {!accepted && openBanner && <div className={!isMobile ? 'bannerWrapper' : 'mobile-banner--wrapper'}>
        <div className={!isMobile ? 'bannerContent' : "mobileBannerContent"}>
          <h3>
            Ta strona korzysta z plików cookies,
            zgodnie z naszą Polityką prywatności.
            Korzystając z serwisu wyrażasz na to zgodę.
            W każdej chwili możesz dokonać zmiany ustawień dotyczących cookies w swojej przeglądarce.
          </h3>
          <div className={!isMobile ? "bannerButtons--wrapper" : "mobileBannerButtons--wrapper"}>
            <button className={!isMobile ? "banner--button" : "mobileBanner--button"} onClick={() => {
              handleCloseBanner();
              handleAccept()
            }}>
              Akceptuj
            </button>
            <button className={!isMobile ? "banner--button" : "mobileBanner--button"} onClick={() => {
              handleOpenModal();
              setModalContent('rodo')
            }}>
              Polityka Prywatności
            </button>
            <div className='bannerXButton'>
              <CloseIcon onClick={handleCloseBanner}/>
            </div>
          </div>
        </div>
      </div>}
      {openModal && <CustomModal handleClose={handleCloseModal} modalContent={modalContent}/>}
    </div>
  )
}

export default Hero;
