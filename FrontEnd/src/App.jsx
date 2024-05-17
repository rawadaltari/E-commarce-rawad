import Headerlist from "./components/header/Headerlist"
import Menubar from "./components/header/Menubar"
import Navbar from "./components/header/Navbar"
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./them";
import Hero from "./components/hero/Hero";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import ScrollTotop from "./components/scroall/ScrollTotop";


function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider 
// @ts-ignore
    value={colorMode}>
       <ThemeProvider 
// @ts-ignore
       theme={theme}>
       <CssBaseline />
       <Menubar/>
       <Navbar/>
       <Headerlist/>
       <Box bgcolor={theme.
// @ts-ignore
       palette.bghero.main}>
        <Hero/>
        <Main/>
       </Box>
       <Footer/>
       <ScrollTotop/>
       </ThemeProvider>
   
    </ColorModeContext.Provider>
    
   
   
  )
}

export default App
