import React, { useContext } from "react";

import { Language } from "../shared/Contexts/LanguageContext";


const Header = () => {

    const eng = useContext(Language).english

    return (
        <header className="Header" id="header">
            <div className="Header__left">
                <div className="Header__left__text--container">
                    <p className="Header__left__text Header__left__text--1">{eng ? "Welcome to your" : "Bienvenido a tu"}</p>
                    <p className="Header__left__text Header__left__text--2"><span style={{ fontWeight: "700" }}>{eng ? "Technical Interview" : "Entrevista Técnica"}</span> {eng ? "in" : "en"}</p>
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
