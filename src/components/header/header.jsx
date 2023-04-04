import React from 'react';
import "./header.css";
import { CTA } from './CTA';
import ME from "./../../assets/transparent_abhi.png"
import { HeaderSocials } from './HeaderSocials';

export function Header() {  
  return (
    <section id = "header">
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Abhijith Anil Vamadev</h1>
        <h5 className="text-light">Data Scientist | Actively Seeking Full Time Oppurtunity in Data Science | Machine Learning and Statistics | Python | JavaScript |</h5>
        <CTA/>
        <HeaderSocials/>

      <div className="me" > 
        <img  src={ME} alt = "me" />
      </div>

      <a href = "#contact" className='scroll__down'> Scroll Down</a>
      </div>
    </header>
    </section>

  )
}

