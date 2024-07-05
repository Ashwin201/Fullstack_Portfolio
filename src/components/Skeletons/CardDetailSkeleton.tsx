import React from 'react'
import { Skeleton } from '../ui/skeleton'

const CardDetailSkeleton = () => {
    return (
        <section className="flex flex-col gap-14  w-full  py-3 px-2 sm:px-8 sm:py-8">
            <div className="grid grid-cols-2 gap-8 lg:gap-10 place-items-start">
                <div className="col-span-2 lg:col-span-1 w-full">
                    <div className="relative col-span-1 ">
                        <Skeleton className="w-full h-[200px] lg:h-[250px]  object-cover object-center rounded-md" />
                    </div>
                    <div>
                        <div className="mt-6 grid grid-cols-5 sm:grid-cols-7 gap-3">
                            <Skeleton className="cursor-pointer object-cover rounded-md w-full h-[40px]" />
                            <Skeleton className="cursor-pointer object-cover rounded-md w-full h-[40px]" />
                            <Skeleton className="cursor-pointer object-cover rounded-md w-full h-[40px]" />
                            <Skeleton className="cursor-pointer object-cover rounded-md w-full h-[40px]" />
                            <Skeleton className="cursor-pointer object-cover rounded-md w-full h-[40px]" />
                            <Skeleton className="cursor-pointer object-cover rounded-md w-full h-[40px]" />
                            <Skeleton className="cursor-pointer object-cover rounded-md w-full h-[40px]" />
                        </div>
                    </div>
                </div>
                <div className="col-span-2 lg:col-span-1 flex flex-col justify-center gap-3  w-full ">
                    <Skeleton className="cursor-pointer object-cover rounded-md w-[120px] h-8" />
                    <Skeleton className="cursor-pointer object-cover rounded-md w-[70%] h-10" />
                    <div className=' flex flex-col gap-1.5'>
                        <Skeleton className="cursor-pointer object-cover rounded-md w-[98%]  h-4" />
                        <Skeleton className="cursor-pointer object-cover rounded-md w-[96%]  h-4" />
                        <Skeleton className="cursor-pointer object-cover rounded-md w-[97%]  h-4" />
                        <Skeleton className="cursor-pointer object-cover rounded-md w-[90%]  h-4" />
                        <Skeleton className="cursor-pointer object-cover rounded-md w-[99%]  h-4" />
                        <Skeleton className="cursor-pointer object-cover rounded-md w-[93%]  h-4" />
                        <Skeleton className="cursor-pointer object-cover rounded-md w-[60%]  h-4" />
                    </div>

                    <div className="flex justify-between items-center mt-2">
                        <Skeleton className="cursor-pointer object-cover rounded-full w-12 h-12 " />
                        <Skeleton className="cursor-pointer object-cover rounded-full w-32 h-8 " />
                    </div>
                </div>
            </div>

            <div>
                <Skeleton className="cursor-pointer object-cover rounded-xl w-[230px] h-[36px] " />
                <div className="flex flex-wrap items-start gap-3 sm:gap-6 mt-5">
                    <Skeleton className="cursor-pointer object-cover  w-[120px] h-[40px]  rounded-full" />
                    <Skeleton className="cursor-pointer object-cover  w-[130px] h-[40px]  rounded-full" />
                    <Skeleton className="cursor-pointer object-cover  w-[150px] h-[40px]  rounded-full" />
                    <Skeleton className="cursor-pointer object-cover  w-[130px] h-[40px]  rounded-full" />
                    <Skeleton className="cursor-pointer object-cover  w-[135px] h-[40px]  rounded-full" />
                    <Skeleton className="cursor-pointer object-cover  w-[143px] h-[40px]  rounded-full" />
                    <Skeleton className="cursor-pointer object-cover  w-[130px] h-[40px]  rounded-full" />
                    <Skeleton className="cursor-pointer object-cover  w-[143px] h-[40px]  rounded-full" />
                </div>
            </div>


        </section>
    )
}

export default CardDetailSkeleton