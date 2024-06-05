"use client";

import dynamic from "next/dynamic";
const Chrono = dynamic(() => import("react-chrono").then((mod) => mod.Chrono), {
  ssr: false,
});

function About() {
  const items = [
    {
      title: "May 1940",
      cardTitle: "Event 1",
      cardSubtitle: "This is the subtitle for event 1",
      cardDetailedText: "This is a detailed text for event 1.",
    },
    {
      title: "June 1940",
      cardTitle: "Event 2",
      cardSubtitle: "This is the subtitle for event 2",
      cardDetailedText: "This is a detailed text for event 2.",
    },
    {
      title: "July 1940",
      cardTitle: "Event 3",
      cardSubtitle: "This is the subtitle for event 3",
      cardDetailedText: "This is a detailed text for event 3.",
    },
    {
      title: "July 1940",
      cardTitle: "Event 3",
      cardSubtitle: "This is the subtitle for event 3",
      cardDetailedText: "This is a detailed text for event 3.",
    },
  ];

  return (
    <section className="border-b-2 border-primary">
      <h1 className="text-3xl text-onSurface text-center my-4 font-bold">
        Our Journey
      </h1>
      <div className="w-full h-[600x] px-12 py-4 hidden lg:flex">
        <Chrono
          items={items}
          cardWidth={600}
          cardHeight={400}
          mode="HORIZONTAL"
          disableToolbar={true}
          //nestedCardHeight
          //showAllCardsHorizontal={true}
          theme={{
            primary: "#385Ca9",
            secondary: "#8A7921",
            cardBgColor: "#D9E2FF",
            cardForeColor: "#001849",
            titleColor: "black",
            titleColorActive: "#f0f0f0",
          }}
        />
      </div>
      <div className="w-full h-full px-12 py-4 lg:hidden">
        <Chrono
          items={items}
          mode="VERTICAL"
          disableToolbar={true}
          //nestedCardHeight
          //showAllCardsHorizontal={true}
          theme={{
            primary: "#385Ca9",
            secondary: "#8A7921",
            cardBgColor: "#D9E2FF",
            cardForeColor: "#001849",
          }}
        >
          <div className="chrono-icons">
            <img src="menu.svg" alt="image1" />
            <img src="menu.svg" alt="image2" />
          </div>
        </Chrono>
      </div>
    </section>
  );
}

export default About;

{
  /* <>
      <section className="py-12 my-6 px-12 grid">
        <div className="absolute rounded-[50%] w-8 h-8 bg-complimentary z-10"></div>
        <h2 className="absolute z-10 mt-10 ml-[0.4rem]">P1</h2>
        <p className="absolute z-10 mt-20 ml-[0.4rem] w-8 h-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="absolute ml-[10rem] rounded-[50%] w-8 h-8 bg-complimentary z-10"></div>
        <h2 className="absolute z-10 mt-10 ml-[10.4rem]">P2</h2>
        <div className="absolute ml-[20rem] rounded-[50%] w-8 h-8 bg-complimentary z-10"></div>
        <h2 className="absolute z-10 mt-10 ml-[20.4rem]">P3</h2>
        <div className="absolute ml-[30rem] rounded-[50%] w-8 h-8 bg-complimentary z-10"></div>
        <h2 className="absolute z-10 mt-10 ml-[30.4rem]">P3</h2>
        <div className="absolute ml-[40rem] rounded-[50%] w-8 h-8 bg-complimentary z-10"></div>
        <h2 className="absolute z-10 mt-10 ml-[40.4rem]">P3</h2>
        <div className="absolute ml-[50rem] rounded-[50%] w-8 h-8 bg-complimentary z-10"></div>
        <h2 className="absolute z-10 mt-10 ml-[50.4rem]">P3</h2>
        <div className="absolute ml-[60rem] rounded-[50%] w-8 h-8 bg-complimentary z-10"></div>
        <h2 className="absolute z-10 mt-10 ml-[60.4rem]">P3</h2>
        <div className="absolute ml-[70rem] rounded-[50%] w-8 h-8 bg-complimentary z-10"></div>
        <hr
          className="absolute z-0 mt-3"
          style={{
            color: "#385ca9",
            height: 4,
            width: "95%",
            backgroundColor: "#001849",
          }}
        />
      </section>
      <div className="bg-primary w-full h-[420px] mt-[9rem] mb-2"></div>
    </> */
}
