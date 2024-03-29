import React from "react"
import {Box, Button, Typography, useMediaQuery} from "@mui/material";
import img1 from "../../../library/deski-sz1.jpg";
import img2 from "../../../library/deski-sz2.webp";
import CloseIcon from '@mui/icons-material/Close';

export default function Roof({handleClose}) {
  const isMobile = useMediaQuery("(max-width: 600px)")

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: isMobile ? 375 : 600,
    backgroundColor: "#ffffff",
    borderRadius: "5px",
    boxShadow: 24,
    p: 4,
  };

  const modalHeader = {
    width: "100%",
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: "whitesmoke",
    borderRadius: "5px",
    textAlign: "center",
  };

  const modalContent = {
    position: 'relative',
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  const closeIcon = {
    position: "absolute",
    right: "1%",
    top: "1%",
    color: "#000000",
    cursor: "pointer"
  };

  const imgWrapper = {
    display: "flex",
    width: !isMobile ? "80%" : "100%",
    paddingTop: "20px"
  };

  const imageStyle = {
    marginTop: 12,
    borderRadius: "5px"
  };

  return (
    <Box style={modalStyle}>
      <Box style={modalContent}>
        <Box style={modalHeader}>
          <Typography pb={2} sx={{letterSpacing: !isMobile ? "1.2px" : "0.5px"}} variant={!isMobile ? "h6" : "body1"}
                      mt={2}>Drewno Szalunkowe</Typography>
          {!isMobile && <CloseIcon style={closeIcon} onClick={handleClose}/>}
        </Box>
        <Box style={imgWrapper}>
          <img alt={"roof construction"} style={imageStyle} src={img1}/>
          <img alt={"2nd roof construction"} style={imageStyle} src={img2}/>
        </Box>
        <Typography p={5} sx={{lineHeight: 1.5}}>Posiadamy w naszej ofercie bogaty zakres drewna szalunkowego tj. deski, kantówki łaty. Więcej informacji pod nr telefonu 534 916 564
          lub mailowo jantartartak@gmail.com
        </Typography>
        {isMobile && <Button sx={{marginBottom: 3, padding: "10px 30px", backgroundColor: "#98ff98"}}
                             onClick={handleClose}>ZAMIKNIJ</Button>}
      </Box>
    </Box>
  )
};
