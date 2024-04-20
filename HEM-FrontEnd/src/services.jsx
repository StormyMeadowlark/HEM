const services = [
  {
    ServiceName: "PREVENTATIVE MAINTENANCE",
  },
  {
    ServiceName: "DIAGNOSTICS",
  },
  {
    ServiceName: "TIRES",
  },
  {
    ServiceName: "ALIGNMENTS",
  },
  {
    ServiceName: "BRAKES",
  },
  {
    ServiceName: "STEERING & SUSPENSION",
  },
  {
    ServiceName: "REMOVE & REPLACE",
  },
  {
    ServiceName: "A/C & HEATING",
  },
  {
    ServiceName: "ELECTRICAL",
  },
  {
    ServiceName: "ECONOMY & LIGHT DUTY DIESEL",
  },
  {
    ServiceName: "USED CAR INSPECTIONS",
  },
  {
    ServiceName: "ALL SERVICES",
  },
];

export default function Services() {
    return (
      <div className="">
        <div className="grid grid-cols-2 gap-x-8 gap-y-8 font-hemautoFontPlay text-2xl text-hemautoDarkGray font-semibold">
          {services.map((service) => (
            <div key={service.ServiceName} className="">
              <div className="text-center">
                <button className="silverbg45 w-full text-center shadow-inner shadow-hemautoGray hover:shadow-hemautoGreen rounded-full px-5 py-3 silverbuttonhover text-hemautoWhite hover:text-hemautoGreen text-shadow-hemautoGray">
                  {service.ServiceName}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
}