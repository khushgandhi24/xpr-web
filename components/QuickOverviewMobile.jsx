"use client";

// import { useRef } from "react";
// import { motion } from "framer-motion";
// import { Modules } from "@/public/constants";
// import Card from "./Card";

// const QuickOverviewMobile = () => {
//   const ref = useRef(null);

//   const handleHorizantalScroll = (element, speed, distance, step) => {
//     let scrollAmount = 0;
//     const slideTimer = setInterval(() => {
//       element.scrollLeft += step;
//       scrollAmount += Math.abs(step);
//       if (scrollAmount >= distance) {
//         clearInterval(slideTimer);
//       }
//     }, speed);
//   };

//   return (
//     <>
//       <motion.div
//         whileTap={{ scale: 1.5 }}
//         className="absolute top-1/2 left-8 text-2xl font-bold"
//         onClick={() => {
//           handleHorizantalScroll(ref.current, 100, 400, -400);
//         }}
//       >
//         &lt;
//       </motion.div>
//       <div
//         className="flex flex-row flex-nowrap overflow-x-scroll scroll-smooth snap-x snap-mandatory"
//         ref={ref}
//       >
//         {Modules.map((module) => {
//           return (
//             <div className=" py-6 px-[5.5rem] bg-surface snap-center basis-full">
//               <Card
//                 key={module.id}
//                 title={module.title}
//                 img={module.img}
//                 mId={module.id}
//                 func={null}
//               />
//               <p className="pt-8">{module.desc}</p>
//             </div>
//           );
//         })}
//       </div>
//       <motion.div
//         whileTap={{ scale: 1.5 }}
//         className="absolute top-1/2 left-[90%] text-2xl font-bold"
//         onClick={() => {
//           handleHorizantalScroll(ref.current, 100, 400, 400);
//         }}
//       >
//         &gt;
//       </motion.div>
//     </>
//   );
// };

// export default QuickOverviewMobile;

import { Modules } from "@/public/utils/constants";

import React from "react";
import ScrollSlider from "./ScrollSlider";
import Card from "./Card";

const QuickOverviewMobile = () => {
  const renderCard = (module) => {
    return (
      <Card
        title={module.title}
        img={module.img}
        mId={module.id}
        func={module.func || null}
      />
    );
  };

  // const renderCard = (module) => {
  //   return (
  //     <ModuleCard
  //       title={module.title}
  //       img={module.img}
  //       htext={module.htext}
  //       stext={module.desc}
  //     />
  //   );
  // };

  return <ScrollSlider modules={Modules} renderComponent={renderCard} />;
};

export default QuickOverviewMobile;
