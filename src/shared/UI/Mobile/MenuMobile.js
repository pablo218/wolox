import React, { useContext } from 'react';
import { Link as Scroll } from 'react-scroll';
import { Link, useRouteMatch } from 'react-router-dom';
import { AuthContext } from '../../../auth/AuthContext';
import { Language } from '../../Contexts/LanguageContext'
import FavoriteItem from '../FavoriteItem'

const MenuMobile = ({ clicked, visible }) => {

    const eng = useContext(Language).english

    const { user: { token } } = useContext(AuthContext)

    const matchHome = useRouteMatch('/home')
    const matchTechs = useRouteMatch('/techs')
    const matchRegister = useRouteMatch('/register')

    let menu;
    let li;

    if (token) {
        li = <Link className="menu__item" to="/techs" onClick={clicked}>Techs</Link>
    } else {
        li = <li onClick={clicked} className="menu__item">
            <Link to="/register">
                {eng ? "Register" : "Registrarse"}
            </Link>
        </li >
    }

    if (matchHome) {
        menu =
            <ul className={`menu ${visible && "menu-visible"}`}>
                <li><img className="menu_mobile--imagen menu__item" src="./assets/Ic_Wolox_Footer.svg" /></li>
                <li onClick={clicked} className="menu__item">
                    <Scroll to="inicio" smooth={true} duration={1000} onClick={clicked}>
                        {eng ? "Home" : "Inicio"}
                    </Scroll>
                </li>
                <li onClick={clicked} className="menu__item">
                    <Scroll to="beneficios" smooth={true} duration={1000} onClick={clicked}>
                        {eng ? "Benefits" : "Beneficios"}
                    </Scroll>
                </li>
                {li}
                <FavoriteItem />
            </ul>

    }
    else if (matchTechs) {
        menu =
            <ul className={`menu ${visible && "menu-visible"}`}>
                <li><img className="menu_mobile--imagen menu__item" src="./assets/Ic_Wolox_Footer.svg" /></li>
                <Link to="/home">

                    <li onClick={clicked} className="menu__item" onClick={clicked}>
                        {eng ? "Home" : "Inicio"}
                    </li>
                </Link>


            </ul>
    }

    else if (matchRegister) {
        menu =
            <ul className={`menu ${visible && "menu-visible"}`}>
                <li><img className="menu_mobile--imagen menu__item" src="./assets/Ic_Wolox_Footer.svg" /></li>
                <Link to="/home">
                    <li onClick={clicked} className="menu__item" onClick={clicked}>
                        {eng ? "Home" : "Inicio"}
                    </li>
                </Link>
            </ul>
    }

    return (
        <>{menu}</>
    )
}

export default MenuMobile
