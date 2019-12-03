import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';

import Header from './components/Header';
import Routes from './routes';

// import { Container } from './styles';

export default function src() {
   return (
      <BrowserRouter>
         <Header />
         <Routes />
         <GlobalStyle />
      </BrowserRouter>
   );
}
