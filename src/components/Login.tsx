"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/images/logo.webp";
import login from "../../public/images/login.webp";
import { signIn, useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { BiLogIn } from "react-icons/bi";
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();
    const { data: session } = useSession();
    const pathname = usePathname();
    if (session && pathname === "/login") {
        router.push("/admin");
        return null;
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            if (!email || !password) {
                toast.error("Email and password are required.");
                setError("Email and password are required.");
                return;
            }
            const res: any = await signIn("credentials", {
                email,
                password,
                redirect: false,
            });
            if (res.ok) {
                toast.success("Welcome to admin page.");
            } else {
                toast.error(
                    " Email and password are not matched to admin credentials."
                );

                return;
            }
        } catch (error) {
            console.log("Error during login : ", error);
        }
    };

    return (
        <>
            <section className=" my-12 lg:my-0">
                <div className="lg:grid  lg:grid-cols-12">
                    <aside className="relative h-16 ml-8 xl:ml-12 hidden lg:flex lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
                        <img
                            src="https://www.hit4hit.org/img/login/user-icon-6.png"
                            alt="Login"
                            className="absolute  h-full w-full object-fill"
                        />
                    </aside>

                    <main className="flex items-center justify-center  lg:col-span-7 xl:col-span-6 lg:mr-12  ">
                        <div className="max-w-xl lg:max-w-3xl">
                            <Link href="/about" aria-label="HomePage">
                                <Image src={logo} className=" h-10 w-auto " alt="Logo" />
                            </Link>

                            {/* <h1 className="mt-6 text-2xl font-bold  sm:text-3xl md:text-4xl text-blue-700">
                Login to EZShop
              </h1> */}

                            <p className="text-2xl font-bold text-gray-800 dark:text-gray-400 mt-6">
                                Authenticate to gain access to the frontend system as an
                                administrator in order to securely manage and update data.
                            </p>

                            <form
                                onSubmit={handleSubmit}
                                className="mt-8 grid grid-cols-6 gap-6"
                            >
                                <div className="col-span-6">
                                    <label
                                        htmlFor="UserEmail"
                                        className="block text-sm font-semibold text-gray-900 dark:text-gray-300"
                                    >
                                        {" "}
                                        Email{" "}
                                    </label>

                                    <input
                                        type="email"
                                        id="UserEmail"
                                        placeholder="Enter Email"
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="mt-1 w-full rounded-md border-2 p-2 px-3 bg-[#f8f9fa] dark:bg-gray-950  font-medium border-gray-400 dark:border-gray-600  dark:focus-within:border-gray-300 focus-within:border-gray-900 shadow-sm sm:text-sm"
                                    />
                                </div>
                                <div className="col-span-6 ">
                                    <label
                                        htmlFor="password"
                                        className="block text-sm font-semibold text-gray-900 dark:text-gray-300"
                                    >
                                        {" "}
                                        Password{" "}
                                    </label>

                                    <input
                                        type="password"
                                        id="password"
                                        placeholder="Enter Password"
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="mt-1 w-full rounded-md border-2  p-2 px-3 bg-[#f8f9fa] dark:bg-gray-950  font-medium border-gray-400 dark:border-gray-600  dark:focus-within:border-gray-300 focus-within:border-gray-900 shadow-sm 
                    sm:text-sm"
                                    />
                                </div>

                                <div className="col-span-6 flex  flex-col gap-4">
                                    <button
                                        type="submit"
                                        className=" flex items-center gap-2  rounded-md bg-black dark:bg-white text-white dark:text-black  border-solid border-2 border-black
                    dark:border-white  hover:scale-95 transition-all duration-300 ease-in-out py-[6px] px-4 w-fit text-base  font-semibold"
                                    >
                                        <BiLogIn size={20} />
                                        Login
                                    </button>
                                    {error && (
                                        <p className="-mt-2 text-red-600 font-semibold text-sm">
                                            {error}
                                        </p>
                                    )}
                                </div>
                            </form>
                        </div>
                    </main>
                </div>
            </section>
        </>
    );
};

export default Login;
