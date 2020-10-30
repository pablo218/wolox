import React from 'react';
import { useTranslation } from 'react-i18next';

const EnglishEspañolButton = ({ setLang }) => {

    const { t } = useTranslation()

    return (
        <div className="btn__english" onClick={setLang}>
            {t("setlang.button")}
        </div >
    )
}

export default EnglishEspañolButton
