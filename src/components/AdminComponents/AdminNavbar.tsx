"use client";
import Image from "next/image";

import { BsInfoCircleFill, BsFillFileEarmarkTextFill } from "react-icons/bs";
import {
  BiLogIn,
  BiLogOut,
  BiMenuAltRight,
  BiSolidBriefcase,
} from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { AiFillHome } from "react-icons/ai";
import Link from "next/link";
import logo from "../../../public/images/logo.webp";

import { usePathname, useRouter } from "next/navigation";

import { useState } from "react";

import { signOut, useSession } from "next-auth/react";
import { MdEmail } from "react-icons/md";

//Navigation data
const navigation = [
  {
    id: 1,
    title: "About",
    href: "/admin/edit-about-details",
    icon: <BsInfoCircleFill size={21} />,
  },

  {
    id: 2,
    title: "Experience",
    href: "/admin/edit-experience",
    icon: <BiSolidBriefcase size={21} />,
  },
  {
    id: 3,
    title: "Projects",
    href: "/admin/edit-projects",
    icon: <BsFillFileEarmarkTextFill size={21} />,
  },
  {
    id: 4,
    title: "Emails",
    href: "/admin/emails",
    icon: <MdEmail size={21} />,
  },
];
const AdminNavbar = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const pathname = usePathname();
  const [menuopen, setMenuOpen] = useState(false);

  return (
    <div className="  flex items-center justify-between h-14 w-full  px-4 sm:px-8  ">
      <Link href="/" aria-label="Home">
        <Image src={logo} alt="logo" width={32} height={32} />
      </Link>
      <ul className=" hidden sm:flex items-center gap-8 ">
        {navigation.map((item) => (
          <li key={item.id}>
            <Link
              aria-label={item.title}
              href={item.href}
              className={` relative font-medium text-gray-900 hover:text-gray-950 hover:font-semibold dark:text-gray-50 dark:hover:text-gray-300  transition-all duration-300 ${item.href === pathname && " font-semibold text-[17px]"
                } `}
            >
              {item.title}
              <span
                className={`absolute inline-block left-0 -bottom-1  h-[1.8px] w-full  transition-all duration-500 ease-in-out 
                ${item.href === pathname && " bg-black dark:bg-white "}`}
              ></span>
            </Link>
          </li>
        ))}
      </ul>

      <div className=" flex items-center gap-2">
        <span
          onClick={() => signOut()}
          className=" cursor-pointer flex items-center gap-2 py-[6px] px-3 rounded-md bg-black dark:bg-white text-white dark:text-black  border-solid border-2 border-black
         dark:border-white  hover:shadow-lg transition-all duration-300 ease-in-out  text-sm font-semibold"
        >
          <BiLogOut size={20} />
          Log out
        </span>

        <div className="relative flex sm:hidden  ">
          <button
            className=" "
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <BiMenuAltRight size={34} />
          </button>

          <div
            className={` absolute top-16 right-0 ${menuopen ? " flex " : " hidden  "
              }`}
          >
            <ul className=" flex flex-col gap-4 items-start  p-6 rounded-md shadow-sm shadow-gray-400 dark:shadow-gray-900 dark:bg-black bg-slate-50 z-10 ">
              <div className="  border-b-2 border-gray-500 pb-3">
                <span
                  onClick={() => setMenuOpen(false)}
                  className="  text-base font-semibold"
                >
                  {session?.user?.name}
                </span>
                <p
                  onClick={() => setMenuOpen(false)}
                  className=" text-sm font-medium text-gray-600 dark:text-gray-300"
                >
                  {session?.user?.email}
                </p>
              </div>
              {navigation.map((item) => (
                <li key={item.id}>
                  <Link
                    aria-label={item.title}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={` flex items-center gap-2 relative font-medium text-gray-900 hover:text-gray-950 hover:font-semibold dark:text-gray-50 dark:hover:text-gray-300
                      transition-all duration-300 `}
                  >
                    <span>{item.icon}</span> {item.title}
                    <span
                      className={`absolute inline-block left-0 -bottom-1  h-[1.8px] w-full  transition-all duration-500 ease-in-out`}
                    ></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminNavbar;
