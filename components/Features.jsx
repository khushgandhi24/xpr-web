"use client";

import FeatureCard from "./FeatureCard";
import { Highlights } from "@/public/constants";
import { motion } from "framer-motion";
import { useRef } from "react";

const Features = () => {
  const ref = useRef(null);

  const handleHorizantalScroll = (element, speed, distance, step) => {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      element.scrollLeft += step;
      scrollAmount += Math.abs(step);
      if (scrollAmount >= distance) {
        clearInterval(slideTimer);
      }
    }, speed);
  };

  return (
    <section className="bg-gradient-to-b from-primaryContainer to-surface">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl">
          explore our <br /> awesome{" "}
          <span className="underline decoration-primary">Features</span>
        </h1>

        <p className="mt-4 text-gray-600 xl:mt-6">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quam
          voluptatibus
        </p>

        <div className="hidden lg:grid lg:grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
          {Highlights.map((highlight) => {
            return (
              <FeatureCard
                key={highlight.id}
                title={highlight.title}
                desc={highlight.desc}
                icon={highlight.icon}
              />
            );
          })}
        </div>
        <div className="mt-8 lg:hidden">
          <>
            <motion.div
              whileTap={{ scale: 1.5 }}
              className="absolute top-[85%] left-2 text-3xl font-bold cursor-pointer"
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
              {Highlights.map((highlight) => (
                <div key={highlight.id} className="snap-center basis-full">
                  <FeatureCard
                    title={highlight.title}
                    desc={highlight.desc}
                    icon={highlight.icon}
                  />
                </div>
              ))}
            </div>
            <motion.div
              whileTap={{ scale: 1.5 }}
              className="absolute top-[85%] left-[93%] text-3xl font-bold cursor-pointer"
              onClick={() => {
                handleHorizantalScroll(ref.current, 100, 400, 400);
              }}
            >
              &gt;
            </motion.div>
          </>
        </div>
      </div>
    </section>
  );
};

export default Features;
