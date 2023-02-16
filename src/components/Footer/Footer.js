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
      <div className={"row"}>
        <img alt={"company logo"} className={"footerLogo"} src={logoTartak}/>
        <div className={"invoice"}>
          <p>Tartak Markowski Wojtowicz S.C</p>
          <p>Regon: 523819235</p>
          <p>NIP: 5792287295</p>
          <p>Kościuszki 49</p>
          <p>80-112 Ostaszewo</p>
        </div>
      </div>
      <div className={"col"}>
        <a className="footerIcon" href="tel:534916564"><PhoneAndroidIcon sx={{marginRight: 2}}/><p>534 916 564</p></a>
        <a className="footerIcon" href="tel:608055860"><PhoneAndroidIcon sx={{marginRight: 2}}/><p>608 055 860</p></a>
        <a className="footerIcon test" href="mailto:jantartartak@gmail.com"><AlternateEmailIcon sx={{marginRight: 2}}/>
          <p>jantartartak@gmail.com </p></a>
        <a href={sawmillUrl} className="footerIcon"><MyLocationIcon sx={{marginRight: 2}}/><p>Jantar Leśniczówka 20a
          82-103 Jantar</p></a>
      </div>
    </div>
  )
}

export default Footer
