import TestimonialCarousel from "./TestimonialCarousel";

export default function LandingTestimonials() {
  return (
    <div className="text-hemautoWhite mx-[10%] py-8">
      <div className="p-20 flex justify-evenly items-center">
        <div className="text-center items-center">
          <h2 className="font-hemautoFontRoadRage text-9xl tracking-wide">
            EXPERIENCE THE<br></br>
            <div className="max-h-[300px] ">
              <img
                type="xml/svg"
                src="./src/assets/Images/Logo/HEM-Auto-Logo-Lime-Green.svg"
              ></img>
            </div>
            <div>DIFFERENCE.</div>
          </h2>
        </div>
        <div className="text-center font-hemautoFontPlay text-hemautoLightGray">
          <h3 className="text-7xl">
            But don&apos;t take it from us,
            <span className="text-4xl mt-4 text-hemautoGreen">
              <br></br>here&apos;s what our customers say.
            </span>
          </h3>
        </div>
      </div>
      <div className="flex justify-center p-8 h-[750px] ">
        <TestimonialCarousel />
      </div>
    </div>
  );
}
