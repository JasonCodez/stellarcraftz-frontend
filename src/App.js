import { Box, ThemeProvider, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { useEffect } from 'react';
import Appbar from './components/appbar';
import Banner from './components/appbar/banner';
import Cart from './components/cart';
import Login from './components/login';
import AppDrawer from './components/drawer';
import Footer from './components/footer';
import Products from './components/products';
import SearchBox from './components/search';
import ShadowBox from './components/products/ShadowBox';
import Mugs from './components/products/Mugs';
import { UIProvider } from './context/ui';
import { Routes, Route } from "react-router-dom";

import theme from './styles/theme';

function App() {

   useEffect(() => {
      document.title = "Stellar Craftz - Home";
   }, []);
  return (
   <ThemeProvider theme={theme}>
      <Container
         maxWidth="xl"
         sx={{
            background: '#fff'
         }}
      >  
         <UIProvider>
            <Appbar />
            <Banner />
            <Routes>
               <Route path='/products/3d-art' element={<ShadowBox />}/>
               <Route path='/products/mugs' element={<Mugs />} />
            </Routes>
            <Footer />
            <AppDrawer />
            <Cart />
            <Login />
            <SearchBox />
         </UIProvider>
      </Container>
    </ThemeProvider>
  )
}

export default App;