import Image from "next/image"
import React from 'react'
import profilePic from "../../public/images/profile.jpg"
import Link from "next/link"
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { Button } from "./ui/button";
import { CircleUser, FolderDown } from "lucide-react";
import { useAbout } from "@/context/AboutProvider";
const SidebarContent = () => {
    const { userData, loader } = useAbout();
    // console.log(userData)

    return (
        <div className=' flex flex-col items-center justify-center gap-5'>
            {loader ? (

                <Image src={profilePic} alt="Profile" className=" -rotate-6 w-36 h-36 rounded-full border-4 border-gray-400 dark:border-gray-900" />
            ) : (
                <Image src={`${userData?.profile}`} alt="Profile" width={200} height={200} className=" -rotate-3 w-36 h-36 rounded-full border-4 border-gray-400 dark:border-gray-900" />
            )}
            <h3 className=" text-3xl font-bold text-center  bg-clip-text text-transparent bg-gradient-to-b from-neutral-500 to-neutral-700">Ashmin Sharma</h3>
            <p className=" flex items-center gap-2 text-base font-semibold text-gray-600 dark:text-gray-300 justify-center sm:justify-start">
                <span>
                    <IoLocationSharp size={22} />
                </span>{" "}
                Haryana, India
            </p>

            <p className="  text-base font-medium text-gray-600 dark:text-gray-400 text-center px-2 md:px-16  lg:px-2">
                As a full-stack developer, I specialize in transforming creative
                ideas into innovative web applications. With a touch of pixel magic,
                I craft visually stunning and responsive websites.
            </p>

            <nav className=" flex items-center justify-center sm:justify-start mt-1">
                <Link
                    href="https://instagram.com/ashwin.203?igshid=YmMyMTA2M2Y="
                    className="mr-3 text-gray-900 dark:text-gray-300"
                    aria-label="Insta"
                    target="_blank"
                >
                    <FaInstagram size={25} />
                </Link>
                <Link
                    href="https://github.com/Ashwin201"
                    className="mr-3 text-gray-900 dark:text-gray-300"
                    aria-label="Github"
                    target="_blank"
                >
                    <FaGithub size={25} />
                </Link>
                <Link
                    href="https://www.linkedin.com/in/ashmin-sharma-6a4867257"
                    className="mr-3 text-gray-900 dark:text-gray-300"
                    aria-label="Linkedin"
                    target="_blank"
                >
                    <FaLinkedin size={25} />
                </Link>
            </nav>

            <div className=" flex flex-col gap-3 mt-2 px-4 w-full">
                <Button variant={"secondary"}  >
                    <Link href={"#Contact"} aria-label="Get In Touch" className=" flex items-center gap-2 text-base font-medium" >
                        <CircleUser size={22} /> Get In Touch
                    </Link>
                </Button>
                <Button >
                    <Link href={`${userData?.resume}`} aria-label="Download CV" className=" flex items-center gap-3 text-base font-medium" >
                        <FolderDown size={22} />  Download CV
                    </Link>
                </Button>

            </div>
        </div>
    )
}

export default SidebarContent