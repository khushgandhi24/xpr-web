"use client";

import Article from "@/components/Article";
import Comments from "@/components/Comments";
import ParallaxText from "@/components/ParallaxText";
import { Articles } from "@/public/utils/constants";
import { motion } from "framer-motion";
import { useRef } from "react";

function News() {
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
    <section className="bg-white">
      <div className="container px-6 py-10 mx-auto">
        <div className="py-4 mb-6 font-slab mx-auto">
          <Comments />
        </div>
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-800 lg:text-3xl">
            {/* <span className="italic lg:hidden">
              <ParallaxText baseVelocity={5}>From the blog</ParallaxText>
            </span> */}
            <span className="font-lato">From the blog</span>
          </h1>

          <p className="max-w-lg mx-auto mt-4 font-lato text-gray-500">
            Expert opinions and insights on the latest trends in logistics and
            express industries
          </p>
        </div>
        <div className="h-[325px] mb-32">
          <h1 className="text-4xl text-center pt-48 italic font-semibold">Coming Soon...</h1>
        </div>
        {/* <div className="hidden lg:grid lg:grid-cols-1 gap-8 mt-8 lg:mt-12 md:mt-16 md:grid-cols-2 xl:grid-cols-3">
          {Articles.map((article) => {
            return (
              <Article
                key={article.id}
                title={article.title}
                author={article.author}
                hero={article.img}
                link={article.link}
                short={article.short}
                role={article.role}
              />
            );
          })}
        </div>
        <div className="mt-8 lg:hidden">
          <>
            <motion.div
              whileTap={{ scale: 1.5 }}
              className="absolute top-[50%] left-2 text-2xl font-bold cursor-pointer"
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
              {Articles.map((article) => (
                <div
                  key={article.id}
                  className="snap-center snap-always basis-full"
                >
                  <Article
                    key={article.id}
                    title={article.title}
                    author={article.author}
                    hero={article.img}
                    short={article.short}
                    link={article.link}
                    role={article.role}
                  />
                </div>
              ))}
            </div>
            <motion.div
              whileTap={{ scale: 1.5 }}
              className="absolute top-[50%] left-[94%] text-2xl font-bold cursor-pointer"
              onClick={() => {
                handleHorizantalScroll(ref.current, 100, 400, 400);
              }}
            >
              &gt;
            </motion.div>
          </>
        </div> */}
      </div>
    </section>
  );
}

export default News;
