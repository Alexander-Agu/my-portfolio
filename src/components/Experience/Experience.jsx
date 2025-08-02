import React from 'react'
import "./experience.css"
import ExpCard from '../ExpCard/ExpCard'

export default function Experience() {
  return (
    <section id='experience' className='experience-container'>
        <h2 className='exp-title'>Experience</h2>
        <p className='exp-intro'>
            Passionate about sharing knowledge and helping others grow in their development journey.
        </p>

        <div className="experiences">
            <ExpCard />
        </div>
    </section>
  )
}