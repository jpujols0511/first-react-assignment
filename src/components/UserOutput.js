import React from 'react';

const userOutput = (props) => {

  return(
    <div className='textBox'>
      <p>
        Hello my name is {props.name} and my track is {props.track}
      </p>
      <p>
        Test123123
      </p>
    </div>

  )
}

export default userOutput;