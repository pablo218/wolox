import React, { useState, useEffect, useReducer } from 'react'
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

        case "PASSCHANGED":
            return {
                ...state,
                isValid: action.isValid
            }

        default:
            return state

    }
}


const Inputs = ({ id, labelText, type, max, validators, pass1, onInput }) => {

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


    /*****REPETAT PASS ******/

    const [repValue, setRepValue] = useState("")
    const [repError, setrepError] = useState("")

    useEffect(() => {

        if (repValue !== pass1) {

            setrepError("Las Contraseñas no coinciden")

            dispatch({
                type: "PASSCHANGED",
                isValid: false
            })
        }
        else {
            setrepError("")

            const { isvalid } = validate(pass1, validators)

            dispatch({
                type: "PASSCHANGED",
                isValid: isvalid
            })
        }

    }, [pass1, repValue])


    const prepChange = (e) => {
        setRepValue(e.target.value)
    }


    return (
        <>
            <div className="Register__group">
                <label htmlFor={id} className="Register__group--label"><span>{labelText}</span></label>
                {!inputState.isValid && inputState.isTouched &&
                    <label htmlFor={id} className="Register__group--error"><span>{inputState.errorText}</span></label> //inputState.errorText === "" ? "Campo Obligatorio" : 
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


            <div className="Register__group">
                <label htmlFor="repcontraseña" className="Register__group--label"><span>Repetir Contraseña</span></label>
                {!inputState.isValid && inputState.isTouched &&
                    <label htmlFor={id} className="Register__group--error"><span>{repError}</span></label> //repError === "" ? "Campo requerido" : 
                }
                <input
                    type="text"
                    className={`Register__group--input`}
                    id="repcontraseña"
                    onChange={prepChange}
                    value={repValue}
                    onBlur={blurHandler}
                />
            </div>
        </>
    )
}

export default Inputs


//${!inputState.isValid && inputState.isTouched && "Register__group--input--error"}