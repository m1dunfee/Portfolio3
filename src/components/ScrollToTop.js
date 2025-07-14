import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const el = document.getElementById('main-top') || document.body;
    el.scrollIntoView({ behavior: 'instant' });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
