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
    const baseUrl = window.location.origin; 
    const response = await fetch(`${baseUrl}/api/language/${language}/videos`);
    if (!response.ok) throw new Error("Failed to fetch videos");
    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
        throw new Error(`Unexpected response type: ${contentType}`);
    }
    return response.json();
}

export async function getProducts(language) {
    const baseUrl = window.location.origin; 
    const response = await fetch(`${baseUrl}/api/language/${language}/products`);

    // const response = await fetch(   
    //     `https://nulv0bq4m1.execute-api.us-east-1.amazonaws.com/dev/language/${language}/products`,
    //     {
    //       method: "GET",
    //       headers: {
    //         'Content-Type': 'application/json',
    //         "x-api-key": import.meta.env.API_GATEWAY_KEY,
    //       },
    //     }
    //   );

    if (!response.ok) throw new Error("Failed to fetch products");
    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
        throw new Error(`Unexpected response type: ${contentType}`);
    }
    return response.json();
}


export async function getAudio(videoId) {
    const baseUrl = window.location.origin; 
    // const response = await fetch(`${baseUrl}/api/videos/${videoId}/segments`);

    const response = await fetch(   
        `https://nulv0bq4m1.execute-api.us-east-1.amazonaws.com/dev/videos/${videoId}/segments`,
        {
          method: "GET",
          headers: {
            'Content-Type': 'application/json',
            "x-api-key": import.meta.env.API_GATEWAY_KEY,
          },
        }
      );

    if (!response.ok) throw new Error("Failed to fetch products");
    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
        throw new Error(`Unexpected response type: ${contentType}`);
    }
    return response.json();
}