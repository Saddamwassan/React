import React from 'react'
import './button.css';

function Button({type,className}) {
  return (
    <button className={className}>
        {type}
    </button>
  )
}

export default Button