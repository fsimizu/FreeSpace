import React, { lazy, Suspense } from 'react';
import { Navbar } from '../components/Navbar';
// import { Footer } from '../components/Footer';
import { ScrollToTop } from '../utils/functions';
import { Loading } from '../components/Loading';

const Footer = lazy(() => import('../components/Footer').then(module => ({ default: module.Footer })));

export const Layout = ({ children }) => {
    return (
        <div style={{ position: "relative" }}>
            <ScrollToTop />
            <Navbar />
            {children}
            <Suspense fallback={<Loading />}>
                <Footer />
            </Suspense>
        </div>
    )
}