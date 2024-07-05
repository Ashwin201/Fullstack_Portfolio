import AdminProjects from "@/components/AdminComponents/AdminProjects";
import React from "react";
export const metadata = {
  title: "Admin Projects",
  description: "Showcasing code, design and projects.",
};
const AdminProjectPage = () => {
  return (
    <div className=" my-16 ">
      <AdminProjects />
    </div>
  );
};

export default AdminProjectPage;
