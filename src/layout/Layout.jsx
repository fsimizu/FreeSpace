import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ScrollToTop } from '../utils/functions';

export const Layout = ({children}) =>{
    return(
        <div style={{ position: "relative" }}>
            <ScrollToTop />
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}