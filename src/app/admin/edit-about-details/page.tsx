import AboutAdmin from "@/components/AdminComponents/AboutAdmin";
import React from "react";
export const metadata = {
  title: "About Details",
  description: "Showcasing code, design and projects.",
};
const AdminAboutPage = () => {
  return (
    <div className="  my-16">
      <AboutAdmin />
    </div>
  );
};

export default AdminAboutPage;
