import QuickOverview from "@/components/QuickOverview";
import QuickOverviewMobile from "@/components/QuickOverviewMobile";
import ParallaxText from "@/components/ParallaxText";

function Module() {
  return (
    <section className="pt-6 h-[70vh] lg:h-full">
      <h1 className="text-3xl text-center font-semibold italic lg:not-italic text-onSurface pt-4 ">
        <span className="lg:hidden">
          <ParallaxText baseVelocity={5}>
            Explore Xpresion&apos;s Modules
          </ParallaxText>
        </span>
        <span className="hidden lg:block">Explore Xpresion&apos;s Modules</span>
      </h1>
      <div className="hidden lg:block">
        <QuickOverview />
      </div>
      <div className="lg:hidden">
        <QuickOverviewMobile />
      </div>
    </section>
  );
}

export default Module;
