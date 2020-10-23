import React, { useContext } from 'react'
import { useHistory, Link } from 'react-router-dom'

import { Language } from '../shared/Contexts/LanguageContext'
import { AuthContext } from '../auth/AuthContext'
import { types } from '../types/types'
import Button from '../shared/UI/Button'
import Input from '../shared/UI/FormElements/Inputs'
import Select from '../shared/UI/FormElements/Selects'



const Register = (props) => {

    const eng = useContext(Language).english

    const { dispatch } = useContext(AuthContext)

    const history = useHistory()

    const handleRegister = (e) => {

        e.preventDefault()

        dispatch({
            type: types.login,
            payload: {
                name: "Pablo"
            }

        })

        history.push("/techs")

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
                        label="nombre"
                        labelText={eng ? "Name" : "Nombre"}
                        type="text"
                        errorText={eng ? "Name is required" : "Nombre es obligaotrio"} />
                    <Input
                        label="apellido"
                        labelText={eng ? "Surname" : "Apellido"}
                        type="text"
                        errorText={eng ? "Surname is required" : "Apellido es obligaotrio"} />
                    <Select
                        label="pais"
                        labelText={eng ? "Country" : "País"}
                        errorText={eng ? "Country is required" : "País es obligaotrio"}
                        errorText2={eng ? "State is required" : "Provincia es obligaotrio"}
                    />

                    <Input
                        label="email"
                        labelText="Email"
                        type="text"
                        errorText={eng ? "Email is required" : "Wmail es obligaotrio"} />

                    <Input
                        label="telefono"
                        labelText={eng ? "Phone" : "Teléfono"}
                        type="text"
                        errorText={eng ? "Phone is required" : "Telefono es obligaotrio"} />
                    <Input
                        label="contraseña"
                        labelText={eng ? "Password" : "Contraseña"}
                        type="text"
                        errorText={eng ? "Pass need to have at least 6 characters and be alphanumeric" : "La contraseña tiene que tener al menos 6 caracteres y ser alfanumérica"} />
                    <Input
                        label="repcontraseña"
                        labelText={eng ? "Repeat Password" : "Repetir Contraseña"}
                        type="text"
                        errorText={eng ? "Passwords doesn't match" : "Las contraseñas no coinciden"} />

                    <Button clicked={handleRegister}>{eng ? "SEND" : "ENVIAR"}</Button>
                </form>

                <div className="Register--image">
                    <img src="./assets/Img Hero/Ic_ilustra_Hero.png" />
                </div>

            </div>
        </>
    )
}

export default Register


//const regx = /(?=.*[a-z])(?=.*[0-9])[a-z0-9]{6,}/   // password