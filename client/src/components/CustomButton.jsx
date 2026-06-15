import React from 'react'

const CustomButton = ({text,type="button",onClick}) => {
  return (
    <button type={type} onClick={onClick}>
      {text}
    </button>
  )
}

export default CustomButton