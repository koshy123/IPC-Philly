import React from 'react'
import { Footer, Blog, Possibility, Features, WhatIPC, Header} from './containers'
import { Navbar, Brand, CTA } from './components';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'

import './App.css'
import Renew from './pages/Renew/Renew';

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="App">
      {isHomePage && (
        <div className='header__background'></div>
      )}
      <div className={isHomePage ? 'gradient__bg' : ''}>
        <nav>
          <Navbar />
        </nav>
      </div>
      <Routes>
        <Route path='/renew' element={<Renew />} />
        <Route path='/believe' element={<Features />} />
        <Route path='/' element={[<Header/>, <Brand />, <Possibility/>, <WhatIPC />]} />
      </Routes>
      <footer><Footer /></footer>
    </div>
  );
};
export default App;