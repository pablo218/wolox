import React, { useContext } from "react";
import { Link as Scroll } from 'react-scroll'

import { Language } from '../shared/Contexts/LanguageContext'
import Button from '../shared/UI/Button'

const Footer = () => {

    const eng = useContext(Language).english

    return (
        <section className="Footer">
            <div className="Footer__text-container">
                <p className="Footer__line Footer__line--1">{eng ? "Thank you for" : "Gracias por"} <span style={{ color: "#2aa7df" }}>{eng ? "completing the exercise" : "completar el ejercicio"}</span></p>
                <p className="Footer__line Footer__line--2">{eng ? "We invite you to see more information" : "Te invitamos a ver mas información"}</p>
                <div className="Footer__line--3">
                    <a href="https://www.wolox.com.ar/" target="_blank"><Button clases="bg-blue">{eng ? "Learn more" : "Conocer más"}</Button></a>
                </div>
            </div>
            <Scroll to="header"
                smooth={true}
                duration={1000}>
                <img className="Footer__line--4" src="./assets/Ic_Wolox_Footer.svg" />
            </Scroll>
        </section>
    )
};

export default Footer;