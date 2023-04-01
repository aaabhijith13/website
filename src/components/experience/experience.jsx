import React from 'react'
import "./experience.css"
import { BsPatchCheckFill} from 'react-icons/bs'
import experiencesData from './dataScience.json';


export const Experience = () => {
  const experiences = experiencesData.experiences;
  const programming = experiencesData.programming;

  return (
    <section id = "experience">
      <h5> Skills</h5>
      <h2> My Experience</h2>


      <div className='container experience__container'>
        <div className='experience__programming'>
          <h3> Programming</h3>
          <div className='experience__content'>
            {programming.map((programming, index) => (
              <article className="experience__details" key={index}>
                <BsPatchCheckFill className = "experience__details-icon"/>
                <div>
                  <h4>{programming.skill}</h4>
                  <small className='text-light'>{programming.level}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
      {/* END OF FIRST BOX */ }

          <div className = "experience__mlai">
          <h3> Data Science</h3>
          <div className='experience__content'>
          {experiences.map((experience, index) => (
          <article className="experience__details" key={index}>
          <BsPatchCheckFill className = "experience__details-icon"/>
            <div>
            <h4>{experience.skill}</h4>
            <small className='text-light'>{experience.level}</small>
          </div>
        </article>
        ))}
            
            </div>
          </div>
          </div>
    </section>
  )
}
