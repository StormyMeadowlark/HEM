import useHover from "./useHover";

export default function useWrenchCTA(BeforeHover, AfterHover) {
    const [CTAIsHovering, CTAHoverProps,] = useHover();
     
    return (
      <div className="flex flex-row-reverse text-hemautoWhite pr-32 pb-20">
        <div className="flex basis-[40%] hover:scale-125 duration-500 ease-in-out">
          <img
            src="/src/assets/Images/Icons/GreenWrench.svg"
            type="xml/svg"
            className="w-[75%]"
          ></img>
          <button className="w-[75%] ml-[-75%]" {...CTAHoverProps}>
            <div className="text-4xl font-hemautoFontTiltWarp text-hemautoGray green-cta-text-shadow transition-transform ease-in-out">
              {CTAIsHovering ?  AfterHover : BeforeHover }
            </div>
          </button>
        </div>
      </div>
    );
}