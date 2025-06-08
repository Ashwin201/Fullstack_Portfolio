"use client"

import {
    Building,
    Building2Icon,
    Folder,
    Forward,
    MoreHorizontal,
    Trash2,
    type LucideIcon,
} from "lucide-react"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuAction,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar,
} from "@/components/ui/sidebar"
import { useEffect, useState } from "react"
import { Skeleton } from "../ui/skeleton"
import { ScrollArea } from "../ui/scroll-area"
import { useExpeience } from "@/context/ExperienceProvider"

export function NavProjects({
    projects,
}: {
    projects: {
        name: string
        url: string
        icon: LucideIcon
    }[]
}) {
    const { open, isMobile } = useSidebar()
    const { loading, data } = useExpeience()
    console.log(data)
    return (
        <SidebarGroup className="group-data-[collapsible=icon]:hidden">
            <SidebarGroupLabel className=" text-sm  font-medium dark:text-gray-300 text-gray-700 "> Experience</SidebarGroupLabel>

            <SidebarMenu className={` flex flex-col pt-4 gap-6 ${open && "px-2"}`}>
                {
                    loading ?
                        <div className="flex flex-col pt-1 gap-6">

                            <div className=" flex gap-2 items-center">
                                <Skeleton className="cursor-pointer object-cover rounded-md w-8 h-8" />
                                <div className=" flex flex-col gap-2 ">
                                    <Skeleton className="cursor-pointer object-cover rounded-md w-[170px] h-4" />
                                    <Skeleton className="cursor-pointer object-cover rounded-md w-10 h-3" />
                                </div>
                            </div>
                            <div className=" flex gap-2 items-center">
                                <Skeleton className="cursor-pointer object-cover rounded-md w-8 h-8" />
                                <div className=" flex flex-col gap-2 ">
                                    <Skeleton className="cursor-pointer object-cover rounded-md w-[170px] h-4" />
                                    <Skeleton className="cursor-pointer object-cover rounded-md w-10 h-3" />
                                </div>
                            </div>
                            <div className=" flex gap-2 items-center">
                                <Skeleton className="cursor-pointer object-cover rounded-md w-8 h-8" />
                                <div className=" flex flex-col gap-2 ">
                                    <Skeleton className="cursor-pointer object-cover rounded-md w-[170px] h-4" />
                                    <Skeleton className="cursor-pointer object-cover rounded-md w-10 h-3" />
                                </div>
                            </div>
                            <div className=" flex gap-2 items-center">
                                <Skeleton className="cursor-pointer object-cover rounded-md w-8 h-8" />
                                <div className=" flex flex-col gap-2 ">
                                    <Skeleton className="cursor-pointer object-cover rounded-md w-[170px] h-4" />
                                    <Skeleton className="cursor-pointer object-cover rounded-md w-10 h-3" />
                                </div>
                            </div>

                        </div>
                        : data?.length > 0 ?
                            <div className=" flex flex-col gap-6">

                                {data.map((item: any, index: number) => (
                                    <div key={index} className=" flex gap-2 items-start">
                                        {
                                            item?.image ?
                                                <img
                                                    src={item?.image}
                                                    alt="Image"
                                                    width={25}
                                                    height={25}
                                                    className=" w-8 h-8   object-contain object-center"
                                                />
                                                :
                                                <Building2Icon className=" text-gray-900 dark:text-gray-100" size={25} />
                                        }
                                        <div className=" flex flex-col ">
                                            <span className=" text-sm font-medium text-gray-900 dark:text-gray-100">{item?.role}</span>
                                            <div className=" flex w-full gap-2 justify-between items-center">

                                                <span className=" text-xs font-medium text-gray-500 dark:text-gray-300">{item?.company}</span>
                                                {index === 0 &&
                                                    <span className=" text-[10px] font-medium mt-1 text-gray-50  bg-slate-400 py-0.5 px-2  rounded-full">Current</span>
                                                }
                                            </div>
                                        </div>
                                    </div>))}
                            </div>
                            : <p className=" text-gray-400 dark:text-gray-300 mt-2 font-medium text-sm">Experience not available</p>


                }
            </SidebarMenu>
        </SidebarGroup>
    )
}
