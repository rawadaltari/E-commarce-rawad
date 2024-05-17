import { Fab, Zoom, useScrollTrigger } from "@mui/material";
import KeyboardControlKeyOutlinedIcon from '@mui/icons-material/KeyboardControlKeyOutlined';

export default function ScrollTotop() {
  return (
    <Zoom in={useScrollTrigger({threshold:200})}>
       <Fab onClick={() => { 
        window.scrollTo(0,0)
         }
       } sx={{
        position:"fixed",bottom:35,right:35,
    }} color="primary" size="small" aria-label="add">
    <KeyboardControlKeyOutlinedIcon />
  </Fab>  
    </Zoom>
   
  )
}
