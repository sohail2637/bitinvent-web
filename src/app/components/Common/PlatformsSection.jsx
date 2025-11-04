import React from "react";

const PlatformsSection = ({ title, description, platforms }) => {
  return (
    <section className="md:py-12 py-6 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading & Description */}
        <div className="text-center md:mb-16 mb-4">
          <h2 className="lg:text-2xl px-2 text-xl font-semibold text-gray-900 lg:mb-4 mb-0">
            {title}
          </h2>
          {description && (
            <p className="md:text-lg hidden md:block text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {description}
            </p>
          )}
        </div>

        {/* Platforms Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className="bg-gray-50 md:p-6 p-3 rounded-lg border border-gray-200 hover:border-blue-500 transition"
            >
              <div className="flex flex-row gap-2 justify-start items-center">
                <div className="text-3xl mb-3">{platform.icon}</div>
                <h3 className="lg:text-xl text-lg font-bold lg:mb-3 mb-1 text-gray-800">
                  {platform.name}
                </h3>
              </div>
              <p className="text-gray-600 md:text-base text-sm md:mb-4 mb-2">
                Our chatbots integrate seamlessly with {platform.name.toLowerCase()} to enhance user experience.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformsSection;
