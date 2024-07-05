import EditAdminExperience from "@/components/AdminComponents/EditAdminExperience";
import React from "react";
import { FaTwitter } from "react-icons/fa";
export async function generateMetadata({ params }) {
  const data = await getData(params.id);
  return {
    title: data?.role,
    description: "Showcasing code, design and projects.",
  };
}
const getData = async (id) => {
  try {
    const res = await fetch(
      `${process.env.NEXTAUTH_URL}/api/experience/${id}`,
      {
        cache: "no-store",
      }
    );
    if (res.ok) {
      const data = await res.json();
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};
const EditExperience = async ({ params }) => {
  const id = params.id;
  const data = await getData(id);
  return (
    <>
      {data && data._id === id ? (
        <EditAdminExperience data={data} id={id} />
      ) : (
        <div className="flex flex-col items-center space-y-4">
          <div className="flex flex-col gap-3 items-center space-x-4">
            <FaTwitter size={50} />
            <h1 className="text-2xl font-bold">Experience not found</h1>
          </div>
          <p className="text-base text-center font-semibold">
            It looks like the experience you&apos;re looking for doesn&apos;t
            exist. Please verify the ID and try again.
          </p>
        </div>
      )}
    </>
  );
};

export default EditExperience;
