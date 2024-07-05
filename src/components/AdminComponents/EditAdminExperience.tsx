"use client";
import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { MdOutlineLibraryAdd, MdPublish } from "react-icons/md";
import { RiDeleteBinFill } from "react-icons/ri";
import { useRouter } from "next/navigation";

interface EditAdminExperienceProps {
  data: {
    role: string;
    company: string;
    duration: string;
    description: string[];
  };
  id: string;
}

const EditAdminExperience: React.FC<EditAdminExperienceProps> = ({ data, id }) => {
  const [descriptions, setDescriptions] = useState<string[]>([]);
  const [descInput, setDescInput] = useState<string>("");

  const [role, setRole] = useState<string>("");
  const [company, setCompany] = useState<string>("");
  const [duration, setDuration] = useState<string>("");

  const router = useRouter();

  // Function to store descriptions
  const handleDescription = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (descInput.trim() !== "") {
      setDescriptions((prev) => [...prev, descInput]);
      setDescInput("");
    }
  };

  // Function to delete descriptions
  const handleDeleteDescription = (index: number) => {
    setDescriptions((prev) => prev.filter((_, i) => i !== index));
  };

  // To get data
  useEffect(() => {
    const inItValues = () => {
      try {
        setRole(data.role || "");
        setCompany(data.company || "");
        setDuration(data.duration || "");
        setDescriptions(data.description || []);
      } catch (error) {
        console.log(error);
      }
    };
    inItValues();
  }, [data]);

  // Handling the post functionality
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!role || !descriptions.length || !duration) {
      toast.error("Above fields are required.");
      return;
    }

    try {
      const res = await fetch(`/api/experience/${id}`, {
        method: "PUT",
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
        toast.success("Experience has been updated successfully.");
        router.push("/admin/edit-experience");
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <section className="my-16">
      <div>
        <h1 className="font-bold text-3xl sm:text-5xl text-center mb-8">
          Edit Your Experience!
        </h1>
      </div>
      <form className="flex gap-5 flex-col" onSubmit={handleSubmit}>
        <div className="w-full">
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
            className="mt-1 w-full rounded-md border-2 p-3 bg-[#f8f9fa] dark:bg-gray-950 font-medium border-gray-400 dark:border-gray-600 dark:focus-within:border-gray-300 focus-within:border-gray-900 shadow-sm sm:text-sm"
          />
        </div>
        <div className="w-full">
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
            className="mt-1 w-full rounded-md border-2 p-3 bg-[#f8f9fa] dark:bg-gray-950 font-medium border-gray-400 dark:border-gray-600 dark:focus-within:border-gray-300 focus-within:border-gray-900 shadow-sm sm:text-sm"
          />
        </div>
        <div className="w-full">
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
            className="resize-none mt-1 w-full rounded-md border-2 p-3 bg-[#f8f9fa] dark:bg-gray-950 font-medium border-gray-400 dark:border-gray-600 dark:focus-within:border-gray-300 focus-within:border-gray-900 shadow-sm sm:text-sm"
          />
        </div>

        <div className="w-full">
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
            className="resize-none mt-1 w-full rounded-md border-2 p-3 bg-[#f8f9fa] dark:bg-gray-950 font-medium border-gray-400 dark:border-gray-600 dark:focus-within:border-gray-300 focus-within:border-gray-900 shadow-sm sm:text-sm"
          />
          {descInput.length > 0 && (
            <button
              className="py-2 px-3 bg-gray-950 rounded-md border-2 dark:border-gray-300 text-gray-300 dark:bg-gray-200 dark:text-black text-sm font-medium flex gap-2"
              onClick={handleDescription}
            >
              <MdOutlineLibraryAdd size={20} />
              Add Description
            </button>
          )}

          <div className="mt-1 flex flex-col gap-1">
            {descriptions &&
              descriptions?.map((item, index) => (
                <div className="flex gap-2" key={index}>
                  <p className="line-clamp-2 text-sm font-medium">{item}</p>
                  <span
                    className="cursor-pointer text-red-700"
                    onClick={() => handleDeleteDescription(index)}
                  >
                    <RiDeleteBinFill size={22} />
                  </span>
                </div>
              ))}
          </div>
        </div>

        <button
          type="submit"
          className="py-2 px-4 w-fit bg-gray-950 rounded-md border-2 dark:border-gray-300 text-gray-300 dark:bg-gray-200 dark:text-black text-sm font-semibold flex gap-2 duration-300 shadow-sm"
        >
          <MdPublish size={20} />
          Update
        </button>
      </form>
    </section>
  );
};

export default EditAdminExperience;
