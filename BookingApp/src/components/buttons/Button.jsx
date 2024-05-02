import React from 'react'

function Button({type,className}) {
  return (
    <button className={className}>
        {type}
    </button>
  )
}

export default Button