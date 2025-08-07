import React from 'react'
import "./stackCard.css"
import { motion } from 'motion/react'


export default function StackCard({icon, timer}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: {opacity: 0, x: 80},
        visible: {opacity: 1, x: 0},
        transition: { duration: timer, ease: "easeOut" },
      }}

     className="stack-card-container">
        {icon}
    </motion.div>
  )
}