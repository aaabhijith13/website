import React from 'react'
import "./portfolio.css"
import { Datascience } from './projects/Datascience'
import { Personalproj } from './projects/Personalproj'
import { useState } from 'react'
export const Portfolio = () => {
  const [projectType, setprojType] = useState(0)

  return (

    <section id = "portfolio">
      <div className='container project__labels'>
        <div className={`datasci__container ${projectType === 0 ? "active" : ""}`} onClick={()=> setprojType(0)}>
        <h5 >Data Science Projects</h5>
        </div>
        <div className='char__container'>
        <h5>||</h5>
        </div>
        <div className={`personal__container ${
            projectType === 1 ? "active" : ""
          }`} onClick={()=> setprojType(1)}>
        <h5 >Personal Projects</h5>
        </div>
      </div>
      <h2> My Projects</h2>
      {projectType === 0 ? <Datascience/>: <Personalproj/>}

    </section>
  )
}
