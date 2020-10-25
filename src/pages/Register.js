import React, { useContext, useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

import { Language } from '../shared/Contexts/LanguageContext'
import { AuthContext } from '../auth/AuthContext'
import { types } from '../types/types'
import Button from '../shared/UI/Button'
import Input from '../shared/UI/FormElements/Inputs'
import Select from '../shared/UI/FormElements/Selects'
import { useForm } from '../shared/hooks/form-hook'
import { registerInputs } from '../shared/Utils/registerInputs'
import {
    VALIDATOR_EMAIL,
    VALIDATOR_PASS,
    VALIDATOR_REPEATPASS,
    VALIDATOR_PHONE,
    VALIDATOR_REQUIRE
} from '../shared/Utils/validadores'

const Register = () => {

    const [formState, inputHandler] = useForm(registerInputs, false)

    const [aceptTerms, setAceptTerms] = useState(false)

    const eng = useContext(Language).english

    const { dispatchUser } = useContext(AuthContext)

    const history = useHistory()

    const handleRegister = (e) => {
        e.preventDefault()
        dispatchUser({
            type: types.login,
            payload: {
                name: "Pablo"
            }
        })
        history.push("/techs")
    }

    const termsHandler = () => {
        setAceptTerms((x) => !x)
    }


    let formAcepted = false

    if (formState.isValid) {
        if (aceptTerms) {
            formAcepted = true
        }
    }


    return (
        <>

            <div className="Register">
                <form className="Register--form">
                    <Link to="/home">
                        <img className="Register--form--logo" src="./assets/logo_full_color.svg"></img>
                    </Link>

                    <h1 className="Register--form--title">{eng ? "Sign Up" : "Registrarse"}</h1>

                    <Input
                        id="nombre"
                        labelText={eng ? "Name" : "Nombre"}
                        type="text"
                        errorText={eng ? "required - max 30 characters" : "obligaotrio - máximo 30 caracteres"}
                        validators={[VALIDATOR_REQUIRE()]}
                        onInput={inputHandler}
                    />

                    <Input
                        id="apellido"
                        labelText={eng ? "Surname" : "Apellido"}
                        type="text"
                        errorText={eng ? "required - max 30 characters" : "obligaotrio - máximo 30 caracteres"}
                        validators={[VALIDATOR_REQUIRE()]}
                        onInput={inputHandler}
                    />
                    <Select
                        id="pais"
                        id2="provincia"
                        labelText={eng ? "Country" : "País"}
                        errorText={eng ? "Country is required" : "País es obligaotrio"}
                        errorText2={eng ? "State is required" : "Provincia es obligaotrio"}
                        validators={[VALIDATOR_REQUIRE()]}
                        onInput={inputHandler}
                    />

                    <Input
                        id="email"
                        labelText="Email"
                        type="text"
                        errorText={eng ? "required - use a valid format" : "obligatorio - usar un formato válido"}
                        validators={[VALIDATOR_EMAIL(), VALIDATOR_REQUIRE()]}
                        onInput={inputHandler}
                    />

                    <Input
                        id="telefono"
                        labelText={eng ? "Phone" : "Teléfono"}
                        type="text"
                        errorText={eng ? "*required - max 10 digits" : "*obligatorio - maximo 10 dígitos"}
                        validators={[VALIDATOR_REQUIRE(), VALIDATOR_PHONE()]}
                        onInput={inputHandler}

                    />
                    <Input
                        id="contraseña"
                        labelText={eng ? "Password" : "Contraseña"}
                        type="text"
                        errorText={eng ? "required - min 6 characters - alphanumeric " : "*obligatorio - minimo 6 caracteres - alfanumérica"}
                        validators={[VALIDATOR_PASS(), VALIDATOR_REQUIRE()]}
                        onInput={inputHandler}
                    />
                    <Input
                        id="repcontraseña"
                        labelText={eng ? "Repeat Password" : "Repetir Contraseña"}
                        type="text"
                        errorText={eng ? "Passwords doesn't match" : "Las contraseñas no coinciden"}
                        validators={[VALIDATOR_REPEATPASS(formState.inputs.contraseña.value)]}
                        onInput={inputHandler}
                    />
                    <div className="buton--check">
                        <Button
                            clicked={handleRegister}
                            disabled={!formAcepted}
                        >{eng ? "SEND" : "ENVIAR"}</Button>
                        <div className="buton--check--terms">
                            {aceptTerms ?
                                <CheckBoxIcon style={{ color: "#a3cc39", fontSize: "30px" }} onClick={termsHandler} /> :
                                <CheckBoxOutlineBlankIcon style={{ color: "#a3cc39", fontSize: "30px" }} onClick={termsHandler} />
                            }
                            <p>Acepto terminos y condiciones</p>
                        </div>

                    </div>
                </form>

                <div className="Register--image">
                    <img src="./assets/Img Hero/Ic_ilustra_Hero.png" />
                </div>

            </div>
        </>
    )
}

export default Register


