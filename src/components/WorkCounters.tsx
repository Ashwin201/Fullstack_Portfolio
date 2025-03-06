import React from 'react'
import { FlipWords } from './ui/flip-words'
import { Meteors } from './ui/meteors';
import { useAbout } from '@/context/AboutProvider';
import { NumberTicker } from './ui/numberTicker';
import AnimateOnVisible from './Animations';

const WorkCounters = () => {
    const words = ["functional", "beautiful", "modern", "fast"];
    const { userData, loader } = useAbout();
    return (
        <section className="text-gray-600 body-font  ">
            <div className=" md:px-5  w-full">

                <div className=" grid grid-cols-8 sm:flex-row justify-between items-start  text-center gap-10 sm:gap-5 ">
                    <div className=" col-span-4 md:col-span-2  w-full order-1 flex flex-col justify-start items-start ">

                        <h2 className="text-4xl pb-2  font-bold  text-center  theme-gradient-text">
                            <NumberTicker value={10} className=' text-4xl pb-2  font-bold  text-center   theme-gradient-text ' />+
                        </h2>
                        <p className="leading-relaxed font-bold text-lg  dark:text-gray-300 text-gray-600 ">Total Projects</p>
                    </div>

                    <div className='col-span-8 md:col-span-4  sm:mt-0 flex flex-col items-center justify-center gap-3 rounded-md  order-3 md:order-2 '>
                        <div className=" w-full relative md:hidden lg:block  ">
                            <div className="absolute inset-0 h-full w-full rounded-full blur-3xl" />
                            <div className="relative  h-full overflow-hidden rounded-2xl flex flex-col justify-start md:justify-center items-start md:items-center md:mt-0 mt-6">


                                <AnimateOnVisible animation={"zoomIn"} duration={0.9} className="text-3xl text-start md:text-center mb-3  font-bold    theme-gradient-text ">
                                    Expertise I Have
                                </AnimateOnVisible>
                                <AnimateOnVisible animation={"zoomIn"} duration={0.9} className=" text-start md:text-center mx-auto font-medium text-base dark:text-gray-300 text-gray-600">
                                    Proficient in building
                                    <FlipWords words={words} /> <br />

                                    websites with expertise in full-stack development using modern technologies like the  React.js, Next.js, Tailwind CSS, Node.js, Express.js, MongoDB etc. I focus on delivering scalable, high-performing, and maintainable solutions with clean code and a strong emphasis on user experience and accessibility.
                                </AnimateOnVisible>

                                {/* Meaty part - Meteor effect */}
                                {/* <Meteors number={5} /> */}
                            </div>
                        </div>


                    </div>

                    <div className=" col-span-4 md:col-span-2  ml-auto  w-full order-2 md:order-3 flex flex-col justify-end items-end  ">
                        {
                            loader ? (
                                <h2 className="text-4xl pb-2  font-bold  text-center  theme-gradient-text">1+</h2>
                            ) : (

                                <h2 className="text-4xl pb-2  font-bold  text-center  theme-gradient-text">
                                    {userData?.experience}

                                    +</h2>

                            )
                        }

                        <p className="leading-relaxed font-bold text-lg text-end dark:text-gray-300 text-gray-600">Years   Experience</p>
                    </div>


                </div>

            </div>
        </section>
    )
}

export default WorkCounters
