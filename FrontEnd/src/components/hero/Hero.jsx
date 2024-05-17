import { Container ,Box,Typography ,Link , Stack } from "@mui/material";
import BoxImg from "./BoxImg";
import Slider from "./Slider";
import SessionBar from "./SessionBar";


export default function Hero() {
  return (
    <>
    <Container >
        
       <Box sx={{mt:3 ,pt:2,display:"flex" , alignItems:"center"}}>
       <Slider/>
         
         <Box>
         <BoxImg />
         </Box>
       </Box>
       <SessionBar/> 
    </Container>
    
    </>
  )
}
