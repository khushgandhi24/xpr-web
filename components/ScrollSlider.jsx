"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

const ScrollSlider = ({ modules, renderComponent }) => {
  const ref = useRef(null);

  const handleHorizantalScroll = (element, speed, distance, step) => {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      element.scrollLeft += step;
      console.log(element.scrollLeft);
      scrollAmount += Math.abs(step);
      if (scrollAmount >= distance) {
        clearInterval(slideTimer);
      }
    }, speed);
  };

  return (
    <>
      <motion.div
        whileTap={{ scale: 1.5 }}
        className="absolute top-1/2 left-8 text-2xl font-bold cursor-pointer"
        onClick={() => {
          handleHorizantalScroll(ref.current, 100, 400, -400);
        }}
      >
        &lt;
      </motion.div>
      <div
        className="flex flex-row flex-nowrap overflow-x-scroll no-scrollbar scroll-smooth snap-x snap-mandatory"
        ref={ref}
      >
        {modules.map((module) => (
          <div
            key={module.id}
            className="py-6 px-[5.5rem] bg-surface snap-center snap-always basis-full"
          >
            {renderComponent(module)}
            <p className="pt-8">{module.desc}</p>
          </div>
        ))}
      </div>
      <motion.div
        whileTap={{ scale: 1.5 }}
        className="absolute top-1/2 left-[90%] text-2xl font-bold cursor-pointer"
        onClick={() => {
          handleHorizantalScroll(ref.current, 100, 400, 400);
        }}
      >
        &gt;
      </motion.div>
    </>
  );
};

export default ScrollSlider;
