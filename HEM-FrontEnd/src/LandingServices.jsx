import Gallery from "./Carousel";
import Services from "./services";

export default function LandingServices() {
  return (
    <div className="bg-TestimonialBackground bg-no-repeat bg-top bg-contain h-[1660px] pt-[5%]">
      <h2 className="text-center font-hemautoFontPlay text-9xl font-semibold pt-60 pb-[5rem] text-shadow-hemautoGray-lg">
       SERVICES
      </h2>
      <div className="flex justify-center px-20">
        <div className="basis-[60%] mx-40">
          <Services />
        </div>
        <div className="basis-1/2">
          <Gallery />
        </div>
      </div>
    </div>
  );
}
