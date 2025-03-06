import Login from "@/components/Login";
import React from "react";
export const metadata = {
  title: "Login ",
  description: "Showcasing code, design and projects.",
};
const LoginPage = () => {
  return (
    <div className=" w-full h-[100vh] flex justify-center items-center ">
      <Login />
    </div>
  );
};

export default LoginPage;
