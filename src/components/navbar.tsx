import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import type { LanguageProps } from '../types/index'
import LanguageSwitcher from './language-switcher'

const Navbar = ({ language }: { language?: LanguageProps }) => {
  const links = {
    ru: {
      home: '/ru',
      links: [
        { text: 'Блог', path: '/ru/posts' },
        { text: 'Курсы', path: '/ru/courses' },
        { text: 'Обо мне', path: '/ru/about' }
      ],
    },
    en: {
      home: '/',
      links: [
        { text: 'Blog', path: '/posts' },
        { text: 'Courses', path: '/courses' },
        { text: 'About', path: '/about' }
      ]
    },
    uk: {
      home: '/uk',
      links: [
        { text: 'Блог', path: '/uk/posts' },
        { text: 'Курси', path: '/uk/courses' },
        { text: 'Про мене', path: '/uk/about' }
      ]
    }
  }

  return (
    <nav className="nav">
      <div className="nav-container">
        <Link to={links[language || 'en'].home} className="nav-brand">
          <StaticImage
            className="nav-logo"
            src="../images/me.jpeg"
            alt="Logo"
            placeholder="blurred"
            layout="fixed"
            width={50}
            height={50}
            style={{ borderRadius: '50%' }}
          />
          <span className="nav-name">Yuriy Malyi</span>
        </Link>

        <div className="nav-links">
          {links[language || 'en'].links.map((link) => (
            <Link to={link.path} className="nav-link" activeClassName="active">
              {link.text}
            </Link>
          ))}
        </div>
        <LanguageSwitcher currentLang={language || 'en'} />
      </div>
    </nav>
  )
}

export default Navbar
