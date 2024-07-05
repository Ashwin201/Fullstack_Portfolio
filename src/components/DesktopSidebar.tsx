"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ThemeToggle } from './ThemeToggle'
import SidebarContent from './SidebarContent'
import logo from "../../public/images/logo.webp"
import { usePathname } from 'next/navigation'

const DesktopSidebar = () => {
    const pathName = usePathname()
    return pathName.startsWith("/admin") ? ("") : (
        <div className="hidden border-r shadow-xl shadow-gray-300 dark:shadow-gray-900  lg:block px-3 ">
            <div className="flex  h-screen   col-span-3 overflow-hidden  flex-col gap-2  ">
                <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6 justify-between w-full">
                    <Link href="/" className="flex items-center gap-2 ">
                        <Image src={logo} alt="Logo" className=" w-[30px] h-[30px] rounded-md " />
                    </Link>
                    <ThemeToggle />
                </div>
                <div className=" flex flex-1 justify-center  w-full h-[calc(l00vh-56px)] items-center my-auto">
                    <SidebarContent />
                </div>
            </div>
        </div>
    )
}

export default DesktopSidebar