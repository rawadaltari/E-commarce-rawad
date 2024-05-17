import { ArrowForwardIos, Translate } from "@mui/icons-material";
import { Box, Link, Stack, Typography } from "@mui/material";


export default function BoxImg() {
  return (
    <Box sx={{display:{xs:"none", md:"block"}}}>
      <Box  sx={{position:"relative",}} >
        <img src="src\Images\pexels-life-of-pix-7974.jpg" alt="" style={{width:"300px"}}/>
        <Stack  sx={{position:"absolute",top:"40%",left:"2%" ,transform:"transLateY(-50%)"}}>
           <Typography 
        variant="caption"
        sx={{
          color:"#2b3448",
          fontSize:"20px",
          fontWeight:"bold",
        }}
        >
         NEW LAPTOP
        </Typography>
        <Typography 
        variant="h6"
        sx={{
          color:"#2b3445",
          lineHeight:"18px",
          fontWeight:"bold",
          mt:1,
        }}
        >
         SALE 20% OFF
        </Typography>
        <Link sx={{
          color:"#2b3445",
          display:"flex",
          gap:"5px",
          alignItems:"center",
          fontWeight:"bold",
          "&:hover":{
            color:"red",
          }
        }}
        href="#"
        underline="none"
        >
          SHOP NOW 
          <ArrowForwardIos  sx={{fontSize:"18px"}}/>
        </Link>
        </Stack>
       
      </Box>
      <Box  sx={{position:"relative"}}>
      <img src="src\Images\pexels-wdnet-887751.jpg" alt=""style={{width:"300px"}}/>
      <Stack  sx={{position:"absolute",top:"40%",left:"2%" ,transform:"transLateY(-50%)"}}>
           <Typography 
        variant="caption"
        sx={{
          color:"#2b3448",
          fontSize:"20px",
          fontWeight:"bold",
        }}
        >
         NEW Phone 
        </Typography>
        <Typography 
        variant="h6"
        sx={{
          color:"#2b3445",
          lineHeight:"18px",
          fontWeight:"bold",
          mt:1,
        }}
        >
         BAY NOW
        </Typography>
        <Link sx={{
          color:"#2b3445",
          display:"flex",
          gap:"5px",
          alignItems:"center",
          fontWeight:"bold",
          "&:hover":{
            color:"red",
          }
        }}
        href="#"
        underline="none"
        >
          GO TO SALE 
          <ArrowForwardIos  sx={{fontSize:"18px"}}/>
        </Link>
        </Stack>
      </Box>
    </Box>
  )
}
