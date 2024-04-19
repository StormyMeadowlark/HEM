import useHover from "./useHover"

export default function LandingExperience() {
  const [FleetIsHovering, FleetHoverProps] = useHover()
  const [RetailIsHovering, RetailHoverProps] = useHover()
  const [DealershipIsHovering, DealershipHoverProps] = useHover()
  return (
    <div className="">
      <div className="flex">
        <h1 className="green-text-shadow text-center justify-center font-extrabold font-hemautoFontUrbanist text-6xl text-hemautoLightGray">
          AUTO REPAIR FOR
          <div className="font-hemautoFontPlay text-hemautoWhite text-9xl">
            YOU & YOUR BUSINESS
          </div>
        </h1>
        <div className="flex basis-1/2 text-center font-hemautoFontUrbanist text-4xl py-10 px-10">
          <div className="relative">
            <div className="outline outline-hemautoGreen px-10 py-10 skew-x-[-30deg] shadow-inner shadow-hemautoGreen">
              <div className="text-hemautoWhite/0">
                No matter the number or type, we make sure
              </div>
              <div className="text-hemautoWhite/0">
                breakdowns won&apos;t break you down!
              </div>
            </div>
            <h2 className="relative bg-gradient-to-b from-hemautoBlack via-hemautoDarkGray to-hemautoGray p-10 skew-x-[-30deg] mt-[-7rem] shadow-inner shadow-hemautoLightGray">
              <div className="skew-x-[30deg]">
                No matter the number or type, we make sure
              </div>
              <div className="skew-x-[30deg] text-hemautoGreen font-hemautoFontPlay text-5xl">
                breakdowns WON&apos;T break you down!
              </div>
            </h2>
          </div>
        </div>
      </div>
      <div className="flex flex-1 justify-evenly">
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
    </div>
  );
}