"use client";
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="language-menu relative group">
      <button 
        type="button" 
        className="flex items-center gap-1 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
        aria-label="Change language"
        onClick={() => setIsOpen(!isOpen)}
      >
        <i className="ri-global-line text-lg"></i>
        <span className="text-sm font-medium hidden sm:inline">
          {i18n.language.toUpperCase()}
        </span>
        <i className={`ri-arrow-down-s-line text-xs transition-transform duration-200 ${isOpen ? 'rotate-180' : 'group-hover:rotate-180'}`}></i>
      </button>
      
      <ul 
        className={`absolute right-0 mt-2 w-24 py-1 bg-white dark:bg-gray-800 rounded-md shadow-lg ring-1 ring-gray-200 ring-opacity-5 z-50 ${
          isOpen 
            ? 'opacity-100 visible' 
            : 'opacity-0 invisible lg:group-hover:opacity-100 lg:group-hover:visible'
        } transition-all duration-200 origin-top-right`}
      >
        <li 
          onClick={() => {
            i18n.changeLanguage("ar");
            setIsOpen(false);
          }}
          className={`px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
            i18n.language === "ar" ? "text-primary-600 dark:text-primary-400 font-medium" : "text-gray-700 dark:text-gray-300"
          }`}
        >
          العربية (AR)
        </li>
        <li 
          onClick={() => {
            i18n.changeLanguage("en");
            setIsOpen(false);
          }}
          className={`px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
            i18n.language === "en" ? "text-primary-600 dark:text-primary-400 font-medium" : "text-gray-700 dark:text-gray-300"
          }`}
        >
          English (EN)
        </li>
      </ul>
    </div>
  );
}