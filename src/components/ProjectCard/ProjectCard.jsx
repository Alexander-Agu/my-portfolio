import React from 'react'
import "./projectCard.css"
import { FaBox } from "react-icons/fa6";
import { GrShare } from "react-icons/gr";
import { FiGithub } from "react-icons/fi";
import { motion } from 'motion/react';
import { div } from 'motion/react-client';


export default function ProjectCard({cardData}) {
  const { name, des, icon, features, stack, demoLink, repLink } = cardData;
  return (
    <motion.div className="project-card-container"
      initial={{opacity: 0, y: 80}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 0.8, ease: "easeInOut"}}
      viewport={{once: true, amount: 0.3}}    
    >
        <div className="project-card-header">
          <div>
            {icon}
          </div>

          <h2>{name}</h2>
        </div>

        <p className='project-card-des'>
          {des}.
        </p>

        <div className="project-card-features-container">
          <h3>Key Features:</h3>

          <ul className="project-card-features">
            {
              features.map(x => {
                return <li>{x}</li>
              })
            }
          </ul>
        </div>

        <div className="project-card-stack-container">
          {
            stack.map(x => {
              return <div className="project-card-stack">{x}</div>
            })
          }
        </div>

        <div className="project-card-navbar">
          <a href={demoLink} className='project-card-demo'>
            <GrShare />
            <p>Live Demo</p>
          </a>

          <a href={repLink} className='project-card-github'>
            <FiGithub />
            <p>Source Code</p>
          </a>
        </div>
    </motion.div>
  )
}