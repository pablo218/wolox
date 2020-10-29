import React, { useContext, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

import { Language } from '../shared/Contexts/LanguageContext';
import { AuthContext } from '../auth/AuthContext';
import { types } from '../types/types';
import Button from '../shared/UI/Button';
import Input from '../shared/UI/FormElements/Inputs';
import Select from '../shared/UI/FormElements/Selects';
import Password from '../shared/UI/FormElements/Password';
import { useForm } from '../shared/hooks/form-hook';
import { registerInputs } from '../shared/Utils/registerInputs';
import {
    VALIDATOR_EMAIL,
    VALIDATOR_PHONE,
    VALIDATOR_REQUIRE
} from '../shared/Utils/validadores';
import Spinner from '../shared/UI/Spinner/Spinner';
import { useFetch } from '../shared/hooks/fetch-hook';
import ErrorModal from '../shared/UI/ErrorModal'

const Register = () => {

    const { isLoading, error, sendRequest, clearError } = useFetch();

    const [formState, inputHandler] = useForm(registerInputs, false)

    const [aceptTerms, setAceptTerms] = useState(false)

    const eng = useContext(Language).english

    const { dispatchUser } = useContext(AuthContext)

    const history = useHistory()

    const handleRegister = async (e) => {
        e.preventDefault()


        await sendRequest(
            "http://private-8e8921-woloxfrontendinverview.apiary-mock.com/signup",
            'POST',
            JSON.stringify({
                name: formState.inputs.name.value,
                last_name: formState.inputs.last_name.value,
                country: formState.inputs.country.value,
                province: formState.inputs.province.value,
                mail: formState.inputs.mail.value,
                phone: formState.inputs.phone.value,
                password: formState.inputs.password.value,
            }),
            {
                'Content-Type': 'application/json'
            }
        ).then(response => {
            dispatchUser({
                type: types.login,
                payload: {
                    token: response.token
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

    const okHandler = () => {
        clearError()
    }

    return (
        <>
            {isLoading && <Spinner />}
            {error && <ErrorModal errortext={error} clicked={okHandler} />}
            <div className="Register">
                <form className="Register--form">
                    <Link to="/home">
                        <img className="Register--form--logo" src="./assets/logo_full_color.svg" alt="logo"></img>
                    </Link>

                    <h1 className="Register--form--title">{eng ? "Sign Up" : "Registrarse"}</h1>

                    <Input
                        id="name"
                        labelText={eng ? "Name" : "Nombre"}
                        type="text"
                        validators={[VALIDATOR_REQUIRE()]}
                        onInput={inputHandler}
                        max={30}
                    />

                    <Input
                        id="last_name"
                        labelText={eng ? "Surname" : "Apellido"}
                        type="text"
                        validators={[VALIDATOR_REQUIRE()]}
                        onInput={inputHandler}
                        max={30}
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

                    <Password
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
                    <img src="./assets/Img Hero/Ic_ilustra_Hero.png" alt="img-hero" />
                </div>

            </div>
        </>
    )
}

export default Register


