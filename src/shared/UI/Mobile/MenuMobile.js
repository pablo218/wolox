import React, { useContext } from 'react';
import { Link as Scroll } from 'react-scroll';
import { Link, useRouteMatch } from 'react-router-dom';
import { AuthContext } from '../../../auth/AuthContext';
import FavoriteItem from '../FavoriteItem'

const MenuMobile = ({ clicked, visible }) => {

    const { user: { name } } = useContext(AuthContext)

    const matchHome = useRouteMatch('/home')
    const matchTechs = useRouteMatch('/techs')

    let menu;
    let li;

    if (name) {
        li = <Link className="menu__item" to="/techs" onClick={clicked}>Techs</Link>
    } else {
        li = <li onClick={clicked} className="menu__item">
            <Link to="/register">
                Registrarse
            </Link>
        </li >
    }

    if (matchHome) {
        menu =
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
                {li}
                <FavoriteItem />
            </ul>
    }
    else if (matchTechs) {
        menu =
            <ul className={`menu ${visible && "menu-visible"}`}>
                <Link to="/home">
                    <li onClick={clicked} className="menu__item" onClick={clicked}>
                        Inicio
                    </li>
                </Link>

                <FavoriteItem />
            </ul>
    }

    return (
        <>{menu}</>
    )
}

export default MenuMobile
