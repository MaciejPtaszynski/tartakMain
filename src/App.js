import React from 'react';
import Hero from './components/Hero/Hero'
import Offer from './components/Offer/Offer'
import Footer from './components/Footer/Footer';

import './App.css';


function App() {
  return (
    <div className='App'>
        <Hero/>
        <Offer/>
        <Footer/>
    </div>
  );
} 

export default App;
