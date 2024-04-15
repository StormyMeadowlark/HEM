const features = [
  {
    name: "QUALITY",
    description:
      "We take the highest precautions when it comes to the safety of your vehicle",
    icon: "words",
  },
  {
    name: "COST",
    description: "Prices lower than the dealership",
    icon: "words",
  },
  {
    name: "WARRANTY",
    description: "You get a 12 month/12,000 mile nationwide warranty on most parts & labor at no extra cost",
    icon: "words",
  },
  {
    name: "CUSTOMER SERVICE",
    description: "text messageing, reminders, tech communication",
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
      <div className="relative bg-white py-24 sm:py-32 lg:py-40">
        <div className="px-10 py-8 font-hemautoFontPlay">
          <h1 className="text-7xl text-center ">
            <span className="text-hemautoGreen">YOUR</span> Topeka, KS<br></br>
            high-end mechanics
          </h1>
          <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500 text-center">
            full service auto care for most makes & models 2000 and newer.
          </p>
          <div className="mt-20">
            <div className="grid grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="">
                  <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8 text-center">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center rounded-xl bg-indigo-500 p-3 shadow-lg">
                          <feature.icon
                            className="h-8 w-8 text-white"
                            aria-hidden="true"
                          />
                        </span>
                      </div>
                      <div className="bg-hemautoBlack/100 justify-evenly py-11">
                        <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">
                          {feature.name}
                        </h3>
                        <p className="leading-7 text-gray-600">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p>BBB A+ certified</p>
            <p>Carfax Care Care Service Center</p>
          </div>
        </div>
      </div>
    );
  }



        
