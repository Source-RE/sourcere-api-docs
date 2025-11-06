import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../../styles/components/header.css'

export function Header() {
  const location = useLocation()
  const isSourceRE = location.pathname.startsWith('/sourcere') || location.pathname === '/'

  return (
    <header className="header">
      <div className="header__title">
        <img src="/logo.png" alt="SourceRE Logo" className="header__logo" />
        API DOCUMENTATION
      </div>
      <nav className="header__tabs">
        <Link
          to="/sourcere"
          className={`header__tab ${isSourceRE ? 'header__tab--active' : ''}`}
        >
          SourceRE
        </Link>
        <Link
          to="/arello-api"
          className={`header__tab ${!isSourceRE ? 'header__tab--active' : ''}`}
        >
          ARELLO API
        </Link>
      </nav>
    </header>
  )
}

