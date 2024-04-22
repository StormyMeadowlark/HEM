import CarFaxImg from "./carfaxbadge";
import useWrenchCTA from "./ExperienceCTA";

export default function ShoutOuts() {
    return (
      <div>
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
          <div className="basis-[80%]">
            {useWrenchCTA("Call to schedule", "(785) 730-2900")}
          </div>
        </div>
      </div>
    );
}
