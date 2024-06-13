import Button from "@/components/Button";
import Features from "@/components/Features";
import Image from "next/image";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { FlameIcon } from "@/public/svgs";

const Home = () => {
  return (
    <>
      <section className="lg:flex lg:items-center lg:justify-between lg:px-12 lg:py-4 bg-gradient-to-b from-surface to-primaryContainer">
        <Image
          src="/Xp1.png"
          alt="Xpresion Hero Image"
          priority={true}
          //sizes="(max-width: 560px) 100vw, 100vw"
          width={662}
          height={480}
          className="lg:basis-2/5"
        />
        <article className="lg:basis-2/5 px-4">
          <h1 className="text-4xl font-semibold text-center lg:text-start leading-snug">
            Delivering Excellence on Time, <br className="" />
            <span className="text-primary italic">Every Time</span>.
          </h1>
          <h3 className="text-2xl text-error/85 font-semibold my-4 text-center lg:text-start">
            Experience the Difference with Xpresion
          </h3>
          <p className="hidden lg:block text-lg">
            Step into the future of logistics management with Xpresion. For a
            quarter of a century, Xpresion has stood as the industry's premier
            choice, trusted by countless companies worldwide. Our commitment to
            innovation ensures that Xpresion evolves alongside the dynamic needs
            of the logistics sector. From day-to-day operations to billing,
            track and trace, and more, Xpresion's cloud-based software delivers
            a comprehensive suite of features designed to streamline your
            processes seamlessly. Join the legacy of excellence with Xpresion
            and unlock the full potential of your logistics operations with our
            state-of-the-art software solution.
          </p>
          <Accordion
            className="lg:hidden bg-primaryContainer border-2 border-primary"
            sx={{
              boxShadow: 0,
              borderRadius: 1,
            }}
          >
            <AccordionSummary
              sx={{ fontWeight: 600 }}
              expandIcon={<FlameIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              Read more...
            </AccordionSummary>
            <AccordionDetails className="font-semibold text-onSurface">
              Step into the future of logistics management with Xpresion. For a
              quarter of a century, Xpresion has stood as the industry's premier
              choice, trusted by countless companies worldwide. Our commitment
              to innovation ensures that Xpresion evolves alongside the dynamic
              needs of the logistics sector. From day-to-day operations to
              billing, track and trace, and more, Xpresion's cloud-based
              software delivers a comprehensive suite of features designed to
              streamline your processes seamlessly. Join the legacy of
              excellence with Xpresion and unlock the full potential of your
              logistics operations with our state-of-the-art software solution.
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
    </>
  );
};

export default Home;
