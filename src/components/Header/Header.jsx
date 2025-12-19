import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import i18n from './../../i18n';

export default function Header({ onToggleSidebar, onSelectLanguage }) {
  const navitems = [
    { name: 'Home', path: '/', active: true },
    { name: 'About', path: '/about', active: true },
    { name: 'Schemes', path: '/schemes', active: true },
    { name: 'News', path: '/news', active: true },
  ];
    const { i18n } = useTranslation();
    const currentLang = i18n.language || 'en';
    const isEnglish = currentLang.startsWith('en');
    const toggleLanguage = () => {
      const newLang = isEnglish ? 'hi' : 'en';
      i18n.changeLanguage(newLang);
    };
  

  return (
    <header
      style={{
        background: '#1c4735',
        boxShadow: '0 2px 9px rgba(0,0,0,0.09)',
        position: 'sticky',
        top: 0,
        zIndex: 50,
        width: '100%',
      }}
    >
      <nav
        style={{
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',    
          padding: '0 40px',
          height: 64,
          width: '100%',
        }}
      >
        {/* Left - All left side buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
         
          
          {/* Logo */}
          <Link to="/" style={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
          }}>
            <img
              src="logo.png"
              alt="Logo"
              style={{
                height: 50,
                width: 50,
                borderRadius: '50%',
                marginRight: 14,
                background: '#fff',
              }}
            />
            <span style={{
              fontSize: 28,
              fontWeight: 700,
              fontFamily: 'serif',
              color: '#72bf44',
              marginRight: 7
            }}>Agri</span>
            <span style={{
              fontSize: 28,
              fontWeight: 700,
              fontFamily: 'serif',
              color: '#fff'
            }}>Help</span>
          </Link>
        </div>

        {/* Right - All right side buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <ul style={{
            display: 'flex',
            listStyle: 'none',
            gap: '20px',
            margin: 0,
            padding: 0,
          }}>
            {navitems.filter(item => item.active).map(item => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  style={({ isActive }) => ({
                    padding: '8px 22px',
                    fontFamily: 'serif',
                    fontWeight: 600,
                    fontSize: 18,
                    borderRadius: 25,
                    textDecoration: 'none',
                    transition: 'all 0.2s',
                    color: isActive ? '#72bf44' : '#fff',
                    background: isActive ? '#221f36' : 'transparent',
                    borderBottom: isActive ? '3px solid #72bf44' : 'none'
                  })}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
          {/* LogOut Button */}
          <Link
            to="/register"
            style={{
              color: '#fff',
              background: '#72bf44',
              border: 'none',
              borderRadius: 6,
              fontWeight: 700,
              fontSize: 15,
              padding: '9px 32px',
              textDecoration: 'none',
              transition: 'background 0.18s',
              boxShadow: '0 1px 2px rgba(28,71,53,0.07)'
            }}
          >
            LogOut
          </Link>
        </div>
      </nav>
    </header>
  )
}
