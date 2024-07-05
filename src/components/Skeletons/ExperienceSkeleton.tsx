import React from 'react'
import { Skeleton } from '../ui/skeleton'

const ExperienceSkeleton = () => {
    return (
        <div className="flex flex-col text-start sm:px-20 w-full sm:w-[630px] lg:w-[800px] ">
            <div className=" border-l-[3px] border-gray-600 dark:border-gray-400 flex flex-col gap-16   ">
                <div className="relative ml-[30px] sm:ml-[65px]">
                    <Skeleton className=' w-[55%] h-8 rounded-md'></Skeleton>
                    <Skeleton className=' w-[30%] h-8 rounded-md my-4'></Skeleton>
                    <Skeleton className=' w-[40%] h-6 rounded-md'></Skeleton>
                    <div className='mt-4 flex  flex-col gap-1'>
                        <Skeleton className=' w-[98%] h-5 rounded-md'></Skeleton>
                        <Skeleton className=' w-[100%] h-5 rounded-md'></Skeleton>
                        <Skeleton className=' w-[76%] h-5 rounded-md'></Skeleton>
                        <Skeleton className=' w-[96%] h-5 rounded-md'></Skeleton>
                        <Skeleton className=' w-[98%] h-5 rounded-md'></Skeleton>
                        <Skeleton className=' w-[90%] h-5 rounded-md'></Skeleton>

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