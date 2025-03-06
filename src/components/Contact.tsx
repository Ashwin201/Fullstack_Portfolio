"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BsSendCheckFill, BsSendFill } from "react-icons/bs";
import { FaMailBulk } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import contact from "../../public/images/contact.webp";
import toast from "react-hot-toast";
import AnimateOnVisible from "./Animations";
const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        try {
            if (!name || !email || !subject || !message) {
                setError("All fields in the form are mandatory.");
                toast.error(`All fields in the form are mandatory.`);
                return;
            }

            //For sending email to gmail

            const res = await fetch(`/api/email`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, email, subject, message }),
            });

            //For sending email to Admin Dashboard
            if (res.ok) {
                // console.log(response);
                setName("");
                setEmail("");
                setMessage("");
                setSubject("");
                setError("");
                toast.success(
                    ` Congratulations, ${name}! Your message has sent successfully. `
                );

                const adminRes = await fetch(`/api/sendEmail`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name,
                        email,
                        subject,
                        message,
                    }),
                });

                if (adminRes.ok) {
                    // console.log("Email sent successfully");
                } else {
                    console.error("Failed to send admin notification email");
                }
            } else {
                toast.error(`Apologies! Failed to deliver your message.`);
            }
        } catch (error) {
            console.log("Error sending the request:", error);
            // Handle other errors such as network issues
        }
    };

    return (
        <>
            <section id="contact" className='pt-10 mt-4 flex flex-col  col-span-1 w-full'>
                <div className=' mb-12  '>
                    <h3 className=" text-4xl sm:text-[44px] mb-3  font-bold    theme-gradient-text">
                        Get In Touch
                    </h3>
                    <p className=' text-base text-gray-600 font-medium dark:text-gray-300'>
                        Let&apos;s connect and discuss things in more detail.
                    </p>
                </div>
                <div className="md:grid gap-14 lg:grid-cols-12">
                    <AnimateOnVisible animation={"slideRight"} duration={1.0} className=" hidden lg:flex md:order-last md:col-span-5  xl:col-span-6">
                        <Image
                            src={contact}
                            loading="eager"
                            priority={true}
                            alt="Contact Image"
                            className=" h-auto w-full"
                        />
                    </AnimateOnVisible>

                    <div className="flex  md:col-span-7 xl:col-span-6   w-full   ">
                        <div className=" lg:max-w-3xl">
                            <div className=" flex items-center 
                                text-center gap-[10px] font-semibold text-[24px] min-w-[345px]:text-3xl  theme-gradient-text">
                                Send me a Message{" "}
                                <MdMarkEmailUnread size={30} className="mt-1" />
                            </div>
                            <Link
                                href={"mailto:ashminsharma203@gmail.com"}
                                aria-label="Email"
                                className="my-4 flex gap-2 items-end "
                            >
                                <FaMailBulk size={25} /> :{" "}
                                <span className="underline text-base font-medium">
                                    ashminsharma203@gmail.com
                                </span>
                            </Link>

                            <p className="leading-relaxed text-gray-600 font-medium dark:text-gray-300">
                                Connect with me! Feel free to reach out for collaboration,
                                opportunities, or just a friendly chat.
                            </p>

                            <form
                                action="#"
                                className="mt-8 grid grid-cols-6 gap-6"
                                onSubmit={handleSubmit}
                            >
                                <div className="col-span-6  sm:col-span-3">
                                    <label
                                        htmlFor="Name"
                                        className="relative block rounded-md border-2 border-gray-200 dark:border-gray-600 shadow-sm dark:focus-within:border-gray-200 focus-within:border-black  "
                                    >
                                        <input
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            type="text"
                                            id="Name"
                                            className=" p-[10px] w-full peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                                            placeholder="Enter Your Name"
                                        />

                                        <span className="  pointer-events-none dark:bg-gray-900 bg-white dark:text-gray-300 text-gray-900 
                                            absolute start-2.5 top-0 -translate-y-1/2  p-0.5 text-xs font-medium  transition-all peer-placeholder-shown:top-1/2
                                             peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs py-[2px] px-2">
                                            Name
                                        </span>
                                    </label>
                                </div>
                                <div className="col-span-6  sm:col-span-3">
                                    <label
                                        htmlFor="Email"
                                        className="relative block rounded-md border-2 border-gray-200 dark:border-gray-600 shadow-sm dark:focus-within:border-gray-200 focus-within:border-black  "
                                    >
                                        <input
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            type="email"
                                            id="Email"
                                            className="  p-[10px] w-full peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                                            placeholder="Email"
                                        />

                                        <span
                                            className=" pointer-events-none dark:bg-gray-900 bg-white dark:text-gray-300 text-gray-900 absolute start-2.5 top-0 -translate-y-1/2  p-0.5 text-xs  font-medium
                     transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs py-[2px] px-2"
                                        >
                                            Email
                                        </span>
                                    </label>
                                </div>
                                <div className="col-span-6  ">
                                    <label
                                        htmlFor="Subject"
                                        className="relative flex text-start justify-start items-start rounded-md border-2 border-gray-200 dark:border-gray-600 shadow-sm dark:focus-within:border-gray-200 focus-within:border-black "
                                    >
                                        <textarea
                                            value={subject}
                                            onChange={(e) => setSubject(e.target.value)}
                                            id="Subject"
                                            className=" resize-none p-[10px] w-full peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                                            placeholder="Subject"
                                            rows={3}
                                        />

                                        <span
                                            className="  pointer-events-none dark:bg-gray-900 bg-white dark:text-gray-300 text-gray-900 absolute start-2.5 top-0 -translate-y-1/2  p-0.5 text-xs font-medium 
                     transition-all peer-placeholder-shown:top-[22px] peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs py-[2px] px-2"
                                        >
                                            Subject
                                        </span>
                                    </label>
                                </div>
                                <div className="col-span-6  ">
                                    <label
                                        htmlFor="Message"
                                        className="relative block rounded-md border-2 border-gray-200 dark:border-gray-600 shadow-sm dark:focus-within:border-gray-200 focus-within:border-black  "
                                    >
                                        <textarea
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                            id="Message"
                                            className=" resize-none p-[10px] w-full peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                                            placeholder="Message"
                                            rows={6}
                                        />

                                        <span
                                            className=" text-gray-500 dark:text-gray-300 pointer-events-none dark:bg-gray-900 bg-white absolute start-2.5 top-0 -translate-y-1/2  p-0.5 text-xs  font-medium
                     transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs py-[2px] px-2"
                                        >
                                            Message
                                        </span>
                                    </label>
                                </div>
                                <button
                                    type="submit"
                                    className=" flex gap-2  items-center text-center w-fit py-[6px] px-3 pr-4 text-base  font-semibold  rounded-md bg-black dark:bg-[#f8f9fa] text-white dark:text-black  border-solid border-2 border-black
         dark:border-white  hover:scale-95 transition-all duration-300 ease-in-out max-[300px]:mr-0 max-[300px]:mb-3"
                                >
                                    <span>
                                        <BsSendFill size={18} />
                                    </span>
                                    Submit
                                </button>
                            </form>
                            {error && (
                                <p className="text-sm font-medium py-1 px-2 text-white rounded-md w-fit bg-red-600 mt-4">
                                    {error}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </section >
        </>
    );
};

export default Contact;
