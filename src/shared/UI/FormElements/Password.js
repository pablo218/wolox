import React, { useEffect, useReducer } from 'react';
import PropTypes from 'prop-types'

import { validate } from '../../Utils/validadores';
import { VALIDATOR_REQUIRE, VALIDATOR_PASS } from '../../Utils/validadores';

const inputReducer = (state, action) => {

    switch (action.type) {

        case 'CHANGE-PASS':

            const { isValid, errorText } = validate(action.val, action.validators)

            let isvalidRep;

            if (action.val !== "" && action.val2 !== "") {
                isvalidRep = action.val === action.val2
            }
            return {
                ...state,
                value: action.val,
                isValid: isValid,
                errorText: errorText,
                isValid2: isvalidRep,
                errorText2: "Las contraseñas no coinciden"
            }

        case 'CHANGE-PASS-R':

            let isValid2 = action.val === action.pass1

            return {
                ...state,
                value2: action.val,
                isValid2: isValid2,
                errorText2: "Las contraseñas no coinciden",
            }

        case 'TOUCH':
            return {
                ...state,
                isTouched: true,
            }

        case 'TOUCH-R':
            return {
                ...state,
                isTouched2: true,
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


const Password = ({ labelText, labelText2, onInput }) => {


    const [inputState, dispatch] = useReducer(inputReducer, {
        value: "", value2: "",
        isValid: false, isValid2: false,
        isTouched: false, isTouched2: false,
        errorText: "", errorText2: ""
    })

    const { value, isValid, isValid2 } = inputState


    useEffect(() => {

        const passValid = isValid2 && isValid;

        onInput("password", value, passValid);

    }, [value, isValid, isValid2, onInput])


    const changeHandler = (e) => {

        dispatch({
            type: "CHANGE-PASS",
            val: e.target.value,
            val2: inputState.value2,
            validators: [VALIDATOR_PASS(e.target.value), VALIDATOR_REQUIRE(e.target.value)]
        })
    }

    const changeHandler__rep = (e) => {
        dispatch({
            type: 'CHANGE-PASS-R',
            val: e.target.value,
            pass1: inputState.value

        })
    }

    const blurHandler = (e) => {
        dispatch({
            type: "TOUCH"
        })
    }

    const blurHandler__rep = (e) => {
        dispatch({
            type: "TOUCH-R"
        })
    }


    return (
        <>
            <div className="Register__group">
                <label htmlFor="contraseña" className="Register__group--label">
                    {labelText}
                </label>
                {!inputState.isValid && inputState.isTouched &&
                    <label htmlFor="contraseña" className="Register__group--error">
                        <span>{inputState.errorText === "" ? "Campo Obligatorio" : inputState.errorText}</span>
                    </label>
                }
                <input
                    type="password"
                    className={`Register__group--input
                             ${!inputState.isValid && inputState.isTouched && "Register__group--input--error"}`}
                    id="contraseña"
                    autoComplete="off"
                    onChange={changeHandler}
                    value={inputState.value}
                    onBlur={blurHandler}
                />
            </div>

            <div className="Register__group">
                <label htmlFor="repcontraseña" className="Register__group--label">
                    {labelText2}
                </label>
                {!inputState.isValid2 && inputState.isTouched2 &&
                    <label htmlFor="repcontraseña" className="Register__group--error">
                        <span>{inputState.errorText2 === "" ? "Campo Obligatorio" : inputState.errorText2}</span>
                    </label>
                }
                <input
                    type="password"
                    className={`Register__group--input
                             ${!inputState.isValid2 && inputState.isTouched2 && "Register__group--input--error"}`}
                    id="repcontraseña"
                    autoComplete="off"
                    onChange={changeHandler__rep}
                    value={inputState.value2}
                    onBlur={blurHandler__rep}
                />
            </div>

        </>
    )
}


Password.propTypes = {
    onInput: PropTypes.func.isRequired,
}

export default Password


