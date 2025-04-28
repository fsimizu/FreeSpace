import { Analytics } from "@vercel/analytics/react"
import React, { lazy, Suspense } from 'react';
import { Loading } from '../components/Loading';
import { Navbar } from '../components/Navbar';
import { ScrollToTop } from '../utils/functions';

const Footer = lazy(() => import('../components/Footer').then(module => ({ default: module.Footer })));

export const Layout = ({ children }) => {
    return (
        <div style={{ position: "relative" }}>
            <ScrollToTop />
            <Navbar />
            {children}
            <Analytics />
            <Suspense fallback={<Loading />}>
                <Footer />
            </Suspense>
        </div>
    )
}