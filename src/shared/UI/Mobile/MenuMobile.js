import React, { useContext } from 'react';
import { Link as Scroll } from 'react-scroll';
import { Link, useRouteMatch } from 'react-router-dom';
import { useTranslation } from 'react-i18next'

import { AuthContext } from '../../../auth/AuthContext';
import FavoriteItem from '../FavoriteItem'

const MenuMobile = ({ clicked, visible }) => {

    const { t } = useTranslation()

    const { user } = useContext(AuthContext)

    const matchHome = useRouteMatch('/home')
    const matchTechs = useRouteMatch('/techs')
    const matchRegister = useRouteMatch('/register')



    let menu;
    let li;

    if (user.logged) {
        li = <Link className="menu__item" to="/techs" onClick={clicked}>Techs</Link>
    } else {
        li = <li onClick={clicked} className="menu__item">
            <Link to="/register">
                {t("nav.reg")}
            </Link>
        </li >
    }

    if (matchHome) {
        menu =
            <ul className={`menu ${visible && "menu-visible"}`}>
                <li><img className="menu_mobile--imagen menu__item" src="./assets/Ic_Wolox_Footer.svg" alt="logo" /></li>
                <li onClick={clicked} className="menu__item">
                    <Scroll to="inicio" smooth={true} duration={1000} onClick={clicked}>
                        {t("nav.home")}
                    </Scroll>
                </li>
                <li onClick={clicked} className="menu__item">
                    <Scroll to="beneficios" smooth={true} duration={1000} onClick={clicked}>
                        {t("nav.benefits")}
                    </Scroll>
                </li>
                {li}
                <FavoriteItem />
            </ul>

    }
    else if (matchTechs) {
        menu =
            <ul className={`menu ${visible && "menu-visible"}`}>
                <li><img className="menu_mobile--imagen menu__item" src="./assets/Ic_Wolox_Footer.svg" alt="logo" /></li>
                <Link to="/home">

                    <li onClick={clicked} className="menu__item" onClick={clicked}>
                        {t("nav.home")}
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
                        {t("nav.home")}
                    </li>
                </Link>
            </ul>
    }

    return (
        <>{menu}</>
    )
}

export default MenuMobile
