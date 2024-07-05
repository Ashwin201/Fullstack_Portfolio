import React from "react";
import Image from "next/image";
import redux from "../../public/images/redux.webp";
import zustand from "../../public/images/zustand-removebg-preview.webp";
import shadcn from "../../public/images/shadcn-removebg-preview.webp";
import zod from "../../public/images/zod-removebg-preview.webp";
import expressjs from "../../public/images/express-js-removebg-preview.webp";
import Stripe from "../../public/images/Stripe.webp";
import git from "../../public/images/git.webp";
import github from "../../public/images/github.webp";
import docker from "../../public/images/docker-removebg-preview.webp";
import postman from "../../public/images/postman-removebg-preview.webp";
import { Cpp, Java } from "../../public/SkillIcons";
import {
    // FireBase,
    MongoDb,
    NextJs,
    Nodejs,
    Prisma,
    Bootstrap,
    Css,
    Html,
    Js,
    Reactjs,
    Tailwind,
} from "../../public/SkillIcons";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const Skills = () => {
    return (
        <div id="Skills" className=' pt-6 mt-10  flex flex-col items-center  col-span-1justify-center w-full'>
            <h3 className=" pb-12  text-4xl  sm:text-5xl text-center mb-3  font-bold   bg-clip-text text-transparent bg-gradient-to-b from-neutral-500 to-neutral-700">
                Professional Skills
            </h3>


            <Tabs defaultValue="Frontend" >
                <TabsList className="  flex gap-2 px-2  py-7 mb-10 bg-gray-200 dark:bg-gray-900  w-fit justify-center items-center mx-auto">
                    <TabsTrigger value="Frontend" className=' text-base font-semibold py-2 px-4'>Frontend</TabsTrigger>
                    <TabsTrigger value="Backend" className=' text-base font-semibold py-2 px-4'>Backend</TabsTrigger>
                    <TabsTrigger value="Tools" className=' text-base font-semibold py-2 px-4'>Tools </TabsTrigger>
                </TabsList>
                <div>

                    <TabsContent value="Frontend" className=' flex flex-col justify-center items-center outline-none border-none focus:outline-none hover:border-none focus:border-none p-3'>
                        <div className="grid  grid-cols-3 sm:grid-cols-4  lg:grid-cols-4 align-content-center  sm:gap-[70px] gap-14  ">
                            <div className=" flex flex-col items-center  col-span-1">
                                <span className="rounded-[50%] w-[60px] h-[60px] shadow-lg p-[6px]  flex justify-center items-center">
                                    <Html />
                                </span>
                                <span className="  font-semibold mt-2 text-text1  text-[12.5px] text-center">
                                    Html
                                </span>
                            </div>
                            <div className=" flex flex-col items-center  col-span-1">
                                <span className="rounded-[50%] w-[60px] h-[60px] shadow-lg p-[6px]  flex justify-center items-center">
                                    <Css />
                                </span>
                                <span className="  font-semibold mt-2 text-text1  text-[12.5px] text-center">
                                    Css
                                </span>
                            </div>
                            <div className=" flex flex-col items-center  col-span-1">
                                <span className="rounded-[50%] w-[60px] h-[60px] shadow-lg p-[6px]  flex justify-center items-center">
                                    <Js />
                                </span>
                                <span className="  font-semibold mt-2 text-text1  text-[12.5px] text-center">
                                    Javascript
                                </span>
                            </div>
                            <div className=" flex flex-col items-center  col-span-1">
                                <span className="rounded-[50%] w-[60px] h-[60px] shadow-lg p-[6px]  flex justify-center items-center">
                                    <Reactjs />
                                </span>
                                <span className="  font-semibold mt-2 text-text1  text-[12.5px] text-center">
                                    React
                                </span>
                            </div>
                            <div className=" flex flex-col items-center  col-span-1">
                                <span className="rounded-[50%] w-[60px] h-[60px] shadow-lg p-[6px]  flex justify-center items-center">
                                    <NextJs />
                                </span>
                                <span className="  font-semibold mt-2 text-text1  text-[12.5px] text-center">
                                    Nextjs
                                </span>
                            </div>
                            <div className=" flex flex-col items-center  col-span-1">
                                <span className="rounded-[50%] w-[60px] h-[60px] shadow-lg p-[6px]  flex justify-center items-center">
                                    <Bootstrap />
                                </span>
                                <span className="  font-semibold mt-2 text-text1  text-[12.5px] text-center">
                                    Bootstrap
                                </span>
                            </div>
                            <div className=" flex flex-col items-center  col-span-1">
                                <span className="rounded-[50%] w-[60px] h-[60px] shadow-lg p-[6px]  flex justify-center items-center">
                                    <Tailwind />
                                </span>
                                <span className="  font-semibold mt-2 text-text1  text-[12.5px] text-center">
                                    Tailwind
                                </span>
                            </div>
                            <div className=" flex flex-col items-center  col-span-1">
                                <span className="rounded-[50%] w-[60px] h-[60px] shadow-lg p-[6px]  flex justify-center items-center">
                                    <Image src={shadcn} alt="shadcn " className="w-[90px] " />
                                </span>
                                <span className="  font-semibold mt-2 text-text1  text-[12.5px] text-center">
                                    Shadcn UI
                                </span>
                            </div>
                            <div className=" flex flex-col items-center  col-span-1">
                                <span className="rounded-[50%] w-[60px] h-[60px] shadow-lg p-[6px]  flex justify-center items-center">
                                    <Image src={redux} alt="Redux Toolkit " className="w-[90px] " />
                                </span>
                                <span className="  font-semibold mt-2 text-text1  text-[12.5px] text-center">
                                    Redux <br /> Toolkit
                                </span>
                            </div>
                            <div className=" flex flex-col items-center  col-span-1">
                                <span className="rounded-[50%] w-[60px] h-[60px] shadow-lg  flex justify-center items-center">
                                    <Image src={zustand} alt="Zustand" className="w-[90px] h-auto " />
                                </span>
                                <span className="  font-semibold mt-2 text-text1  text-[12.5px] text-center">
                                    Zustand
                                </span>
                            </div>
                            <div className=" flex flex-col items-center  col-span-1">
                                <span className="rounded-[50%] w-[60px] h-[60px] shadow-lg p-[6px]  flex justify-center items-center">
                                    <Image src={zod} alt="zod" className="w-[90px] " />
                                </span>
                                <span className="  font-semibold mt-2 text-text1  text-[12.5px] text-center">
                                    Zod
                                </span>
                            </div>
                        </div>
                    </TabsContent>
                    <TabsContent value="Backend" className=' -mt-6 flex flex-col justify-center items-center outline-none border-none focus:outline-none hover:border-none focus:border-none p-3'>
                        <div className="grid  grid-cols-3 sm:grid-cols-4  lg:grid-cols-4 align-content-center sm:gap-[70px] gap-14  ">
                            <div className=" flex flex-col items-center ">
                                <span className="rounded-[50%] w-[60px] h-[60px] shadow-lg p-[6px]  flex justify-center items-center">
                                    <Nodejs />
                                </span>
                                <span className="  font-semibold mt-2 text-text1  text-[12.5px] text-center">
                                    Nodejs
                                </span>
                            </div>
                            <div className=" flex flex-col items-center ">
                                <span className="rounded-[50%] w-[60px] h-[60px] shadow-lg p-[6px]  flex justify-center items-center">
                                    <Image src={expressjs} alt="Express js" className="w-[90px] " />
                                </span>
                                <span className="  font-semibold mt-2 text-text1  text-[12.5px] text-center">
                                    ExpressJs
                                </span>
                            </div>
                            <div className=" flex flex-col items-center ">
                                <span className="rounded-[50%] w-[60px] h-[60px] shadow-lg p-[6px]  flex justify-center items-center">
                                    <NextJs />
                                </span>
                                <span className="  font-semibold mt-2 text-text1  text-[12.5px] text-center">
                                    Nextjs
                                </span>
                            </div>
                            <div className=" flex flex-col items-center ">
                                <span className="rounded-[50%] w-[60px] h-[60px] shadow-lg p-[6px]  flex justify-center items-center">
                                    <MongoDb />
                                </span>
                                <span className="  font-semibold mt-2 text-text1  text-[12.5px] text-center">
                                    MongoDb
                                </span>
                            </div>

                            <div className=" flex flex-col items-center ">
                                <span className="rounded-[50%] w-[60px] h-[60px] shadow-lg p-[6px]  flex justify-center items-center">
                                    <Prisma />
                                </span>
                                <span className="  font-semibold mt-2 text-text1  text-[12.5px] text-center">
                                    Prisma
                                </span>
                            </div>
                        </div>
                    </TabsContent>
                    <TabsContent value="Tools" className=' -mt-6 flex flex-col justify-center items-center outline-none border-none focus:outline-none hover:border-none focus:border-none p-3'>
                        <div className="grid  grid-cols-3 sm:grid-cols-4  lg:grid-cols-4 align-content-center sm:gap-[70px] gap-14  ">
                            <div className=" flex flex-col items-center ">
                                <span className="rounded-[50%] w-[60px] h-[60px] shadow-lg p-[6px]  flex justify-center items-center">
                                    <Image src={git} alt="Git" className="w-[90px] " />
                                </span>
                                <span className="  font-semibold mt-2 text-text1  text-[12.5px] text-center">
                                    Git
                                </span>
                            </div>
                            <div className=" flex flex-col items-center ">
                                <span className="rounded-[50%] w-[60px] h-[60px] shadow-lg p-2  flex justify-center items-center">
                                    <Image src={github} alt="Git" className="w-[90px] " />
                                </span>
                                <span className="  font-semibold mt-2 text-text1  text-[12.5px] text-center">
                                    Github
                                </span>
                            </div>
                            <div className=" flex flex-col items-center ">
                                <span className="rounded-[50%] w-[60px] h-[60px] shadow-lg   flex justify-center items-center">
                                    <Image src={docker} alt="Docker" className="w-[90px] " />
                                </span>
                                <span className="  font-semibold mt-2 text-text1  text-[12.5px] text-center">
                                    Docker
                                </span>
                            </div>
                            <div className=" flex flex-col items-center ">
                                <span className="rounded-[50%] w-[60px] h-[60px] shadow-lg  flex justify-center items-center">
                                    <Image src={postman} alt="Postman" className="w-[90px] " />
                                </span>
                                <span className="  font-semibold mt-2 text-text1  text-[12.5px] text-center">
                                    Postman
                                </span>
                            </div>
                        </div>
                    </TabsContent>
                </div>
            </Tabs>
        </div>
    )
}

export default Skills