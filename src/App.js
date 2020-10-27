import React, { useState, useReducer, useEffect } from "react";

import AppRouter from './routers/AppRouter'
import { Language } from './shared/Contexts/LanguageContext'
import { AuthContext } from './auth/AuthContext'
import { authReducer } from "./auth/authReducer";


import "./styles/main.scss";


const init = () => {
  return JSON.parse(localStorage.getItem('user')) || { logged: false };

}

export default function App() {

  const [user, dispatchUser] = useReducer(authReducer, {}, init)

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user))
  }, [user])


  const [english, setLanguage] = useState(false);
  const setLang = () => {
    setLanguage((eng) => !eng);
  };


  return (
    <AuthContext.Provider value={{ user, dispatchUser }}>

      <Language.Provider value={{ english: english, setLang }}>
        <AppRouter />
      </Language.Provider>

    </AuthContext.Provider>
  );
}
