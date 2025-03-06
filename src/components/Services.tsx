import React from 'react'
import Image from "next/image";
import fast from "../../public/images/fast.webp";
import responsive from "../../public/images/responsive.webp";
import design from "../../public/images/webdesign.webp";
import seo from "../../public/images/SEO.webp";
import AnimateOnVisible from './Animations';


const Services = () => {
    return (
        <div id="services" className=' pt-10   flex flex-col  w-full'>
            <div className=' mb-12  '>
                <h3 className=" text-4xl sm:text-[44px] mb-3  font-bold    theme-gradient-text">
                    What I Provide
                </h3>
                <p className=' text-base text-gray-600 font-medium dark:text-gray-300'>
                    Know in detail what I offer and how I can help you.
                </p>
            </div>
            <div className="  grid grid-cols-1 min-[620px]:grid-cols-2  gap-14 min-[580px]:gap-12 md:gap-12 px-2">
                <AnimateOnVisible animation={"slideUp"} duration={0.9} className="flex flex-col  col-span-1">
                    <div className="mb-5">
                        <Image src={fast} width={150} height={150} className=" w-[150px] h-auto" alt="service" />
                    </div>
                    <div className="font-bold  text-[28px]    theme-gradient-text">
                        Quick Load Website
                    </div>
                    <p className="mt-6 text-base font-medium  text-gray-600 dark:text-gray-300">
                        Ensuring swift website loading times, seamless interaction without lag, and delivering an optimal user experience are my top priorities.
                    </p>
                </AnimateOnVisible>
                <AnimateOnVisible animation={"slideUp"} duration={0.9} className="flex flex-col  col-span-1">
                    <div className="mb-5">
                        <Image src={responsive} width={150} height={150} className=" w-[150px] h-auto" alt="service" />
                    </div>
                    <div className="font-bold  text-[28px]    theme-gradient-text">
                        Cross-Device Compatible
                    </div>
                    <p className="mt-6 text-base font-medium  text-gray-600 dark:text-gray-300">
                        Websites are designed to be compatible with a variety of resolutions, including those of desktops, tablets, and mobile  devices,
                        ensuring a seamless user experience across different platforms.
                    </p>
                </AnimateOnVisible>
                <AnimateOnVisible animation={"slideUp"} duration={0.9} className="flex flex-col col-span-1">
                    <div className="mb-5" >
                        <Image src={design} width={150} height={150} className=" w-[150px] h-auto" alt="service" />
                    </div >
                    <div className="font-bold  text-[28px]    theme-gradient-text">
                        Web Design&apos;s
                    </div>
                    <p className="mt-6 text-base font-medium  text-gray-600 dark:text-gray-300">
                        Specialize in creating customized, interactive, and visually  appealing designs to meet your preferences and needs.
                    </p>
                </AnimateOnVisible >
                <AnimateOnVisible animation={"slideUp"} duration={0.9} className="flex flex-col col-span-1">
                    <div className="mb-5" >
                        <Image src={seo} width={150} height={150} className=" w-[150px] h-auto" alt="service" />
                    </div >
                    <div className="font-bold  text-[28px]    theme-gradient-text">
                        Search Engine Optimization
                    </div>
                    <p className="mt-6 text-base font-medium  text-gray-600 dark:text-gray-300">
                        Proficient in delivering websites that are highly optimized for search engines, ensuring optimal visibility and performance.
                    </p>
                </AnimateOnVisible >
            </div >
            <br />
            <br />
        </div >
    )
}

export default Services