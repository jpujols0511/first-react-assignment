import React from 'react';
import './Stylesheet.css'

const userInput = (props) => {
  

  return(
    <div>
      <input className="inputBox" type="text" onChange={props.changeName} value={props.name} />
    </div>
  )
}

export default userInput;