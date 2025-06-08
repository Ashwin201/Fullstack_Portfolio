"use client"

import * as React from "react"
import {
    AudioWaveform,
    BookOpen,
    Bot,
    CircleUserRound,
    Command,
    FolderKanban,
    Frame,
    GalleryVerticalEnd,
    HandHelping,
    House,
    Info,
    Map,
    MessageSquareCode,
    PieChart,
    Settings2,
    SquareTerminal,
} from "lucide-react"

import { NavProjects } from "@/components/SidebarComponents/nav-projects"
import { NavUser } from "@/components/SidebarComponents/nav-user"
import { NavMain } from "@/components/SidebarComponents/nav-main"

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarRail,
    useSidebar,
} from "@/components/ui/sidebar"
import { usePathname } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ThemeToggle } from "../ThemeToggle"
import logo from "../../../public/images/logo.webp"
import { useAbout } from "@/context/AboutProvider"
// This is sample data.

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const { userData } = useAbout()
    const data = {
        user: {
            name: "Ashmin Sharma",
            email: "ashminsharma203@gmail.com",
            avatar: `${userData?.profile}`,
        },

        navMain: [
            {
                title: "Home",
                url: "/#home",
                icon: <House size={18} />,

            },
            {
                title: "About",
                url: "/#about",
                icon: <Info size={18} />,

            },
            {
                title: "Services",
                url: "#services",
                icon: <HandHelping size={20} />,

            },
            {
                title: "Skills",
                url: "/#skills",
                icon: <MessageSquareCode size={18} />,

            },
            {
                title: "Projects",
                url: "/#projects",
                icon: <FolderKanban size={18} />,

            },
            {
                title: "Contact",
                url: "/#contact",
                icon: <CircleUserRound size={19} />,

            },
        ],
        projects: [
            {
                name: "Design Engineering",
                url: "#",
                icon: Frame,
            },
            {
                name: "Sales & Marketing",
                url: "#",
                icon: PieChart,
            },
            {
                name: "Travel",
                url: "#",
                icon: Map,
            },
        ],
    }
    const { open } = useSidebar()
    const pathName = usePathname()
    return (
        <Sidebar collapsible='icon' {...props} className={` w-[270px] border-r h-screen overflow-hidden flex flex-col justify-between `}>
            <SidebarHeader className="">
                <div className="flex  items-center pt-1   sm:px-0  justify-between w-full">
                    <Link href="/" className="flex items-center gap-2 ">
                        <Image src={logo} alt="Logo" className=" w-8 h-auto rounded-md " />
                    </Link>
                    {open &&
                        <div className="pr-3 pt-2 ">
                            <ThemeToggle />
                        </div>
                    }
                </div>
                <NavMain items={data.navMain} />
            </SidebarHeader>

            <SidebarContent>
                <NavProjects projects={data.projects} />
            </SidebarContent>
            <SidebarFooter className=" mb-1">
                <NavUser user={data.user} />
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    )
}
