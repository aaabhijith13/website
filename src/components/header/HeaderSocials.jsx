import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {GrInstagram} from "react-icons/gr"
export const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/abhijithvamadev/' target = ""><BsLinkedin/></a>
        <a href='https://github.com/aaabhijith13/Data_Science' target = ""><FaGithub/></a>
        <a href='https://www.instagram.com/itdontmatterabhi/' target = ""><GrInstagram/></a>


        
    </div>
  )
}
