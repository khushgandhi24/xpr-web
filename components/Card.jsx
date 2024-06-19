"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Card = ({ img, title, mId, func }) => {
  return (
    <div className="flex flex-col-reverse cursor-pointer">
      <h2 className="w-[180px] text-lg text-center mx-auto font-lato cursor-pointer">
        {title}
      </h2>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ type: "spring", duration: 0.75 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1.1 }}
      >
        <div
          className="rounded-[50%] px-2 bg-surface border-4 border-primaryContainer w-[240px] h-[240px] mb-4 text-center flex flex-col items-center justify-evenly"
          onClick={func}
        >
          <Image
            src={img}
            width={200}
            height={200}
            alt={mId}
            unoptimized={true}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
