import React from "react";
import { AboutUs } from "../components/AboutUs";
import { Hero } from '../components/Hero';
import { Languages } from '../components/Languages';
import { Layout } from "../layout/Layout.jsx";
import { Subscribe } from "../components/Subscribe";

export function Root() {

  return (
    <>
      <Layout>
        <Hero />
        <AboutUs />
        <Languages />
        {/* <Subscribe /> */}
      </Layout>
    </>
  );
}