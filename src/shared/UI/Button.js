import React from 'react'

const Button = (props) => {
    return (
        <button className={`btn  ${props.clases}`}>
            {props.children}
        </button>
    )
}

export default Button
