import React from 'react'
import "./Footer.css"
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import logoTartak from "../../library/logoTartak.png";

const sawmillUrl = "https://www.google.com/maps/place/Jantar+Le%C5%9Bnicz%C3%B3wka+20A,+82-103+Jantar+Le%C5%9Bnicz%C3%B3wka/@54.3186839,19.0035752,18z/data=!4m6!3m5!1s0x46fd6abd6a25cbf5:0xf4a594632551f5d7!8m2!3d54.3185417!4d19.0036826!16s%2Fg%2F11hyt2xxlm?hl=pl-PL";

function Footer() {


  return (
    <div className='footerContainer'>
      <div className="footerLogo"><img alt="company logo" src={logoTartak}/></div>
      <div className="footerIcons">
        <div className="footerIcon col">
          <h4>Dane do faktury:</h4>
          <p className={"invoice-info"}>Tartak Markowski Wojtowicz S.C.<br/>
            Regon: 12345678901234<br/>
            NIP: 1234567890 <br/>
            Kościuszki 49<br/>
            80-112 Ostaszewo
          </p>
        </div>
        <a href="tel:534916564" className="footerIcon"><PhoneAndroidIcon style={{marginRight: "10px"}}
                                                                         className={"icon"}/> 534 916 564
        </a>
        <a className="footerIcon" href="mailto:jantartartak@gmail.com"><AlternateEmailIcon className={"icon"}/>
          <p>jantartartak@gmail.com</p></a>
        <a href={sawmillUrl} className="footerIcon"><MyLocationIcon className={"icon"}/><p className="center">Jantar
          Leśniczówka
          20a<br/>82-103 Jantar</p></a>
      </div>
    </div>
  )
}

export default Footer
