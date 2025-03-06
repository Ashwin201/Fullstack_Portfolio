"use client"

import { ChevronRight, type LucideIcon } from "lucide-react"

import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
    useSidebar,
} from "@/components/ui/sidebar"

export function NavMain({
    items,
}: {
    items: {
        title: string
        url: string
        icon?: any
        isActive?: boolean
        items?: {
            title: string
            url: string
        }[]
    }[]
}) {

    const { open, setOpenMobile } = useSidebar()
    return (
        <SidebarGroup>
            <SidebarGroupLabel className=" text-sm mb-2 font-medium dark:text-gray-300 text-gray-700 "> Links</SidebarGroupLabel>
            <SidebarMenu className={`" flex flex-col gap-2 ${!open && "-ml-3"}`}>
                {items.map((item) => (
                    <Collapsible
                        key={item.title}
                        asChild
                        defaultOpen={item.isActive}
                        className="group/collapsible"
                    >
                        <SidebarMenuItem>
                            <CollapsibleTrigger asChild>
                                <SidebarMenuButton tooltip={item.title}>
                                    <a href={item.url} onClick={() => setOpenMobile(false)} className={`${open && "py-1 px-2"} flex gap-2 text-[14.5px] font-medium dark:text-gray-100 text-gray-900  items-center`}>
                                        {item.icon && item.icon}
                                        <span>{item.title}</span>
                                    </a>
                                    {/* <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" /> */}
                                </SidebarMenuButton>
                            </CollapsibleTrigger>

                        </SidebarMenuItem>
                    </Collapsible>
                ))}
            </SidebarMenu>
        </SidebarGroup>
    )
}
