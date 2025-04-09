import React, { Suspense, lazy } from "react";
import { Layout } from "../layout/Layout.jsx";
import { useInView } from 'react-intersection-observer';
import { Loading } from "../components/Loading";

const Hero = lazy(() => import('../components/Hero').then((module) => ({ default: module.Hero })));
const AboutUs = lazy(() => import('../components/AboutUs').then((module) => ({ default: module.AboutUs })));
const Languages = lazy(() => import('../components/Languages').then((module) => ({ default: module.Languages })));

export function Root() {

  const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true });
  const { ref: aboutUsRef, inView: aboutUsInView } = useInView({ triggerOnce: true });
  const { ref: languagesRef, inView: languagesInView } = useInView({ triggerOnce: true });

  return (
    <>
      <Layout>
        <div ref={heroRef}>
          <Suspense fallback={<Loading />}>
            {heroInView && <Hero />}
          </Suspense>
        </div>
        <div ref={aboutUsRef}>
          <Suspense fallback={<Loading />}>
            {aboutUsInView && <AboutUs />}
          </Suspense>
        </div>
        <div ref={languagesRef}>
          <Suspense fallback={<Loading />}>
            {languagesInView && <Languages />}
          </Suspense>
        </div>
      </Layout>
    </>
  );
}