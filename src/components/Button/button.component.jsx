import React from 'react'
import './buttonStyles.scss'

//Match these with the buttonType prop received
const buttonClasses = {
default: "",
inverted: "inverted",
google: "google-sign-in"
}


const Button = ({buttonType,children, ...otherProps}) => {
  return (
    <button className={`button-container ${buttonClasses[buttonType]}`} {...otherProps}>{children}</button>
  )
}

export default Button
/* 
    <button className={`button-container ${buttonClasses[buttonType]}`} {...otherProps}>
      {children}
    </button>
  ) */