import Gallery from "./Carousel";
import Services from "./services";

export default function LandingServices() {
  return (
    <div className="bg-HexagonCarbonFiber bg-contain bg-top py-96">
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
    </div>
  );
}
