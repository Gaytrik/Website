// src/components/LanguageToggle.jsx
import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageProvider'; // ✅ correct import path

const LanguageToggle = () => {
  const { language, toggleLanguage } = useContext(LanguageContext); // ✅ will crash if context is undefined

  return (
    <button
      onClick={toggleLanguage}
      className="fixed right-4 top-[21%] transform -translate-y-1/2 z-50 bg-white text-green-600 px-4 py-2 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 flex items-center gap-2 font-semibold"
    >
      <span className="text-lg">🌐</span>
      {language === 'en' ? 'मराठी' : 'English'}
    </button>
  );
};

export default LanguageToggle;
