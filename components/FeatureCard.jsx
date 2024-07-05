"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowDown } from "@/public/utils/svgs";

const FeatureCard = ({ title, desc, icon }) => {
  // const [visible, setVisible] = useState(false);
  // const [isRotated, setIsRotated] = useState(false);

  // const handleTap = () => {
  //   setIsRotated(prev => !prev);
  //   view();
  // }
  // const view = () => {
  //   setVisible(!visible);
  // };

  return (
    <motion.div initial={{scale: 0, opacity: 0}} whileInView={{scale: 1, opacity:1}} viewport={{once: true}} transition={{duration: 0.75, type: "keyframes"}} 
      className="p-8 space-y-2 w-[85vw] h-[235px] ml-2 mr-2 lg:w-auto lg:mx-0 lg:space-y-3 border-2 bg-surface border-black rounded-xl">
      <span className="inline-block text-error/90">{icon}</span>

      <h1 className="text-xl font-semibold text-onSurface font-lato">{title}</h1>

      <p
        className={`text-gray inline-block font-medium font-sans`}
      >
        {desc}
      </p>

      {/* <motion.a
        whileHover={{ scale: 1.2 }}
        onTap={handleTap}
        animate={{ rotate: isRotated ? 180 : 0 }}
        className={`inline-flex justify-end p-2 text-primary bg-primaryContainer rounded-full hover:underline hover:text-onPrimaryContainer self-end`}
      >
        <ArrowDown />
      </motion.a> */}
    </motion.div>
  );
};

export default FeatureCard;
