import React from 'react'
import IMG1 from "./../../../assets/portfolio1.jpg"
import IMG2 from "./../../../assets/portfolio2.jpg"
import IMG3 from "./../../../assets/portfolio3.jpg"

import "./personalproj.css"

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Personal Project 1",
    description: "",
    github: ""
  },
  {
    id: 2,
    image: IMG2,
    title: "Personal Project 2",
    description: "",
    github: ""
  },
  {
    id: 3,
    image: IMG3,
    title: "Personal Project 3",
    description: "",
    github: ""
  },
]

export const Personalproj = () => {
  return (
    <div className='container portfolio__containter'>
      {
        data.map(({id, image, title, description, github}) => {
          return (
              <article key = {id}className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src = {image} alt=""/>
                </div>
                  <h3>{title}</h3>
                  <div className="description__container">
                  <h5>{description}</h5> 
                  </div>
                  <div className='github__container'>
                  <a href={github} className='btn' target='_blank' rel="noreferrer">Github</a>
                </div>
            </article>
          )
        })
      }
    

  </div>
  )
}
