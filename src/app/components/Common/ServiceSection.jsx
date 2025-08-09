import React from 'react';
import ServiceCard from './ServiceCard';

const ServiceSection = ({ title, services, subtitle }) => {
  return (
    <section className="lg:py-20 py-10 bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center lg:mb-16 mb-7">
          {title && (
            <h2 className="lg:text-4xl text-2xl   font-bold text-gray-900 lg:mb-4 mb-0">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:px-10 px-5 lg:px-0">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>

       
      </div>
    </section>
  );
};

export default ServiceSection;