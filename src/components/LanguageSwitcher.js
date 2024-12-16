import React from 'react';
import { useTranslation } from 'react-i18next'; // Import i18next hook

const LanguageSwitcher = () => {
  const { i18n } = useTranslation(); // Get i18n object to change languages

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang); // Change language using i18n
  };

  return (
    <div className="language-switcher">
      {/* English Flag */}
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg"
        alt="EN"
        className="lang-icon"
        onClick={() => changeLanguage('en')} // Change to English on click
      />
      
      {/* Russian Flag */}
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Russia.svg"
        alt="RU"
        className="lang-icon"
        onClick={() => changeLanguage('ru')} // Change to Russian on click
      />
    </div>
  );
};

export default LanguageSwitcher;
