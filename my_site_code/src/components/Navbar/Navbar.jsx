import React from 'react'
import './Navbar.css'
import Toggle from '../Toggle/Toggle'
import { Link } from 'react-scroll' 


function Navbar() {
  return (
  <div className="n-wrapper" >
    <div className="n-left">
        <div className="n-name">Nitin</div>
        <Toggle/>
    </div>
    <div className="n-right">
        <div className="n-list">
            <ul style={{listStyleType : "none"}}>
              <Link spy = {true} to='Navbar' smooth={true}  >
              <li>Home</li>
              </Link>
              <Link spy = {true} to='Services' smooth={true}  >
              <li>Experience</li>
              </Link>
              <Link spy = {true} to='Experience' smooth={true} >
              <li>Skills</li>
              </Link>
              <Link spy = {true} to='Portfolio' smooth={true} >
              <li>Projects</li>
              </Link>
            </ul>
        </div>
        <Link spy = {true} to='contact' smooth={true} activeClass='activeClass'>
        <button className='button n-button'> Contact Me</button>
        </Link>
    </div>
  </div>
  )
}

export default Navbar
