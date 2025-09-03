import React from "react";

const FeatureCard = ({ title, features }) => {
  return (
    <div id="features" className="md:py-12 py-6 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center">
          <p className="lg:text-2xl px-2 text-xl font-semibold text-gray-900 lg:mb-4 mb-0">
            {title}
          </p>
        </div>

        <div className="lg:mt-10 mt-5">
          <div className="grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-4 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6 text-center">
                <div className="flow-root bg-white rounded-lg md:px-6 px-4 md:pb-8 pb-4 shadow-sm hover:shadow-md transition duration-300">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-indigo-100 rounded-md shadow-lg mx-auto">
                        <feature.icon
                          className="h-6 w-6 text-indigo-600"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                    <h3 className="lg:text-xl md:text-lg text-base font-bold lg:mb-3 mb-1 mt-2 text-gray-900 tracking-tight">
                      {feature.name}
                    </h3>
                    <p className="md:text-base text-sm md:mb-4 mb-2 text-gray-500">
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
};

export default FeatureCard;
