"use client";
import AdminNavbar from "@/components/AdminComponents/AdminNavbar";
import Loader from "@/components/Loader";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import React, { ReactNode } from "react";
interface AdminLayoutProps {
  children: ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();
  const { data: session, status } = useSession();

  if (status === 'loading') {
    <Loader />
  }

  if (status === "unauthenticated" && pathname.trim().startsWith("/admin")) {
    router.push("/login");
  }

  return status === 'authenticated' && <div className="overflow-x-hidden flex flex-col w-full  sm:px-10 md:px-20  lg:px-32" >
    <AdminNavbar />
    <div className=" flex w-full  min-h-[calc(100vh-56px)]  px-2 justify-center items-center">
      {children}
    </div>
  </div>;
};

export default AdminLayout;
