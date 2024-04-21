import CarFaxImg from "./carfaxbadge";
import useWrenchCTA from "./ExperienceCTA";

export default function ShoutOuts() {
    return (
      <div className="bg-HexagonCarbonFiber bg-no-repeat bg-top bg-cover outline outline-hemautoTrueBlack pt-[5%]">
        <p className="text-center font-hemautoFontRoadRage tracking-wide text-9xl pt-20 mb-20">
          OUR SERVICE CENTER IS A PROUD
        </p>
        <div className="flex justify-evenly pt-10">
          <div>
            <CarFaxImg />
          </div>
          <div className="flex justify-center items-center font-bold text-7xl">
            <p>A+ BBB</p>
          </div>
        </div>
        <div className="flex justify-center">
          <div>
            {useWrenchCTA("Call to schedule", "(785) 730-2900")}
          </div>
        </div>
      </div>
    );
}
