import React, { useContext } from "react";
import { Link as Scroll } from 'react-scroll';
import { Link, useRouteMatch } from 'react-router-dom';
import { useTranslation } from 'react-i18next'

import Button from './Button'
import FavoriteItem from './FavoriteItem'
import { AuthContext } from '../../auth/AuthContext'

const NavBar = () => {

    const { t } = useTranslation()
    const { user } = useContext(AuthContext)

    const matchHome = useRouteMatch('/home')
    const matchTechs = useRouteMatch('/techs')

    let navbar;

    if (matchHome) {
        navbar =
            <nav className="nav" >
                <Link to="/home">
                    <img className="nav--logo" src="./assets/logo_full_color.svg" alt="logo" />
                </Link>
                <ul className="nav--list">
                    <Scroll className="nav--item"
                        to="inicio"
                        smooth={true}
                        duration={1000}>
                        {t("nav.home")}
                    </Scroll>


                    <Scroll to="beneficios"
                        className="nav--item"
                        smooth={true}
                        duration={1000}>
                        {t("nav.benefits")}
                    </Scroll>

                    {user.logged ?
                        <Link to="/techs"><li className="nav--item">Techs</li></Link> :
                        <Link className="nav--item" to="/register">
                            <Button>
                                {t("nav.reg")}
                            </Button>
                        </Link>
                    }
                    <FavoriteItem />
                </ul>
            </nav>

    }
    else if (matchTechs) {
        navbar =
            <nav className="nav">
                <Link to="/home">
                    <img className="nav--logo" src="./assets/logo_full_color.svg" alt="logo" />
                </Link>
            </nav>
    }
    else {
        navbar = null
    }

    return (<>{navbar}</>)




}

export default NavBar