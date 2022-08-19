import React, {useState} from 'react'

function Form(props) {
  const [text, setText] = useState('Enter text here');

  const handleUpClick = () =>{
    let newText = text.toUpperCase();
    setText(newText)
  }
  const handleDbClick = () =>{
    let capText = text.toLowerCase();
    setText(capText)
  }
  const clearText = () =>{
    let newText = "";
    setText(newText)
  }
  
  const handleOnChange = (event) =>{
    setText(event.target.value);
  }

  return (
    <>
      <div>
        <h3>{props.heading}</h3>
        <textarea className="form-control" onChange={handleOnChange} placeholder="Enter your text here" rows="7"/>
        <button className='btn btn-primary my-2' onClick={handleUpClick}>Uppercase</button>      
        <button className='btn btn-primary my-2 mx-2' onClick={handleDbClick}>Lowercase</button>
        <button className='btn btn-danger my-2' onClick={clearText}>Clear Text</button>
      </div>
    
      <div className=' my-3'>
        <h3>Your Text Summary</h3>
        <p>{text.split(" ").length-1} words and {text.length} characters</p>
        <p>{0.008*text.split("").length} Minutes read</p>
        <h4>Output Text</h4>
        <p>{text}</p>
      </div>

    </>
  )
}

export default Form
