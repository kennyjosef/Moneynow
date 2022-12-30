import React from 'react'

const ButtonDash = (props) => {
    const style={
        width: "179px",
        height: "54px",
        backgroundColor: "purple"
    }
  return (
    <div>
        <button style={style}> {props.name}</button>
    </div>
  )
}

export default ButtonDash