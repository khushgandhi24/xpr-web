"use client";

import dynamic from "next/dynamic";
import { Items } from "@/public/constants";
const Chrono = dynamic(() => import("react-chrono").then((mod) => mod.Chrono), {
  ssr: false,
});

function About() {
  return (
    <section className="border-b-2 pt-6 border-primary h-[70vh] lg:h-full">
      <h1 className="text-2xl lg:text-3xl text-onSurface text-center mt-4 lg:my-4 font-semibold font-lato italic lg:not-italic">
        Xpresion&apos;s evolution
        <br className="lg:hidden" />{" "}
        <span className="hidden lg:inline-block font-normal font-slab">
          - Landmark innovations
        </span>
        <br className="lg:hidden" />{" "}
        <span className="hidden font-lato lg:inline-block">
          through the years
        </span>
      </h1>
      <div className="w-full h-[600x] py-4 px-12 hidden lg:flex">
        <Chrono
          items={Items}
          itemWidth={500}
          cardWidth={600}
          cardHeight={300}
          mode="VERTICAL_ALTERNATING"
          disableToolbar={true}
          fontSizes={{
            cardSubtitle: "1rem",
            cardText: "1rem",
            cardTitle: "1.2rem",
            title: "1.25rem",
          }}
          theme={{
            primary: "#385Ca9",
            secondary: "#D9E2FF",
            cardBgColor: "#D9E2FF",
            cardTitleColor: "#001849",
            cardDetailsColor: "#001849",
            cardSubtitleColor: "#ba1a1a",
            titleColor: "grey",
            titleColorActive: "#001849",
          }}
        />
      </div>
      <div className="w-full h-full px-2 py-4 lg:hidden">
        <Chrono
          items={Items}
          mode="VERTICAL"
          disableToolbar={true}
          theme={{
            primary: "#385Ca9",
            secondary: "#D9E2FF",
            cardBgColor: "#D9E2FF",
            cardTitleColor: "#001849",
            cardDetailsColor: "#001849",
            cardSubtitleColor: "#ba1a1a",
            titleColor: "grey",
            titleColorActive: "#001849",
          }}
        >
          {/* <div className="chrono-icons">
            <img
              src="https://img.icons8.com/ios-filled/50/000000/marker.png"
              alt="marker"
            />
          </div> */}
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
