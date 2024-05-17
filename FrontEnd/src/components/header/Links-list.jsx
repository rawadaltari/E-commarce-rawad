import { Box, Paper, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { KeyboardArrowRightOutlined } from "@mui/icons-material";

 const Links = ({title}) => {
  return (
    <Box sx={{display:"flex" ,alignItems:"center", zIndex:2,position:"relative",":hover .Show-paper":{display:"block",}}} >
        <Typography>
          {title}
        </Typography>
        <ExpandMoreIcon sx={{fontSize:"16px" ,ml:1}}  />
<Paper className="Show-paper" sx={{position:"absolute",top:"100%",minWidth:"170px",left:"50%", transform:"translateX(-50%)",display:"none"}}>

   <nav aria-label="secondary mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton sx={{display:"flex",p:0, px:1.5,}}>
              <ListItemText sx={{
                "& .MuiTypography-root":{ fontSize:"15px",fontWeight:300,}
               }} primary="Dashbord" />

            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{display:"flex",p:0, px:1.5,}}>
              <ListItemText sx={{
                "& .MuiTypography-root":{ fontSize:"15px",fontWeight:300,}
               }} primary="Concat" />
                              <Box flexGrow={1}/>
               <KeyboardArrowRightOutlined fontSize="small"/>
               
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{display:"flex",p:0, px:1.5,}}>
              <ListItemText sx={{
                "& .MuiTypography-root":{ fontSize:"15px",fontWeight:300,}
               }} primary="About" />
               <Box flexGrow={1}/>
               
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{display:"flex",p:0, px:1.5,}}>
              <ListItemText sx={{
                "& .MuiTypography-root":{ fontSize:"15px",fontWeight:300,}
               }} primary="Acount" />
              
              
            </ListItemButton>
          </ListItem>
         
        </List>
      </nav>
</Paper>
       
      </Box>




  )
}
export default Links;