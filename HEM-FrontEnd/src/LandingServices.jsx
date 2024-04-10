import { Carousel } from "flowbite-react";
export default function LandingServices() {
    return (
        <div className="flex bg-serviceBackground bg-no-repeat text-hemautoWhite">
            <div>
                <h1 className="grid grid-cols-1 font-hemautoFontUrbanist text-3xl font-bold">SERVICES</h1>
                <div className="grid grid-cols-2 gap-4 font-hemautoFontPlay font-bold text-hemautoDarkGray">
                    <button type="button" className="w-full bg-gradient-to-br from-hemautoLightGreen via-hemautoGreen to-hemautoMediumGreen text-center hover:bg-gradient-to-b font-lg rounded-lg px-5 py-3 me-2 mb-2">A/C & HEATING</button>
                    <button type="button" className="w-full bg-gradient-to-br from-hemautoLightGreen via-hemautoGreen to-hemautoMediumGreen text-center hover:bg-gradient-to-b font-lg rounded-lg px-5 py-3 me-2 mb-2">STEERING & SUSPENSION</button>
                    <button type="button" className="w-full bg-gradient-to-br from-hemautoLightGreen via-hemautoGreen to-hemautoMediumGreen text-center hover:bg-gradient-to-b font-lg rounded-lg px-5 py-3 me-2 mb-2">TIRES</button>
                    <button type="button" className="w-full bg-gradient-to-br from-hemautoLightGreen via-hemautoGreen to-hemautoMediumGreen text-center hover:bg-gradient-to-b font-lg rounded-lg px-5 py-3 me-2 mb-2">ALIGNMENTS</button>
                    <button type="button" className="w-full bg-gradient-to-br from-hemautoLightGreen via-hemautoGreen to-hemautoMediumGreen text-center hover:bg-gradient-to-b font-lg rounded-lg px-5 py-3 me-2 mb-2">DIAGNOSTICS</button>
                    <button type="button" className="w-full bg-gradient-to-br from-hemautoLightGreen via-hemautoGreen to-hemautoMediumGreen text-center hover:bg-gradient-to-b font-lg rounded-lg px-5 py-3 me-2 mb-2">ELECTRICAL</button>
                    <button type="button" className="w-full bg-gradient-to-br from-hemautoLightGreen via-hemautoGreen to-hemautoMediumGreen text-center hover:bg-gradient-to-b font-lg rounded-lg px-5 py-3 me-2 mb-2">REMOVE & REPLACE</button>
                    <button type="button" className="w-full bg-gradient-to-br from-hemautoLightGreen via-hemautoGreen to-hemautoMediumGreen text-center hover:bg-gradient-to-b font-lg rounded-lg px-5 py-3 me-2 mb-2">PREVENTATIVE MAINTENANCE</button>
                    <button type="button" className="w-full bg-gradient-to-br from-hemautoLightGreen via-hemautoGreen to-hemautoMediumGreen text-center hover:bg-gradient-to-b font-lg rounded-lg px-5 py-3 me-2 mb-2">BRAKES</button>
                    <button type="button" className="w-full bg-gradient-to-br from-hemautoLightGreen via-hemautoGreen to-hemautoMediumGreen text-center hover:bg-gradient-to-b font-lg rounded-lg px-5 py-3 me-2 mb-2">USED CAR INSPECTIONS</button>
                    <button type="button" className="w-full bg-gradient-to-br from-hemautoLightGreen via-hemautoGreen to-hemautoMediumGreen text-center hover:bg-gradient-to-b font-lg rounded-lg px-5 py-3 me-2 mb-2">ECONOMY & LIGHT DUTY DIESEL</button>
                    <button type="button" className="w-full bg-gradient-to-br from-hemautoLightGreen via-hemautoGreen to-hemautoMediumGreen text-center hover:bg-gradient-to-b font-lg rounded-lg px-5 py-3 me-2 mb-2">ALL SERVICES</button>
                </div>
            </div>
            <div className="m-10 basis-1/2 h-96">
                <Carousel pauseOnHover>
                    <img className="ease-in-out" src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." ></img>
                    <img className="ease-in-out" src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." ></img>
                    <img className="ease-in-out" src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." ></img>
                </Carousel>
            </div>
        </div>
    )}