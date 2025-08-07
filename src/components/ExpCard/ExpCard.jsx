import React from 'react'
import "./expCard.css"
import { RiGroupLine } from "react-icons/ri";
import { LuCodeXml } from "react-icons/lu";
import { motion } from 'motion/react';



export default function ExpCard() {
  return (
    <motion.div className="exp-card"
        initial={{opacity: 0, y: 80}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.6, ease: "easeIn", delay: 0.6}}
        viewport={{once: true, amount: 0.3}}
    >
        <div className="exp-icon">
            <RiGroupLine />
        </div>

        <div className="exp-info">
            <h2 className='exp-info-title'>Bootcamp Assitance</h2>

            <p className='exp-info-intro'>Tech Education & Mentorship</p>

            <p className='exp-info-content'>Helped junior developers grow by guiding them through real-world projects and explaining key programming concepts clearly. Specialized in breaking down complex technical concepts into digestible learning experiences.</p>

            <div className="exp-info-benefits">
                <div className='exp-info-lesson'>
                    <LuCodeXml className='exp-info-icon'/>
                    <p>Real-world project guidance</p>
                </div>
                <div className='exp-info-lesson'>
                    <LuCodeXml className='exp-info-icon'/>
                    <p>Real-world project guidance</p>
                </div>
            </div>
        </div>
    </motion.div>
  )
}