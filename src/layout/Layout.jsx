import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const Layout = ({children}) =>{
    return(
        <div style={{ position: "relative" }}>
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}