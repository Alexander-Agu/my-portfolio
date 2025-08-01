import React from 'react'
import "./hero.css"
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineFileDownload } from "react-icons/md";
import { socialLinks } from './HeroTools';

export default function Hero() {
  return (
    <article className='hero-container'>
        <section class="hero-section">
            <h2 className='hero-title'>Hi, my name is <span className='gradient-text'>Alexander Agu</span></h2>
            <p className='hero-intro'>A passionate <span className='green-text'>full-stack developer</span> and <span className='green-text'>tech mentor</span>, focused on building impactful web applications and cloud-integrated systems.</p>

            <div className='hero-location'>
                <IoLocationOutline style={{"color": "hsl(142, 71%, 45%)", "fontWeight": "bolder", "fontSize": "1.5rem"}} />
                <p>Based in South Africa, Gauteng, Rosebank</p>
            </div>

            <nav className='hero-navbar'>
                <a href="" className='hero-direct'>View my work</a>
                <a href="" download={true} className='hero-download'><MdOutlineFileDownload /> <p>Download Resume</p></a>
            </nav>

            <div className="hero-socials">
                {
                    socialLinks.map(x => {
                        const { icon, link } = x;
                        return <a href={link}> {icon} </a>
                    })
                }
            </div>
        </section>
  

        <section class="animated-background">
            <div class="floating-orb orb-1"></div>
            <div class="floating-orb orb-2"></div>
        </section>


    </article>
  )
}