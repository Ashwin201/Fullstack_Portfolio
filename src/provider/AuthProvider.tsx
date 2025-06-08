"use client";
import { SessionProvider } from "next-auth/react";
import React, { ReactNode, useEffect, useState } from "react";
import { Session } from "next-auth";
import DesktopSidebar from "@/components/DesktopSidebar";
import { usePathname } from "next/navigation";
import { AboutProvider } from "@/context/AboutProvider";
import Loader from "@/components/Loader";
import { ScrollToTop } from "@/components/ScrollToTop";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/ui/app-sidebar";
import { ExperienceProvider } from "@/context/ExperienceProvider";

interface AuthProviderProps {
  children: ReactNode;
  session?: Session | null;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children, session }) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])
  const pathName = usePathname()
  return loading ? <Loader /> : <SessionProvider session={session}>

    <AboutProvider>
      <ExperienceProvider>
        <AppSidebar />
        <SidebarInset className=" h-screen">

          <div className={` overflow-y-scroll h-full scroll-class flex-col dark:bg-gradient-to-t dark:from-zinc-900 dark:to-gray-950  bg-gradient-to-t from-white to-zinc-50
         dark:text-gray-300 `}>
            {children}
            <ScrollToTop />

          </div>
        </SidebarInset>
      </ExperienceProvider>
    </AboutProvider>

  </SessionProvider >;
};

export default AuthProvider;