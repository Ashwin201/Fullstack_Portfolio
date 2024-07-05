import EditAboutDetails from "@/components/AdminComponents/EditAboutDetails";
import React from "react";
import { FaTwitter } from "react-icons/fa";
export async function generateMetadata({ params }: { params: any }) {
  const data = await getData(params.id);
  return {
    title: data?.title,
    description: "Showcasing code, design and projects.",
  };
}
const getData = async (id: string) => {
  try {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/about/${id}`, {
      cache: "no-store",
    });
    if (res.ok) {
      const data = await res.json();
      return data;
    } else {
      console.log("Failed to fetch data. Status:", res.status);
    }
  } catch (error) {
    console.log("Error fetching data:", error);
  }
};

const EditAboutDetailPage = async ({ params }: { params: any }) => {
  const id = params.id;
  const data = await getData(id);
  // console.log(data);
  return (
    <>
      {data && data?._id === id ? (
        <EditAboutDetails data={data} id={id} />
      ) : (
        <div className="flex flex-col items-center space-y-4">
          <div className="flex flex-col gap-3 items-center space-x-4">
            <FaTwitter size={50} />
            <h1 className="text-2xl font-bold">About Detail not found</h1>
          </div>
          <p className="text-base text-center font-semibold">
            It looks like the about detail you&apos;re looking for doesn&apos;t
            exist. Please verify the ID and try again.
          </p>
        </div>
      )}
    </>
  );
};

export default EditAboutDetailPage;
