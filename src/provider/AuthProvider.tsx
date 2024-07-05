"use client";
import { SessionProvider } from "next-auth/react";
import React, { ReactNode } from "react";
import { Session } from "next-auth";
import DesktopSidebar from "@/components/DesktopSidebar";
import { ScrollToTop } from "@/components/ScrollToTop";
import { usePathname } from "next/navigation";
import { AboutProvider } from "@/context/AboutProvider";

interface AuthProviderProps {
  children: ReactNode;
  session?: Session | null;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children, session }) => {

  const pathname = usePathname()
  return <SessionProvider session={session}>

    <AboutProvider>
      <div className="grid grid-cols-12 h-screen">
        <div className={`lg:col-span-3 overflow-hidden hidden lg:block ${pathname.startsWith("/admin") && "hidden"} `}>
          <DesktopSidebar />
        </div>
        <div className={`col-span-12 ${pathname.startsWith("/admin") ? "lg:col-span-12" : "lg:col-span-9"}  overflow-auto `}>
          {children}
        </div>
      </div>
      <ScrollToTop />
    </AboutProvider>

  </SessionProvider>;
};

export default AuthProvider;