import React, { useContext } from "react";

import { Language } from "../shared/Contexts/LanguageContext";
import NavBar from '../shared/UI/NavBar'

const Header = () => {

    const eng = useContext(Language).english

    return (
        <header className="Header" id="header">
            <div className="Header__left">
                <img className="Header__left--logo" src="./assets/logo_full_color.svg"></img>
                <div className="Header__left__text--container">
                    <p className="Header__left__text Header__left__text--1">{eng ? "Welcome to your" : "Bienvenido a tu"}</p>
                    <p className="Header__left__text Header__left__text--2"><span style={{ fontWeight: "700" }}>{eng ? "Technical Interview" : "Entrevista Técnica"}</span> {eng ? "in" : "en"}</p>
                    <p className="Header__left__text Header__left__text--3">Wolox</p>
                </div>
            </div>

            <div className="Header__right">
                <NavBar page="landing" />
                <div className="Header__right--image-container">
                    <picture>
                        {/* //<source media="(min-width: 650px)" srcset="img_food.jpg" /> */}
                        <source media="(max-width: 1300px)" srcset="./assets/Img Hero/Ic_ilustra_Hero.pnga" />
                        <img className="Header__right--image" src="./assets/Img Hero/Ic_ilustra_Hero@2x.png" />
                    </picture>
                </div>
            </div>




        </header >
    )








};

export default Header;
