import React from 'react'
import './Works.css'
import up from '../../img/python.png'
import left from '../../img/c.png'
import middle from '../../img/react1.png'
import right from '../../img/html.jpg'
import down from '../../img/tailwind.png'
import { themeContext } from '../../Context';
import { useContext } from 'react';



const Works = () => {
  const theme  = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='works'>
        <div className="awesome">
        <span style={{color:darkMode?'white':''}}>Works With</span>
        <span>Technologies</span>
        <span> I have Worked with these Technologies. <br />
        C/C++ , Python, SQL, <br />OOPS, Problem-Solving, Machine Learning, <br />Scikit Learn, Html, Css, <br />Javascript , databases , tailwind css, <br /> bootstarp ,React.js <br /> with Help of these Technologies I create the many projects 

        </span>
        {/* <button className="button s-button">Hire Me</button> */}
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>

      <div className="w-right">
        <div className="w-maincircle">
            <div className="seccircle">
                <img src={up} alt="" />
            </div>
            <div className="seccircle">
                <img src={left} alt="" />
            </div>
            <div className="seccircle">
                <img src={middle} alt="" />
            </div>
            <div className="seccircle">
                <img src={right} alt="" />
            </div>
            <div className="seccircle">
                <img src={down} alt="" />
            </div>
        </div>
        <div className="w-backcircle bluecircle"></div>
        <div className="w-backcircle yellowcircle"></div>
      </div>
    </div>
  )
}

export default Works
