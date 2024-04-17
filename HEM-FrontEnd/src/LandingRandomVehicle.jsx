export default function LandingRandomVehicle() {
  return (
    <div className="bg-hemautoDarkGray">
      <div className="bg-PlatformBackground bg-top text-hemautoWhite bg-no-repeat bg-cover h-[1500px]">
          <div className="h-[200px] shadow-xl flex justify-around text-7xl font-hemautoFontRoadRage text-hemautoGreen">
            <button className="bg-gradient-to-br from-hemautoMediumGreen via-hemautoGreen to-hemautoLightGreen basis-1/4 text-hemautoDarkGray shadow-inner shadow-hemautoLightGreen hover:shadow-hemautoGray hover:bg-gradient-to-tr">
              CAR
            </button>
            <button className="bg-gradient-to-br from-hemautoDarkGray via-hemautoGray to-hemautoMediumGray shadow-inner shadow-hemautoLightGray basis-1/4 hover:shadow-hemautoBlack hover:bg-gradient-to-tr">
              TRUCK
            </button>
            <button className="bg-gradient-to-br from-hemautoMediumGreen via-hemautoGreen to-hemautoLightGreen basis-1/4 text-hemautoDarkGray shadow-inner shadow-hemautoLightGreen hover:shadow-hemautoGray hover:bg-gradient-to-tr">
              SUV
            </button>
            <button className="bg-gradient-to-br from-hemautoDarkGray via-hemautoGray to-hemautoMediumGray shadow-inner shadow-hemautoLightGray basis-1/4 hover:shadow-hemautoBlack hover:bg-gradient-to-tr">
              VAN
            </button>
          </div>
          <div className="h-[1000px]">random images will go here</div>
          <div className="inline">
            <button>View All Makes & Models</button>
            <h3>for service information on vehicles manufactured before 2000</h3>
            <button>Contact US</button>
          </div>
        </div>
      </div>
  );
}
