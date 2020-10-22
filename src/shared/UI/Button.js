import React from 'react'

const Button = (props) => {

    const { clases, clicked } = props

    return (
        <button className={`btn  ${clases}`} onClick={clicked}>
            {props.children}
        </button>
    )
}

export default Button
