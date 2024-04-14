//tailwindui.com/components/marketing/sections/feature-sections?include=archived
https: import React from "react";
const features = [
  {
    name: "Push to Deploy",
    description:
      "quality automotive service other independent shops can't compete with",
    icon: "words",
  },
  {
    name: "SSL Certificates",
    description: "Prices lower than the dealership",
    icon: "words",
  },
  {
    name: "Simple Queues",
    description: "12 month/12,000 mile nationwide warranty",
    icon: "words",
  },
  {
    name: "Advanced Security",
    description: "top-notch customer service",
    icon: "words",
  },
  {
    name: "Powerful API",
    description: "financing always available",
    icon: "words",
  },
];

export default function Features() {
  return (
    <div className="relative bg-white py-24 sm:py-32 lg:py-40">
      <div className="bg-hemautoTrueBlack/30 px-10 py-8 font-hemautoFontPlay">
        <h1 className="text-7xl text-center ">
          <span className="text-hemautoGreen">YOUR</span> Topeka, KS<br></br>
          high-end mechanics
        </h1>
        <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500 text-center">
          full service auto care for most makes and models 2000 and newer.
        </p>
        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center rounded-xl bg-indigo-500 p-3 shadow-lg">
                        <feature.icon
                          className="h-8 w-8 text-white"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                      {feature.name}
                    </h3>
                    <p className="mt-5 text-base leading-7 text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
