import React from 'react'
import "./Footer.css"
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
// import HomeIcon from '@mui/icons-material/Home';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import logoTartak from "../../library/logoTartak.png"
import DescriptionIcon from '@mui/icons-material/Description';

function Footer() {
  return (
    <div className='footerContainer'>
        <div className="footerLogo"><img alt="company logo" src={logoTartak}/></div>
        <div className="footerIcons">
          <div className="footerIcon"><PhoneAndroidIcon sx={{marginRight:"2px"}}/><p>534 916 564</p></div>
          <a className="footerIcon" href="mailto:jantartartak@gmail.com"><AlternateEmailIcon/><p>jantartartak@gmail.com</p></a>
          <div className="footerIcon"><DescriptionIcon/><p>Dane do Faktury</p></div>
          <a href="#" className="footerIcon"><MyLocationIcon/><p className="center">Jantar Leśniczówka 20a<br/>82-103 Jantar</p></a>
        </div>
      
    </div>
  )
}

export default Footer
