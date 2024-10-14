import React from 'react';
import '../../styles/main.scss'

const Input = (props) => {
  return (
    <div>
        <input className='input' type={props.type} disabled={props.disabled} value={props.value}/>      
    </div>
  )
}

export default Input
