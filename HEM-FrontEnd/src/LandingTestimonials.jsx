import TestimonialCarousel from "./TestimonialCarousel";

export default function LandingTestimonials() {
  return (
    <div className="text-hemautoWhite">
      <div className="pt-20 flex justify-evenly items-center">
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
        <div className="text-center font-hemautoFontPlay font-extrabold mt-52">
          <h3 className="text-7xl">BUT DON&apos;T TAKE IT FROM US</h3>
          <h3 className="text-4xl mt-4">
            HERE&apos;S WHAT OUR CUSTOMERS SAY
          </h3>
        </div>
      </div>
      <div className="flex justify-center pb-10 h-[750px] ">
        <TestimonialCarousel />
      </div>
    </div>
  );
}
