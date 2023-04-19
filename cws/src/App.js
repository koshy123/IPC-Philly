import React from 'react'
import { Footer, Possibility, Features, WhatIPC, Header} from './containers'
import { Navbar, Brand } from './components';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import Renew from './pages/Renew/Renew';
import About from './pages/About/About'
import History from './pages/About/History';
import Pastor from './pages/About/Pastor';
import Team from './pages/About/Team';


function App() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="App">
      {isHomePage && (
        <div className='header__background'></div>
      )}
      <div className={isHomePage ? 'gradient__bg' : 'gradient__bgcl'}>
        <nav className="navbar__background">
          <Navbar />
        </nav>
      </div>
      <Routes>
        <Route path='/renew' element={<Renew />} />
        <Route path='/believe' element={<Features />} />
        <Route path='/about' element={<About />} />
        <Route path='/about/history' element={<History />} />
        <Route path='/about/pastor' element={<Pastor />} />
        <Route path='/about/team' element={<Team />} />

        <Route path='/' element={[<Header/>, <Brand />, <Possibility/>, <WhatIPC />]} />
      </Routes>
      <footer><Footer /></footer>
    </div>
  );
};
export default App;