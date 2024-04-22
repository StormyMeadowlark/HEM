import Gallery from "./Carousel";
import Services from "./services";

export default function LandingServices() {
  return (
    <div className="px-[10%]">
      <div className="flex justify-center">
        <p className="w-full text-8xl font-hemautoUrbanist font-extrabold text-center pb-10">
          SERVICES
        </p>
      </div>
      <div className="flex justify-evenly">
        <div className="basis-[50%] my-20 px-5 shadow-inner shadow-hemautoGray bg-gradient-to-br  from-hemautoGray/5 via-hemautoGreen/10 via-hemautoMediumGreen/50 to-hemautoGray/75 rounded-3xl">
          <Services />
        </div>
        <div className="basis-[40%] pb-20 px-5">
          <Gallery />
        </div>
      </div>
    </div>
  );
}
