import React from 'react'
import { Link as Scroll } from 'react-scroll'

const MenuMobile = ({ clicked, visible }) => {
    return (
        <ul className={`menu ${visible && "menu-visible"}`}>
            <li onClick={clicked} className="menu__item">
                <Scroll to="inicio" smooth={true} duration={1000} onClick={clicked}>
                    Inicio
                </Scroll>
            </li>
            <li onClick={clicked} className="menu__item">
                <Scroll to="beneficios" smooth={true} duration={1000} onClick={clicked}>
                    Beneficios
            </Scroll>
            </li>
            <li onClick={clicked} className="menu__item">
                <a href="#skills">
                    Registrarse
            </a>
            </li>
        </ul>
    )
}

export default MenuMobile
