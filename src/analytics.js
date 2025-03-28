import ReactGA from 'react-ga4';

const initializeAnalytics = () => {
  ReactGA.initialize('G-N9HVPV7JXV'); // Tu ID de GA4
};

const trackPageView = (page) => {
  ReactGA.send({ hitType: "pageview", page });
};

const trackEvent = (category, action, label, value) => {
  ReactGA.event({
    category,
    action,
    label,
    value
  });
};

export { initializeAnalytics, trackPageView, trackEvent }