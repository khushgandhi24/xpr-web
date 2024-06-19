"use client";
import { useState } from "react";
import Card from "./Card";
import { Modules } from "@/public/constants";

const QuickOverview = () => {
  const [curID, setCurID] = useState(1);

  const handleClick = (id) => {
    setCurID(id);
  };

  return (
    <>
      <div className="flex flex-col gap-8 py-12 px-8 border-b-2 border-outline items-center lg:justify-around lg:flex-row">
        {Modules.map((module) => {
          return (
            <Card
              key={module.id}
              title={module.title}
              img={module.img}
              mId={module.id}
              func={() => handleClick(module.id)}
            />
          );
        })}
      </div>

      <div className="flex flex-row justify-around items-center py-6 bg-primaryContainer">
        <Card
          title={Modules[curID - 1].title}
          img={Modules[curID - 1].img}
          mId={Modules[curID - 1].id}
        />
        <p className="text-onPrimaryContainer text-lg font-semibold basis-1/3 font-sans">
          {Modules[curID - 1].desc}
        </p>
      </div>
    </>
  );
};

export default QuickOverview;
