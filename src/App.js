import React from 'react';
import Hero from './components/Hero/Hero'
import Offer from './components/Offer/Offer'
import Footer from './components/Footer/Footer';
import './App.css';
import ContactForm from "./components/ContactForm/ContactForm";


function App() {
  return (
    <div className='App'>
      <Hero/>
      <Offer/>
      <div className={"contact"}>
        <ContactForm/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
