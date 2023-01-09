import './forminput.scss';
import React from 'react'

const FormInput = ({label, otherInput}) => {
  return (
    <div>
        <label>{label}</label>
        <input {...otherInput} />
    </div>
  )
}

export default FormInput