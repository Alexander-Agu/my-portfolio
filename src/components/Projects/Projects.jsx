import React from 'react'
import "./projects.css"
import ProjectCard from '../ProjectCard/ProjectCard'
import { motion } from 'motion/react'
import { projectCards } from './ProjectTools'


export default function Projects() {
  return (
    <section className='projects-container' id='projects' style={{overflow: "hidden"}}>
        <motion.h2 className='projects-title'
          initial={{opacity: 0, x: -80}}
          whileInView={{opacity: 1, x: 0}}
          transition={{duration: 0.8, ease: "easeInOut"}}
          viewport={{once: true, amount: 0.3}}
        >
          Featured Projects
        </motion.h2>


        <motion.p className='projects-intro'
          initial={{opacity: 0, x: 80}}
          whileInView={{opacity: 1, x: 0}}
          transition={{duration: 0.8, ease: "easeInOut"}}
          viewport={{once: true, amount: 0.3}}
        >
            A showcase of my recent work, demonstrating expertise in full-stack development and cloud integration.
        </motion.p>

        <div className="projects">
            {
              projectCards.map( x => {
                return <ProjectCard cardData={x} key={x.name} />
              })
            }
        </div>
    </section>
  )
}