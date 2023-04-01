import React from 'react'
import "./footer.css"
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {GrInstagram} from "react-icons/gr"

export const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Abhijith</a>
      <ul className='permalinks'>
        <li> <a href='#'>Home</a></li>
        <li> <a href='#about'>About</a></li>
        <li> <a href='#experience'>Experience</a></li>
        <li> <a href='#portfolio'>Portfolio</a></li>
        <li> <a href='#contact'>Contact</a></li>
      </ul>
      
      <div className='footer__socials'>
        <a href='https://www.linkedin.com/in/abhijithvamadev/'><BsLinkedin/></a>
        <a href='https://www.instagram.com/itdontmatterabhi/'><GrInstagram/></a>
        <a href='https://github.com/aaabhijith13'><FaGithub/></a>
      </div>
      <div className='footer__copyright'>
        <small>@Abhijith Anil Vamadev. All rights reserved.</small>
      </div>
    </footer>
  )
}
