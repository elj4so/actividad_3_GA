import React from 'react';
import { Link } from 'react-router-dom';
import { event } from '../analytics';

const Navbar = () => {
  const handleNavLinkClick = (page) => {
    event('Navbar', 'Link Click', page);
  };

  return (
    <nav style={{ 
      display: 'flex', 
      justifyContent: 'space-around',
      padding: '1rem',
      backgroundColor: '#f0f0f0',
      marginBottom: '2rem'
    }}>
      <Link to="/" onClick={() => handleNavLinkClick('Home')}>Inicio</Link>
      <Link to="/about" onClick={() => handleNavLinkClick('About')}>Acerca de</Link>
      <Link to="/contact" onClick={() => handleNavLinkClick('Contact')}>Contacto</Link>
    </nav>
  );
};

export default Navbar;