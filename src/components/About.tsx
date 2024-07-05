"use client"
import Link from 'next/link'
import React, { Fragment, useEffect, useState } from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { IoIosMailUnread } from "react-icons/io";
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CircleUser, FolderDown } from 'lucide-react';
import { Skeleton } from './ui/skeleton';
import ExperienceSkeleton from './Skeletons/ExperienceSkeleton';
import { useAbout } from '@/context/AboutProvider';

const About = () => {
    const [data, setData] = useState<any>([]);
    const [loading, setLoading] = useState(true)
    const { userData, loader } = useAbout();
    // console.log(userData)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`/api/experience`, {
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                if (res.ok) {
                    const info = await res.json();
                    // console.log(info)
                    const response = info.reverse();
                    setData(response);
                    setLoading(false)
                }
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);
    return (
        <div id='About' className=' pt-12 mt-10 sm:mt-14 flex flex-col w-full justify-center items-center'>
            <h3 className=" pb-10  text-4xl sm:text-5xl text-center mb-3  font-bold   bg-clip-text text-transparent bg-gradient-to-b from-neutral-500 to-neutral-700">
                Know More <br className=' sm:hidden' /> About Me
            </h3>
            <div className="  col-span-2 items-center flex flex-col justify-center xl:-mt-3 align-start text-center  mb-20  ">
                <div className="font-bold text-[28px] bg-clip-text text-transparent bg-gradient-to-b from-neutral-500 to-neutral-700">
                    {userData?.role ? userData?.role : " Full Stack Developer"}
                </div>
                <div className="mt-6 text-base text-gray-600 dark:text-gray-300 font-medium px-1">
                    {userData?.desc ? userData?.desc?.map((description: any, index: number) => (
                        <p key={index} className=' text-gray-600 dark:text-gray-400 text-base font-medium'>
                            {description}
                        </p>
                    )) : (
                        <>
                            <p>
                                Hi, I'm Ashmin Sharma, a web developer proficient in front-end technologies, and good in back-end technologies as well. With expertise in frameworks like Nextjs ,
                                I specialize in crafting visually appealing and responsive websites that prioritize a seamless user experience. My skills extend to database management with MongoDB,
                                ensuring robust back-end support for web applications. Efficeint in version control with Git and collaborating effectively within teams.
                            </p>
                            <p>
                                Explore my portfolio to witness my commitment to turning ideas into functional, innovative, and user-centric web solutions.
                                Let's connect and discuss how I can bring your digital vision to life!
                            </p>
                        </>
                    )}

                </div>

                <nav className=" flex justify-center xl:justify-start items-center my-6">
                    <Link
                        href="https://instagram.com/ashwin.203?igshid=YmMyMTA2M2Y="
                        className="mr-3"
                        aria-label="Instagram"
                        target="_blank"
                    >
                        <FaInstagram size={25} />
                    </Link>
                    <Link
                        href="https://github.com/Ashwin201"
                        className="mr-3"
                        aria-label="Github"
                        target="_blank"
                    >
                        <FaGithub size={25} />
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/ashmin-sharma-6a4867257"
                        className="mr-3"
                        aria-label="Linkedin"
                        target="_blank"
                    >
                        <FaLinkedin size={25} />
                    </Link>
                </nav>
                <div className="flex justify-center xl:justify-start">
                    <ul className="flex max-[360px]:flex-col-reverse flex-row font-medium max-[300px]:flex-col gap-4 ">

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
                        <Button variant={"secondary"}
                        >
                            <Link
                                href="#Contact"
                                aria-label="Contact"
                                className="flex items-center gap-2 justify-center py-[6px] w-fit max-[360px]:w-full    px-2 sm:px-4 text-sm "
                            >
                                <CircleUser size={22} />  Get in Touch
                            </Link>
                        </Button>
                    </ul>
                </div>
            </div>

            {/* Educationa nd Experience */}

            <Tabs defaultValue="education" >
                <TabsList className="  flex gap-2 px-2  py-7 bg-gray-200 dark:bg-gray-900 mb-10 w-fit justify-center items-center mx-auto">
                    <TabsTrigger value="education" className=' text-lg font-medium py-2 px-8'>Education</TabsTrigger>
                    <TabsTrigger value="experience" className=' text-lg font-medium py-2 px-8'>Experience</TabsTrigger>
                </TabsList>
                <TabsContent value="education" className=' flex flex-col justify-center items-center outline-none border-none focus:outline-none hover:border-none focus:border-none p-3'>
                    <div className="flex flex-col text-start sm:px-20 ">
                        <div className=" border-l-[3px] border-gray-600 dark:border-gray-400   ">
                            <div className="relative ml-[30px] sm:ml-[65px] mb-16 mt-[-2px]">
                                <div className="  font-bold text-[28px]  bg-clip-text text-transparent bg-gradient-to-b from-neutral-500 to-neutral-700  mb-3">
                                    High School
                                </div>
                                <div className="  text-xl mb-3 font-bold text-gray-600 dark:text-gray-400">2019-2021</div>
                                <p className=" flex items-start gap-1 font-medium dark:text-gray-400 text-gray-600  text-base">
                                    I have accomplished my high school education at Government
                                    Senior Secondary School, Jhajjar, Haryana, specializing in the
                                    Non-Medical Stream, during the academic session of 2019-2021.
                                </p>
                                <span className=" absolute top-0 left-0  flex justify-center align-middle items-center  w-[25px] p-1 h-[25px]  sm:w-[28px] sm:h-[28px] bg-white dark:bg-gray-900  border-gray-600 dark:border-gray-400  border-[3px] -ml-[45px] sm:-ml-[81px] rounded-[50%]">
                                    <span className="w-[10px] h-[10px] sm:w-[15px] sm:h-[15px] bg-gray-600 dark:bg-gray-400  rounded-[50%]"></span>
                                </span>
                            </div>
                            <div className="relative ml-[30px] sm:ml-[65px] ">
                                <div className="  font-bold text-[28px]  bg-clip-text text-transparent bg-gradient-to-b from-neutral-500 to-neutral-700 mb-3 mt-[-2px]">
                                    Bachelor&apos;s Degree
                                </div>
                                <div className="  text-xl mb-3 font-bold text-gray-600 dark:text-gray-400">2021-Present</div>
                                <p className=" flex items-start gap-1 font-medium dark:text-gray-400 text-gray-600  text-base">
                                    I am currently enrolled in the Bachelor&apos;s program in
                                    Computer Science and Engineering at Ganga Institute of
                                    Technology and Management, located in Kablana, Jhajjar.
                                </p>

                                <span className=" absolute top-0 left-0  flex justify-center align-middle items-center  w-[25px] p-1 h-[25px]  sm:w-[28px] sm:h-[28px] bg-white
                                 dark:bg-gray-900  border-gray-600 dark:border-gray-400  border-[3px] -ml-[45px] sm:-ml-[81px] rounded-[50%]">
                                    <span className="w-[10px] h-[10px] sm:w-[15px] sm:h-[15px] bg-gray-600 dark:bg-gray-400  rounded-[50%]"></span>
                                </span>
                            </div>
                        </div>
                    </div>
                </TabsContent>
                <TabsContent value="experience" className=' -mt-6 flex flex-col  justify-center items-center outline-none border-none focus:outline-none hover:border-none focus:border-none p-3'>

                    {
                        loading ? (
                            <ExperienceSkeleton />
                        ) : (

                            data.reverse() &&
                            data?.map((item: any, index: number) => (
                                <div key={index} className="flex flex-col justify-start items-start text-start sm:px-20 ">

                                    <div className=" border-l-[3px] border-gray-600 dark:border-gray-400 flex flex-col gap-16   ">
                                        <div className="relative ml-[30px] sm:ml-[65px]">
                                            <div className="  font-bold text-[28px]  bg-clip-text text-transparent bg-gradient-to-b from-neutral-500 to-neutral-700   mb-2">
                                                {item?.role}
                                            </div>
                                            {item?.company &&
                                                <div className="  font-bold text-xl text-blue-700 mb-2">
                                                    @{item?.company}
                                                </div>
                                            }
                                            <div className="  text-xl mb-2 font-bold">
                                                {item?.duration}
                                            </div>
                                            <div className=" mb-8 ">
                                                {item?.description?.map((desc: any) => (
                                                    <p className="font-medium  text-gray-600 dark:text-gray-400">
                                                        {desc}
                                                    </p>
                                                ))}
                                            </div>
                                            <span className=" absolute top-0 left-0  flex justify-center align-middle items-center  w-[25px] p-1 h-[25px]  sm:w-[28px] sm:h-[28px] bg-white dark:bg-gray-900  border-gray-600 dark:border-gray-400  border-[3px] -ml-[45px] sm:-ml-[81px] rounded-[50%]">
                                                <span className="w-[10px] h-[10px] sm:w-[15px] sm:h-[15px] bg-gray-600 dark:bg-gray-400  rounded-[50%]"></span>
                                            </span>
                                        </div>

                                    </div>
                                </div>
                            ))
                        )
                    }
                </TabsContent>
            </Tabs>

        </div>
    )
}

export default About
