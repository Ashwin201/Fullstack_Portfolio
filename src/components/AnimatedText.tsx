"use client";
import React from "react";
import { motion } from "framer-motion";
const AnimatedText = (props: any) => {
  return (
    <div>
      <motion.h1
        className={`text-center  font-bold text-2xl min-[320px]:text-4xl sm:text-[55px] lg:text-[60px] ${props.className}`}
        initial={{ opacity: 0.1 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {props.text}
        <br />
        {props?.text1 && props?.text1}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
