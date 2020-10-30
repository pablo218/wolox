import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTrasnlation from './en.json';
import esTranslation from './es.json';


const resources = {

    en: {
        translation: enTrasnlation
    },
    es: {
        translation: esTranslation
    }

};

i18n.use(initReactI18next)
    .init({
        resources,
        lng: "en",
        keySeparator: false,
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;