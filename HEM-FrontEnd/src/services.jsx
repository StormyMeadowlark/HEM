const services = [
    {
        ServiceName: "A/C HEATING"
    },
    {
        ServiceName: "TIRES"
    },
    {
        ServiceName: "DIAGNOSTICS"
    },
    {
        ServiceName: "REMOVE & REPLACE"
    },
    {
        ServiceName: "BRAKES"
    },
    {
        ServiceName: "ECONOMY & LIGHT DUTY DIESEL"
    },
    {
        ServiceName: "STEERING & SUSPENSION"
    },
    {
        ServiceName: "ALIGNMENTS"
    },
    {
        ServiceName: "ELECTRICAL"
    },
    {
        ServiceName: "PREVENTATIVE MAINTENANCE"
    },
    {
        ServiceName: "USED CAR INSPECTIONS"
    },
    {
        ServiceName: "ALL SERVICES"
    },
]

export default function Services() {
    return(
            <div className="grid grid-cols-2 gap-x-8 gap-y-8 font-hemautoFontPlay text-2xl text-hemautoDarkGray font-semibold">
                {services.map((service) => (
                    <div key={service.ServiceName} className="">
                        <div className="text-center">
                            <button className="bg-gradient-to-b w-[95%] from-hemautoLightGreen via-hemautoGreen to-hemautoMediumGreen text-center hover:bg-gradient-to-tl rounded-lg px-5 py-3 shadow-inner shadow-hemautoDarkGray">
                                {service.ServiceName}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
    )
}