import QuickOverview from "@/components/QuickOverview";
import QuickOverviewMobile from "@/components/QuickOverviewMobile";
import ParallaxText from "@/components/ParallaxText";
import Explainer from "@/components/Explainer";
import ModuleCard from "@/components/ModuleCard";
import { Modules } from "@/public/constants";

function Module() {
  return (
    <section className="pt-4 lg:pt-6 lg:h-full">
      <h1 className="text-3xl text-center font-semibold italic font-lato lg:not-italic text-onSurface pb-4 ">
        <span className="lg:hidden">
          <ParallaxText baseVelocity={5}>
            Explore Xpresion&apos;s features
          </ParallaxText>
        </span>
        <span className="hidden lg:block">Explore Xpresion&apos;s features</span>
      </h1>
      {/* <div className="hidden lg:block">
        <QuickOverview />
      </div> */}
      <div className="hidden md:block md:w-[80vw] md:px-12 md:py-10 md:mx-auto">
        <div className="hidden md:justify-center md:items-center lg:grid-cols-2 lg:grid lg:gap-6 xl:grid-cols-3 xl:gap-12 2xl:grid-cols-4">
          {
            Modules.map((module) => {
              return (
                <ModuleCard 
                  key={module.id}
                  title={module.title}
                  img={module.img}
                  htext={module.htext}
                  stext={module.desc}
                />
              );
            })
          }
        </div>
      </div>
      <div className="lg:hidden">
        <QuickOverviewMobile />
      </div>
      <div>
        <Explainer />
      </div>
      
    </section>
  );
}

export default Module;
