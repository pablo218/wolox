import React from "react";
import { useTranslation } from 'react-i18next'
import TwitterIcon from '@material-ui/icons/Twitter';


import Button from '../shared/UI/Button'


const Woloxers = () => {

    const { t } = useTranslation()

    return (
        <section className="Woloxers" id="inicio">
            <div className="Woloxers__left">
                <img src="./assets/img_woloxer@2x.png" alt="woloxers" ></img>
                <div className="Woloxers__left__text">
                    <p className="Woloxers__left__text--line1" style={{ fontSize: "6rem" }}>
                        <span style={{ color: "#a3cc39" }}>350 + </span>
                        <span style={{ color: "#2aa7df" }}>Woloxers</span>
                    </p>
                    <div className="Woloxers__left__text--line2">
                        <span className="Woloxers__left__text--line2-tw">
                            <TwitterIcon style={{ fontSize: "5rem" }} />
                        </span>
                        <p className="Woloxers__left__text--line2-wolox">
                            @Wolox
                        </p>
                    </div>
                    <div className="Woloxers__left__text--line3">
                        <a href="https://twitter.com/Wolox"
                            target="_blank">
                            <Button clases="bg-transparent">
                                {t("landing.woloxers")}
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
            <div className="Woloxers__right">
                <div className="Woloxers__right__text">
                    <p className="Woloxers__right__text--line1">{t("landing.woloxers-1")}</p>
                    <p className="Woloxers__right__text--line2">
                        <span style={{ color: "#2aa7df" }}>
                            {t("landing.woloxers-2")}
                        </span>
                        <span style={{ color: "#a3cc39" }}>
                            ideas
                        </span>
                        {t("landing.woloxers-4")}
                    </p>
                    <p className="Woloxers__right__text--line3">{t("landing.woloxers-3")}</p>
                </div>
            </div>
        </section>
    )
};

export default Woloxers;
