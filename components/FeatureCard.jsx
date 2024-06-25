"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowDown } from "@/public/svgs";

const FeatureCard = ({ title, desc, icon }) => {
  const [visible, setVisible] = useState(false);
  const [isRotated, setIsRotated] = useState(false);

  const handleTap = () => {
    setIsRotated(prev => !prev);
    view();
  }
  const view = () => {
    setVisible(!visible);
  };

  return (
    <div className="p-8 space-y-2 w-[85vw] ml-2 mr-2 lg:w-auto lg:mx-0 lg:space-y-3 border-2 border-outline rounded-xl">
      <span className="inline-block text-error/90">{icon}</span>

      <h1 className="text-xl font-semibold text-gray-800 font-lato">{title}</h1>

      <p
        className={`text-gray-600 ${
          visible ? "inline-block" : "hidden"
        } font-sans`}
      >
        {desc}
      </p>

      <motion.a
        whileHover={{ scale: 1.2 }}
        onTap={handleTap}
        animate={{ rotate: isRotated ? 180 : 0 }}
        className={`inline-flex justify-end p-2 text-primary bg-primaryContainer rounded-full hover:underline hover:text-onPrimaryContainer self-end`}
      >
        <ArrowDown />
      </motion.a>
    </div>
  );
};

export default FeatureCard;
