import Gallery from "./Carousel";
import Features from "./Features";

export default function LandingServices() {
  return (
    <div>
      <Features />

      <h2 className="grid grid-cols-2 text-center font-hemautoFontUrbanist text-3xl font-bold my-10">
        SERVICES
      </h2>
      <div className="grid grid-cols-2 px-8 gap-x-8">
        <div className="grid grid-cols-2 gap-x-8 gap-y-8 font-hemautoFontPlay font-bold text-hemautoDarkGray place-items-around">
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
        <div className="bg-hemautoBlack place-object-center h-96">
          <Gallery />
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
