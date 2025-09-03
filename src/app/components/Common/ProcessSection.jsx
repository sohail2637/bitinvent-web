import React from 'react';

export default function ProcessSection({ title, steps }) {
  return (
    <section className="lg:py-20 py-4 bg-gradient-to-br from-[#fdfbff] to-[#f5f2ff]">
      <div className="mx-auto px-6 max-w-7xl">
        {title && (
          <div className="text-center lg:mb-16 mb-6">
            <h2 className="lg:text-2xl px-2 text-xl font-semibold text-gray-900 lg:mb-4 mb-0">
              {title}
            </h2>
            <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
          </div>
        )}

        <div className="relative">
          {/* Timeline connector */}
          <div className="hidden lg:block absolute left-0 right-0 top-12 h-1 bg-gradient-to-r from-indigo-400 to-blue-400 mx-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-10 gap-5">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative group"
              >
                {/* Animated card */}
                <div className="bg-white lg:p-6 p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2 h-full flex flex-col">
                  {/* Step indicator with gradient */}
                  <div className="md:w-16 md:h-16 w-11 h-11 bg-gradient-to-br from-indigo-500 to-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold md:mb-4 mb-1 relative z-10 mx-auto">
                    {step.step}
                    <span className="absolute -z-10 inline-flex h-full w-full rounded-full bg-blue-400 "></span>
                  </div>
                  
                  <h3 className="lg:text-xl md:text-lg text-base font-bold lg:mb-3 mb-1 text-gray-900 text-center ">
                    {step.title}
                  </h3>
                  <p className="md:text-base text-sm md:mb-4 mb-2 text-center text-gray-600 flex-grow">
                    {step.description}
                  </p>
                  
                
                </div>
                
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}