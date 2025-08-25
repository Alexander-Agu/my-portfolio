import React from 'react'
import "./expCard.css"
import { LuCodeXml } from "react-icons/lu";
import { motion } from 'motion/react';



export default function ExpCard({body}) {
    const {icon, title, type, content, takeAways} = body[0]

    
  return (
    <motion.div className="exp-card"
        initial={{opacity: 0, y: 80}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.6, ease: "easeIn", delay: 0.6}}
        viewport={{once: true, amount: 0.3}}
    >
        <div className="exp-icon" style={{display: icon == false? "none" : "flex"}}>
            {icon}
        </div>

        <div className="exp-info">
            <h2 className='exp-info-title'>{title}</h2>

            <p className='exp-info-intro'>{type}</p>

            <p className='exp-info-content'>{content}</p>

            <div className="exp-info-benefits">
                <div className='exp-info-lesson'>
                    <LuCodeXml className='exp-info-icon'/>
                    <p>Placeholder1</p>
                </div>
                <div className='exp-info-lesson'>
                    <LuCodeXml className='exp-info-icon'/>
                    <p>placeholder2</p>
                </div>
            </div>
        </div>
    </motion.div>
  )
}