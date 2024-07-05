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

  if (status === "loading") {
    return <Loader />
  }

  if (status === "unauthenticated" && pathname.trim().startsWith("/admin")) {
    router.push("/login");
  }

  return <div className="overflow-x-hidden flex flex-col w-full px-5 sm:px-10 md:px-20  lg:px-32" >
    <AdminNavbar />
    <div className=" flex w-full  min-h-[calc(100vh-56px)] justify-center items-center">
      {children}
    </div>
  </div>;
};

export default AdminLayout;
