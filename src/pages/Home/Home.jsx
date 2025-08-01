import React from 'react'
import "./home.css"
import Header from '../../components/Header/Header'
import Hero from '../../components/Hero/Hero'
import About from '../../components/About/About'
import Experience from '../../components/Experience/Experience'

export default function Home() {
  return (
    <main className='home' id='home'>
        <Header />
        <Hero />
        <About />
        <Experience />
    </main>
  )
}