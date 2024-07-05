"use client"
import React from 'react'
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
        href: "#Home"
    },
    {
        id: 2,
        pathName: "About",
        href: "#About"
    },
    {
        id: 3,
        pathName: "Services",
        href: "#Services",
    },
    {
        id: 4,
        pathName: "Skills",
        href: "#Skills"
    },
    {
        id: 5,
        pathName: "Projects",
        href: "#Projects"
    },
    {
        id: 6,
        pathName: "Contact",
        href: "#Contact",
    },
]
const Navbar = () => {
    const { status } = useSession();
    const pathName = usePathname();
    const { userData, loader } = useAbout();
    return !pathName.startsWith("/admin") && (
        <>
            <header className="flex h-14 items-center gap-4 border-b  px-4 lg:h-[60px] lg:px-6">

                {/* Navbar for Big Screen */}
                <div className="w-full flex-1">
                    <div className=" hidden lg:flex h-16 items-center gap-4  justify-between  ">
                        <nav >
                            <ul className="hidden flex-col gap-6 text-lg font-medium lg:flex lg:flex-row lg:items-center  lg:text-sm lg:gap-5">
                                {
                                    navMenu?.map((navItem: any) => (
                                        <Link
                                            key={navItem?.id}
                                            href={`${navItem?.href}`}
                                            className="text-gray-700 dark:text-gray-300 text-base font-medium"
                                            aria-label='Path Names'
                                        >
                                            {navItem?.pathName}
                                        </Link>
                                    ))
                                }
                            </ul>
                        </nav>
                        <Button className=" hidden lg:flex  ">
                            <Link href={`${userData?.resume}`} aria-label="CV Link" className=' flex items-center gap-3'><FolderDown size={22} /> Download CV</Link>
                        </Button>
                    </div>
                </div>

                <div className=" w-full flex lg:hidden justify-between items-center gap-2 ">
                    <MobileSidebar />
                    <div className=' flex gap-4'>

                        <div className=' flex lg:hidden'>
                            <ThemeToggle />
                        </div>
                        <Link href={`${userData?.resume}`} aria-label='Resume Link ' className='  hidden md:flex lg:hidden w-fit text-base font-medium  items-center gap-3 '>
                            <Button className=' flex items-center gap-2 justify-center'>
                                <FolderDown size={20} />Download CV
                            </Button>
                        </Link>
                        {/* <Button className="flex lg:hidden">
                            <Link href={"#"} aria-label="CV Link" > Download CV</Link>
                        </Button> */}
                        {/* Navbar for Small Devices */}

                        <Drawer direction='right'>
                            <DrawerTrigger>
                                <AlignRight size={24} />
                                <span className="sr-only">Toggle nav menu</span>
                            </DrawerTrigger>
                            <DrawerContent className=' h-[100vh] w-[300px] dark:bg-gradient-to-t dark:from-neutral-900 dark:to-stone-950 bg-gradient-to-t from-white to-slate-50'>
                                <DrawerHeader>
                                    <DrawerTitle className=' -mt-5 mb-8 flex w-full justify-between items-center'>
                                        <Image src={logo} alt="Logo" className=" w-[30px] h-[30px] rounded-md " />
                                        <DrawerClose className=' flex items-center gap-2' >
                                            <RxCross2 className=' h-5 w-5' />
                                        </DrawerClose>
                                    </DrawerTitle>
                                    <DrawerDescription>
                                        <nav >
                                            <ul className=" flex lg:hidden flex-col gap-4 items-start justify-start  ml-1">
                                                <Link href={`#Home`}
                                                    className="text-gray-700 dark:text-gray-300 text-base font-medium"
                                                    aria-label='Home'
                                                >
                                                    <DrawerClose className=' flex items-center gap-3' >
                                                        <House size={22} />  Home
                                                    </DrawerClose>
                                                </Link>
                                                <Link href={`#About`}
                                                    className="text-gray-700 dark:text-gray-300 text-base font-medium"
                                                    aria-label='About'
                                                >
                                                    <DrawerClose className=' flex items-center gap-3' >
                                                        <Info size={22} /> About
                                                    </DrawerClose>
                                                </Link>
                                                <Link href={`#Services`}
                                                    className="text-gray-700 dark:text-gray-300 text-base font-medium"
                                                    aria-label='#Services'
                                                >
                                                    <DrawerClose className=' flex items-center gap-3' >
                                                        <HandHelping size={22} />  Services
                                                    </DrawerClose>
                                                </Link>
                                                <Link href={`#Skills`}
                                                    className="text-gray-700 dark:text-gray-300 text-base font-medium"
                                                    aria-label='Skills'
                                                >
                                                    <DrawerClose className=' flex items-center gap-3' >
                                                        <MessageSquareCode size={22} /> Skills
                                                    </DrawerClose>
                                                </Link>
                                                <Link href={`#Projects`}
                                                    className="text-gray-700 dark:text-gray-300 text-base font-medium"
                                                    aria-label='Projects'
                                                >
                                                    <DrawerClose className=' flex items-center gap-3' >
                                                        <FolderKanban size={22} /> Projects
                                                    </DrawerClose>
                                                </Link>
                                                <Link href={`#Contact`}
                                                    className="text-gray-700 dark:text-gray-300 text-base font-medium"
                                                    aria-label='Contact'
                                                >
                                                    <DrawerClose className=' flex items-center gap-3' >
                                                        <CircleUserRound size={22} />  Contact
                                                    </DrawerClose>
                                                </Link>
                                            </ul>
                                        </nav>
                                    </DrawerDescription>
                                </DrawerHeader>
                                <DrawerFooter>
                                    <DrawerClose >
                                        <Link href={`${userData?.resume}`} aria-label='Resume Link  ' className='w-full text-base font-medium flex items-center gap-3 '>
                                            <Button className=' flex items-center gap-2 justify-center w-full'>
                                                <FolderDown size={20} />Download CV
                                            </Button>
                                        </Link> </DrawerClose>
                                </DrawerFooter>
                            </DrawerContent>
                        </Drawer>


                    </div>
                </div>

            </header>
        </>
    )
}

export default Navbar