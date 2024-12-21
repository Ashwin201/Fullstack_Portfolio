"use client";

import React, { useEffect, useRef, useState } from "react";
import WorkCounters from "./WorkCounters";
import About from "./About";
import Services from "./Services";
import Skills from "./Skills";
import Project from "./Project";
import Contact from "./Contact";
import dynamic from "next/dynamic";
import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Button } from "./ui/button";
import { CircleUser, FolderDown } from "lucide-react";
import { useAbout } from "@/context/AboutProvider";
import AnimateOnVisible from "./Animations";
const PlayerWithNoSSR = dynamic(
  () => import('@lottiefiles/react-lottie-player').then(module => module.Player),
  { ssr: false }
);
function HomePage() {
  const { userData, loader } = useAbout();

  return (
    <>
      <div className=" flex md:flex-row md:gap-8 mt-8 mb-2 flex-col justify-start ">


        <PlayerWithNoSSR
          autoplay
          loop
          src={`/developer.json`}

          className={` h-[300px]  md:h-[260px] md:w-[260px] w-auto md:flex hidden md:-ml-32`}
        />
        <div className="flex flex-col justify-start items-start mt-3  ">

          <AnimateOnVisible animation={"slideRight"} duration={0.8} className=" text-[28px] min-[500px]:text-[40px]  font-bold  text-start bg-clip-text xl:mt-4 text-transparent bg-gradient-to-b from-neutral-500 to-neutral-700 ">
            Hi, I&apos;m  Ashmin Sharma
            <span className=" text-yellow-500 text-[25px] min-[500px]:text-[33px] pl-2">👋</span>
          </AnimateOnVisible>


          <AnimateOnVisible animation={"slideRight"} duration={1.0} className=" mb-4 font-medium text-base dark:text-gray-400 text-gray-600 mt-4 text-start ">
            A full-stack developer passionate about building seamless web applications. Skilled in crafting intuitive front-end designs and robust back-end systems.
            Let&apos;s turn ideas into impactful solutions.
          </AnimateOnVisible>
          <AnimateOnVisible animation={"slideRight"} duration={0.9} className="flex items-center space-x-4 mt-2">
            <Link
              href="https://instagram.com/ashwin.203?igshid=YmMyMTA2M2Y="
              aria-label="Insta"
              target="_blank"
            >
              <FaInstagram size={26} />
            </Link>
            <Link
              href="https://github.com/Ashwin201"
              aria-label="Github"
              target="_blank"
            >
              <FaGithub size={26} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/ashmin-sharma-6a4867257"
              aria-label="Linkedin"
              target="_blank"
            >
              <FaLinkedin size={26} />
            </Link>
          </AnimateOnVisible>
          <AnimateOnVisible animation={"slideRight"} duration={1.0} className="flex justify-start mt-7 lg:hidden">
            <ul className="flex max-[360px]:flex-col-reverse flex-row font-medium max-[300px]:flex-col gap-4 ">


              {/* <Button variant={"secondary"}
              >
                <Link
                  href={"mailto:ashminsharma203@gmail.com"}
                  aria-label="Contact"
                  className="flex items-center gap-2 justify-center py-[6px] w-fit max-[360px]:w-full    px-2 sm:px-4 text-sm "
                >
                  <CircleUser size={22} />  Get in Touch
                </Link>
              </Button> */}
              <Button>
                <Link
                  target="_blank"
                  aria-label="Resume"
                  href={`${userData?.resume}`}
                  className=" flex items-center gap-2  text-center justify-center   py-[6px] w-fit max-[360px]:w-full  px-2 sm:px-4 text-sm "
                >
                  <FolderDown size={22} />  Download CV
                  {/* <span className="ml-2">
                    <RiFolderDownloadFill size={25} className="" />
                </span> */}
                </Link>
              </Button>
            </ul>
          </AnimateOnVisible>
        </div>
      </div>
      <br />
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