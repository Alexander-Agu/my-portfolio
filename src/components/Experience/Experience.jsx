import React from 'react'
import "./experience.css"
import ExpCard from '../ExpCard/ExpCard'
import { motion } from 'motion/react'


export default function Experience() {
  return (
    <section id='experience' className='experience-container' style={{overflow: "hidden"}}>
        <motion.h2 className='exp-title'
          initial={{opacity: 0, x: -80}}
          whileInView={{opacity: 1, x: 0}}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.1}}
          viewport={{ once: true, amount: 0.3 }}
        >Experience</motion.h2>


        <motion.p className='exp-intro'
          initial={{opacity: 0, x: 80}}
          whileInView={{opacity: 1, x: 0}}
          transition={{duration: 1, ease: "easeInOut"}}
          viewport={{once: true, amount: 0.3}}
        >
            Passionate about sharing knowledge and helping others grow in their development journey.
        </motion.p>

        <div className="experiences">
            <ExpCard />
        </div>
    </section>
  )
}