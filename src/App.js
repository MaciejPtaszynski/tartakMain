import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero'
import Offer from './components/Offer/Offer'
import Contact from './components/Contact/Contact'
// import { BrowserRouter as Router, Switch, Route } from 
// 'react-router-dom';
import './App.css';


function App() {
  return (
    <div className='App'>
        <Navbar/>
        <Hero/>
        <Offer/>
        <Contact/>
    </div>
  );
} 

export default App;
