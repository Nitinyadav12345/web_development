import React from 'react'
import './Experience.css'
const Experience = () => {
  return (
    <div className='experience' id='Experience'>
        <div className='achievement'>
            <div className="circle">9.0</div>
            <span>CGPA</span>
            <span>High School</span>
        </div>
        <div className='achievement'>
            <div className="circle">90%</div>
            <span>Intermediate</span>
            <span>12th</span>
        </div>
        <div className='achievement'>
            <div className="circle">80%</div>
            <span>B.Tech </span>
            <span>CSE</span>
        </div>
    </div>
  )
}

export default Experience
