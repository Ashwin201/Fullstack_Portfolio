"use client";

import { useScroll, useTransform } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { GoogleGeminiEffect } from "./ui/google-gemini-effect";
import WorkCounters from "./WorkCounters";
import About from "./About";
import Services from "./Services";
import Skills from "./Skills";
import Project from "./Project";
import Contact from "./Contact";
import dynamic from "next/dynamic";
import { ScrollToTop } from "./ScrollToTop";

function HomePage() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const pathLengthFirst = useTransform(scrollYProgress, [1.2, 1.2], [1.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [1.2, 1.2], [1.2, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [1.2, 1.2], [1.2, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [1.2, 1.2], [1.2, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [1.2, 1.2], [1.2, 1.2]);

  return (
    <>
      <div
        id="Home"
        className="h-[570px] lg:h-[650px] w-full relative pt-10 md:pt-14 lg:pt-20 overflow-clip"
        ref={ref}
      >
        <GoogleGeminiEffect
          pathLengths={[
            pathLengthFirst,
            pathLengthSecond,
            pathLengthThird,
            pathLengthFourth,
            pathLengthFifth,
          ]}
        />
      </div>
      <WorkCounters />
      <About />
      <Services />
      <Skills />
      <Project />
      <Contact />

    </>
  );
}

export default HomePage;