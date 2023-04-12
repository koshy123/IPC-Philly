import React from 'react'
import { Footer, Blog, Possibility, Features, WhatIPC, Header} from './containers'
import { Navbar, Brand, CTA } from './components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'
import Renew from './pages/Renew/Renew';

function App() {
  return (
  

  <div className="App">
  <div className='gradient__bg'>
    <nav>
    <Navbar />
    </nav>


  </div>

  <Routes>
    <Route path='/renew' element={<Renew />} />
    <Route path='/' element={[<Header/>, <Brand />, <Possibility/>, <WhatIPC />, <Features />]} />

  </Routes>

  <footer><Footer /></footer>
</div>


  );
};

export default App;