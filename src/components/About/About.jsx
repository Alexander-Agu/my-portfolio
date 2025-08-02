import React from 'react'
import "./about.css"
import StackCard from '../StackCard/StackCard'
import { stack } from './AboutTools'


export default function About() {
  return (
    <section className='about-container' id='about'>
        <div className="about-me">
            <h2>About Me</h2>

            <p>
                I'm passionate about creating innovative solutions that bridge the gap between complex backend systems and intuitive user experiences. With expertise spanning multiple programming languages and frameworks, I enjoy tackling challenging projects that push the boundaries of what's possible in web development and cloud computing.
            </p>
        </div>


        <div className="tech-stack">
            <h2 className='tech-title'>Technologies I Use</h2>
            <p className='tech-intro'>
                I leverage modern technologies to build scalable, efficient, and user-friendly applications that solve real-world problems.
            </p>

            <div className="stack-container">
                {
                    stack.map(x => {
                        const {icon} = x;

                        return <StackCard icon={icon} />
                    })
                }
            </div>
        </div>
    </section>
  )
}