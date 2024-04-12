import { Carousel } from "flowbite-react";
export default function LandingServices() {
    return (
      <div className="flex bg-serviceBackground bg-no-repeat text-hemautoWhite bg-cover">
        <div className="h-[1200px]">
          <h1 className="grid grid-cols-1 font-hemautoFontUrbanist text-3xl font-bold">
            SERVICES
          </h1>
          <div className="grid grid-cols-2 gap-4 font-hemautoFontPlay font-bold text-hemautoDarkGray">
            <button
              type="button"
              className="w-full bg-gradient-to-b from-hemautoLightGreen via-hemautoGreen to-hemautoMediumGreen text-center hover:bg-gradient-to-tl font-lg rounded-lg px-5 py-3 me-2 mb-2 shadow-inner shadow-hemautoDarkGray"
            >
              A/C & HEATING
            </button>
            <button
              type="button"
              className="w-full bg-gradient-to-b from-hemautoLightGreen via-hemautoGreen to-hemautoMediumGreen text-center hover:bg-gradient-to-tl font-lg rounded-lg px-5 py-3 me-2 mb-2 shadow-inner shadow-hemautoDarkGray"
            >
              STEERING & SUSPENSION
            </button>
            <button
              type="button"
              className="w-full bg-gradient-to-b from-hemautoLightGreen via-hemautoGreen to-hemautoMediumGreen text-center hover:bg-gradient-to-tl font-lg rounded-lg px-5 py-3 me-2 mb-2 shadow-inner shadow-hemautoDarkGray"
            >
              TIRES
            </button>
            <button
              type="button"
              className="w-full bg-gradient-to-b from-hemautoLightGreen via-hemautoGreen to-hemautoMediumGreen text-center hover:bg-gradient-to-tl font-lg rounded-lg px-5 py-3 me-2 mb-2 shadow-inner shadow-hemautoDarkGray"
            >
              ALIGNMENTS
            </button>
            <button
              type="button"
              className="w-full bg-gradient-to-b from-hemautoLightGreen via-hemautoGreen to-hemautoMediumGreen text-center hover:bg-gradient-to-tl font-lg rounded-lg px-5 py-3 me-2 mb-2 shadow-inner shadow-hemautoDarkGray"
            >
              DIAGNOSTICS
            </button>
            <button
              type="button"
              className="w-full bg-gradient-to-b from-hemautoLightGreen via-hemautoGreen to-hemautoMediumGreen text-center hover:bg-gradient-to-tl font-lg rounded-lg px-5 py-3 me-2 mb-2 shadow-inner shadow-hemautoDarkGray"
            >
              ELECTRICAL
            </button>
            <button
              type="button"
              className="w-full bg-gradient-to-b from-hemautoLightGreen via-hemautoGreen to-hemautoMediumGreen text-center hover:bg-gradient-to-tl font-lg rounded-lg px-5 py-3 me-2 mb-2 shadow-inner shadow-hemautoDarkGray"
            >
              REMOVE & REPLACE
            </button>
            <button
              type="button"
              className="w-full bg-gradient-to-b from-hemautoLightGreen via-hemautoGreen to-hemautoMediumGreen text-center hover:bg-gradient-to-tl font-lg rounded-lg px-5 py-3 me-2 mb-2 shadow-inner shadow-hemautoDarkGray"
            >
              PREVENTATIVE MAINTENANCE
            </button>
            <button
              type="button"
              className="w-full bg-gradient-to-b from-hemautoLightGreen via-hemautoGreen to-hemautoMediumGreen text-center hover:bg-gradient-to-tl font-lg rounded-lg px-5 py-3 me-2 mb-2 shadow-inner shadow-hemautoDarkGray"
            >
              BRAKES
            </button>
            <button
              type="button"
              className="w-full bg-gradient-to-b from-hemautoLightGreen via-hemautoGreen to-hemautoMediumGreen text-center hover:bg-gradient-to-tl font-lg rounded-lg px-5 py-3 me-2 mb-2 shadow-inner shadow-hemautoDarkGray"
            >
              USED CAR INSPECTIONS
            </button>
            <button
              type="button"
              className="w-full bg-gradient-to-b from-hemautoLightGreen via-hemautoGreen to-hemautoMediumGreen text-center hover:bg-gradient-to-tl font-lg rounded-lg px-5 py-3 me-2 mb-2 shadow-inner shadow-hemautoDarkGray"
            >
              ECONOMY & LIGHT DUTY DIESEL
            </button>
            <button
              type="button"
              className="w-full bg-gradient-to-b from-hemautoLightGreen via-hemautoGreen to-hemautoMediumGreen text-center hover:bg-gradient-to-tl font-lg rounded-lg px-5 py-3 me-2 mb-2 shadow-inner shadow-hemautoDarkGray"
            >
              ALL SERVICES
            </button>
          </div>
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
      </div>
    );}