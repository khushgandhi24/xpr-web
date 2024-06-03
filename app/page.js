import QuickOverview from "@/components/QuickOverview";
import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <>
      <section className="lg:flex lg:items-center lg:justify-between lg:px-12">
        <Image
          src="/Xp1.png"
          alt="Xpresion Hero Image"
          //sizes="(max-width: 560px) 100vw, 100vw"
          width={662}
          height={480}
          className="basis-2/5"
        />
        <article className="basis-2/5">
          <h1>Hero Title</h1>
          <h3>Subtitle</h3>
          <p>
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
        </article>
      </section>
      <section>
        <QuickOverview />
      </section>
    </>
  );
};

export default Home;
