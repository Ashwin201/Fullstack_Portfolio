"use client";
import toast from "react-hot-toast";
import React, { useEffect, useState } from "react";
import Loader from "../Loader";
import { MdAdd, MdDelete, MdDeleteOutline } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";

const SeeEmails = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Handling data fetching functionality
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/email`, {
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
        console.log(error);
      }
    };

    fetchData();
  }, []);

  // Handling Delete functionality
  const handleDelete = async (id: string) => {
    try {
      const isConfirmed = window.confirm(
        "Are you sure you want to delete your experience?"
      );
      if (isConfirmed) {
        const res = await fetch(`/api/email/${id}`, {
          method: "DELETE",
        });
        if (res.ok) {
          toast.success("Your email has been deleted successfully.");
          // Update local state without refreshing
          setData((prevData) => prevData.filter((item: any) => item._id !== id));
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className=" my-16">
      {loading ? (
        <Loader />
      ) : data && data?.length > 0 ? (
        <>
          <div className="mb-8  flex flex-col w-full" >
            <h1 className=" font-bold flex flex-col gap-3   text-3xl sm:text-5xl text-center   ">
              Your Emails!
            </h1>
          </div>
          <div className="flex flex-col gap-6 w-full max-w-lg">
            {data &&
              data?.map((data: any, index: number) => (
                <div
                  key={index}
                  className=" border-2 shadow-sm rounded-xl border-gray-100  dark:border-gray-900  p-4 flex flex-col gap-2 items-start"
                >
                  <div className="flex items-start  justify-between  w-full">
                    <h1 className=" flex items-start justify-start gap-2 text-gray-900 dark:text-gray-300 font-medium sm:font-semibold text-sm sm:text-base">
                      <span className=" -mt-[3px]  sm:-mt-0 text-gray-900 dark:text-gray-300 font-bold text-base sm:text-base">
                        Name:
                      </span>{" "}
                      {data?.name}
                    </h1>
                    <button
                      onClick={() => handleDelete(data?._id)}
                      className="  text-red-700  "
                    >
                      <MdDelete size={25} />
                    </button>
                  </div>
                  <p className="flex items-start justify-start gap-2 text-gray-900 dark:text-gray-300 font-medium sm:font-semibold text-sm sm:text-base">
                    <span className=" -mt-[3px]  sm:-mt-0 text-gray-900 dark:text-gray-300 font-bold text-base sm:text-base">
                      Email:
                    </span>{" "}
                    {data?.email}
                  </p>
                  <p className=" flex items-start justify-start gap-2 text-gray-900 dark:text-gray-300 font-medium text-sm line-clamp-4">
                    <span className=" -mt-[3px]  text-gray-900 dark:text-gray-300 font-bold text-base sm:text-base">
                      Subject:
                    </span>{" "}
                    {data?.subject}
                  </p>
                  <p className=" flex items-start justify-start gap-2 text-gray-900 dark:text-gray-300 font-medium text-sm line-clamp-4">
                    <span className=" -mt-[3px]   text-gray-900 dark:text-gray-300 font-bold text-base sm:text-base">
                      Message:
                    </span>{" "}
                    {data?.message}
                  </p>
                </div>
              ))}
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex flex-col gap-3 items-center justify-center space-x-4">
            <FaTwitter size={50} />
            <h1 className="text-2xl font-bold">Empty Inbox</h1>
          </div>
          <p className="text-base text-center font-semibold">
            Your inbox is currently empty, free from any emails.
          </p>
        </div>
      )}
    </section>
  );
};

export default SeeEmails;
