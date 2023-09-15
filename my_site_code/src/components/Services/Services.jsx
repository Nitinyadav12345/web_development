import React from 'react'
import './Services.css'
import Glasses from '../../img/glasses.png'
import Card from '../Card/Card'
import Resume from './resume.pdf'
import { themeContext } from '../../Context'
import { useContext } from 'react'

const Services = () => {
  const theme  = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='services' id='Services'>
      <div className="awesome">
        <span style={{color:darkMode?'white':""}}>My Experinces</span>
        <span>With Projects</span>
        <span>
        I am a passionate Software Engineer with experience in building innovative <br /> solutions and contributing to the development of various projects... <br />
        Some of My Projects <br />
        1.Brain Tumor Classification <br />
        2.Portfolio-site <br />
        3.Emotion Recognition through Audio <br />
        4.Digital And Analog clock.
        </span>
        <a href={Resume} download><button className='button s-button'>Download CV</button></a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      <div className="cards">
        <div style={{left:'14rem'}}>
            <Card emoji = {Glasses} heading = {'MY-site React'} detail = {"React.js,Emailjs,netlify,github,  HTML,CSS,JSX .This is my Portflio Site which is created with help of react "} link={"#"}/>
        </div>
        <div style={{left:'-4rem', top:'12rem'}}>
            <Card emoji = {Glasses} heading = {'Brain Tumor Classification'} detail = {"Python , Jupyter Notebook , VS code , Open-CV, numpy arrays , Sklearn , Streamlit."} link = {'https://github.com/Nitinyadav12345/brain-tumor-detection-using-ml-classifiers'}/>
        </div>
        <div style={{top:'19rem', left:'12rem'}}>
            <Card emoji = {Glasses} heading = {'Digital/analog clock , Textutils And some clone Web apps'} detail = {"HTML, Css , Javascript "} link={'https://replit.com/@nitinyadav86'}/>
        </div>
        <div className='blur s-blur2' style={{background:"var(--purple))"}}></div>
      </div>
    </div>
  )
}

export default Services
