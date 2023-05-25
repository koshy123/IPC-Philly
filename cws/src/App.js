import React from 'react'
import {  Info, Features} from './Slider'
import { Navbar, Footer, Header } from './HomePage';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import Renew from './pages/Involved/Renew/Renew';
import About from './pages/About/About'
import History from './pages/About/History/History';
import Pastor from './pages/About/Pastor/Pastor';
import Team from './pages/About/Team/Team';
import Welcome from './HomePage/welcome/Welcome';
import Involved from './pages/Involved/Involved';
import Events from './pages/Events/Events';
import ContactForm from './HomePage/header/ContactForm';
import Ladies from './pages/Involved/Ladies/ladies';
import Missions from './pages/Involved/Missions/Missions';
import Worship from './pages/Involved/Worship/Worship';
import SundaySchool from './pages/Involved/SundaySchool/SundaySchool';
import Empower from './pages/Involved/Empower/Empower';


function App() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';


  return (
    <div className="App">
      {isHomePage && (
        <div className='header__background'></div>
      )}
      <div className={isHomePage ? 'gradient__bgcl' : 'gradient__bgcl'}>
        <nav className="navbar__background">
          <Navbar />
        </nav>
      </div>
      <Routes>
        <Route path='/contact' element={<ContactForm />} />
        <Route path='/involved' element={<Involved />} />
        <Route path='/events' element={<Events />} />
        <Route path='/renew' element={<Renew />} />
        <Route path='/believe' element={<Features />} />
        <Route path='/about' element={<About />} />
        <Route path='/history' element={<History />} />
        <Route path='/pastor' element={<Pastor />} />
        <Route path='/team' element={<Team />} />
        <Route path='/ladies' element={<Ladies />} />
        <Route path='/missions' element={<Missions />} />
        <Route path='/worship' element={<Worship />} />
        <Route path='/sunday-school' element={<SundaySchool />} />
        <Route path='/empower' element={<Empower />} />

        <Route path='/' element={[<Header/>,<Welcome/>, <Info/>]} />
      </Routes>
      <footer><Footer /></footer>
    </div>
  );
};
export default App;