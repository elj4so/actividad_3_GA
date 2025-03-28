import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { initializeAnalytics, trackPageView, trackEvent } from './analytics';

// Estilos básicos en el mismo archivo
const styles = {
  app: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px'
  },
  nav: {
    backgroundColor: '#f8f9fa',
    padding: '15px',
    borderRadius: '8px',
    marginBottom: '30px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  },
  navList: {
    display: 'flex',
    listStyle: 'none',
    padding: 0,
    margin: 0,
    gap: '20px'
  },
  navLink: {
    textDecoration: 'none',
    color: '#333',
    fontWeight: '500',
    padding: '8px 16px',
    borderRadius: '4px',
    transition: 'all 0.3s ease',
    ':hover': {
      backgroundColor: '#e9ecef',
      color: '#0056b3'
    }
  },
  pageContainer: {
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
  },
  button: {
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    marginTop: '20px',
    transition: 'background-color 0.3s',
    ':hover': {
      backgroundColor: '#0056b3'
    }
  }
};

// Componentes de ejemplo
const Home = () => {
  useEffect(() => {
    trackPageView('/home');
  }, []);

  return (
    <div style={styles.pageContainer}>
      <h2>Home Page</h2>
      <p>Welcome to our website!</p>
      <button 
        style={styles.button}
        onClick={() => trackEvent('User', 'Clicked Home Button')}
      >
        Click Me
      </button>
    </div>
  );
};

const About = () => {
  useEffect(() => {
    trackPageView('/about');
  }, []);

  return (
    <div style={styles.pageContainer}>
      <h2>About Us</h2>
      <p>Learn more about what we do.</p>
    </div>
  );
};

const NotFound = () => {
  useEffect(() => {
    trackPageView('/404');
  }, []);

  return (
    <div style={styles.pageContainer}>
      <h2>Page Not Found</h2>
      <p>Sorry, this page doesn't exist.</p>
    </div>
  );
};

const App = () => {
  useEffect(() => {
    initializeAnalytics();
    trackPageView(window.location.pathname);
  }, []);

  return (
    <Router>
      <div style={styles.app}>
        <nav style={styles.nav}>
          <ul style={styles.navList}>
            <li>
              <Link to="/" style={styles.navLink}>Home</Link>
            </li>
            <li>
              <Link to="/about" style={styles.navLink}>About</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;