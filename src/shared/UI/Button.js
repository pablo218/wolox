import React from 'react'

const Button = (props) => {

    const { clases, clicked, disabled } = props

    return (
        <button className={`btn ${clases}`} onClick={clicked} disabled={disabled}>
            {props.children}
        </button>
    )
}

export default Button
