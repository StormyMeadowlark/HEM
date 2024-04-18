import CarFaxImg from "./carfaxbadge";
import GreenCTA from "./GreenCTA";

export default function ShoutOuts() {
    return (
      <div className="bg-ShoutOutBackground bg-no-repeat bg-top bg-cover outline outline-hemautoTrueBlack ">
        <p className="text-center font-hemautoFontRoadRage text-9xl pb-8">
          Our service shop is proudly backed by:
        </p>
        <div className="flex justify-evenly">
          <div>
            <CarFaxImg />
          </div>
          <div className="flex justify-center items-center font-bold text-7xl">
            <p>A+ BBB</p>
          </div>
        </div>
        <div className="flex justify-center pl-[33%]">
          <button className="relative w-[750px] hover:scale-125 transition duration-500 ease-in-out">
            <GreenCTA />
            <p className="green-cta-text-shadow absolute w-full inset-y-[45%] text-5xl font-hemautoUrbanist font-extrabold text-hemautoGray">CALL TO SCHEDULE</p>
          </button>
        </div>
      </div>
    );
}
