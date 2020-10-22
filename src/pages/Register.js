import React, { useState, useContext } from 'react'

import { Language } from '../shared/Contexts/LanguageContext'
import Button from '../shared/UI/Button'
import Input from '../shared/UI/FormElements/Inputs'
import Select from '../shared/UI/FormElements/Selects'


const Register = () => {

    const eng = useContext(Language).english

    return (
        <>

            <div className="Register">
                <form className="Register--form">
                    <img className="Register--form--logo" src="./assets/logo_full_color.svg" />
                    <h1 className="Register--form--title">{eng ? "Sign Up" : "Registrarse"}</h1>

                    <Input label="nombre" labelText={eng ? "Name" : "Nombre"} type="text" />
                    <Input label="apellido" labelText={eng ? "Surname" : "Apellido"} type="text" />
                    <Select label="pais" labelText={eng ? "Country" : "País"} />
                    <Input label="email" labelText="Email" type="text" />
                    <Input label="telefono" labelText={eng ? "Phone" : "Teléfono"} type="text" />
                    <Input label="contraseña" labelText={eng ? "Password" : "Contraseña"} type="text" />
                    <Input label="repcontraseña" labelText={eng ? "Repeat Password" : "Repetir Contraseña"} type="text" />

                    <Button>{eng ? "SEND" : "ENVIAR"}</Button>
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