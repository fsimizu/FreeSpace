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


export async function getVideos(language) {

    // const response = await fetch(`/api/language/${language}/videos`);
    const response = await fetch(`/api/language/spanish/videos`);
    
    // const response = await fetch(
    //     `https://nulv0bq4m1.execute-api.us-east-1.amazonaws.com/dev/language/${language}/videos`,
    //     {
    //       headers: {
    //         "x-api-key": import.meta.env.VITE_API_GATEWAY_KEY,
    //       },
    //     }
    //   );


    if (!response.ok) throw new Error("Failed to fetch videos");
    const contentType = response.headers.get("content-type");
    
    if (!contentType || !contentType.includes("application/json")) {
        throw new Error(`Unexpected response type: ${contentType}`);
    }
    
    return response.json();
}