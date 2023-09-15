import React, { useState } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { themeContext } from '../../Context';
import { useContext } from 'react';

const Contact = () => {
    const theme  = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const form = useRef();
    const [done , setDone] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_teltb4g', 'template_byrm4gs', form.current, 'iZOpuR4FyiuyLDQa2')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='contact-form' id='contact'>
        <div className="w-left">
            <div className="awesome">
                <span style={{color:darkMode?'white':''}}>Get in Touch</span>
                <span>Contact Me</span>
                <div className="blur s-blur"
                style={{background:'#abf1ff94'}}></div>
            </div>
        </div>
        <div className="c-right">
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="from_name" className='user' placeholder='Name'/>
                <input type="email" name="user_email" className='user' placeholder='email' />
                <textarea  name="message" className='user' placeholder='message' />
                <input type="submit" className='button' value='Send' />
                <span>{done && "Thanks for Contacting me!"}</span>
                <div className="blur c-blur"
                style={{background:'var(--purple)'}}></div>
            </form>
        </div>
    </div>
  )
}

export default Contact
