import React from 'react'
import Image from "next/image";
import fast from "../../public/images/fast.webp";
import responsive from "../../public/images/responsive.webp";
import design from "../../public/images/webdesign.webp";
import seo from "../../public/images/SEO.webp";


const Services = () => {
    return (
        <div id="Services" className=' pt-6 mt-10  flex flex-col items-center justify-center w-full'>
            <h3 className=" pb-6  text-4xl  sm:text-5xl text-center mb-3  font-bold   bg-clip-text text-transparent bg-gradient-to-b from-neutral-500 to-neutral-700">
                What I Provide
            </h3>
            <div className="  grid grid-cols-1 min-[500px]:grid-cols-2  gap-10">
                <div className="flex flex-col items-center justify-center p-3 min-[500px]:p-8  mb-3 min-[500px]:mb-0   col-span-1">
                    <div className="mb-5">
                        <Image src={fast} width={150} height={150} className=" w-[150px] h-auto" alt="service" />
                    </div>
                    <div className="font-bold text-center  text-[28px]   bg-clip-text text-transparent bg-gradient-to-b from-neutral-500 to-neutral-700">
                        Quick Load Website
                    </div>
                    <p className="mt-6 text-center text-base font-medium  text-gray-600 dark:text-gray-400">
                        Ensuring swift website loading times, seamless interaction without lag, and delivering an optimal user experience are my top priorities.
                    </p>
                </div>
                <div className="flex flex-col items-center justify-center p-3 min-[500px]:p-8  mb-3 min-[500px]:mb-0   col-span-1">
                    <div className="mb-5">
                        <Image src={responsive} width={150} height={150} className=" w-[150px] h-auto" alt="service" />
                    </div>
                    <div className="font-bold text-center  text-[28px]   bg-clip-text text-transparent bg-gradient-to-b from-neutral-500 to-neutral-700">
                        Cross-Device Compatible
                    </div>
                    <p className="mt-6 text-center text-base font-medium  text-gray-600 dark:text-gray-400">
                        Websites are designed to be compatible with a variety of resolutions, including those of desktops, tablets, and mobile  devices,
                        ensuring a seamless user experience across different platforms.
                    </p>
                </div>
                <div className="flex flex-col items-center justify-center p-3 min-[500px]:p-8  mb-3 min-[500px]:mb-0   col-span-1">
                    <div className="mb-5">
                        <Image src={design} width={150} height={150} className=" w-[150px] h-auto" alt="service" />
                    </div>
                    <div className="font-bold text-center  text-[28px]   bg-clip-text text-transparent bg-gradient-to-b from-neutral-500 to-neutral-700">
                        Web Design&apos;s
                    </div>
                    <p className="mt-6 text-center text-base font-medium  text-gray-600 dark:text-gray-400">
                        Specialize in creating customized, interactive, and visually  appealing designs to meet your preferences and needs.
                    </p>
                </div>
                <div className="flex flex-col items-center justify-center p-3 min-[500px]:p-8  mb-3 min-[500px]:mb-0   col-span-1">
                    <div className="mb-5">
                        <Image src={seo} width={150} height={150} className=" w-[150px] h-auto" alt="service" />
                    </div>
                    <div className="font-bold text-center  text-[28px]   bg-clip-text text-transparent bg-gradient-to-b from-neutral-500 to-neutral-700">
                        Search Engine Optimization
                    </div>
                    <p className="mt-6 text-center text-base font-medium  text-gray-600 dark:text-gray-400">
                        Proficient in delivering websites that are highly optimized for search engines, ensuring optimal visibility and performance.
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Services