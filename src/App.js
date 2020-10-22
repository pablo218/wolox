import React, { useState } from "react";

import LandingPage from './pages/LandingPage'
import List from './pages/List'
import EnglishEspañolButton from './shared/UI/EnglishEspañolButton'
import MenuButton from './shared/UI/Mobile/MenuButton'
import { Language } from './shared/Contexts/LanguageContext'


import "./styles/main.scss";

export default function App() {

  const [english, setLanguage] = useState(false);

  const setLang = () => {
    setLanguage((eng) => !eng);
  };

  return (
    <Language.Provider value={{ english: english, setLang }}>
      <div className="App">

        <List />
        {/*         <LandingPage />
        <EnglishEspañolButton />
        <MenuButton /> */}

      </div>
    </Language.Provider>
  );
}
