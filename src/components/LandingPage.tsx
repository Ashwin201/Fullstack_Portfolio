import Link from "next/link"
import {
    CircleUser,
} from "lucide-react"
import logo from "../../public/images/logo.webp"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "./ThemeToggle"
import Sidebar from "./SidebarContent"
import Navbar from "./Navbar"
import Image from "next/image"
import HomePage from "./HomePage"
import WorkCounters from "./WorkCounters"
import Footer from "./Footer"
import { ScrollToTop } from "./ScrollToTop"

function LandingPage() {
    return (

        <div className="flex flex-col px-3">
            <Navbar />

            <main className=" h-fit flex flex-1 flex-col gap-4  lg:gap-6 lg:p-6 overflow-auto">
                <HomePage />
                <Footer />
            </main>
            <ScrollToTop />
        </div>
    )
}
export default LandingPage