import React from 'react'
import { Skeleton } from '../ui/skeleton'

const ExperienceSkeleton = () => {
    return (
        <div className="flex flex-col text-start px-4 w-full   ">
            <div className=" border-l-[3px] border-gray-600 dark:border-gray-400 flex flex-col gap-16 w-full   ">
                <div className="relative ml-[30px] sm:ml-[65px] w-full ">
                    <div className=' flex gap-4 items-center mb-4 '>
                        <Skeleton className=' w-14 h-14 rounded-md '></Skeleton>
                        <div className=' flex flex-col gap-3'>
                            <Skeleton className=' w-56 h-5 rounded-md'></Skeleton>
                            <Skeleton className=' w-32 h-4 rounded-md'></Skeleton>

                        </div>
                    </div>
                    <Skeleton className=' w-[70%] sm:w-[400px] h-8 rounded-md mb-4'></Skeleton>
                    <div className='mt-4 flex  flex-col gap-1 min-w-full'>
                        <Skeleton className=' w-[98%] h-3 rounded-md'></Skeleton>
                        <Skeleton className=' w-[96%] h-3 rounded-md'></Skeleton>
                        <Skeleton className=' w-[96%] h-3 rounded-md'></Skeleton>
                        <Skeleton className=' w-[76%] h-3 rounded-md'></Skeleton>
                        <Skeleton className=' w-[98%] h-3 rounded-md'></Skeleton>
                        <Skeleton className=' w-[90%] h-3 rounded-md'></Skeleton>
                        <Skeleton className=' w-[94%] h-3 rounded-md'></Skeleton>
                        <Skeleton className=' w-[98%] h-3 rounded-md'></Skeleton>
                        <Skeleton className=' w-[96%] h-3 rounded-md'></Skeleton>
                        <Skeleton className=' w-[90%] h-3 rounded-md'></Skeleton>
                        <Skeleton className=' w-[98%] h-3 rounded-md'></Skeleton>
                        <Skeleton className=' w-[86%] h-3 rounded-md'></Skeleton>
                        <Skeleton className=' w-[90%] h-3 rounded-md'></Skeleton>
                        <Skeleton className=' w-[98%] h-3 rounded-md'></Skeleton>
                        <Skeleton className=' w-[76%] h-3 rounded-md'></Skeleton>

                    </div>
                    <span className=" absolute top-0 left-0  flex justify-center align-middle items-center  w-[25px] p-1 h-[25px]  sm:w-[28px] sm:h-[28px] bg-white dark:bg-gray-900  border-gray-600 dark:border-gray-400  border-[3px] -ml-[45px] sm:-ml-[81px] rounded-[50%]">
                        <span className="w-[10px] h-[10px] sm:w-[15px] sm:h-[15px] bg-gray-600 dark:bg-gray-400  rounded-[50%]"></span>
                    </span>
                </div>

            </div>
        </div>
    )
}

export default ExperienceSkeleton