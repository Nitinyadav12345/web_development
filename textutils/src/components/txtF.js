import React , {useState} from 'react'
import PropTypes from 'prop-types'

export default function TxtForm(props) {
    const handleUpClick = ()=>{
        // console.log("upper case was clicked")
        let new_text = text.toUpperCase();
        settext(new_text);
        props.showAlert("converted to uppercase" , "success");
    }

    const handleLowClick = ()=>{
        // console.log("upper case was clicked")
        let new_text = text.toLowerCase();
        settext(new_text);
        props.showAlert("converted to lowercase" , "success");
    }
     
    const handlecClick = ()=>{
        // console.log("upper case was clicked")
        let arr = text.split(" ");
        for (let i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase();
        }

        let new_text = arr.join(" ");
        //

        settext(new_text)
        props.showAlert("converted to sentencecase" , "success");
    }
    const handleClearClick= () =>{
        let new_text = ""
        settext(new_text)
        props.showAlert("cleared the text" , "warning");
    }
    const handleacClick = () => {
        let newStr = text.split('');
        let result = '';
        newStr.forEach(function(el) {
            if(el === el.toUpperCase()) {
            result += el.toLowerCase();
            } else {
            result += el.toUpperCase();
            }
        });
        settext(result)
        props.showAlert("converted to alternativecase" , "success");
    }

    const handleCopyClick = () =>{
        var copyText = document.getElementById("myBox");
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
        document.getSelection().removeAllRanges();
        props.showAlert("copied to clipboard","success")
    }

    const handleonChange = (event)=>{
        settext(event.target.value)
    }

    

  const [text , settext] = useState('');
  // text = "new text" //this is the wrong way to change the state 
  // setText("new Text"); //correct way to change the state
  return (
    <>
     <div className='container' style={{ color: props.mode === "dark" ? "white" :"black"}}>
        <div className="mb-3">
            <h2 className='mt-2 mb-2'>{props.heading}</h2>
            <textarea placeholder="Enter your here..." className="form-control" id="myBox" rows="8" value={text} onChange={handleonChange} style={{ backgroundColor: props.mode === "dark" ? "#13466e" :"white", color:props.mode === "dark" ? "white" :"black"}} ></textarea>
        </div>
        <button disabled={text.length === 0} onClick={handleUpClick} className='btn btn-success mx-2 my-1'>Convert to uppercase</button>
        <button disabled={text.length === 0} onClick={handleLowClick} className='btn btn-success mx-2 my-1'>Convert to Lowercase</button>
        <button disabled={text.length === 0} onClick={handlecClick} className='btn btn-success mx-2 my-1'>Convert to Capitalized</button>
        <button disabled={text.length === 0} onClick={handleClearClick} className='btn btn-success mx-2 my-1'>Clear</button>
        <button disabled={text.length === 0} onClick={handleacClick} className='btn btn-success mx-2 my-1'>AlTeRnAtInG TeXt</button>
        <button disabled={text.length === 0} onClick={handleCopyClick} className='btn btn-success mx-2 my-1'>Copy Text</button>

    </div>
    <div className='container my-3' style={{ color: props.mode === "dark" ? "white" :"black"}}>
        <h1>Your Text Summary</h1>
        <p>
            {text.split(" ").filter((element)=>{
            return element.length !== 0
            }).length} words And {text.length} charatcters
        </p>
        <p>
            You  can read this text in this much time {text.split(" ").filter((element)=>{
            return element.length !== 0
            }).length * 0.008} minutes
        </p>
        <h3>Preview</h3>
        <p>{text.length>0 ? text: "Enter the text to preview it"}</p>
    </div>
    </>
   
  )
}


TxtForm.propTypes = {
    heading: PropTypes.string.isRequired
};