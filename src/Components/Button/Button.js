import React from 'react'

const Button = ({name, style}) => {
  return (
    <div>
      
         <button style={style} type='submit'>{name}</button>
    </div>
  )
}

export default Button