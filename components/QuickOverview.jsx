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
    <>
      <h1 className="text-2xl text-center font-bold text-onSurface pt-4">
        Explore Xpresion's Modules
      </h1>
      <div className="flex flex-col gap-8 py-12 px-8 border-b-2 border-outline bg-surface items-center lg:justify-around lg:flex-row">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
};

export default QuickOverview;
