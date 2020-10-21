import React, { useContext } from "react";

import { Language } from '../shared/Contexts/LanguageContext'


const Benefits = () => {

    const eng = useContext(Language).english

    return (
        <section className="Benefits" id="beneficios">
            <p className="Benefits__header">{eng ? "Among the benefits we offer are " : "Entre los beneficios que ofrecemos se encuentran"} <span style={{ color: "#2aa7df" }}>{';)'}</span></p>
            <div className="Benefits__images">
                <div className="Benefits__images__item">
                    <img src="./assets/Ic_Hour.svg" alt="reloj" />
                    <p className="Benefits__images__item--footer">
                        {eng ? "Flexibility" : "Flexibilidad"} <br />{eng ? "Time" : "Horaria"}
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
                        {eng ? "Training" : "Capacitaciones"} <br />{eng ? "& Workshops" : "y Workshops"}
                    </p>
                </div>
                <div className="Benefits__images__item">
                    <img src="./assets/Ic_DrinkSnacks.svg" alt="snaks" />
                    <p className="Benefits__images__item--footer">
                        Snacks, {eng ? "fruits" : "frutas"}<br /> {eng ? "& free drinks" : "y bebidas gratis"}
                    </p>
                </div>
                <div className="Benefits__images__item">
                    <img src="./assets/Ic_laptop.svg" alt="remoto" />
                    <p className="Benefits__images__item--footer">
                        {eng ? "Remote" : "Semana"} <br />{eng ? "Week" : "Remota"}
                    </p>
                </div>
                <div className="Benefits__images__item">
                    <img src="./assets/Ic_brain.svg" alt="brain" />
                    <p className="Benefits__images__item--footer">
                        {eng ? "Working on" : "Trabajar"}<br /> {eng ? "latest" : "en ultimas"}<br /> {eng ? "technologies" : "tecnologías"}
                    </p>
                </div>
            </div>
        </section>)
};

export default Benefits;
