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
//import Password from '../shared/UI/FormElements/Password'
import { useForm } from '../shared/hooks/form-hook'
import { registerInputs } from '../shared/Utils/registerInputs'
import {
    VALIDATOR_EMAIL,
    VALIDATOR_PASS,
    VALIDATOR_REPEATPASS,
    VALIDATOR_PHONE,
    VALIDATOR_REQUIRE
} from '../shared/Utils/validadores'
import { fetchFunction } from '../shared/Utils/fetchFunction'

const Register = () => {

    const [formState, inputHandler] = useForm(registerInputs, false)

    const [aceptTerms, setAceptTerms] = useState(false)

    const eng = useContext(Language).english

    const { dispatchUser } = useContext(AuthContext)

    const history = useHistory()

    const handleRegister = (e) => {
        e.preventDefault()
        fetchFunction(
            "http://private-8e8921-woloxfrontendinverview.apiary-mock.com/signup",
            {
                method: "POST",
                body: JSON.stringify({
                    name: formState.inputs.name.value,
                    last_name: formState.inputs.last_name.value,
                    country: formState.inputs.country.value,
                    province: formState.inputs.province.value,
                    mail: formState.inputs.mail.value,
                    phone: formState.inputs.phone.value,
                    password: formState.inputs.password.value,
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
            .then(responseData => {
                dispatchUser({
                    type: types.login,
                    payload: {
                        token: responseData.token
                    }
                })
                history.push("/techs")
            })
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
                        id="name"
                        labelText={eng ? "Name" : "Nombre"}
                        type="text"
                        validators={[VALIDATOR_REQUIRE()]}
                        onInput={inputHandler}
                    />

                    <Input
                        id="last_name"
                        labelText={eng ? "Surname" : "Apellido"}
                        type="text"
                        validators={[VALIDATOR_REQUIRE()]}
                        onInput={inputHandler}
                    />
                    <Select
                        id="country"
                        id2="province"
                        labelText={eng ? "Country" : "País"}
                        errorText={eng ? "Country is required" : "Campo Obligaotrio"}
                        errorText2={eng ? "State is required" : "Campo Obligaotrio"}
                        validators={[VALIDATOR_REQUIRE()]}
                        onInput={inputHandler}
                    />

                    <Input
                        id="mail"
                        labelText="Email"
                        type="text"
                        validators={[VALIDATOR_EMAIL(), VALIDATOR_REQUIRE()]}
                        onInput={inputHandler}
                    />

                    <Input
                        id="phone"
                        labelText={eng ? "Phone" : "Teléfono"}
                        type="text"
                        validators={[VALIDATOR_REQUIRE(), VALIDATOR_PHONE()]}
                        onInput={inputHandler}
                    />

                    {/* <Password
                        id="contraseña"
                        labelText={eng ? "Password" : "Contraseña"}
                        validators={[VALIDATOR_PASS(), VALIDATOR_REQUIRE()]}
                        pass1={formState.inputs.contraseña.value}
                        onInput={inputHandler}
                    /> */}


                    <Input
                        id="password"
                        labelText={eng ? "Password" : "Contraseña"}
                        type="text"
                        validators={[VALIDATOR_PASS(), VALIDATOR_REQUIRE()]}
                        onInput={inputHandler}
                    />
                    <Input
                        id="repcontraseña"
                        labelText={eng ? "Repeat Password" : "Repetir Contraseña"}
                        type="text"
                        validators={[VALIDATOR_REPEATPASS(formState.inputs.password.value)]}
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


