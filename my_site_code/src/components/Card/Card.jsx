import React from 'react'
import './Card.css'
const Card = (props) => {
  return (
    <div className='card'>
        <img src={props.emoji} alt="" />
        <span>{props.heading}</span>
        <span>{props.detail}</span>
        <a href={props.link} target='_blank'>
        <button className="c-button">More Info</button>
        </a>
        
    </div>
  )
}

export default Card
