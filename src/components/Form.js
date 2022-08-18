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
  
  const handleOnChange = (event) =>{
    setText(event.target.value);
  }

  return (
    <>
      <h3>{props.heading}</h3>
      <textarea className="form-control" onChange={handleOnChange} value={text} rows="10"/>
      <button className='btn btn-primary my-3' onClick={handleUpClick}>Convert to Uppercase</button>      
      <button className='btn btn-primary my-3 mx-2' onClick={handleDbClick}>Convert to Lowercase</button>
    </>
  )
}

export default Form
