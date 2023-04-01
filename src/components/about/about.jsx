import React from 'react'
import "./about.css"
import ME from "./../../assets/abhi.jpg"
import {FaAward} from "react-icons/fa";
import {FiUsers} from "react-icons/ai"
import {GrCertificate} from "react-icons/gr"
import {AiFillCode} from "react-icons/ai"

export const About = () => {
  return (
    <section id = "about">
      <h5>Get to Know Me!</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src = {ME} alt = "About Image"/>
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>2+ Years in different Industries</small>
            </article>
            <article className='about__card'>
              <GrCertificate className='about__icon certifcate__icon'/>
              <h5>Education</h5>
              <small className='study'>B.S Industrial Engineering, Purdue University</small>
              <small className='study'>M.S Applied Data Science, Syracuse University</small>
            </article>
            <article className='about__card'>
              <AiFillCode className='about__icon'/>
              <h5>Interests</h5>
              <small>Coding, AI, Gaming, Anime and Food!!!</small>
            </article>
          </div>

          <p>
          A forward-thinking entrepreneurial minded individual with a passion for developing solutions for intriguing problems. I am experienced in using Statistical modeling and have completed a multitude of projects using Python. I am comfortable using Python for Exploratory data analysis predictive models, machine learning algorithms - Supervised (Classification and Regression problems), and Unsupervised learning on different domains.
          </p>
        </div>
      </div>
    </section>
  )
}
