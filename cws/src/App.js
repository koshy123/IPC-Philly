import React from 'react'
import { Footer, Blog, Possibility, Features, WhatIPC, Header} from './containers'
import { Navbar, Brand, CTA } from './components';
import './App.css'
function App() {
  return (
    <div className="App">
      <div className='gradient__bg'>
        <Navbar />
        <Header />
    </div>
    <Brand />
    <WhatIPC />
    <Features />
    {/* <Possibility /> */}
    {/* <CTA />
    <Blog /> */}
    <Footer />
    </div>
  );
};

export default App;