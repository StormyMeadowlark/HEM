import useHover from "./assets/ComponentParts/Buttons/useHover"
export default function LandingExperience() {
  const [FleetIsHovering, FleetHoverProps] = useHover()
  const [RetailIsHovering, RetailHoverProps] = useHover()
  const [DealershipIsHovering, DealershipHoverProps] = useHover()
  return (
    <div className="text-hemautoWhite">
      <h1 className="flex text-center justify-center font-hemautoFontUrbanist text-8xl">
        AUTO REPAIR<br></br>FOR<br></br>YOU & YOUR BUSINESS
      </h1>
      <div className="flex flex-1 justify-around">
        <button {...RetailHoverProps} className="relative w-96">
          <img
            src="src/assets/Images/SilverOutlinedTintedHexagon.png"
            alt="Silver Outlined Tinted Hexagon"
            className="object-cover w-full h-full"
          ></img>
          <div className="absolute w-full text-3xl text-center inset-y-1/2 font-hemautoFontPlay font-extrabold">
            {RetailIsHovering ? "Retail Info Here" : "RETAIL"}
          </div>
        </button>
        <button {...FleetHoverProps} className="relative w-96">
          <img
            src="src/assets/Images/SilverOutlinedTintedHexagon.png"
            alt="Silver Outlined Tinted Hexagon"
            className="object-cover w-full h-full"
          ></img>
          <div className="absolute w-full text-3xl text-center inset-y-1/2 font-hemautoFontPlay font-extrabold">
            {FleetIsHovering ? "Fleet Info Here" : "FLEET"}
          </div>
        </button>
        <button {...DealershipHoverProps} className="relative w-96">
          <img
            src="src/assets/Images/SilverOutlinedTintedHexagon.png"
            alt="Silver Outlined Tinted Hexagon"
            className="object-cover w-full h-full"
          ></img>
          <div className="absolute w-full text-3xl text-center inset-y-1/2 font-hemautoFontPlay font-extrabold">
            {DealershipIsHovering ? "Dealership Info Here" : "DEALERSHIP"}
          </div>
        </button>
      </div>
      <div className="flex text-center justify-center font-hemautoFontUrbanist text-2xl">
          <button>LEARN MORE</button>
          <h2>FOR A PERSONALIZED EXPERIENCE</h2>
          <button>REGISTER</button>
      </div>
    </div>
  );
}