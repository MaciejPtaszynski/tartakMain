import React, {useState} from 'react'
import ForestIcon from '@mui/icons-material/Forest';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import "./Navbar.css" 

const drawerContent = { width:250}

function Navbar() {

    const [open, setOpen]= useState (false)
    const colseDrawer =() => {setOpen(false)}
    const openDrawer =()=> {setOpen(true)}
  return (
    <>
    <nav className='navbar'>
        <div className='navbar-container'>
            <MenuIcon sx={{marginTop: 5,marginLeft: 2, width:40, height:40, color: '#ffffff'}} onClick={openDrawer}/>
            <Drawer hideBackdrop={false} PaperProps={{ sx: { backgroundColor: "grey"}}} anchor={'left'} open={open} onClose={colseDrawer}>
                <Box style={drawerContent}>
                    <Box style={{display: 'flex', flexDirection: 'row', alignItems:'center'}}>
                    <h1 className='nabbar-logo'>janTARtarTAK</h1><ForestIcon color="success" sx={{height:30, width: 30}}/>
                    </Box>
                    <Box sx={{display:'flex', flexDirection:'column', gap: 1,}}>
                        <button>OFERTA</button>
                        <button>Temat1</button>
                        <button>Temat2</button>
                        <button>Kontakt</button>
                    </Box>
                </Box>
            </Drawer>
        </div>
    </nav>
    
    </>
  )
}

export default Navbar
