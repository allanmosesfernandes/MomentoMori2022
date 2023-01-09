import './formInput.scss';
import React from 'react'

const FormInput = ({label, ...otherInput}) => {
  return (
    <div className='group'>
        <input {...otherInput} className="form-input"/>
        {
            //== if label exists then render ==//
            label && (
                <label className={`${otherInput.value.length ? "shrink" : ""} form-input-label`}>{label}</label>
            )
        }
        
    </div>
  )
}

export default FormInput