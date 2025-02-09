import React from 'react'
import Footer from './footer'
import Navbar from './navbar'
import type { LanguageProps } from '../types'

interface LayoutProps {
  children: React.ReactNode
  language: LanguageProps
}

const Layout = ({ children, language }: LayoutProps) => {
  return (
    <>
      <div className="layout">
        <header>
          <Navbar language={language} />
        </header>
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
