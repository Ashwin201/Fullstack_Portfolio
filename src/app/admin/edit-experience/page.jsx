import AdminExperience from "@/components/AdminComponents/AdminExperience";
import React from "react";
export const metadata = {
  title: "Admin Experiences",
  description: "Showcasing code, design and projects.",
};
const AdminExperiencePage = () => {
  return (
    <div className=" my-16">
      <AdminExperience />
    </div>
  );
};

export default AdminExperiencePage;
