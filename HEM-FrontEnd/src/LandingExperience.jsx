export default function LandingExperience() {
  return(
    <div>
      <h1>Experience auto repair<br></br>made for<br></br>YOU</h1>
      <div className='bg-hemautoBlack flex text-hemautoWhite flex-1 justify-around'>
        <div className="relative w-96">
          <img src="src/assets/Images/SilverOutlinedTintedHexagon.png" alt="Avatar" class="object-cover w-full h-full"></img>
          <div>
            <div className="visible hover:collapse absolute w-full text-3xl text-center inset-y-1/2 font-hemautoFontPlay font-extrabold">RETAIL</div>
            <div className="hide hover:visible absolute w-full text-3xl text-center inset-y-1/2 font-hemautoFontPlay font-extrabold">BOO!</div>
          </div>
        </div>
        <div className="relative w-96">
          <img src="src/assets/Images/SilverOutlinedTintedHexagon.png" alt="Avatar" class="object-cover w-full h-full"></img>
          <div className="absolute w-full text-3xl text-center inset-y-1/2 font-hemautoFontPlay font-extrabold">FLEET</div>
        </div>
        <div className="relative w-96">
          <img src="src/assets/Images/SilverOutlinedTintedHexagon.png" alt="Avatar" class="object-cover w-full h-full"></img>
          <div className="absolute w-full text-3xl text-center inset-y-1/2 font-hemautoFontPlay font-extrabold">DEALERSHIP</div>
        </div>
      </div>
    </div>
  )
}