import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
        
        let newtext = text.toUpperCase();
        setText(newtext)
        props.showAlert("Converted to uppercase!", "success");
    }

     const handleLoClick = () =>{
        
        let newtext = text.toLowerCase();
        setText(newtext)
        props.showAlert("Converted to Lowerercase!", "success");
    }

    const handleClear = () =>{
        
        let newtext = '';
        setText(newtext)
         props.showAlert("Cleared!", "success");
    }

    const handleCopy = () =>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value)
         props.showAlert("Copied!", "success");
    }

    const handleExtraSpace = () =>{
        let newText = text.split(/[ ]+/);
        setText (newText.join(" "))
         props.showAlert("Extra space removed!", "success");

    }

    

    const handleOnChange = (event) =>{
        setText(event.target.value)
    }

    const [text, setText] = useState('');
    // text = "new text"; //wrong way to change the state.
    // setText("new text"); //Correct way to change the state.
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div class="mb-3">
        <textarea class="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn btn-primary mx-1" onClick={handleLoClick}>Convert to LowerCase</button>
        <button className="btn btn btn-primary mx-1" onClick={handleClear}>Clear Text</button>
        <button className="btn btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn btn-primary mx-1" onClick={handleExtraSpace}>Remove Extra Space</button>


    </div>
    <div className=" my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>Your text summary</h1>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
