import React, { useState, useReducer, useEffect } from "react";

import AppRouter from './routers/AppRouter'
import { Language } from './shared/Contexts/LanguageContext'
import { FavoritesContext } from './shared/Contexts/FavoritesContext'
import { favoritesReducer } from './shared/Contexts/favoritesReducer'
import { AuthContext } from './auth/AuthContext'
import { authReducer } from "./auth/authReducer";


import "./styles/main.scss";

///RECUPERO DEL USUARIO EN EL LOCAL STORAGE
const init = () => {
  //return JSON.parse(localStorage.getItem('user')) || { logged: false };
  return { logged: false }
}

const extractFav = () => {
  return JSON.parse(localStorage.getItem('tech')) || [];
}

export default function App() {

  const [favorites, dispatchFav] = useReducer(favoritesReducer, [], extractFav)

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
      <FavoritesContext.Provider value={{ favorites, dispatchFav }}>
        <Language.Provider value={{ english: english, setLang }}>
          <AppRouter />
        </Language.Provider>
      </FavoritesContext.Provider>
    </AuthContext.Provider>
  );
}
