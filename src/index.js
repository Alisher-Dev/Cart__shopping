import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style.css"
import "./style.env.css"
import { Box, ChakraProvider } from '@chakra-ui/react';
import Header from './header/Header';
import Footer from './Footer/footer';
import Link from './Link';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ChakraProvider>
      <Box display='flex' alignItems='center' flexDirection='column' position='relative'>
        <Box maxW='1500px' w='100%'>
          <Header/>
          <Link/>
          <Footer/>
        </Box>
      </Box>
    </ChakraProvider>
  </BrowserRouter>
)
