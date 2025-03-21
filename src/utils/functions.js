import { scroller } from "react-scroll";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';



export const scrollTo = (id) => {
    scroller.scrollTo(id, {
        duration: 400,
        offset: -60,
    });
};

export function generateBreadcrumbItems(pathname) {
    const items = [];
    const paths = pathname.split('/').filter((path) => path !== '');

    paths.forEach((path, index) => {
        const link = '/' + paths.slice(0, index + 1).join('/');
        items.push({ name: path.charAt(0).toUpperCase() + path.slice(1), link });
    });

    return items;
}

export const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [pathname]);
    return null;
  };
  