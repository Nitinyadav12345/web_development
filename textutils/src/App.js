import { useState } from 'react';
import './App.css';
import * as React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import About from './components/about';
import TxtForm from './components/txtF';
import Alert from './components/alert';

function App() {
  const [mode , setDarkMode] = useState("light") //dark mode is enabled or not
  const [btnr , setbtnr] = useState("Enable Dark Mode")
  const [alert,setAlert] = useState(null)
  const showAlert = (message,type) =>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toggleMode = ()=>{
     if(mode === "light"){
      setDarkMode("dark");
      document.body.style.backgroundColor = '#042743';
      setbtnr("Enable Light Mode")
      showAlert("Dark Mode has been enabled","success");
     }
     else{
      setDarkMode('light'); 
      document.body.style.backgroundColor = 'white';
      setbtnr("Enable Dark Mode")
      showAlert("light Mode has been enabled","success");
     }
  }
  return (
    <>
    <Router>
      {/* <Navbar title = "TextUtils"  AboutText = "AboutTextUtils"/> */}
      <Navbar title = "TextUtils" mode ={mode} toggleMode ={toggleMode} btnr = {btnr}/>
      {/* <Navbar /> */}
      <Alert alert={alert}/>
      <div className="container my-3">
      <Switch>
          <Route exact path="/">
          <TxtForm heading="Try TextUtils - Word counter , Character Counter , Alternating text" mode ={mode} showAlert ={showAlert}/>
          </Route>
          <Route exact path="/about">
            <About mode={mode}/>
          </Route>
      </Switch>
      
      {/* <About/> */}
      </div> 
      </Router>
    </>
  );
}

export default App;
