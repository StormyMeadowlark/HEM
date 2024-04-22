import useHover from "./useHover"
import ExperienceCTA from "./ExperienceCTA"
export default function LandingExperience() {
  const [FleetIsHovering, FleetHoverProps] = useHover()
  const [RetailIsHovering, RetailHoverProps] = useHover()
  const [DealershipIsHovering, DealershipHoverProps] = useHover()
  return (
    <div className="px-[10%] ">
      <div className="flex p-20 justify-evenly font-hemautoFontPlay">
        <h3 className="text-8xl text-center font-extrabold">
          <span className="text-hemautoGreen font-extrabold">
            AUTO REPAIR FOR
          </span>
          <br></br>you & your vehicles.
        </h3>
        <div className="flex items-center">
          <h2 className="text-5xl text-center text-hemautoLightGray pb-4">
            No matter the number or type,<br></br>
            <span className="text-4xl">we make sure, </span>
            <span className="text-hemautoGreen text-4xl">
              breakdowns WON&apos;T break you down!
            </span>
          </h2>
        </div>
      </div>
      <div className="flex flex-1 justify-evenly text-hemautoGreen text-shadow-hemautoGray">
        <button {...RetailHoverProps} className="relative mx-8">
          <img
            src="src/assets/Images/FrontEndTextBox.png"
            alt=""
            className="object-cover w-full h-full"
          ></img>
          <div className="absolute w-full text-3xl text-center inset-y-1/2 font-hemautoFontPlay font-extrabold">
            {RetailIsHovering ? "Retail Info Here" : "RETAIL"}
          </div>
        </button>
        <button {...FleetHoverProps} className="relative mx-8">
          <img
            src="src/assets/Images/FrontEndTextBox.png"
            alt=""
            className="object-cover w-full h-full"
          ></img>
          <div className="absolute w-full text-3xl text-center inset-y-1/2 font-hemautoFontPlay font-extrabold">
            {FleetIsHovering ? "Fleet Info Here" : "FLEET"}
          </div>
        </button>
        <button {...DealershipHoverProps} className="relative mx-8">
          <img
            src="src/assets/Images/FrontEndTextBox.png"
            alt=""
            className="object-cover w-full h-full"
          ></img>
          <div className="absolute w-full text-3xl text-center inset-y-1/2 font-hemautoFontPlay font-extrabold">
            {DealershipIsHovering ? "Dealership Info Here" : "DEALERSHIP"}
          </div>
        </button>
      </div>
      <div>{ExperienceCTA("Click Me", "Learn More")}</div>
    </div>
  );
}