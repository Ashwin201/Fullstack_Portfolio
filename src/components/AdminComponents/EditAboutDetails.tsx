"use client"

import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { MdOutlineLibraryAdd, MdPublish } from "react-icons/md";
import { RiDeleteBinFill } from "react-icons/ri";
import { useRouter } from "next/navigation";
import { BiImageAdd } from "react-icons/bi";
import { CldUploadButton } from "next-cloudinary";
import { TiDelete } from "react-icons/ti";

interface EditAboutDetailsProps {
  data: {
    role: string;
    title: string;
    shortDesc: string;
    description: string[];
    resume: string;
    image: string,
    totalProjects: string,
    totalExperience: string
  };
  id: string;
}

const EditAboutDetails: React.FC<EditAboutDetailsProps> = ({ data, id }) => {
  const [descriptions, setDescriptions] = useState<string[]>([]);
  const [descInput, setDescInput] = useState<string>("");

  const [role, setRole] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [shortDesc, setShortdesc] = useState<string>("");
  const [resumeLink, setResumeLink] = useState<string>("");
  const [image, setImage] = useState<string>("")
  const [publicId, setPublicId] = useState<string>("")
  const [totalProjects, setTotalProjects] = useState<string>("")
  const [totalExperience, setTotalExperience] = useState<string>("")
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
        setRole(data.role);
        setTitle(data.title);
        setShortdesc(data.shortDesc);
        setDescriptions(data.description);
        setResumeLink(data.resume);
        setImage(data.image)
        setTotalProjects(data?.totalProjects)
        setTotalExperience(data?.totalExperience)
      } catch (error) {
        console.log(error);
      }
    };
    inItValues();
  }, [data]);


  // Handle Image upload
  const handleImageUpload = (result: any) => {
    console.log(result);
    const info = result.info;
    if ("secure_url" in info && "public_id" in info) {
      const url = info.secure_url;
      const public_id = info.public_id;
      setImage(url);
      setPublicId(public_id);
    } else {
      // Handle the case when the image limit is reached (display a message, etc.)
      console.log("Image upload fail");
    }
  };

  // For delete image
  const handleRemoveImage = async () => {
    try {
      const res = await fetch(`/api/removeImage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(publicId),
      });

      if (res.ok) {
        setImage("");
        setPublicId("");
      }
    } catch (error) {
      console.log(error);
    }
  }
  // Handling the post functionality
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title || !descriptions.length || !shortDesc || !role) {
      toast.error("Above fields are required.");
      return;
    }

    try {
      const res = await fetch(`/api/about/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          role,
          title,
          shortDesc,
          description: descriptions,
          resume: resumeLink,
          image,
          totalExperience,
          totalProjects
        }),
      });

      if (res.ok) {
        toast.success("About details have been updated successfully.");
        router.push("/admin/edit-about-details");
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <section className="my-16">
      <div>
        <h1 className="font-bold text-3xl sm:text-5xl text-center mb-8">
          Edit Your Details!
        </h1>
      </div>
      <form className="flex gap-5 flex-col" onSubmit={handleSubmit}>
        <div className=" w-full ">
          <h6 className="  text-lg mb-1 ml-1 w-full flex justify-center items-center  font-semibold text-gray-900 dark:text-gray-300 ">
            Add Your Profile Picture
          </h6>
          {image ? (
            <div
              className=" w-full flex  justify-center items-center  rounded-md border-1 border-gray-200 dark:border-gray-800 "
            >
              <div className="relative border-2 rounded-md">
                <img
                  src={image}
                  alt="Image"
                  width={100}
                  height={100}
                  className=" cursor-pointer h-32 w-full   object-cover object-center"
                />
                <span
                  className=" cursor-pointer absolute bg-white text-black p-[1px] rounded-full -top-2 -right-2"
                  onClick={handleRemoveImage}
                >
                  <TiDelete size={18} />
                </span>
              </div>
            </div>
          ) : (
            <div
              className=" w-full flex  justify-center items-center  rounded-md border-1 border-gray-200 dark:border-gray-800 "
            >
              <CldUploadButton
                uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_PRESET}
                onUpload={handleImageUpload}
                className={` p-20  border-4  flex flex-col gap-1 items-center`}
              >
                <BiImageAdd size={30} />
                <h3 className="   text-sm font-medium text-gray-700 dark:text-gray-300 ">
                  Upload Image
                </h3>
              </CldUploadButton>
            </div>
          )
          }

        </div>
        <div className=" w-full">
          <label
            htmlFor="totalProjects"
            className="block text-lg mb-1 ml-1 font-semibold text-gray-900 dark:text-gray-300"
          >
            Your Total Projects
          </label>

          <input
            type="text"
            id="totalProjects"
            value={totalProjects}
            onChange={(e: any) => setTotalProjects(e.target.value)}
            placeholder="Your Total Projects"
            className="mt-1 w-full rounded-md border-2 p-3 bg-[#f8f9fa] dark:bg-gray-950  font-medium border-gray-400 dark:border-gray-600  dark:focus-within:border-gray-300 focus-within:border-gray-900 shadow-sm sm:text-sm"
          />
        </div>
        <div className=" w-full">
          <label
            htmlFor="experience"
            className="block text-lg mb-1 ml-1 font-semibold text-gray-900 dark:text-gray-300"
          >
            Your Total Experience
          </label>

          <input
            type="text"
            id="experience"
            value={totalExperience}
            onChange={(e: any) => setTotalExperience(e.target.value)}
            placeholder="Your Total Experience"
            className="mt-1 w-full rounded-md border-2 p-3 bg-[#f8f9fa] dark:bg-gray-950  font-medium border-gray-400 dark:border-gray-600  dark:focus-within:border-gray-300 focus-within:border-gray-900 shadow-sm sm:text-sm"
          />
        </div>
        <div className="w-full">
          <label
            htmlFor="role"
            className="block text-lg mb-1 ml-1 font-semibold text-gray-900 dark:text-gray-300"
          >
            Your Role
          </label>

          <input
            type="text"
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            placeholder="Your current role"
            className="mt-1 w-full rounded-md border-2 p-3 bg-[#f8f9fa] dark:bg-gray-950 font-medium border-gray-400 dark:border-gray-600 dark:focus-within:border-gray-300 focus-within:border-gray-900 shadow-sm sm:text-sm"
          />
        </div>
        <div className="w-full">
          <label
            htmlFor="title"
            className="block text-lg mb-1 ml-1 font-semibold text-gray-900 dark:text-gray-300"
          >
            Title of your landing page
          </label>

          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Landing page title"
            className="mt-1 w-full rounded-md border-2 p-3 bg-[#f8f9fa] dark:bg-gray-950 font-medium border-gray-400 dark:border-gray-600 dark:focus-within:border-gray-300 focus-within:border-gray-900 shadow-sm sm:text-sm"
          />
        </div>
        <div className="w-full">
          <label
            htmlFor="shortdesc"
            className="block text-lg mb-1 ml-1 font-semibold text-gray-900 dark:text-gray-300"
          >
            Short description of your landing page
          </label>

          <textarea
            id="shortdesc"
            rows={2}
            value={shortDesc}
            onChange={(e) => setShortdesc(e.target.value)}
            placeholder="Short Description"
            className="resize-none mt-1 w-full rounded-md border-2 p-3 bg-[#f8f9fa] dark:bg-gray-950 font-medium border-gray-400 dark:border-gray-600 dark:focus-within:border-gray-300 focus-within:border-gray-900 shadow-sm sm:text-sm"
          />
        </div>

        <div className="w-full">
          <label
            htmlFor="description"
            className="block text-lg mb-1 ml-1 font-semibold text-gray-900 dark:text-gray-300"
          >
            Brief Description about you
          </label>

          <textarea
            id="description"
            rows={4}
            value={descInput}
            onChange={(e) => setDescInput(e.target.value)}
            placeholder="Detailed description"
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
        <div className="w-full">
          <label
            htmlFor="link"
            className="block text-lg mb-1 ml-1 font-semibold text-gray-900 dark:text-gray-300"
          >
            Enter URL of your resume
          </label>

          <input
            type="text"
            id="link"
            value={resumeLink}
            onChange={(e) => setResumeLink(e.target.value)}
            placeholder="Resume URL"
            className="mt-1 w-full rounded-md border-2 p-3 bg-[#f8f9fa] dark:bg-gray-950 font-medium border-gray-400 dark:border-gray-600 dark:focus-within:border-gray-300 focus-within:border-gray-900 shadow-sm sm:text-sm"
          />
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

export default EditAboutDetails;
