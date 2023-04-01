import React from 'react'
import "./contact.css"
import {MdOutlineEmail} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'


export const Contact = () => {
  return (
    <section id = "contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact_option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>aavamadev@gmail.com</h5>
            <a href="mailto:aavamadev@gmail.com">Message</a>
          </article>
          <article className='contact_option'>
            <BsLinkedin className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <a href="https://www.linkedin.com/in/abhijithvamadev/" target="_blank" rel="noreferrer">
            <h5>LinkedIn Profile</h5>
          </a>
            <a href="https://www.linkedin.com/in/abhijithvamadev/">Message</a>
          </article>
          <article className='contact_option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+13477910726</h5>
            <a href="https://api.whatsapp.com/send?phone+13477910726">Message</a>
          </article>
          </div>
          <form action="">
            <input type = 'text' name = 'name' placeholder='Your Full Name' required/>
            <input type = 'text' name = 'email' placeholder='Your Email' required/>
            <textarea name = 'message' rows = '5' placeholder='Your Message' required/>
            <button type = 'submit' className='btn btn-primary'>Send Message</button>
          </form> 
        </div>
    </section>
  )
}
