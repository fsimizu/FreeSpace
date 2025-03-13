import React from "react";
import { AboutUs } from "../components/AboutUs/aboutUs.jsx";
import { Hero } from '../components/Hero';
import { Languages } from '../components/Languages';
import { Layout } from "../layout/Layout.jsx";


export function Root() {

  return (
    <div>
      <Layout>
        <Hero />
        <AboutUs />
        <Languages />
      </Layout>
    </div>
  );
}