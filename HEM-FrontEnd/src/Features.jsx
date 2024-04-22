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
      <div className="px-[10%] py-8">
        <div className="flex px-20 pt-20 justify-evenly font-hemautoFontPlay py-10">
          <h3 className="text-8xl text-center font-extrabold pr-20">
            <span className="text-hemautoGreen font-extrabold">YOUR </span>
            Topeka, KS<br></br>
            high-end mechanics.
          </h3>
          <div>
            <h2 className="text-3xl text-center text-hemautoLightGray pb-4">
              Providing full-service maintenance & repair<br></br>
              for most automotive & light-duty diesel<br></br>
              makes & models manufactured after 2000.
            </h2>
            <div className="transition ease-in-out text-center silverbg45 py-4 rounded skew-x-[-30deg] shadow-inner shadow-hemautoGreen hover:scale-110 duration-300">
              <button className="skew-x-[30deg] font-hemautoFontPlay font-extrabold text-3xl text-hemautoGreen green-text-shadow">
                BOOK NOW
              </button>
            </div>
          </div>
        </div>
        <div className="pt-20 px-[10%] ">
          <div className="grid grid-cols-3 text-balance">
            {features.map((feature) => (
              <div key={feature.name} className="hover:scale-110">
                <div className="rounded-lg bg-gray-50 px-6 pb-8 text-center">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center rounded-xl p-3 shadow-lg">
                        <feature.icon className="h-8 w-8" aria-hidden="true" />
                      </span>
                    </div>
                    <div className="justify-evenly shadow-inner shadow-hemautoGreen/100 rounded-3xl">
                      <div className="bg-hemautoTrueBlack/75 text-hemautoGreen rounded-3xl">
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



        
