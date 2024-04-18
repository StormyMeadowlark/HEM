import RandomVehicleSectionTitle from "./RandomVehicleSectionTitle";
export default function LandingRandomVehicle() {
  return (
    <div className="bg-hemautoDarkGray">
      <div className="bg-PlatformBackground bg-top text-hemautoWhite bg-no-repeat bg-contain w-[100%]">
        <RandomVehicleSectionTitle />
        <div className="px-40 shadow-xl flex text-7xl font-hemautoFontRoadRage text-hemautoGreen">
          <button className="p-6 mx-8 rounded-3xl transition ease-in-out bg-gradient-to-tr from-hemautoMediumGreen via-hemautoGreen to-hemautoLightGreen basis-1/4 text-hemautoDarkGray shadow-inner shadow-hemautoLightGreen hover:shadow-hemautoGray hover:scale-[99%] duration-300">
            CAR
          </button>
          <button className="p-6 mx-8 rounded-3xl transition ease-in-out bg-gradient-to-tr from-hemautoMediumGreen via-hemautoGreen to-hemautoLightGreen basis-1/4 text-hemautoDarkGray shadow-inner shadow-hemautoLightGreen hover:shadow-hemautoGray hover:scale-[99%] duration-300">
            TRUCK
          </button>
          <button className="p-6 mx-8 rounded-3xl transition ease-in-out bg-gradient-to-tr from-hemautoMediumGreen via-hemautoGreen to-hemautoLightGreen basis-1/4 text-hemautoDarkGray shadow-inner shadow-hemautoLightGreen hover:shadow-hemautoGray hover:scale-[99%] duration-300">
            SUV
          </button>
          <button className="p-6 mx-8 rounded-3xl transition ease-in-out bg-gradient-to-tr from-hemautoMediumGreen via-hemautoGreen to-hemautoLightGreen basis-1/4 text-hemautoDarkGray shadow-inner shadow-hemautoLightGreen hover:shadow-hemautoGray hover:scale-[99%] duration-300">
            VAN
          </button>
        </div>
        <div className="flex flex-row-reverse mx-56 my-10">
          <div className="transition ease-in-out basis-[15%] text-center silverbg py-4 rounded skew-x-[-30deg] shadow-inner shadow-hemautoGreen hover:scale-110 duration-300">
            <button className="skew-x-[30deg] font-hemautoFontPlay font-extrabold text-xl text-hemautoGreen green-text-shadow">
              View All Makes & Models
            </button>
          </div>
        </div>
        <div className="h-[900px]">
          random images will go here
          <img></img>
        </div>
      </div>
    </div>
  );
}
