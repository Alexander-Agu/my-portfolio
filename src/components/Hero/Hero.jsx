import React from 'react'
import "./hero.css"
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineFileDownload } from "react-icons/md";
import { socialLinks } from './HeroTools';
import { motion } from 'motion/react';


export default function Hero() {
  let time1 = 0.6;
  let time2 = 0.7;
  let time3 = 0.8;

  const itemVariants = (time) => { return{
    hidden: { opacity: 0, y: 75 },
    visible: { opacity: 1, y: 0, transition: { duration: time, ease: "easeOut" } },
  }
};


  return (
    <article className='hero-container'>
        <motion.div
        variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 }
        }}
        initial="hidden"
        animate="visible"
        transition={{duration: 0.5, delay: 0.25}}
        className="hero-section"
        >

            <motion.h2 className="hero-title" variants={itemVariants(0.6)}>
                Hi, my name is <span className="gradient-text">Alexander Agu</span>
            </motion.h2>

            <motion.p variants={itemVariants(0.8)} className="hero-intro">
                A passionate <span className="green-text">full-stack developer</span> and
                <span className="green-text"> tech mentor</span>, focused on building impactful web applications and cloud-integrated systems.
            </motion.p>

            <div className="hero-location">
                <IoLocationOutline
                style={{
                    color: "hsl(142, 71%, 45%)",
                    fontWeight: "bolder",
                    fontSize: "1.5rem"
                }}
                />
                <p>Based in South Africa, Gauteng, Rosebank</p>
            </div>

            <nav className="hero-navbar">
                <a href="#" className="hero-direct">View my work</a>
                <a href="#" download className="hero-download">
                <MdOutlineFileDownload />
                <p>Download Resume</p>
                </a>
            </nav>

            <div className="hero-socials">
                {socialLinks.map(({ icon, link }, index) => (
                <a href={link} key={index}>
                    {icon}
                </a>
                ))}
            </div>

    </motion.div>
  

        <section class="animated-background">
            <div class="floating-orb orb-1"></div>
            <div class="floating-orb orb-2"></div>
        </section>


    </article>
  )
}