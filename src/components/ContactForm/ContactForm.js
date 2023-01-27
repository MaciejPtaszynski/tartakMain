import React from 'react'
import './ContactForm.css'

function ContactForm() {
  return <>
    <div className='formWrapper'>
      <form className='form'>
        <div className={"formTitle"}>
          <h1>Skontaktuj się z nami</h1>
          <h3>Wyceny , zapytania, oferty</h3>
        </div>
        <input className={"input"} placeholder='imię'/>
        <input className={"input"} placeholder='email'/>
        <textarea placeholder='twoja wiadomość'/>
        <button className={"btn"}>wyslij</button>
      </form>
    </div>
  </>
}

export default ContactForm
