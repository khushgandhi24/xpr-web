import React from "react";
import Image from "next/image";

const Card = () => {
  return (
    <div className="rounded-[50%] bg-primaryContainer w-[240px] h-[240px] text-center flex flex-col items-center justify-evenly">
      <Image
        src="/Xpr_Cloud_Color.png"
        width={200}
        height={200}
        alt="Factoid"
      />
      <h2>Lorem ipsum dolor sit amet consectetur</h2>
    </div>
  );
};

const QuickOverview = () => {
  return (
    <div className="flex py-12 px-8 border-y-2 border-outline bg-surface items-center justify-around">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default QuickOverview;
