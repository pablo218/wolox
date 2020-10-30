import React, { useContext } from "react";
import { useTranslation } from 'react-i18next'


const Header = () => {

    const { t } = useTranslation()

    return (
        <header className="Header" id="header">
            <div className="Header__left">
                <div className="Header__left__text--container">
                    <p className="Header__left__text Header__left__text--1">
                        {t("landing.header-1")}
                    </p>
                    <p className="Header__left__text Header__left__text--2"><span style={{ fontWeight: "700" }}>
                        {t("landing.header-2")}
                    </span>
                    </p>
                    <p className="Header__left__text Header__left__text--3">Wolox</p>
                </div>
            </div>

            <div className="Header__right">

                <div className="Header__right--image-container">
                    <img className="Header__right--image" src="./assets/Img Hero/Ic_ilustra_Hero@2x.png" alt="wolox" />

                </div>
            </div>




        </header >
    )








};

export default Header;
