import { Skeleton } from "@/components/ui/skeleton"

export default function CardSkeleton() {
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-12  ">
                <div className="space-y-3 col-span-1">
                    <Skeleton className="w-full h-[160px] object-cover rounded-md " />
                    <Skeleton className="h-8 w-[150px]  rounded-lg" />
                    <div className="space-y-2">
                        <Skeleton className="h-4 w-[300px]  rounded-lg" />
                        <Skeleton className="h-4 w-[280px]  rounded-lg" />
                    </div>
                    <div className="flex justify-between items-center space-x-4">
                        <Skeleton className="h-8 w-8 rounded-full" />
                        <Skeleton className="h-6 w-[100px]  rounded-lg" />
                    </div>
                </div>
                <div className="space-y-3 col-span-1">
                    <Skeleton className="w-full h-[150px] object-cover rounded-md " />
                    <Skeleton className="h-8 w-[150px]  rounded-lg" />
                    <div className="space-y-2">
                        <Skeleton className="h-4 w-[300px]  rounded-lg" />
                        <Skeleton className="h-4 w-[280px]  rounded-lg" />
                    </div>
                    <div className="flex justify-between items-center space-x-4">
                        <Skeleton className="h-8 w-8 rounded-full" />
                        <Skeleton className="h-6 w-[100px]  rounded-lg" />
                    </div>
                </div>
                <div className="space-y-3 col-span-1">
                    <Skeleton className="w-full h-[150px] object-cover rounded-md " />
                    <Skeleton className="h-8 w-[150px]  rounded-lg" />
                    <div className="space-y-2">
                        <Skeleton className="h-4 w-[300px]  rounded-lg" />
                        <Skeleton className="h-4 w-[280px]  rounded-lg" />
                    </div>
                    <div className="flex justify-between items-center space-x-4">
                        <Skeleton className="h-8 w-8 rounded-full" />
                        <Skeleton className="h-6 w-[100px]  rounded-lg" />
                    </div>
                </div>
            </div >
        </>
    )
}