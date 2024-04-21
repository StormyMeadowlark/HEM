import Gallery from "./Carousel";
import Services from "./services";
import GreenCTA from "./GreenCTA";

export default function LandingServices() {
  return (
    <div className="bg-TestimonialBackground bg-no-repeat bg-top bg-cover">
      <div className="flex justify-center pt-72">
        <div className="relative w-[30%]">
          <GreenCTA />
          <p className="green-cta-text-shadow absolute w-full inset-y-[41%] text-7xl font-hemautoUrbanist font-extrabold text-hemautoGray text-center">
            SERVICES
          </p>
        </div>
      </div>
      <div className="flex justify-evenly pb-96 mt-[-2rem]">
        <div className="basis-[50%] px-10">
          <Services />
        </div>
        <div className="basis-[30%]">
          <Gallery />
        </div>
      </div>
    </div>
  );
}
