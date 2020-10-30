import React from "react";
import { Link as Scroll } from 'react-scroll'
import { useTranslation } from 'react-i18next'

import Button from '../shared/UI/Button'

const Footer = () => {

    const { t } = useTranslation();

    return (
        <section className="Footer">
            <div className="Footer__text-container">
                <p className="Footer__line Footer__line--1">
                    {t("landing.footer-1")}
                    <span style={{ color: "#2aa7df" }}>
                        {t("landing.footer-2")}
                    </span>
                </p>
                <p className="Footer__line Footer__line--2">
                    {t("landing.footer-3")}
                </p>
                <div className="Footer__line--3">
                    <a href="https://www.wolox.com.ar/" target="_blank">
                        <Button clases="bg-blue">
                            {t("landing.footer-4")}
                        </Button>
                    </a>
                </div>
            </div>
            <Scroll to="header"
                smooth={true}
                duration={1000}>
                <img className="Footer__line--4" src="./assets/Ic_Wolox_Footer.svg" alt="logo" />
            </Scroll>
        </section>
    )
};

export default Footer;