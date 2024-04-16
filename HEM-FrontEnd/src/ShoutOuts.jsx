import CarFaxImg from "./carfaxbadge";
import GreenCTA from "./GreenCTA";

export default function ShoutOuts() {
    return (
      <div>
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
          <button className="relative w-[750px]">
            <GreenCTA />
            <p className="absolute w-full inset-y-[45%] text-5xl font-hemautoFontTiltWarp font-bold text-hemautoGray">Call to schedule now</p>
          </button>
        </div>
      </div>
    );
}
