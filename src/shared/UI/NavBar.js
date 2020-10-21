import React, { useContext } from "react";
import { Link as Scroll } from 'react-scroll'

import Button from './Button'
import { Language } from '../Contexts/LanguageContext'

const NavBar = () => {


    const eng = useContext(Language).english

    return (
        <nav className="nav" >
            <ul className="nav--list">
                <Scroll className="nav--item"
                    to="inicio"
                    smooth={true}
                    duration={1000}>
                    {eng ? "Home" : "Inicio"}</Scroll>
                <Scroll to="beneficios"
                    className="nav--item"
                    smooth={true}
                    duration={1000}>
                    {eng ? "Benefits" : "Beneficios"}
                </Scroll>
                <Scroll className="nav--item">
                    <Button>{eng ? "Register" : "Registrarse"}</Button>
                </Scroll>
                {/* <li className="nav--item">{eng ? "Home" : "Inicio"}</li>
                <li className="nav--item">{eng ? "Benefits" : "Beneficios"}</li>
                <li className="nav--item">
                    <Button>{eng ? "Register" : "Registrarse"}</Button>
                </li> */}
            </ul>
        </nav>
    )
}

export default NavBar
