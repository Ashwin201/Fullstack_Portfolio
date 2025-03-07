"use client"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import logo from "../../public/images/logo.webp"
import { signIn, useSession } from "next-auth/react"
import { usePathname, useRouter } from "next/navigation"
import toast from "react-hot-toast"
import { BiLogIn } from "react-icons/bi"
import AnimateOnVisible from "./Animations"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { LockKeyhole, Mail } from "lucide-react"

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const router = useRouter()
    const { data: session } = useSession()
    const pathname = usePathname()
    const [loading, setLoading] = useState(false)
    if (session && pathname === "/login") {
        router.push("/admin")
        return null
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        try {
            if (!email || !password) {
                toast.error("Email and password are required.")
                setError("Email and password are required.")
                return
            }
            setLoading(true)
            const res: any = await signIn("credentials", {
                email,
                password,
                redirect: false,
            })
            if (res.ok) {
                toast.success("Welcome to admin page.")
            } else {
                toast.error("Email and password are not matched to admin credentials.")
                return
            }
        } catch (error) {
            console.log("Error during login : ", error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <section className=" min-h-[calc(100vh-60px)] min-w-full overflow-hidden w-full  flex items-center justify-center sm:m-auto">
            <div className="sm:w-fit w-full bg-transparent">
                <CardHeader className="space-y-2">
                    <div className="flex justify-center mb-4">
                        <Link href="/" aria-label="HomePage">
                            <Image src={logo || "/placeholder.svg"} className="h-12 w-auto rounded-md" alt="Logo" />
                        </Link>
                    </div>
                    <CardTitle className="text-2xl font-bold text-center  theme-gradient-text">
                        Administrative Portal Access
                    </CardTitle>
                    <CardDescription className="text-center text-gray-600 dark:text-gray-300">
                        Secure authentication required for access to the portfolio management interface.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label
                                htmlFor="UserEmail"
                                className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2"
                            >
                                <Mail className="h-4 w-4" /> Email Address
                            </label>
                            <Input
                                type="email"
                                id="UserEmail"
                                placeholder="admin@example.com"
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full"
                            />
                        </div>

                        <div className="space-y-2">
                            <label
                                htmlFor="password"
                                className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2"
                            >
                                <LockKeyhole className="h-4 w-4" /> Password
                            </label>
                            <Input
                                type="password"
                                id="password"
                                placeholder="••••••••"
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full"
                            />
                        </div>

                        {error && (
                            <div className="px-4 py-3 rounded-md bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
                                <p className="text-red-600 dark:text-red-400 font-medium text-sm">{error}</p>
                            </div>
                        )}

                        <Button disabled={loading} type="submit" className="w-full py-6 text-base font-medium">
                            <BiLogIn className="mr-2 h-5 w-5" />
                            {loading ? "Please wait..." : "Authenticate"}
                        </Button>

                        <p className="text-xs text-center text-gray-500 dark:text-gray-300 mt-4">
                            This portal is restricted to authorized person only.
                            <br />
                        </p>
                    </form>
                </CardContent>
            </div>
        </section>
    )
}

export default Login

