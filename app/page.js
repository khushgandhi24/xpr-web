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
          <h1 className="text-2xl font-bold text-center lg:text-start">
            Hero Title
          </h1>
          <h3 className="text-xl my-2 text-center lg:text-start">Subtitle</h3>
          <p className="hidden lg:block">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            vitae mauris risus. In hac habitasse platea dictumst. In tempor nibh
            id est posuere semper. Pellentesque dapibus nibh purus, vel
            ultricies ipsum pretium sit amet. Integer eu dictum nibh, vehicula
            bibendum urna. Sed interdum blandit sapien, sit amet lobortis urna
            varius id. Maecenas nulla neque, dapibus non rutrum vel, auctor
            vitae sapien. Etiam commodo luctus ex in feugiat. In et libero a
            metus pretium blandit elementum eu magna. Donec at luctus lectus.
            Vivamus luctus lacus non interdum ullamcorper. Nulla non lacinia
            neque. Etiam ornare arcu nec varius laoreet.
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
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
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
              borderColor={"border-complimentary"}
              bgColor={"bg-complimentary"}
              textColor={"text-surface"}
              className={"hover:bg-surface hover:text-complimentary"}
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
