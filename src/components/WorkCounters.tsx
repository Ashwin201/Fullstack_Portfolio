import React from 'react'
import { FlipWords } from './ui/flip-words'
import { Meteors } from './ui/meteors';
import { useAbout } from '@/context/AboutProvider';
import { NumberTicker } from './ui/numberTicker';
import AnimateOnVisible from './Animations';

const WorkCounters = () => {
    const words = ["functional", "beautiful", "modern", "fast", "user friendly"];
    const { userData, loader } = useAbout();
    return (
        <section className="text-gray-600 body-font  ">
            <div className=" md:px-5  w-full">

                <div className=" grid grid-cols-8 sm:flex-row justify-between items-start  text-center gap-10 sm:gap-5 ">
                    <div className=" col-span-4 md:col-span-2  w-full order-1 flex flex-col justify-start items-start ">

                        <h2 className="text-4xl pb-2  font-bold  text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-500 to-neutral-700">
                            <NumberTicker value={10} className=' text-4xl pb-2  font-bold  text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-500 to-neutral-700' />+
                        </h2>
                        <p className="leading-relaxed font-bold text-lg  ">Total Projects</p>
                    </div>

                    <div className='col-span-8 md:col-span-4   sm:mt-0 flex flex-col items-center justify-center gap-3 rounded-md  order-3 md:order-2 '>
                        <div className=" w-full relative  ">
                            <div className="absolute inset-0 h-full w-full rounded-full blur-3xl" />
                            <div className="relative  h-full overflow-hidden rounded-2xl flex flex-col justify-start md:justify-center items-start md:items-center md:mt-0 mt-6">


                                <AnimateOnVisible animation={"zoomIn"} duration={1.2} className="text-3xl text-start md:text-center mb-3  font-bold   bg-clip-text text-transparent bg-gradient-to-b from-neutral-500 to-neutral-700">
                                    Expertise I Have
                                </AnimateOnVisible>
                                <AnimateOnVisible animation={"zoomIn"} duration={1.2} className=" text-start md:text-center mx-auto font-medium text-base dark:text-gray-400 text-gray-600">
                                    Proficient in building
                                    <FlipWords words={words} /> <br />

                                    websites with expertise in full-stack development using modern technologies like the MERN stack, React.js, Next.js, and Tailwind CSS. I focus on delivering scalable, high-performing, and maintainable solutions with clean code and a strong emphasis on user experience and accessibility.
                                </AnimateOnVisible>

                                {/* Meaty part - Meteor effect */}
                                {/* <Meteors number={5} /> */}
                            </div>
                        </div>


                    </div>

                    <div className=" col-span-4 md:col-span-2  w-full order-2 md:order-3 flex flex-col justify-end items-end  ">
                        {
                            loader ? (
                                <h2 className="text-4xl pb-2  font-bold  text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-500 to-neutral-700">1+</h2>
                            ) : (

                                <h2 className="text-4xl pb-2  font-bold  text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-500 to-neutral-700">
                                    {userData?.experience}

                                    +</h2>

                            )
                        }

                        <p className="leading-relaxed font-bold text-lg text-end">Years   Experience</p>
                    </div>


                </div>

            </div>
        </section>
    )
}

export default WorkCounters