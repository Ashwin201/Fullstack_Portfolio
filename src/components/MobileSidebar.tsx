import Link from "next/link"
import logo from "../../public/images/logo.webp"
import Sidebar from "./SidebarContent"
import Image from "next/image"
import { RxCross2 } from "react-icons/rx";
import profilePic from "../../public/images/profile.jpg"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "./ui/button"
import { useAbout } from "@/context/AboutProvider";

const MobileSidebar = () => {
    const { userData, loader } = useAbout();

    return (
        <>
            <div className=" flex items-center gap-3 lg:hidden -ml-4 ">
                <Link href="/" className="flex items-center gap-2 ">
                    <Image src={logo} alt="Logo" className=" w-[32px] h-[32px] rounded-md " />
                </Link>
                <Drawer>
                    <DrawerTrigger>
                        {loader ? (
                            <Image src={profilePic} width={35} height={35} alt="Profile Picture" className="  w-[32px] h-[32px] rounded-full border-2 border-gray-400 dark:border-gray-900" />
                        ) : (
                            <Image src={`${userData?.profile}`} width={35} height={35} alt="Profile Picture" className="  w-[32px] h-[32px] rounded-full border-2 border-gray-400 dark:border-gray-900" />
                        )}
                    </DrawerTrigger>
                    <DrawerContent className="dark:bg-gradient-to-t dark:from-neutral-900 dark:to-stone-950 bg-gradient-to-t from-white to-slate-50">
                        <DrawerHeader>
                            <DrawerTitle className=" sr-only">Are you absolutely sure?</DrawerTitle>
                            <DrawerDescription><div className="flex flex-col dark:bg-gradient-to-t dark:from-neutral-900 dark:to-stone-950 bg-gradient-to-t from-white to-slate-50">
                                <DrawerClose className=" flex w-full justify-end">
                                    <RxCross2 size={22} />
                                </DrawerClose>
                                <div className=" flex flex-1 justify-center w-full h-full items-center mb-6">
                                    <Sidebar />
                                </div>
                            </div></DrawerDescription>
                        </DrawerHeader>
                        {/* <DrawerFooter>
                                <Button>Submit</Button>
                                
                                    <Button variant="outline">Cancel</Button>
                                </DrawerClose>
                            </DrawerFooter> */}
                    </DrawerContent>
                </Drawer>

            </div>


        </>
    )
}

export default MobileSidebar