import React from 'react'
import './Footer.css'
import wave from '../../img/wave.png'
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Linkdin from '@iconscout/react-unicons/icons/uil-linkedin'
import Github from '@iconscout/react-unicons/icons/uil-github'
const Footer = () => {
  return (
    <div className='footer'>
      <img src={wave} alt="" style={{width:'100%'}} />
      <div className="f-content">
        <span >Email : nitinyadav20102001@gmail.com <br /> MOb.No : +91 - 75999-77737 <br />Agra UP</span>
        <div className="f-icons">
            <a href="https://www.instagram.com/the.yadavji4746/" target="_blank"><Insta color='white' size='3rem'/></a>
            <a href="https://github.com/Nitinyadav12345" target="_blank"><Github color='white' size='3rem'/></a>
            <a href="https://www.linkedin.com/in/nitin-yadav-3095211b7/" target="_blank"><Linkdin color='white' size='3rem'/></a>
        </div>
      </div>
    </div>
  )
}

export default Footer
