import Button from "@/components/Button";
import Features from "@/components/Features";
import Image from "next/image";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { ArrowIcon } from "@/public/svgs";

const Home = () => {
  return (
    <div className="h-[70vh] overflow-y-scroll no-scrollbar lg:h-full">
      <section className="lg:flex lg:items-center lg:justify-between lg:px-12 lg:py-4 bg-gradient-to-b from-surface to-primaryContainer">
        <Image
          src="/Hero.svg"
          alt="Xpresion Hero Image"
          priority={true}
          //sizes="(max-width: 560px) 100vw, 100vw"
          width={662}
          height={480}
          className="lg:basis-2/5 lg:mt-20 lg:ml-6 lg:pt-0 pt-6"
        />
        <article className="lg:basis-2/5 px-4">
          <h1 className="text-2xl lg:text-4xl font-semibold text-center lg:text-start leading-snug">
            Delivering Excellence on Time, <br className="" />
            <span className="text-primary italic">Every Time</span>.
          </h1>
          <h3 className="text-lg lg:text-2xl text-error/85 font-semibold my-4 text-center lg:text-start">
            Experience the Difference with Xpresion
          </h3>
          <p className="hidden lg:block text-lg">
            Step into the future of logistics management with Xpresion, the
            industry&apos;s premier choice, trusted by countless companies
            worldwide.
          </p>
          <Accordion
            className="lg:hidden bg-surface border-2 border-primary"
            sx={{
              boxShadow: 0,
              borderRadius: 1,
            }}
          >
            <AccordionSummary
              sx={{ fontWeight: 700, fontSize: 16 }}
              expandIcon={<ArrowIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              Read more...
            </AccordionSummary>
            <AccordionDetails className="font-semibold text-onSurface">
              Step into the future of logistics management with Xpresion, the
              industry&apos;s premier choice, trusted by countless companies
              worldwide.
            </AccordionDetails>
          </Accordion>
          <div className="flex flex-row mt-6 gap-8 justify-center lg:justify-start">
            <Button
              title={"Learn More"}
              borderColor={"border-error"}
              bgColor={"bg-surface"}
              textColor={"text-error"}
              className={"hover:bg-error hover:text-surface"}
            />
            <Button
              title={"Learn More"}
              borderColor={"border-primary"}
              bgColor={"bg-primary"}
              textColor={"text-surface"}
              className={"hover:bg-surface hover:text-primary"}
            />
          </div>
        </article>
      </section>
      <section>
        <Features />
      </section>
    </div>
  );
};

export default Home;
