import { GiReturnArrow } from "react-icons/gi";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center  flex-col gap-4 px-4 md:px-6">
      <div className="flex flex-col items-center justify-center gap-6  text-center">
        <FileIcon className="h-24 w-24" />
        <div className="space-y-4 text-center">
          <h1 className="text-3xl font-bold sm:text-5xl">Page not found</h1>
          <p className="max-w-[600px] text-gray-500 dark:text-gray-400 font-medium text-base md:text-xl/relaxed ">
            Sorry, we couldn&apos;t find the page you&apos;re looking for.
            Please check the URL in your address bar and try again.
          </p>
        </div>
      </div>
      <ul className="mx-auto w-full max-w-sm space-y-2 flex justify-center">
        <li
          className="list-none  mr-3  rounded-md bg-black dark:bg-white text-white dark:text-black  border-solid border-2 border-black
         dark:border-white  hover:scale-95 transition-all duration-300 ease-in-out max-[300px]:mr-0 max-[300px]:mb-3"
        >
          <Link
            aria-label="Return Home"
            href="/"
            className=" flex items-center    py-2 px-3 text-base font-medium "
          >
            <span className="mr-2">
              <GiReturnArrow size={20} />
            </span>
            Return Home
          </Link>
        </li>
      </ul>
    </div>
  );
}

function FileIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
    </svg>
  );
}
