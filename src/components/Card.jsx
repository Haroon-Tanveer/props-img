import React from 'react'

const card = (props) => {
  return (
    <div>
        {props.name}
        {props.children}
        card
        <button onClick={props.handleClick} >Click me  </button>
        {props.handleClick}
        <h1>{props.count}</h1>
        </div>

  )
}

export default card