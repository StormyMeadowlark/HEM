import useHover from "./assets/ComponentParts/Buttons/useHover"
export default function LandingExperience() {
  const [FleetIsHovering, FleetHoverProps] = useHover()
  const [RetailIsHovering, RetailHoverProps] = useHover()
  const [DealershipIsHovering, DealershipHoverProps] = useHover()
  const [CTAIsHovering, CTAHoverProps] = useHover()
  return (
    <div className="text-hemautoWhite">
      <h1 className="green-text-shadow text-center justify-center font-extrabold font-hemautoFontUrbanist text-6xl my-20 text-hemautoLightGray">
        AUTO REPAIR FOR
        <div className="font-hemautoFontPlay text-hemautoWhite text-9xl">
          YOU & YOUR BUSINESS
        </div>
      </h1>
      <div className="flex flex-1 justify-around">
        <button {...RetailHoverProps} className="relative mx-20">
          <img
            src="src/assets/Images/SilverOutlinedTintedHexagon.png"
            alt="Silver Outlined Tinted Hexagon"
            className="object-cover w-full h-full"
          ></img>
          <div className="absolute w-full text-3xl text-center inset-y-1/2 font-hemautoFontPlay font-extrabold">
            {RetailIsHovering ? "Retail Info Here" : "RETAIL"}
          </div>
        </button>
        <button {...FleetHoverProps} className="relative mx-20">
          <img
            src="src/assets/Images/SilverOutlinedTintedHexagon.png"
            alt="Silver Outlined Tinted Hexagon"
            className="object-cover w-full h-full"
          ></img>
          <div className="absolute w-full text-3xl text-center inset-y-1/2 font-hemautoFontPlay font-extrabold">
            {FleetIsHovering ? "Fleet Info Here" : "FLEET"}
          </div>
        </button>
        <button {...DealershipHoverProps} className="relative mx-20">
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
      <div className="flex text-center justify-center font-hemautoFontUrbanist text-3xl">
        <h2>
          <div>No matter the number or type of vehicles you have</div>
          <div>we make sure breakdowns won&apos;t break you down!</div>
        </h2>
        <button {...CTAHoverProps}>
          <div>
            {CTAIsHovering ? "Click Here" : "Learn More"}
          </div>
        </button>
      </div>
    </div>
  );
}