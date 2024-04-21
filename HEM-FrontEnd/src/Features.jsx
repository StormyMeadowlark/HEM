const features = [
  {
    name: "QUALITY",
    description:
      "We ensure your vehicle's safety by using lint-free cloths to clean engine parts, placing protective barriers between the technician & your vehicle, & utilizing reliable OEM or aftermarket parts.",
    icon: "words",
  },
  {
    name: "COST",
    description: "Prices lower than the dealership",
    icon: "words",
  },
  {
    name: "WARRANTY",
    description:
      "You get a 12 month/12,000 mile nationwide warranty on most parts & labor at no extra cost",
    icon: "words",
  },
  {
    name: "CUSTOMER SERVICE",
    description:
      "Our unmatched customer service provides you with customized maintenance & appointment reminders based on your vehicle & driving habits",
    icon: "words",
  },
  {
    name: "FINANCING",
    description: "You can get up to $5000 for repairs through snap financing",
    icon: "words",
  },
  {
    name: "CONVENIENCE",
    description: "24/7 drop-off & pick-up",
    icon: "words",
  },
];

export default function Features() {
    return (
      <div className="px-10 py-8">
        <div>
          <h1 className="text-7xl text-center font-hemautoFontPlay text-hemautoWhite">
            <span className="text-hemautoGreen font-extrabold">YOUR</span>{" "}
            Topeka, KS<br></br>
            high-end mechanics.
          </h1>
          <p className="text-hemautoLightGray mx-auto mt-5 max-w-prose text-4xl font-hemautoFontUrbanist font-light text-center">
            Providing full-service maintenance & repair<br></br>
            for most automotive & light-duty diesel<br></br>
            makes & models manufactured after 2000.
          </p>
        </div>
        <div className="mt-20 mx-[10%] ">
          <div className="grid grid-cols-3 text-balance">
            {features.map((feature) => (
              <div key={feature.name} className="">
                <div className="rounded-lg bg-gray-50 px-6 pb-8 text-center">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center rounded-xl p-3 shadow-lg">
                        <feature.icon className="h-8 w-8" aria-hidden="true" />
                      </span>
                    </div>
                    <div className="justify-evenly shadow-inner shadow-hemautoGreen rounded-3xl">
                      <div className="bg-hemautoGray/75 text-hemautoWhite rounded-3xl">
                        <h3 className="p-8 text-4xl font-hemautoFontPlay font-semibold">
                          {feature.name}
                        </h3>
                        <p className="px-8 pb-8 text-2xl font-hemautoFontUrbanist font-light text-hemautoLightGray">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }



        
