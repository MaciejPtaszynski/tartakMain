import React from 'react'
import './ContactForm.css'
import {useRef, useState} from "react";
import Swal from "sweetalert2";
import emailjs from '@emailjs/browser';

function ContactForm() {

  const [inputValue, setInputValue] = useState([{
    name: "",
    email: "",
    text: "",
    
  }]);

  const handleChangeInputValue = (event) => {
    setInputValue(event.target.value)
  }

  const form = useRef();

  const SERVICE_ID = "service_j6q2pbo";
  const TEMPLATE_ID = "template_71m364z";
  const PUBLIC_KEY = "OksLaORnIzZWmgPx7";

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: "success",
          title: "Dziękujemy za Wiadomość",
          customClass: {
            container: "Swal2-container"
          }
        })
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: "error",
          title: "Upps coś poszło nie tak",
          text: error.text,
        })
      });
    e.target.reset();
  };

  return <>
    <div className='formWrapper'>
      <form className='form' ref={form} onSubmit={sendEmail}>
        <div className={"formTitle"}>
          <h1>Skontaktuj się z nami</h1>
          <h3>Wyceny , zapytania, oferty</h3>
        </div>
        <input 
        className={"input"}
        placeholder='imię'
        name={"name"}
        value={inputValue.name}
        onChange={handleChangeInputValue} required
        />
        <input 
        className={"input"} 
        placeholder='email'
        name={"email"}
        value={inputValue.email}
        onChange={handleChangeInputValue} required type="email"
        />
        <textarea 
        placeholder='twoja wiadomość'
        name={"text"}
        value={inputValue.text}
        onChange={handleChangeInputValue} required
        />
        <button className={"btn"}>WYŚLIJ</button>
      </form>
    </div>
  </>
}

export default ContactForm
