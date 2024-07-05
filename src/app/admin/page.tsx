import React from "react";
export const metadata = {
  title: "Admin Page",
  description: "Showcasing code, design and projects.",
};
const AdminPage = () => {
  return (
    <>
      <div className="  flex flex-col gap-5 justify-center items-center sm:px-16 md:px-24 lg:px-44">
        <h2 className=" font-bold sm:font-extrabold text-center   text-3xl sm:text-6xl xl:text-5xl tracking-wide ">
          Welcome, Ashmin! Access Your Portfolio Website&apos;s Exclusive
          Backend.
        </h2>
        <div>
          <p className="font-medium text-center text-base md:text-lg mt-5 md:mt-8 xl:mt-5 text-[16px] mb-6">
            Hello Ashmin! 🚀 Step into the exclusive realm of your portfolio
            website&apos;s admin backend, where you wield the tools to shape
            your online presence. Unleash the potential of customization,
            analytics, and seamless management.
          </p>
        </div>
      </div>
    </>
  );
};

export default AdminPage;
