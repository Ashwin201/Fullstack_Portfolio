"use client";
import React from "react";
import toast from "react-hot-toast";
import { MdAdd, MdDeleteOutline, MdPublish } from "react-icons/md";
import Link from "next/link";
import { BiSolidEditAlt, BiSolidShow } from "react-icons/bi";
const AdminProjectsPreview = ({ data, setData, showForm, setShowForm }: any) => {
  // Handling Delete functionality
  const handleDelete = async (id: string) => {
    try {
      const isConfirmed = window.confirm(
        "Are you sure you want to delete your project?"
      );
      if (isConfirmed) {
        const res = await fetch(`/api/project/${id}`, {
          method: "DELETE",
        });
        if (res.ok) {
          toast.success("Your project has been deleted successfully.");
          // Update the state by filtering out the deleted project
          setData((items: any) => items.filter((item: any) => item._id !== id));
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const projects = data?.slice().reverse();
  return (
    <>
      {projects.length > 0 && (
        <div className="mb-8  flex items-center flex-col">
          <h1 className=" font-bold flex flex-col gap-3   text-3xl sm:text-5xl text-center mb-4  ">
            Update Your Projects!
          </h1>
          <button
            onClick={() => setShowForm((prev: any) => !prev)}
            className=" flex items-center justify-center py-[6px] px-4 w-fit bg-gray-950 rounded-md border-2 dark:border-gray-300  text-gray-50 
dark:bg-gray-200 dark:text-black text-sm font-semibold gap-2 
hover:bg-gray-900 duration-300 shadow-sm  "
          >
            {showForm ? (
              <>
                <BiSolidShow size={20} /> Show Projects
              </>
            ) : (
              <>
                <MdAdd size={20} /> Add Project
              </>
            )}
          </button>
        </div>
      )}

      {projects.length > 0 ? (
        projects && (
          <div className=" flex flex-col gap-6">
            {projects?.map((data: any, index: any) => (
              <div
                key={index}
                className=" grid grid-cols-2 gap-5 sm:grid-cols-3 rounded-md shadow-md shadow-gray-200 dark:shadow-gray-900   p-3 "
              >
                <div className=" col-span-2 sm:col-span-1">
                  <img
                    src={data?.image[0]}
                    width={100}
                    height={100}
                    alt="Project Image"
                    className=" w-full h-auto rounded-md  sm:h-full  object-cover"
                  />
                </div>

                <div className="  col-span-2 flex flex-col  gap-2 justify-center w-full ">
                  <p className="text-sm   font-medium  text-gray-800 dark:text-gray-300">
                    {data?.category}
                  </p>
                  <p className=" text-base sm:text-lg font-semibold line-clamp-1 text-gray-800 dark:text-gray-300  ">
                    {data?.title}
                  </p>

                  <p className=" line-clamp-4 text-xs sm:text-sm font-medium  text-gray-800 dark:text-gray-300">
                    {data?.description}
                  </p>
                  <div className=" flex gap-3 items-center mt-1">
                    <Link
                      href={`/admin/edit-projects/${data?._id}`}
                      className="py-[6px] px-3 w-fit bg-gray-950 rounded-md border-2 dark:border-gray-300  text-gray-50 dark:bg-gray-200 dark:text-black text-sm font-semibold flex gap-2 
              duration-300 shadow-sm "
                    >
                      <BiSolidEditAlt size={20} />
                      Edit Project
                    </Link>{" "}
                    <button
                      onClick={() => handleDelete(data?._id)}
                      className="py-[6px] px-4 w-fit bg-red-700 rounded-md border-2 border-red-700  text-white  text-sm font-semibold flex gap-2 
              duration-300 shadow-sm "
                    >
                      <MdDeleteOutline size={20} />
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )
      ) : (
        <div className="flex flex-col items-center gap-3">
          <p className="  text-center text-2xl font-bold text-gray-900 dark:text-gray-300 mt-3">
            You hadn&apos; posted any project yet.&nbsp; Please post any project
            first to view it.
          </p>
          <button
            onClick={() => setShowForm(true)}
            className=" flex gap-2 py-[6px] px-4 w-fit bg-gray-950 rounded-md border-2
             dark:border-gray-300  text-gray-50 
dark:bg-gray-200 dark:text-black text-sm font-semibold 
hover:bg-gray-900 duration-300 shadow-sm  "
          >
            <MdAdd size={20} /> Add Projects
          </button>
        </div>
      )}
    </>
  );
};

export default AdminProjectsPreview;
