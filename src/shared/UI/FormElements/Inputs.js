import React, { useEffect, useReducer } from 'react'
import { validate } from '../../Utils/validadores'

const inputReducer = (state, action) => {

    switch (action.type) {

        case 'CHANGE':

            const { isValid, errorText } = validate(action.val, action.validators)

            return {
                ...state,
                value: action.val,
                isValid: isValid,
                errorText: errorText
            }

        case 'TOUCH':
            return {
                ...state,
                isTouched: true,
            }
        default:
            return state

    }
}


const Inputs = ({ id, labelText, type, max, validators, onInput }) => {

    const [inputState, dispatch] = useReducer(inputReducer, { value: "", isValid: false, isTouched: false, errorText: "" })

    const { value, isValid } = inputState

    useEffect(() => {

        onInput(id, value, isValid)

    }, [id, value, isValid, onInput])


    const changeHandler = (e) => {

        dispatch({
            type: "CHANGE",
            val: e.target.value,
            validators: validators,
        })
    }

    const blurHandler = () => {
        dispatch({
            type: "TOUCH"
        })
    }


    return (
        <div className="Register__group">

            <label htmlFor={id} className="Register__group--label"><span>{labelText}</span></label>

            {!inputState.isValid && inputState.isTouched &&
                <label htmlFor={id} className="Register__group--error"><span>{inputState.errorText === "" ? "Campo Obligatorio" : inputState.errorText}</span></label>
            }

            <input
                type={type}
                className={`Register__group--input
                             ${!inputState.isValid && inputState.isTouched && "Register__group--input--error"}`}
                id={id} autoComplete="off"
                maxLength={max}
                onChange={changeHandler}
                value={inputState.value}
                onBlur={blurHandler}
            />

        </div>
    )
}

export default Inputs
