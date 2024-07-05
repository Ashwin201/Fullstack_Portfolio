import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import logo from "../../public/images/logo.webp"
import { navMenu } from './Navbar'
const Footer = () => {
    return (
        <>
            <footer className='pt-8 mt-14 flex flex-col items-center justify-center w-full  border-t'>
                <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10  w-full ">
                    <div className=" col-span-1 flex flex-col items-start justify-start gap-3">
                        <Link href="/" className="flex items-start gap-2 ">
                            <Image src={logo} alt="Logo" className=" w-[30px] h-[30px] rounded-md " />
                        </Link>
                        <p className="  text-base font-medium text-gray-600 dark:text-gray-400 text-start w-full  ">
                            As a full-stack developer, I specialize in transforming creative
                            ideas into innovative web applications. With a touch of pixel magic,
                            I craft visually stunning and responsive websites.
                        </p>
                    </div>
                    <div className=" col-span-1 flex flex-col items-start sm:items-end lg:items-center justify-start">
                        <h4 className="text-xl font-bold mb-4  bg-clip-text text-transparent bg-gradient-to-b from-neutral-500 to-neutral-700">Connect with me</h4>
                        <div className="flex items-center space-x-4">
                            <Link
                                href="https://instagram.com/ashwin.203?igshid=YmMyMTA2M2Y="
                                aria-label="Insta"
                                target="_blank"
                            >
                                <FaInstagram size={23} />
                            </Link>
                            <Link
                                href="https://github.com/Ashwin201"
                                aria-label="Github"
                                target="_blank"
                            >
                                <FaGithub size={23} />
                            </Link>
                            <Link
                                href="https://www.linkedin.com/in/ashmin-sharma-6a4867257"
                                aria-label="Linkedin"
                                target="_blank"
                            >
                                <FaLinkedin size={23} />
                            </Link>
                        </div>
                    </div>
                    <div className=" col-span-1 flex flex-col text-start lg:items-center justify-center">
                        <h4 className="text-xl font-bold mb-4  bg-clip-text text-transparent bg-gradient-to-b from-neutral-500 to-neutral-700">Quick Links</h4>
                        <div className="flex flex-col space-y-2">
                            {
                                navMenu?.map((navItem) => (
                                    <Link
                                        key={navItem?.id}
                                        href={`${navItem?.href}`}
                                        className="text-muted-foreground transition-colors hover:text-foreground text-base font-medium lg:text-center"
                                        aria-label='Path Names'
                                    >
                                        {navItem?.pathName}
                                    </Link>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </footer>
            <div className=" mt-8 mx-auto text-base font-medium text-gray-600 dark:text-gray-400">&copy; 2024 Ashmin Sharma. All rights reserved.</div>
        </>
    )
}

export default Footer