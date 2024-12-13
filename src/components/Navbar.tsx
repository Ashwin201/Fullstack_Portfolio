"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { Button } from './ui/button'
import { ThemeToggle } from './ThemeToggle'
import logo from "../../public/images/logo.webp"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer2"
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetClose, SheetFooter } from '@/components/ui/sheet';
import { MdMenu } from 'react-icons/md'
import MobileSidebar from './MobileSidebar'
import Image from 'next/image'
import { RxCross2 } from 'react-icons/rx'
import { AlignRight, CircleUserRound, FolderDown, FolderKanban, HandHelping, HomeIcon, House, Info, MessageSquareCode } from 'lucide-react'
import { useSession } from 'next-auth/react'
import { usePathname } from 'next/navigation'
import AdminNavbar from './AdminComponents/AdminNavbar'
import { useAbout } from '@/context/AboutProvider'

export const navMenu = [
    {
        id: 1,
        pathName: "Home",
        href: "Home"
    },
    {
        id: 2,
        pathName: "About",
        href: "About"
    },
    {
        id: 3,
        pathName: "Services",
        href: "Services",
    },
    {
        id: 4,
        pathName: "Skills",
        href: "Skills"
    },
    {
        id: 5,
        pathName: "Projects",
        href: "Projects"
    },
    {
        id: 6,
        pathName: "Contact",
        href: "Contact",
    },
]
const Navbar = () => {
    const { status } = useSession();
    const pathName = usePathname();
    const { userData, loader } = useAbout();

    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };
    return !pathName.startsWith("/admin") && (
        <>
            <header className="flex h-14 items-center gap-4 border-b   lg:h-[60px] lg:px-6">

                {/* Navbar for Big Screen */}
                <div className="w-full flex-1">
                    <div className=" hidden lg:flex h-16 items-center gap-4  justify-between  ">
                        <nav >
                            <ul className="hidden flex-col gap-6 text-lg font-medium lg:flex lg:flex-row lg:items-center  lg:text-sm lg:gap-5 xl:gap-7">
                                {
                                    navMenu?.map((navItem: any) => (
                                        <Link
                                            key={navItem?.id}
                                            href={`#${navItem?.href}`}
                                            className="text-gray-700 dark:text-gray-300 text-base font-medium flex gap-1.5 items-center"
                                            aria-label='Path Names'
                                        >
                                            {/* {navItem?.pathName === "Home" && <House size={18} /> ||
                                                navItem?.pathName === "About" && <Info size={18} /> ||
                                                navItem?.pathName === "Services" && <HandHelping size={20} /> ||
                                                navItem?.pathName === "Skills" && <MessageSquareCode size={18} /> ||
                                                navItem?.pathName === "Projects" && <FolderKanban size={18} /> ||
                                                navItem?.pathName === "Contact" && <CircleUserRound size={19} />} */}
                                            {navItem?.pathName}
                                        </Link>
                                    ))
                                }
                            </ul>
                        </nav>
                        <Button className=" hidden lg:flex  ">
                            <Link href={`${userData?.resume}`} aria-label="CV" className=' flex items-center gap-3'><FolderDown size={22} /> Download CV</Link>
                        </Button>
                    </div>
                </div>

                <div className=" w-full flex lg:hidden justify-between items-center gap-2 ">
                    <MobileSidebar />
                    <div className=' flex gap-4'>

                        <div className=' flex lg:hidden'>
                            <ThemeToggle />
                        </div>
                        <a href={`${userData?.resume}`} aria-label='Resume a ' className='  hidden md:flex lg:hidden w-fit text-base font-medium  items-center gap-3 '>
                            <Button className=' flex items-center gap-2 justify-center'>
                                <FolderDown size={20} />Download CV
                            </Button>
                        </a>
                        {/* <Button className="flex lg:hidden">
                            <a href={"#"} aria-label="CV a" > Download CV</a>
                        </Button> */}
                        {/* Navbar for Small Devices */}

                        <div>
                            <button onClick={toggleNavbar} className="md:hidden pt-1.5">
                                <AlignRight size={27} />
                                <span className="sr-only">Toggle nav menu</span>
                            </button>

                            {isOpen && (
                                <div className="fixed inset-0 z-50 bg-black bg-opacity-50 md:hidden" onClick={toggleNavbar}></div>
                            )}

                            <div className={`fixed top-0 right-0 z-50 h-full w-[300px] transform transition-transform duration-300 ease-in-out flex flex-col justify-between ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden dark:bg-gradient-to-t dark:from-neutral-900 dark:to-stone-950 bg-gradient-to-t from-white to-slate-50`}>
                                <div>
                                    <div className="flex justify-between items-center p-4">
                                        <Link href={"#Home"} aria-label='Home Link' onClick={toggleNavbar}>
                                            <Image src={logo} alt="Logo" className="w-[30px] h-[30px] rounded-md" />
                                        </Link>
                                        <button onClick={toggleNavbar} className="flex items-center gap-2">
                                            <RxCross2 className="h-5 w-5" />
                                        </button>
                                    </div>
                                    <nav >
                                        <ul className="flex flex-col gap-4 items-start justify-start p-4 mt-1">
                                            <Link href={`#Home`} className="text-gray-700 dark:text-gray-300 text-base font-medium flex items-center gap-3" onClick={toggleNavbar} aria-label='Home'>
                                                <House size={22} /> Home
                                            </Link>
                                            <Link href={`#About`} className="text-gray-700 dark:text-gray-300 text-base font-medium flex items-center gap-3" onClick={toggleNavbar} aria-label='About'>
                                                <Info size={22} /> About
                                            </Link>
                                            <Link href={`#Services`} className="text-gray-700 dark:text-gray-300 text-base font-medium  flex items-center gap-3" onClick={toggleNavbar} aria-label='#Services'>
                                                <HandHelping size={22} /> Services
                                            </Link>
                                            <Link href={`#Skills`} className="text-gray-700 dark:text-gray-300 text-base font-medium flex items-center gap-3" onClick={toggleNavbar} aria-label='Skills'>
                                                <MessageSquareCode size={22} /> Skills
                                            </Link>
                                            <Link href={`#Projects`} className="text-gray-700 dark:text-gray-300 text-base font-medium flex items-center gap-3" onClick={toggleNavbar} aria-label='Projects'>
                                                <FolderKanban size={22} /> Projects
                                            </Link>
                                            <Link href={`#Contact`} className="text-gray-700 dark:text-gray-300 text-base font-medium flex items-center gap-3" onClick={toggleNavbar} aria-label='Contact'>
                                                <CircleUserRound size={22} /> Contact
                                            </Link>
                                        </ul>
                                    </nav>


                                </div>
                                <div className=' p-4'>
                                    <Link onClick={toggleNavbar} href={`${userData?.resume}`} aria-label='Resume Link' className='w-full text-base font-medium flex items-center gap-3 '>
                                        <Button className="flex items-center gap-2 justify-center w-full">
                                            <FolderDown size={20} /> Download CV
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </header>
        </>
    )
}

export default Navbar