import React from 'react'
import "./projects.css"
import ProjectCard from '../ProjectCard/ProjectCard'

export default function Projects() {
  return (
    <section className='projects-container' id='projects'>
        <h2 className='projects-title'>Featured Projects</h2>
        <p className='projects-intro'>
            A showcase of my recent work, demonstrating expertise in full-stack development and cloud integration.
        </p>

        <div className="projects">
            <ProjectCard />
        </div>
    </section>
  )
}