import React, { useState, useReducer, useEffect } from "react";

import AppRouter from './routers/AppRouter'
import { AuthContext } from './auth/AuthContext'
import { authReducer } from "./auth/authReducer";
import EnglishEspañolButton from './shared/UI/EnglishEspañolButton'

import './i18n/index'

import "./styles/main.scss";
import i18n from "./i18n/index";


const init = () => {
  return JSON.parse(localStorage.getItem('user')) || { logged: false };

}

export default function App() {

  const [user, dispatchUser] = useReducer(authReducer, {}, init)

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user))
  }, [user])

  const [language, setLanguage] = useState("es")

  const changeLangHandler = () => {
    if (language === "es") {
      setLanguage("en")
    }
    else {
      setLanguage("es")
    }
    i18n.changeLanguage(language)
  }


  return (
    <AuthContext.Provider value={{ user, dispatchUser }}>
      <EnglishEspañolButton setLang={changeLangHandler} />
      <AppRouter />
    </AuthContext.Provider>
  );
}
