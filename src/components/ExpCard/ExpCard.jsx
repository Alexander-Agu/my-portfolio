import React from 'react'
import "./expCard.css"
import { RiGroupLine } from "react-icons/ri";
import { LuCodeXml } from "react-icons/lu";


export default function ExpCard() {
  return (
    <div className="exp-card">
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
    </div>
  )
}