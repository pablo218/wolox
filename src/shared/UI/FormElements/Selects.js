import React, { useState, useContext } from 'react'

import { Language } from '../../Contexts/LanguageContext'



export const paisesProv = [{ pais: "Argentina", provincias: ["Buenos Aires", "Córdoba", "Mendoza", "San Juan", "Santa Fe"] },
{ pais: "Estados Unidos", provincias: ["San Francisco", "New York", "Dallas", "Miami", "Los Angeles"] },
{ pais: "Chile", provincias: ["Santiago", "Valparaíso", "La Serena", "Coquimbo", "Rancagua"] },
{ pais: "Colombia", provincias: ["Medellín", "Bogotá", "Santander", "Arauca", "Narino"] },
{ pais: "Mexico", provincias: ["Ciudad de México", "Veracruz", "Oaxaca", "Durango", "Guanajuato"] },
]

const Selects = ({ label, labelText, errorText, errorText2 }) => {

    const eng = useContext(Language).english

    const [valuePais, setValuePais] = useState("")

    const [valueProv, setValueProv] = useState("")


    const onChangeHandler = (e) => {
        setValueProv("")
        setValuePais(e.target.value)
    }


    const onChangeProv = (e) => {
        setValueProv(e.target.value)
    }

    let paisSeleccionado;
    let provincias;

    if (valuePais != "") {
        paisSeleccionado = paisesProv.filter(p => (
            p.pais === valuePais
        ))

        provincias = paisSeleccionado[0].provincias.map((prov) => (
            <option key={prov} value={prov}>{prov}</option>
        ))
    }


    return (
        <>
            <div className="Register__group">
                <label htmlFor={label} className="Register__group--label">{labelText}</label>
                <label htmlFor={label} className="Register__group--error"><span>{errorText}</span></label>
                <select className="Register__group--input" id={label} onChange={onChangeHandler} value={valuePais}>
                    <option value=""></option>
                    {
                        paisesProv.map(pais => (
                            <option key={pais.pais} value={pais.pais}>{pais.pais}</option>
                        ))

                    }
                </select>
            </div>

            <div className="Register__group">
                <label htmlFor="provincia" className="Register__group--label">{eng ? "State" : "Provincia"}</label>
                <label htmlFor={label} className="Register__group--error"><span>{errorText2}</span></label>
                <select className="Register__group--input" id="provincia" onChange={onChangeProv} value={valueProv}>
                    <option value=""></option>
                    {provincias}
                </select>
            </div>

        </>
    )
}

export default Selects

