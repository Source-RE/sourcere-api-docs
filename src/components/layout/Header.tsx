import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../../styles/components/header.css'

export function Header() {
  const location = useLocation()
  const path = location.pathname

  const isSourceRE = path.startsWith('/sourcere') || path === '/'
  const isArello = path.startsWith('/arello-api')
  const isWebhooks = path.startsWith('/webhooks')

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
          className={`header__tab ${isArello ? 'header__tab--active' : ''}`}
        >
          ARELLO API
        </Link>
        <Link
          to="/webhooks"
          className={`header__tab ${isWebhooks ? 'header__tab--active' : ''}`}
        >
          Webhooks
        </Link>
      </nav>
    </header>
  )
}
