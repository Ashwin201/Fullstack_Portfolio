"use client";
import toast from "react-hot-toast";
import React, { useEffect, useState } from "react";
import { BiSolidEditAlt, BiSolidShow } from "react-icons/bi";
import {
  MdAdd,
  MdDeleteOutline,
  MdOutlineLibraryAdd,
  MdPublish,
} from "react-icons/md";
import { RiDeleteBinFill } from "react-icons/ri";
import Link from "next/link";
import Loader from "../Loader";

interface Experience {
  _id: string;
  role: string;
  company: string;
  duration: string;
  description: string[];
}

const AdminExperience: React.FC = () => {
  const [data, setData] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);
  const [descriptions, setDescriptions] = useState<string[]>([]);
  const [descInput, setDescInput] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const [company, setCompany] = useState<string>("");
  const [duration, setDuration] = useState<string>("");
  const [showForm, setShowForm] = useState(false);

  const handleDescription = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (descInput.trim() !== "") {
      setDescriptions((prev) => [...prev, descInput]);
      setDescInput("");
    }
  };

  const handleDeleteDescription = (index: number) => {
    setDescriptions((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!role || !descriptions.length || !duration) {
      toast.error("Above fields are required.");
      return;
    }

    try {
      const res = await fetch(`/api/experience`, {
        cache: "no-store",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          role,
          company,
          duration,
          description: descriptions,
        }),
      });

      if (res.ok) {
        toast.success("Your experience has been published successfully.");
        const newData: Experience = {
          role,
          company,
          duration,
          description: descriptions,
          _id: Math.random().toString(), // This is just a placeholder for _id
        };
        setData([...data, newData]);
        setRole("");
        setCompany("");
        setDuration("");
        setDescriptions([]);
        setShowForm(false);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/experience`, {
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

  const handleDelete = async (id: string) => {
    try {
      const isConfirmed = window.confirm(
        "Are you sure you want to delete your experience?"
      );
      if (isConfirmed) {
        const res = await fetch(`/api/experience/${id}`, {
          method: "DELETE",
        });
        if (res.ok) {
          toast.success("Your experience has been deleted successfully.");
          setData((prevData) => prevData.filter((item) => item._id !== id));
        }
      }
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <section>
      {loading ? (
        <Loader />
      ) : showForm ? (
        <>
          <div className="mb-8  flex items-center flex-col">
            <h1 className=" font-bold flex flex-col gap-3   text-3xl sm:text-5xl text-center mb-4  ">
              Add Your Experience!
            </h1>
            <button
              onClick={() => setShowForm((prev) => !prev)}
              className=" flex items-center justify-center py-[6px] px-4 w-fit bg-gray-950 rounded-md border-2 dark:border-gray-300  text-gray-50 
          dark:bg-gray-200 dark:text-black text-sm font-semibold gap-2 
           hover:bg-gray-900 duration-300 shadow-sm  "
            >
              {showForm ? (
                <>
                  <BiSolidShow size={20} /> Show Experiences
                </>
              ) : (
                <>
                  <MdAdd size={20} /> Add Experience
                </>
              )}
            </button>
          </div>
          <form className=" flex gap-5 flex-col " onSubmit={handleSubmit}>
            <div className=" w-full">
              <label
                htmlFor="role"
                className="block text-lg mb-1 ml-1 font-semibold text-gray-900 dark:text-gray-300"
              >
                Your role
              </label>

              <input
                type="text"
                id="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                placeholder="eg: Frontend developer / Java Developer"
                className="mt-1 w-full rounded-md border-2 p-3 bg-[#f8f9fa] dark:bg-gray-950  font-medium border-gray-400 dark:border-gray-600  dark:focus-within:border-gray-300 focus-within:border-gray-900 shadow-sm sm:text-sm"
              />
            </div>
            <div className=" w-full">
              <label
                htmlFor="company"
                className="block text-lg mb-1 ml-1 font-semibold text-gray-900 dark:text-gray-300"
              >
                Company you are currently working for
              </label>

              <input
                type="text"
                id="company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Company name"
                className="mt-1 w-full rounded-md border-2 p-3 bg-[#f8f9fa] dark:bg-gray-950  font-medium border-gray-400 dark:border-gray-600  dark:focus-within:border-gray-300 focus-within:border-gray-900 shadow-sm sm:text-sm"
              />
            </div>
            <div className=" w-full">
              <label
                htmlFor="duration"
                className="block text-lg mb-1 ml-1 font-semibold text-gray-900 dark:text-gray-300"
              >
                Duration of your work
              </label>

              <input
                type="text"
                id="duration"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                placeholder="Time period of your work"
                className=" resize-none mt-1 w-full rounded-md border-2 p-3 bg-[#f8f9fa] dark:bg-gray-950  font-medium border-gray-400 dark:border-gray-600  dark:focus-within:border-gray-300 focus-within:border-gray-900 shadow-sm sm:text-sm"
              />
            </div>

            <div className=" w-full">
              <label
                htmlFor="description"
                className="block text-lg mb-1 ml-1 font-semibold text-gray-900 dark:text-gray-300"
              >
                Brief description of your work
              </label>

              <textarea
                rows={4}
                value={descInput}
                onChange={(e) => setDescInput(e.target.value)}
                id="description"
                placeholder="Detailed description of work"
                className=" resize-none mt-1 w-full rounded-md border-2 p-3 bg-[#f8f9fa] dark:bg-gray-950  font-medium border-gray-400 dark:border-gray-600  dark:focus-within:border-gray-300 focus-within:border-gray-900 shadow-sm sm:text-sm"
              />
              {descInput.length > 0 && (
                <button
                  className="py-2 px-3 bg-gray-950 rounded-md border-2 dark:border-gray-300  text-gray-300 dark:bg-gray-200 dark:text-black text-sm font-medium flex gap-2"
                  onClick={handleDescription}
                >
                  <MdOutlineLibraryAdd size={20} />
                  Add Description
                </button>
              )}

              <div className=" mt-1 flex flex-col gap-1">
                {descriptions &&
                  descriptions?.map((item, index) => (
                    <div className=" flex gap-2" key={index}>
                      <p className=" line-clamp-2 text-sm font-medium">
                        {item}{" "}
                      </p>
                      <span
                        className=" cursor-pointer text-red-700"
                        onClick={() => handleDeleteDescription(index)}
                      >
                        <RiDeleteBinFill size={22} />
                      </span>
                    </div>
                  ))}
              </div>
            </div>

            <button
              className="py-2 px-4 w-fit bg-gray-950 rounded-md border-2 dark:border-gray-300  text-gray-300 dark:bg-gray-200 dark:text-black text-sm font-semibold flex gap-2 
     duration-300 shadow-sm "
            >
              <MdPublish size={20} />
              Publish
            </button>
          </form>
        </>
      ) : data.length > 0 ? (
        <>
          <div className="mb-8  flex items-center flex-col">
            <h1 className=" font-bold flex flex-col gap-3   text-3xl sm:text-5xl text-center mb-4  ">
              Update Your Experience!
            </h1>
            <button
              onClick={() => setShowForm((prev) => !prev)}
              className=" flex items-center justify-center py-[6px] px-4 w-fit bg-gray-950 rounded-md border-2 dark:border-gray-300  text-gray-50 
dark:bg-gray-200 dark:text-black text-sm font-semibold gap-2 
hover:bg-gray-900 duration-300 shadow-sm  "
            >
              {showForm ? (
                <>
                  <BiSolidShow size={20} /> Show Experience
                </>
              ) : (
                <>
                  <MdAdd size={20} /> Add Experience
                </>
              )}
            </button>
          </div>
          {data &&
            data?.map((data, index) => (
              <div
                key={index}
                className=" mt-10 shadow-sm shadow-gray-300 dark:shadow-gray-900 p-5 flex flex-col gap-3 items-start"
              >
                <h1 className="text-gray-900 dark:text-gray-300 font-bold text-xl">
                  {data?.role}
                </h1>
                {data?.company && (
                  <p className="text-gray-900 dark:text-gray-300 font-semibold text-lg">
                    {data?.company}
                  </p>
                )}
                <p className="text-gray-900 dark:text-gray-300 font-medium text-base line-clamp-4">
                  {data?.duration}
                </p>
                <div className="line-clamp-7">
                  {data?.description?.map((item, index) => (
                    <p
                      className="  text-gray-800 dark:text-gray-400 font-medium text-sm  tracking-wide"
                      key={index}
                    >
                      {item}
                    </p>
                  ))}
                </div>

                <div className=" flex gap-3 items-center mt-1">
                  <Link
                    href={`/admin/edit-experience/${data?._id}`}
                    className="py-[6px] px-3 w-fit bg-gray-950 rounded-md border-2 dark:border-gray-300  text-gray-50 dark:bg-gray-200 dark:text-black text-sm font-semibold flex gap-2 
              duration-300 shadow-sm "
                  >
                    <BiSolidEditAlt size={20} />
                    Edit Experience
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
            ))}
        </>
      ) : (
        <div className="flex flex-col items-center gap-3">
          <p className=" text-center text-2xl font-bold text-gray-900 dark:text-gray-300 mt-3">
            You hadn&apos; posted any experience yet. Please post any experience
            to view it
          </p>
          <button
            onClick={() => setShowForm(true)}
            className=" flex gap-2  py-[6px] px-4 w-fit bg-gray-950 rounded-md border-2 dark:border-gray-300  text-gray-50 
dark:bg-gray-200 dark:text-black text-sm font-semibold
hover:bg-gray-900 duration-300 shadow-sm  "
          >
            <MdAdd size={20} /> Add Experience
          </button>
        </div>
      )}
    </section>
  );
};

export default AdminExperience;
