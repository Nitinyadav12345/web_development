import React from 'react'
import './Intro.css'
import Github from '../../img/github.png';
import Linkdin from '../../img/linkedin.png';
import vector1 from '../../img/Vector1.png';
import vector2 from '../../img/Vector2.png';
import boy from '../../img/boy-nitin.png';
import python from '../../img/python.png';
import frontend from '../../img/frontend.png';
import glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import { themeContext } from '../../Context'
import { useContext } from 'react'
import { Link } from 'react-scroll' 

function Intro() {
    // const transition = { duration: 2, type: "spring" };
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

  return (
    <div className='intro' id='Navbar'>
        <div className="i-left">
            <div className="i-name">
                <span style={{color:darkMode?'white':''}}>Hi! I Am</span>
                <span>Nitin Yadav</span>
                <span>Aspiring software Engineer Having the knowledge in the field of Web development And Machine learning. Eager and passionate tech enthusiast with a strong foundation in computer science
                and a relentless drive to become a skilled software engineer. A recent graduate with
                a solid academic record, I am well-versed in programming languages, software
                development methodologies, and eager to contribute to innovative projects. <br />
                During my internships at yoshops.com, I gained hands-on experience in exploring the data using technologies such as Python,web scrapping and Machine learning . I have also sharp my skills in areas such as object-oriented programming, data structures, and algorithms.
                </span>
            </div>
            <Link spy = {true} to='contact' smooth={true} activeClass='activeClass'>
            <button className="button i-button">Hire Me</button>
            </Link>
            
            <div className="i-icons">
                <a href="https://github.com/Nitinyadav12345" target="_blank"><img src={Github} alt="" /></a>
                <a href="https://www.linkedin.com/in/nitin-yadav-3095211b7/" target="_blank"><img src={Linkdin} alt="" /></a>
            </div>
        </div>
        <div className="i-right">
            <img src={ vector1} alt="" />
            <img src={ vector2} alt="" />
            <img src={ boy} alt="" />
            <img src={glassesimoji} alt="" />
            <div style={{top:"-4%" , left:'68%'}}>
                <FloatingDiv image = {frontend} txt1="Frontend" txt2 ="Developer"/>
            </div>
            <div style={{top:"18rem", left:"0rem"}}> <FloatingDiv image = {python} txt1="Python" txt2="Developer"/>
            </div>
            {/* these are the blurdivs */}
            <div className='blur' style={{background:"rgb(238 210 255)"}}></div>
            <div className="blur" style={{background:'#c1f5ff',
               top:"17rem",
               width:'21rem',
               height:'11rem',
               left:"-9rem"}}>
            </div>
        </div>
    </div>
  )
}

export default Intro
