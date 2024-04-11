import useHover from "./assets/ComponentParts/Buttons/useHover"
export default function LandingExperience() {
  const [FleetIsHovering, FleetHoverProps] = useHover()
  const [RetailIsHovering, RetailHoverProps] = useHover()
  const [DealershipIsHovering, DealershipHoverProps] = useHover()
  return(
    <div>
      <h1>Experience auto repair<br></br>made for<br></br>YOU</h1>
      <div className='bg-hemautoBlack flex text-hemautoWhite flex-1 justify-around'>
        <button {...RetailHoverProps} className="relative w-96">
          <img src="src/assets/Images/SilverOutlinedTintedHexagon.png" alt="Silver Outlined Tinted Hexagon" class="object-cover w-full h-full"></img>
          <div className="absolute w-full text-3xl text-center inset-y-1/2 font-hemautoFontPlay font-extrabold">{RetailIsHovering ? "Retail Info Here" : "RETAIL"}</div>
        </button>
        <button {...FleetHoverProps} className="relative w-96">
          <img src="src/assets/Images/SilverOutlinedTintedHexagon.png" alt="Silver Outlined Tinted Hexagon" class="object-cover w-full h-full"></img>
          <div className="absolute w-full text-3xl text-center inset-y-1/2 font-hemautoFontPlay font-extrabold">{FleetIsHovering ? "Fleet Info Here" : "FLEET"}</div>
        </button>
        <button {...DealershipHoverProps} className="relative w-96">
          <img src="src/assets/Images/SilverOutlinedTintedHexagon.png" alt="Silver Outlined Tinted Hexagon" class="object-cover w-full h-full"></img>
          <div className="absolute w-full text-3xl text-center inset-y-1/2 font-hemautoFontPlay font-extrabold">{DealershipIsHovering ? "Dealership Info Here" : "DEALERSHIP"}</div>
        </button>
      </div>
    </div>
  )
}