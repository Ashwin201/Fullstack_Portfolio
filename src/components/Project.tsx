"use clinet"
import { Fragment, useEffect, useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { FaTwitter } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import ProjectDetail from "./ProjectDetail";
import { ChevronsDown, ChevronsUp } from "lucide-react";
import Loading from "./Loading";
import CardSkeleton from "./Skeletons/CardSkeleton";

interface ProjectData {
    id: string,
    category: string;
    image: string[];
    title: string;
    description: string;
    link: string;
    github: string;
    _id: string;
    projectNumber: number;
}

const Project: React.FC = () => {
    const [data, setData] = useState<ProjectData[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`/api/project`, {
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                if (res.ok) {
                    const info = await res.json();
                    setData(info);
                    setLoading(false);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);


    const [Index, setIndex] = useState(3)
    const handleIncrease = () => {
        setIndex(Index + 3)
    }
    const project = data?.slice().reverse();
    const projects = project.sort((a, b) => b.projectNumber - a.projectNumber);

    // console.log(projects)
    return (
        <>
            <div id="Projects" className='pt-6 mt-10 flex flex-col items-center col-span-1 justify-center w-full'>
                <h3 className="pb-12 text-4xl sm:text-5xl text-center mb-3 font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-500 to-neutral-700">
                    Featured Works
                </h3>
                {
                    loading ? <CardSkeleton /> : projects?.length > 0 ? (


                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-12 w-full  ">
                            {projects.slice(0, Index)?.map((item: any, index: number) =>
                                <Fragment key={index}>
                                    <Card className="  col-span-1  bg-inherit shadow-sm " >
                                        <div className=" col-span-2 lg:col-span-1 group-hover:scale-[.99] ease-in-out duration-500 p-3">
                                            <img
                                                src={`${item?.image?.[0]}`}
                                                loading="eager"
                                                width={100}
                                                height={100}
                                                alt={item?.title}
                                                className="w-full h-[150px] rounded-md object-cover"
                                            />
                                        </div>
                                        <CardHeader>
                                            <CardTitle className="font-bold text-[22px] -my-3 bg-clip-text text-transparent bg-gradient-to-b from-neutral-500 to-neutral-700">{item?.title}</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="font-medium line-clamp-2 -mb-2 text-gray-600 dark:text-gray-400">{item?.description}</p>
                                        </CardContent>
                                        <CardFooter>
                                            <div className="flex w-full justify-between items-center mt-1">
                                                <Link href={`${item?.github}`} aria-label="Github" target="_blank">
                                                    <BsGithub size={38} />
                                                </Link>



                                                <Dialog  >
                                                    <DialogTrigger><span className="font-medium text-[16px] underline text-gray-600 dark:text-gray-400  hover:text-gray-700  dark:hover:text-gray-400 transition-all duration-300"
                                                    >
                                                        Know More <span className="sr-only">View detail page of {item?.title}</span>
                                                    </span></DialogTrigger>
                                                    <DialogContent className="rounded-lg h-[85%]  w-[95%]  sm:max-w-[80%] sm:h-[80%]  overflow-auto dark:bg-gradient-to-t dark:from-neutral-900
                                                     dark:to-stone-950 bg-gradient-to-t from-white to-slate-50">
                                                        {/* <DialogHeader>
                                                            <DialogTitle>Are you absolutely sure?</DialogTitle>
                                                            <DialogDescription>
                                                                This action cannot be undone. This will permanently delete your account
                                                                and remove your data from our servers.
                                                            </DialogDescription>
                                                        </DialogHeader> */}
                                                        <ProjectDetail id={item?._id} />
                                                    </DialogContent>
                                                </Dialog>

                                            </div>
                                        </CardFooter>
                                    </Card>

                                </Fragment>
                            )}
                            {
                                projects?.length > Index &&
                                <div className=" -mt-6 mx-auto w-full col-span-1 sm:col-span-2 xl:col-span-3 place-items-center flex flex-col justify-center  items-center  animate-pulse " onClick={handleIncrease}>
                                    <span className=" text-gray-600 dark:text-gray-400 font-medium cursor-pointer">See More</span>
                                    <ChevronsDown size={26} className=" cursor-pointer" />
                                </div>
                            }

                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center space-y-4">
                            <div className="flex flex-col gap-3 items-center justify-center space-x-4">
                                <FaTwitter size={50} />
                                <h1 className="text-2xl font-bold">Projects not available!</h1>
                            </div>
                        </div>
                    )

                }
            </div>

        </>

    )
}

export default Project