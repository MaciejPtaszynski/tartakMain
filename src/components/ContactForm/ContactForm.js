import React from 'react'
import './ContactForm.css'

function ContactForm() {
  return (
    <div className='formWrapper'>
        <form className='form'>
            <h1>Skontaktuj się z nami</h1>
            <h3>Wyceny , zapytania, oferty</h3>
        <input placeholder='imię'/>
        <input placeholder='email'/>
        <textarea placeholder='twoja wiadomość'/>
        <button>wyslij</button>
    </form>
    </div>
  )
}

export default ContactForm
