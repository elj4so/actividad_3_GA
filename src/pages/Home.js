import React, { useEffect } from 'react';
import { event } from '../analytics';

const Home = () => {
  // Rastrear tiempo en la página
  useEffect(() => {
    const startTime = new Date();

    return () => {
      const endTime = new Date();
      const timeSpent = (endTime - startTime) / 1000; // Tiempo en segundos
      event('Home', 'Time Spent', 'Page View', timeSpent);
    };
  }, []);

  // Rastrear scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      event('Home', 'Scroll', 'Page Scroll', scrollPosition);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleButtonClick = () => {
    event('Home', 'Button Click', 'Learn More Button');
  };

  const handleDownloadClick = () => {
    event('Home', 'Download', 'PDF Download');
  };

  return (
    <div>
      <h1>Bienvenido a nuestra aplicación</h1>
      <p>Esta es la página de inicio.</p>
      <button onClick={handleButtonClick}>Aprende más</button>
      <a 
        href="/src/data/Lesiones equipo 5.pdf" 
        download 
        onClick={handleDownloadClick}
      >
        Descargar PDF
      </a>
      <div style={{ height: '2000px' }}>Contenido largo para hacer scroll</div>
    </div>
  );
};

export default Home;