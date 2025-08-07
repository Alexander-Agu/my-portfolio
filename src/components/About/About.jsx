import React from 'react'
import "./about.css"
import StackCard from '../StackCard/StackCard'
import { stack } from './AboutTools'
import { motion } from 'framer-motion'

export default function About() {
    const itemVariants = (time) => ({
        hidden: { opacity: 0, x: -80 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: time, ease: "easeOut" },
        },
    });

    let timer = 0.8;

    return (
        <section className='about-container' id='about' style={{overflow: "hidden"}}>
            <motion.div
                className="about-me"
                variants={itemVariants(0.6)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                <h2>About Me</h2>
                <p>
                    I'm passionate about creating innovative solutions that bridge the gap between complex backend systems and intuitive user experiences. With expertise spanning multiple programming languages and frameworks, I enjoy tackling challenging projects that push the boundaries of what's possible in web development and cloud computing.
                </p>
            </motion.div>

            <motion.div className="tech-stack">
                <motion.h2 className='tech-title'        
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut"}}
                    viewport={{ once: true, amount: 0.3 }}
                >Technologies I Use</motion.h2>


                <motion.p className='tech-intro'
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.3}}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    I leverage modern technologies to build scalable, efficient, and user-friendly applications that solve real-world problems.
                </motion.p>

                <div className="stack-container">
                    {stack.map((x, index) => {
                        const { icon } = x;
                        timer++;
                        return <StackCard key={index} icon={icon} timer={timer} />;
                    })}
                </div>
            </motion.div>
        </section>
    );
}
