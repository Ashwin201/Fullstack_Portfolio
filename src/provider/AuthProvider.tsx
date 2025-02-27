"use client";
import { SessionProvider } from "next-auth/react";
import React, { ReactNode, useEffect, useState } from "react";
import { Session } from "next-auth";
import DesktopSidebar from "@/components/DesktopSidebar";
import { usePathname } from "next/navigation";
import { AboutProvider } from "@/context/AboutProvider";
import Loader from "@/components/Loader";
import { ScrollToTop } from "@/components/ScrollToTop";

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
  const pathname = usePathname()
  return loading ? <Loader /> : <SessionProvider session={session}>

    <AboutProvider>
      <div className="grid grid-cols-9 h-screen">
        <div className={`lg:col-span-2 overflow-hidden hidden lg:block ${pathname.startsWith("/admin") && "hidden"} `}>
          <DesktopSidebar />
        </div>
        <div className={` relative px-0 sm:px-2 md:px-0 col-span-9 ${pathname.startsWith("/admin") ? "lg:col-span-9" : "lg:col-span-7"} overflow-y-auto  scroll-class `}>
          {children}
          <ScrollToTop />

        </div>
      </div>
    </AboutProvider>

  </SessionProvider>;
};

export default AuthProvider;