import React from 'react';
import './Header.css';
import logo_facebook from '../assets/reseaux-sociaux-facebook.png'; 

function Header() {
  return (
    <div className="header-bg">
      <div className="header">
        <p className="header-title">Créations Artisanales</p>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <img src={logo_facebook} alt="Logo Facebook" className="header-logo" />
        </a>
      </div>
    </div>
  );
}

export default Header;
