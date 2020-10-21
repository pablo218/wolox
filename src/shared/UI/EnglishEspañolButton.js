import React, { useContext } from 'react'
import { Language } from '../Contexts/LanguageContext'

const EnglishEspañolButton = () => {

    const setLang = useContext(Language).setLang
    const eng = useContext(Language).english



    return (
        <div className="btn__english" onClick={setLang}>
            {eng ? "Español?" : "English?"}
        </div >
    )
}

export default EnglishEspañolButton
