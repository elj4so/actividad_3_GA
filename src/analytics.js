import ReactGA from 'react-ga';

// Initialize ReactGA con tu ID de seguimiento de Google Analytics
const initializeAnalytics = () => {
    ReactGA.initialize('G-N9HVPV7JXV'); // Reemplaza con tu ID de Google Analytics
};

// Función para rastrear vistas de páginas
const trackPageView = (page) => {
    ReactGA.pageview(page);
};

// Función para rastrear eventos personalizados
const trackEvent = (category, action) => {
    ReactGA.event({
        category: category,
        action: action,
    });
};

export { initializeAnalytics, trackPageView, trackEvent };