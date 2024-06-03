"use client";

import React from "react";
import "@reactuiutils/horizontal-timeline/timeline.css";
import {
  Action,
  Event,
  Subtitle,
  Timeline,
  Title,
} from "@reactuiutils/horizontal-timeline";

function About() {
  return (
    <section>
      <Timeline className="hidden lg:flex" minEvents={6}>
        {/* Without action */}
        <Event color="#87a2c7">
          <Title>Agendado</Title>
          <Subtitle>26/03/2019 09:51</Subtitle>
        </Event>

        {/* With action */}
        <Event color="red">
          <Title>Erro</Title>
          <Subtitle>26/03/2019 09:51</Subtitle>
          <Action onClick={() => alert("clicou")}>Detalhes</Action>
        </Event>

        {/* Without title, subtitle and action */}
        <Event color="darkGreen" />
      </Timeline>
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
