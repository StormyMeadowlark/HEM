import { Carousel } from "flowbite-react";
export default function LandingServices() {
  return (
    <div className="inline-block w-full bg-serviceBackground bg-no-repeat text-hemautoWhite bg-cover  h-[1200px]">
      <div className="text-center font-hemautoFontUrbanist text-4xl">
        HEM Automotive are your Topeka, KS high-end mechanics<br></br>
        quality automotive service other independent shops can&apos;t compete
        with<br></br>
        prices lower than the dealerships<br></br>
        backed by a nationwide 12 month/12,000 mile warranty<br></br>
        top-notch customer service<br></br>
        financing always available<br></br>
        proudly<br></br>
        BBB A+ and a CarFax Service Center.<br></br>
        <button>Schedule Now!</button>
      </div>
      <h2 className="grid grid-cols-2 text-center font-hemautoFontUrbanist text-3xl font-bold my-10">
        SERVICES
      </h2>
      <div className="grid grid-cols-2">
        <div className="grid grid-cols-2 gap-4 font-hemautoFontPlay font-bold text-hemautoDarkGray">
          <button
            type="button"
            className="w-full max-h-20 bg-gradient-to-b from-hemautoLightGreen via-hemautoGreen to-hemautoMediumGreen text-center hover:bg-gradient-to-tl font-lg rounded-lg px-5 py-3 me-2 mb-2 shadow-inner shadow-hemautoDarkGray"
          >
            A/C & HEATING
          </button>
          <button
            type="button"
            className="w-full max-h-20 bg-gradient-to-b from-hemautoLightGreen via-hemautoGreen to-hemautoMediumGreen text-center hover:bg-gradient-to-tl font-lg rounded-lg px-5 py-3 me-2 mb-2 shadow-inner shadow-hemautoDarkGray"
          >
            STEERING & SUSPENSION
          </button>
          <button
            type="button"
            className="w-full max-h-20 bg-gradient-to-b from-hemautoLightGreen via-hemautoGreen to-hemautoMediumGreen text-center hover:bg-gradient-to-tl font-lg rounded-lg px-5 py-3 me-2 mb-2 shadow-inner shadow-hemautoDarkGray"
          >
            TIRES
          </button>
          <button
            type="button"
            className="w-full max-h-20 bg-gradient-to-b from-hemautoLightGreen via-hemautoGreen to-hemautoMediumGreen text-center hover:bg-gradient-to-tl font-lg rounded-lg px-5 py-3 me-2 mb-2 shadow-inner shadow-hemautoDarkGray"
          >
            ALIGNMENTS
          </button>
          <button
            type="button"
            className="w-full max-h-20 bg-gradient-to-b from-hemautoLightGreen via-hemautoGreen to-hemautoMediumGreen text-center hover:bg-gradient-to-tl font-lg rounded-lg px-5 py-3 me-2 mb-2 shadow-inner shadow-hemautoDarkGray"
          >
            DIAGNOSTICS
          </button>
          <button
            type="button"
            className="w-full max-h-20 bg-gradient-to-b from-hemautoLightGreen via-hemautoGreen to-hemautoMediumGreen text-center hover:bg-gradient-to-tl font-lg rounded-lg px-5 py-3 me-2 mb-2 shadow-inner shadow-hemautoDarkGray"
          >
            ELECTRICAL
          </button>
          <button
            type="button"
            className="w-full max-h-20 bg-gradient-to-b from-hemautoLightGreen via-hemautoGreen to-hemautoMediumGreen text-center hover:bg-gradient-to-tl font-lg rounded-lg px-5 py-3 me-2 mb-2 shadow-inner shadow-hemautoDarkGray"
          >
            REMOVE & REPLACE
          </button>
          <button
            type="button"
            className="w-full max-h-20 bg-gradient-to-b from-hemautoLightGreen via-hemautoGreen to-hemautoMediumGreen text-center hover:bg-gradient-to-tl font-lg rounded-lg px-5 py-3 me-2 mb-2 shadow-inner shadow-hemautoDarkGray"
          >
            PREVENTATIVE MAINTENANCE
          </button>
          <button
            type="button"
            className="w-full max-h-20 bg-gradient-to-b from-hemautoLightGreen via-hemautoGreen to-hemautoMediumGreen text-center hover:bg-gradient-to-tl font-lg rounded-lg px-5 py-3 me-2 mb-2 shadow-inner shadow-hemautoDarkGray"
          >
            BRAKES
          </button>
          <button
            type="button"
            className="w-full max-h-20 bg-gradient-to-b from-hemautoLightGreen via-hemautoGreen to-hemautoMediumGreen text-center hover:bg-gradient-to-tl font-lg rounded-lg px-5 py-3 me-2 mb-2 shadow-inner shadow-hemautoDarkGray"
          >
            USED CAR INSPECTIONS
          </button>
          <button
            type="button"
            className="w-full max-h-20 bg-gradient-to-b from-hemautoLightGreen via-hemautoGreen to-hemautoMediumGreen text-center hover:bg-gradient-to-tl font-lg rounded-lg px-5 py-3 me-2 mb-2 shadow-inner shadow-hemautoDarkGray"
          >
            ECONOMY & LIGHT DUTY DIESEL
          </button>
          <button
            type="button"
            className="w-full max-h-20 bg-gradient-to-b from-hemautoLightGreen via-hemautoGreen to-hemautoMediumGreen text-center hover:bg-gradient-to-tl font-lg rounded-lg px-5 py-3 me-2 mb-2 shadow-inner shadow-hemautoDarkGray"
          >
            ALL SERVICES
          </button>
        </div>
        <div className="m-10 basis-1/2 h-96">
          <Carousel pauseOnHover>
            <img
              className="ease-in-out"
              src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
              alt="..."
            ></img>
            <img
              className="ease-in-out"
              src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
              alt="..."
            ></img>
            <img
              className="ease-in-out"
              src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
              alt="..."
            ></img>
          </Carousel>
        </div>
        <div>
          Don&apos;t let breakdowns break you down. Get customized maintenance reminders based on your driving habits and manufacturer recommendation for your specific vehicle, exclusive offers, priority scheduling, and so much more. Register learn more
        </div>
      </div>
    </div>
  );
}
