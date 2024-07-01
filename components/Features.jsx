"use client";

import FeatureCard from "./FeatureCard";
import { Highlights } from "@/public/constants";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Features = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 0.5, 0.75, 1]
  );

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
        <div className="flex flex-row justify-between">
          <h1 className="text-2xl font-semibold text-gray-800 lg:text-3xl font-sans">
            Why choose
            <br />
            Xpresion <span className="font-slab">for your business?</span>
          </h1>
          <motion.h1
            style={{ opacity: opacity }}
            className="hidden md:block text-2xl text-end font-semibold italic text-onPrimaryContainer lg:text-2xl font-sans"
          >
            We provide efficient, reliable logistics management
            <br /> with expert-driven solutions
          </motion.h1>
        </div>

        <div className="hidden lg:grid md:grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 xl:grid-cols-2">
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
              className="absolute top-[85%] left-2 text-2xl font-bold cursor-pointer"
              onClick={() => {
                handleHorizantalScroll(ref.current, 100, 340, -340);
              }}
            >
              &lt;
            </motion.div>
            <div
              className="flex flex-row flex-nowrap overflow-x-scroll no-scrollbar scroll-smooth snap-x snap-mandatory"
              ref={ref}
            >
              {Highlights.map((highlight) => (
                <div
                  key={highlight.id}
                  className="snap-center snap-always basis-full"
                >
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
              className="absolute top-[85%] left-[95%] text-2xl font-bold cursor-pointer"
              onClick={() => {
                handleHorizantalScroll(ref.current, 100, 340, 340);
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
