import React, { useState } from 'react';
import { navigate } from 'gatsby';
import { motion, AnimatePresence } from 'framer-motion';
import './styles.css';

interface LanguageSwitcherProps {
  currentLang: string;
}

const LanguageSwitcher = ({ currentLang }: LanguageSwitcherProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'Eng' },
    { code: 'ru', name: 'Рус' },
    { code: 'uk', name: 'Укр' }
  ];

  const currentLanguage = languages.find(lang => lang.code === currentLang) || languages[0];

  const getNewPath = (newLang: string) => {
    const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';
    
    if (currentLang === 'en') {
      return `/${newLang}${currentPath}`;
    }
    
    if (newLang === 'en') {
      return currentPath.replace(`/${currentLang}`, '');
    }
    
    return currentPath.replace(`/${currentLang}`, `/${newLang}`);
  };

  const handleLanguageChange = (newLang: string) => {
    if (newLang === currentLang) return;
    const newPath = getNewPath(newLang);
    setIsOpen(false);
    navigate(newPath);
  };

  return (
    <div className="language-switcher-container">
      <motion.button
        type="button"
        className="language-dropdown-button"
        onClick={() => setIsOpen(!isOpen)}
        whileTap={{ scale: 0.97 }}
      >
        <span>{currentLanguage.name}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="arrow"
        >
          ▼
        </motion.span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="language-dropdown"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {languages.map((lang) => (
              <motion.button
                type="button"
                key={lang.code}
                className={`language-option ${currentLang === lang.code ? 'active' : ''}`}
                onClick={() => handleLanguageChange(lang.code)}
                whileHover={{ backgroundColor: 'var(--hover-color)' }}
                whileTap={{ scale: 0.97 }}
              >
                {lang.name}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSwitcher;
