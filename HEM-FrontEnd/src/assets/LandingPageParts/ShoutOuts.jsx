import CarFaxImg from "../ComponentParts/carfaxbadge";
import useWrenchCTA from "../ComponentParts/ExperienceCTA";

export default function ShoutOuts() {
    return (
      <div className="px-[10%]">
        <p className="text-center font-hemautoFontRoadRage tracking-wide text-8xl">
          OUR SERVICE CENTER IS A PROUD
        </p>
        <div className="flex justify-evenly">
          <div>
            <CarFaxImg />
          </div>
          <div className="flex justify-center items-center font-bold text-7xl">
            <p>A+ BBB</p>
          </div>
        </div>
        <div className="flex justify-center">
            {useWrenchCTA("Call to schedule", "(785) 730-2900")}
        </div>
      </div>
    );
}
