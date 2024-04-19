import TestimonialCarousel from "./TestimonialCarousel";

export default function LandingTestimonials() {
  return (
    <div className="bg-reasonsBackground mt-[-1px] bg-no-repeat text-hemautoWhite bg-cover">
      <div className="flex text-center items-center justify-center">
        <h2 className="m-4 font-hemautoFontRoadRage text-9xl px-32">
          EXPERIENCE THE<br></br>
          <div className="m-4 max-h-[300px] px-10 py-10">
            <img
              type="xml/svg"
              src="./src/assets/Images/Logo/HEM-Auto-Logo-Lime-Green.svg"
            ></img>
          </div>
          <br></br>DIFFERENCE.
        </h2>
      </div>
      <div className="p-10 text-center font-hemautoFontPlay font-extrabold">
        <h3 className="text-7xl">BUT DON&apos;T TAKE IT FROM US</h3>
        <h3 className="text-4xl">HERE&apos;S WHAT OUR CUSTOMERS HAVE TO SAY</h3>
      </div>
      <div className="flex justify-center h-[750px]">
        <TestimonialCarousel />
      </div>
      <div className="block">
        Don&apos;t take it from us listen to our customers random reviews length
        of time viewed determines the number of words and the average reading
        time 238 wpm for nonfiction according to science direct asked via google
        what is the average number of words per minute an american can read
      </div>
    </div>
  );
}
