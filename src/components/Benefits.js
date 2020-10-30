import React from "react";

import { useTranslation } from 'react-i18next'


const Benefits = () => {

    const { t } = useTranslation()

    return (
        <section className="Benefits" id="beneficios">
            <p className="Benefits__header">
                {t("landing.benefits")}
            </p>
            <div className="Benefits__images">
                <div className="Benefits__images__item">
                    <img src="./assets/Ic_Hour.svg" alt="reloj" />
                    <p className="Benefits__images__item--footer">
                        {t("landing.flex")} <br />{t("landing.flex2")}
                    </p>
                </div>
                <div className="Benefits__images__item">
                    <img src="./assets/Ic_HomeOffice.svg" alt="home" />
                    <p className="Benefits__images__item--footer">
                        Home Office
                    </p>
                </div>
                <div className="Benefits__images__item">
                    <img src="./assets/Ic_Workshops.svg" alt="workshops" />
                    <p className="Benefits__images__item--footer">
                        {t("landing.train")}<br />{t("landing.train2")}
                    </p>
                </div>
                <div className="Benefits__images__item">
                    <img src="./assets/Ic_DrinkSnacks.svg" alt="snaks" />
                    <p className="Benefits__images__item--footer">
                        Snacks, {t("landing.fruits")}<br /> {t("landing.fruits2")}
                    </p>
                </div>
                <div className="Benefits__images__item">
                    <img src="./assets/Ic_laptop.svg" alt="remoto" />
                    <p className="Benefits__images__item--footer">
                        {t("landing.remotew")} <br />{t("landing.remotew2")}
                    </p>
                </div>
                <div className="Benefits__images__item">
                    <img src="./assets/Ic_brain.svg" alt="brain" />
                    <p className="Benefits__images__item--footer">
                        {t("landing.latTechs")}<br />{t("landing.latTechs2")}<br />{t("landing.latTechs3")}
                    </p>
                </div>
            </div>
        </section>)
};

export default Benefits;
