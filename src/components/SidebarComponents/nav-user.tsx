"use client"

import {
    BadgeCheck,
    Bell,
    ChevronsUpDown,
    CircleUser,
    CreditCard,
    FolderDown,
    LogIn,
    LogOut,
    Sparkles,
} from "lucide-react"

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar,
} from "@/components/ui/sidebar"
import { useAbout } from "@/context/AboutProvider"

export function NavUser({
    user,
}: {
    user: {
        name: string
        email: string
        avatar: string
    }
}) {
    const { isMobile } = useSidebar()
    const { loader, userData } = useAbout()
    return (
        <SidebarMenu>
            <SidebarMenuItem>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <SidebarMenuButton
                            size="lg"
                            className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                        >
                            {user?.avatar?.length === 0 ? (
                                <div className=" w-8 h-8 bg-gray-900 text-gray-50 dark:text-gray-900 font-semibold text-base flex 
                                 justify-center items-center dark:bg-gray-50 rounded-lg border-2 border-gray-400 dark:border-gray-900">
                                    A
                                </div>
                            ) : (
                                <Avatar className="h-8 w-8 rounded-lg">
                                    <AvatarImage src={user.avatar} alt={user.name} className="object-cover" />
                                    <AvatarFallback className="rounded-lg">AS</AvatarFallback>
                                </Avatar>)}
                            <div className="grid flex-1 text-left text-sm leading-tight">
                                <span className="truncate font-semibold text-gray-800 dark:text-gray-100">{user.name}</span>
                                <span className="truncate text-xs">{user.email}</span>
                            </div>
                            <ChevronsUpDown className="ml-auto size-4" />
                        </SidebarMenuButton>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                        className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg dark:bg-gradient-to-t dark:from-zinc-900 dark:to-gray-950  bg-gradient-to-t from-white to-zinc-50"
                        side={isMobile ? "bottom" : "right"}
                        align="end"
                        sideOffset={4}
                    >
                        <DropdownMenuLabel className="p-0 font-normal">
                            <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                                <Avatar className="h-8 w-8 rounded-lg">
                                    <AvatarImage src={user.avatar} alt={user.name} className=" object-cover" />
                                    <AvatarFallback className="rounded-lg">AS</AvatarFallback>
                                </Avatar>
                                <div className="grid flex-1 text-left text-sm leading-tight">
                                    <span className="truncate font-semibold">{user.name}</span>
                                    <span className="truncate text-xs">{user.email}</span>
                                </div>
                            </div>
                        </DropdownMenuLabel>

                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                            <DropdownMenuItem>
                                <a href="mailto:ashminsharma203@gmail.com" className="  text-sm font-medium text-gray-600 dark:text-gray-100 px-2 py-1 flex gap-2">
                                    <CircleUser size={22} />
                                    Get In Touch
                                </a>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <a href={`${userData?.resume}`} className="  text-sm font-medium text-gray-600 dark:text-gray-100 px-2 py-1 flex gap-2">
                                    <FolderDown size={22} />
                                    Download CV
                                </a>
                            </DropdownMenuItem>

                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <a href="/login" className="  text-sm font-medium text-gray-600 dark:text-gray-100 px-2 py-1 flex gap-2">
                                <LogIn size={20} />
                                Login as Admin
                            </a>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </SidebarMenuItem>
        </SidebarMenu>
    )
}
