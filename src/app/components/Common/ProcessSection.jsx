import React from 'react';

export default function ProcessSection({ title, steps }) {
  return (
    <section className="lg:py-20 py-7 bg-gradient-to-br from-[#fdfbff] to-[#f5f2ff]">
      <div className="container mx-auto px-6 max-w-7xl">
        {title && (
          <div className="text-center lg:mb-16 mb-10">
            <h2 className="lg:text-4xl text-2xl font-bold text-gray-900 mb-4">
              {title}
            </h2>
            <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
          </div>
        )}

        <div className="relative">
          {/* Timeline connector */}
          <div className="hidden lg:block absolute left-0 right-0 top-12 h-1 bg-gradient-to-r from-indigo-400 to-blue-400 mx-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative group"
              >
                {/* Animated card */}
                <div className="bg-white lg:p-8 p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2 h-full flex flex-col">
                  {/* Step indicator with gradient */}
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 relative z-10 mx-auto">
                    {step.step}
                    <span className="absolute -z-10 inline-flex h-full w-full rounded-full bg-blue-400 "></span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 text-gray-900 text-center">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 mb-6 flex-grow">
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