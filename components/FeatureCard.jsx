"use client";
import { motion } from "framer-motion";

const FeatureCard = ({ title, desc, icon }) => {
  return (
    <div className="p-8 space-y-2 w-[85vw] ml-2 mr-2 lg:w-auto lg:mx-0 lg:space-y-3 border-2 border-outline rounded-xl">
      <span className="inline-block text-primary">{icon}</span>

      <h1 className="text-xl font-semibold text-gray-800 capitalize ">
        {title}
      </h1>

      <p className="text-gray-600">{desc}</p>

      <motion.a
        whileTap={{ scale: 1.2 }}
        href="#"
        className="inline-flex p-2 text-primary capitalize transition-colors duration-300 transform bg-primaryContainer rounded-full rtl:-scale-x-100 hover:underline hover:text-onPrimaryContainer"
      >
        {icon}
      </motion.a>
    </div>
  );
};

export default FeatureCard;
