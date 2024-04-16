import Gallery from "./Carousel";
import Services from "./services";

export default function LandingServices() {
  return (
    <div>
      <h2 className="text-center font-hemautoFontUrbanist text-7xl font-bold my-10">
        SERVICES
      </h2>
      <div className="flex justify-evenly">
        <div className="basis-[40%]">
          <Services />
        </div>
        <div className="h-[500px] basis-1/2">
          <Gallery />
      </div>
      </div>
      <div>
          Don&apos;t let breakdowns break you down. Get customized maintenance
          reminders based on your driving habits and manufacturer recommendation
          for your specific vehicle, exclusive offers, priority scheduling, and
          so much more. Register learn more
      </div>
    </div>
  );
}
