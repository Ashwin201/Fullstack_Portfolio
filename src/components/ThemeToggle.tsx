"use client"

import * as React from "react"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ThemeToggle() {
    const { theme, setTheme } = useTheme()

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button className=" cursor-pointer bg-inherit outline-none border-none">
                    {theme === "dark" ? (
                        <SunIcon className="h-[1.2rem] w-[1.2rem]  rotate-0  transition-all dark:-rotate-50 " />
                    ) : (
                        <MoonIcon className="h-[1.2rem] w-[1.2rem]    transition-all rotate-90 " />
                    )}
                    <span className="sr-only">Toggle theme</span>
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className=" mt-2 p-2 dark:bg-gradient-to-t dark:from-zinc-900 dark:to-gray-950  bg-gradient-to-t from-white to-zinc-50 ">
                <DropdownMenuItem onClick={() => setTheme("light")} className=" cursor-pointer text-base font-medium flex items-center gap-2">
                    <SunIcon className="h-[.9rem] w-[.9rem] rotate-0 scale-100 transition-all dark:-rotate-90 " /> Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")} className=" cursor-pointer text-base font-medium flex items-center gap-2">
                    <MoonIcon className=" h-[.9rem] w-[.9rem] rotate-90 transition-all dark:rotate-0 dark:scale-100" />     Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")} className=" cursor-pointer text-base font-medium flex items-center gap-2">
                    {
                        theme === "dark" ? <MoonIcon className=" h-[.9rem] w-[.9rem] rotate-90 transition-all dark:rotate-0 dark:scale-100" /> :
                            <SunIcon className="h-[.9rem] w-[.9rem] rotate-0 scale-100 transition-all dark:-rotate-90 " />
                    }  System
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
