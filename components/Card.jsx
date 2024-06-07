"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Card = ({ img, title, mId, func }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ type: "spring", duration: 0.75 }}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 1.1 }}
    >
      <div
        className="rounded-[50%] px-2 bg-primaryContainer w-[240px] h-[240px] text-center flex flex-col items-center justify-evenly"
        onClick={func}
      >
        <Image src={img} width={200} height={200} alt={mId} />
        <h2 className="w-[180px] text-lg">{title}</h2>
      </div>
    </motion.div>
  );
};

export default Card;
