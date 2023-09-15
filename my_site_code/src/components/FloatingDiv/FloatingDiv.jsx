import React from 'react'
import './FloatingDiv.css'


const FloatingDiv = (props) => {

  return (
    <div>
      <div className="floatingdiv">
        <img src={props.image} alt="" />
        <span>{props.txt1} <br/> {props.txt2}</span> 
      </div>
    </div>
  )
}

export default FloatingDiv
