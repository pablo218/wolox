import React, { useEffect, useContext, useReducer } from 'react'

import { validate } from '../../Utils/validadores'
import { Language } from '../../Contexts/LanguageContext'
import { paisesProv } from '../../Utils/PaisesProvincias'


const selectReducer = (state, action) => {

    switch (action.type) {

        case 'CHANGE':
            if (action.label === "PAIS") {
                const { isValid, errorText } = validate(action.valuePais, action.validators)
                return {
                    ...state,
                    valueProv: "",
                    provIsValid: false,
                    valuePais: action.valuePais,
                    paisIsValid: isValid,

                }
            }
            if (action.label === "PROV") {
                const { isValid, errorText } = validate(action.valueProv, action.validators)
                return {
                    ...state,
                    valueProv: action.valueProv,
                    provIsValid: isValid
                }
            }

        case 'TOUCH':
            if (action.label === "PAIS") {
                return {
                    ...state,
                    paisIsTouched: true
                }
            }
            if (action.label === "PROV") {
                return {
                    ...state,
                    provIsTouched: true
                }
            }

        default:
            return state

    }
}



const Selects = ({ id, id2, labelText, errorText, errorText2, validators, onInput }) => {

    const [selectState, dispatch] = useReducer(selectReducer, {
        valuePais: "",
        valueProv: "",
        paisIsTouched: false,
        provIsTouched: false,
        paisIsValid: false,
        provIsValid: false
    })


    const { valuePais, valueProv, provIsValid, paisIsValid } = selectState


    useEffect(() => {

        onInput(id, valuePais, paisIsValid)

    }, [id, valuePais, paisIsValid, onInput])

    useEffect(() => {

        onInput(id2, valueProv, provIsValid)

    }, [id2, valueProv, provIsValid, onInput])


    const eng = useContext(Language).english


    const blurHandlerPais = () => {
        dispatch({
            type: "TOUCH",
            label: "PAIS"
        })
    }



    const blurHandlerProv = () => {
        dispatch({
            type: "TOUCH",
            label: "PROV"
        })
    }


    const onChangePais = (e) => {
        dispatch({
            type: "CHANGE",
            label: "PAIS",
            valuePais: e.target.value,
            validators: validators
        })
    }


    const onChangeProv = (e) => {
        dispatch({
            type: "CHANGE",
            label: "PROV",
            valueProv: e.target.value,
            validators: validators
        })
    }

    let paisSeleccionado;
    let provincias;

    if (selectState.valuePais != "") {
        paisSeleccionado = paisesProv.filter(p => (
            p.pais === selectState.valuePais
        ))

        provincias = paisSeleccionado[0].provincias.map((prov) => (
            <option key={prov} value={prov}>{prov}</option>
        ))
    }


    return (
        <>
            <div className="Register__group">
                <label htmlFor={id} className="Register__group--label">{labelText}</label>
                {!selectState.paisIsValid && selectState.paisIsTouched &&
                    <label htmlFor={id} className="Register__group--error"><span>{errorText}</span></label>
                }
                <select className="Register__group--input"
                    id={id}
                    onChange={onChangePais}
                    value={selectState.valuePais}
                    onBlur={blurHandlerPais}>
                    <option value=""></option>
                    {
                        paisesProv.map(pais => (
                            <option key={pais.pais} value={pais.pais}>{pais.pais}</option>
                        ))

                    }
                </select>
            </div>

            <div className="Register__group">
                <label htmlFor={id2} className="Register__group--label">{eng ? "Province" : "Provincia"}</label>
                {!selectState.provIsValid && selectState.provIsTouched &&
                    <label htmlFor="provincia" className="Register__group--error"><span>{errorText2}</span></label>
                }
                <select className="Register__group--input"
                    id={id2}
                    onChange={onChangeProv}
                    value={selectState.valueProv}
                    onBlur={blurHandlerProv}>
                    <option value=""></option>
                    {provincias}
                </select>
            </div>

        </>
    )
}

export default Selects

