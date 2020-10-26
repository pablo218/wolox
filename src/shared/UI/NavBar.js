import React, { useContext } from "react";
import { Link as Scroll } from 'react-scroll';
import { Link, useRouteMatch } from 'react-router-dom';

import Button from './Button'
import FavoriteItem from './FavoriteItem'
import { Language } from '../Contexts/LanguageContext'
import { AuthContext } from '../../auth/AuthContext'

const NavBar = () => {

    const eng = useContext(Language).english
    const { user } = useContext(AuthContext)

    const matchHome = useRouteMatch('/home')
    const matchTechs = useRouteMatch('/techs')

    let navbar;

    if (matchHome) {
        navbar =
            <nav className="nav" >
                <Link to="/home">
                    <img className="Header__left--logo" src="./assets/logo_full_color.svg"></img>
                </Link>
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

                    {user.logged ?
                        <Link to="/techs"><li className="nav--item">Techs</li></Link> :
                        <Link className="nav--item" to="/register">
                            <Button>{eng ? "Register" : "Registrarse"}</Button>
                        </Link>
                    }
                    <FavoriteItem />
                </ul>
            </nav>

    }
    else if (matchTechs) {
        navbar =
            <nav className="nav" >
                <Link to="/home">
                    <img className="Header__left--logo" src="./assets/logo_full_color.svg"></img>
                </Link>
                <ul className="nav--list">
                    <FavoriteItem />
                </ul>
            </nav>
    }
    else {
        navbar = null
    }

    return (<>{navbar}</>)




}

export default NavBar


