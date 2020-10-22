import React from 'react'

const Inputs = ({ label, labelText, type }) => {

    return (
        <div className="Register__group">

            <label htmlFor={label} className="Register__group--label"><span>{labelText}</span></label>
            <input type={type} className="Register__group--input" id={label} autoComplete="off" />

        </div>
    )
}

export default Inputs
