import React from 'react'
import { FlipWords } from './ui/flip-words'
import { Meteors } from './ui/meteors';
import { useAbout } from '@/context/AboutProvider';

const WorkCounters = () => {
    const words = ["functional", "beautiful", "modern", "fast"];
    const { userData, loader } = useAbout();
    return (
        <section className="text-gray-600 body-font -mt-20 md:-mt-6 md:pt-14 ">
            <div className="container px-5 pt-0 md:pt-12  w-full">

                <div className=" grid grid-cols-8 sm:flex-row justify-between items-center -m-4 text-center gap-10 sm:gap-5 ">
                    <div className=" col-span-4 sm:col-span-2  w-full order-1">

                        <h2 className="text-4xl pb-2  font-bold  text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-500 to-neutral-700"> 10+</h2>
                        <p className="leading-relaxed font-bold text-lg ">Total <br />Projects</p>
                    </div>

                    <div className='col-span-8 sm:col-span-4  mt-6 sm:mt-0 flex flex-col items-center justify-center gap-3 rounded-md  order-3 sm:order-2'>
                        <div className=" w-full relative max-w-xs">
                            <div className="absolute inset-0 h-full w-full rounded-full blur-3xl" />
                            <div className="relative  h-full overflow-hidden rounded-2xl flex flex-col justify-center items-center">


                                <h3 className="text-3xl text-center mb-3  font-bold   bg-clip-text text-transparent bg-gradient-to-b from-neutral-500 to-neutral-700">
                                    Expertise I Have
                                </h3>
                                <div className=" text-center mx-auto font-medium text-base dark:text-gray-400 text-gray-600">
                                    Proficient in building
                                    <FlipWords words={words} /> <br />

                                    websites using modern web technologies frameworks like ReactJs ,NextJs etc. Ensure smooth back-end integration with Node.js ,
                                    optimizing for search engine and performance.
                                </div>

                                {/* Meaty part - Meteor effect */}
                                {/* <Meteors number={5} /> */}
                            </div>
                        </div>


                    </div>

                    <div className=" col-span-4 sm:col-span-2  w-full order-2 sm:order-3 ">
                        {
                            loader ? (
                                <h2 className="text-4xl pb-2  font-bold  text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-500 to-neutral-700">2.5+</h2>
                            ) : (

                                <h2 className="text-4xl pb-2  font-bold  text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-500 to-neutral-700">{userData?.experience}+</h2>

                            )
                        }

                        <p className="leading-relaxed font-bold text-lg">Years  <br /> Experience</p>
                    </div>


                </div>

            </div>
        </section>
    )
}

export default WorkCounters