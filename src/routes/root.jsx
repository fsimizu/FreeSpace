import React from "react";
import { Hero } from '../components/Hero';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Languages } from '../components/Languages';


export function Root() {

    return (
      <div>
        <Navbar />
        <Hero />
        <Languages />
        <Footer />
      </div>
    );
  }