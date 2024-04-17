import useHover from "./useHover";


export default function ExperienceCTA() {
    const [CTAIsHovering, CTAHoverProps] = useHover();
    return (
      <div className="flex text-hemautoWhite px-10">
        <div className="flex basis-1/2 text-center justify-around font-hemautoFontUrbanist text-3xl py-10 px-10">
          <div className="relative">
            <div className="outline outline-hemautoGreen px-10 py-10 skew-x-[-30deg] shadow-inner shadow-hemautoGreen">
              <div className="text-hemautoWhite/0">
                No matter the type or number of vehicles you have, we make sure
              </div>
              <div className="text-hemautoWhite/0">
                breakdowns won&apos;t break you down!
              </div>
            </div>
            <h2 className="relative bg-gradient-to-b from-hemautoBlack via-hemautoDarkGray to-hemautoGray p-10 skew-x-[-30deg] mt-[-7rem] shadow-inner shadow-hemautoLightGray">
              <div className="skew-x-[30deg]">
                No matter the type or number of vehicles you have, we make sure
              </div>
              <div className="skew-x-[30deg] text-hemautoGreen font-hemautoFontPlay text-5xl">
                breakdowns WON&apos;T break you down!
              </div>
            </h2>
          </div>
        </div>
        <div className="flex basis-1/2 justify-center hover:scale-125 duration-500 ease-in-out">
          <img
            src="/src/assets/Images/Icons/GreenWrench.svg"
            type="xml/svg"
            className="w-[50%]"
          ></img>
          <button className="w-[50%] ml-[-50%]" {...CTAHoverProps}>
            <div className="text-4xl font-hemautoFontTiltWarp text-hemautoGray green-cta-text-shadow transition-transformease-in-out">
              {CTAIsHovering ? "Click Here" : "Learn More"}
            </div>
          </button>
        </div>
      </div>
    );
}