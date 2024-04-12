import { Carousel } from "flowbite-react";
export default function LandingServices() {
  return (
    <div>
      <div className="bg-hemautoTrueBlack/30 px-10 py-8 font-hemautoFontPlay">
        <h1 className="text-7xl text-center ">
          <span className="text-hemautoGreen">YOUR</span> Topeka, KS<br></br>
          high-end mechanics
        </h1>
        <ul className="flex justify-around py-8">
          <li>
            <div>
              quality automotive service other independent shops can&apos;t
              compete with
            </div>
          </li>
          <li>prices lower than the dealerships</li>
          <li>12 month/12,000 mile nationwide warranty</li>
          <li>top-notch customer service</li>
          <li>financing always available</li>
        </ul>
        <div className="text-center">
          proudly
          <div>BBB A+</div>
          <div>CarFax Service Center.</div>
        </div>

        <button className="bg-hemautoGreen text-hemautoBlack p-4 rounded-2xl ml-[33%] font-extrabold">
          Schedule Now!
        </button>
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
          Don&apos;t let breakdowns break you down. Get customized maintenance
          reminders based on your driving habits and manufacturer recommendation
          for your specific vehicle, exclusive offers, priority scheduling, and
          so much more. Register learn more
        </div>
      </div>
    </div>
  );
}
