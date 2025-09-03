import React from 'react';

const ServiceCard = ({ service }) => {
  return (
    <div className="group relative bg-white lg:p-8 p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden md:[box-shadow:0_-4px_12px_-2px_rgba(125,100,221,0.1)]">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
      
      <div className="relative z-10">
        <div className="w-16 xl:h-16 lg:h-14 lg:w-14 h-11  lg:mb-6 mb-3 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white text-3xl group-hover:rotate-6 transition-transform duration-300">
          {service.icon}
        </div>
        
        <h3 className="lg:text-xl md:text-lg text-base font-bold lg:mb-3 mb-1 text-gray-800 group-hover:text-purple-700 transition-colors duration-300">
          {service.title}
        </h3>
        
        <p className="text-gray-600 md:text-base text-sm md:mb-4 mb-2">{service.description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;