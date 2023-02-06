import React from 'react';
import {Box, Button, Typography, useMediaQuery} from "@mui/material";

export default function Stairs( {handleClose}) {
  const isMobile = useMediaQuery("(max-width: 600px)")

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    // bgcolor: 'background.paper',
    backgroundColor: isMobile ? "red" : "pink",
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  return (
    <Box style={modalStyle}>
      <Button onClick={handleClose}>X</Button>
      <Typography>Stairs</Typography>
    </Box>
  )
}
