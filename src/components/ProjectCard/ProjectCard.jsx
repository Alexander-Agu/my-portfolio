import React from 'react'
import "./projectCard.css"
import { FaBox } from "react-icons/fa6";
import { GrShare } from "react-icons/gr";
import { FiGithub } from "react-icons/fi";

export default function ProjectCard() {
  return (
    <div className="project-card-container">
        <div className="project-card-header">
          <div>
            <FaBox className='project-card-icon' />
          </div>

          <h2>Inventory Management System</h2>
        </div>

        <p className='project-card-des'>
          A full-stack app for managing inventory, items, and valuations with real-time updates and comprehensive reporting features.
        </p>

        <div className="project-card-features-container">
          <h3>Key Features:</h3>

          <ul className="project-card-features">
            <li>Real-time inventory tracking</li>
            <li>Item valuation system</li>
            <li>Comprehensive reporting</li>
            <li>User management</li>
          </ul>
        </div>

        <div className="project-card-stack-container">
          <div className="project-card-stack">React</div>
          <div className="project-card-stack">ASP.NET</div>
          <div className="project-card-stack">C#</div>
          <div className="project-card-stack">Postgres</div>
        </div>

        <div className="project-card-navbar">
          <a href="https://invi-tory.vercel.app/" className='project-card-demo'>
            <GrShare />
            <p>Live Demo</p>
          </a>

          <a href="https://github.com/Alexander-Agu/Invi-Tory.git" className='project-card-github'>
            <FiGithub />
            <p>Source Code</p>
          </a>
        </div>
    </div>
  )
}