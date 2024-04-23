import Gallery from "../ComponentParts/Carousel";
import Services from "../ComponentParts/services";

export default function LandingServices() {
  return (
    <div className="px-[10%] pb-8 mb-20">
        <p className=" pb-20 flex justify-center w-full text-8xl font-hemautoPlay font-extrabold text-center">
          SERVICES
        </p>
      <div className="flex justify-evenly">
        <div className="basis-[50%] content-center shadow-inner shadow-hemautoGreen/100 bg-hemautoTrueBlack/75 rounded-3xl">
          <Services />
        </div>
        <div className="basis-[40%]">
          <Gallery />
        </div>
      </div>
    </div>
  );
}
