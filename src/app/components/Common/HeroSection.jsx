import React from 'react';

const HeroSection = ({
  title,
  subtitle,
  buttonText,
  buttonLink = '/contact',
  backgroundImage,
  gradientFrom = 'from-blue-600',
  gradientTo = 'to-indigo-800',
  textColor = 'text-white',
  buttonBgColor = 'bg-white',
  buttonTextColor = 'text-blue-600'
}) => {
  const backgroundStyle = backgroundImage
    ? { backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }
    : {};

  return (
    <section
      className={`relative bg-gradient-to-r ${gradientFrom} ${gradientTo} ${textColor}`}
      style={backgroundStyle}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40 z-0"></div> 

      <div className="relative z-10 flex items-center container md:min-h-screen mx-auto px-5  md:px-8 py-16  md:py-24">
        <div className="max-w-xl">
          <h1 className="text-3xl md:text-5xl font-medium mb-2 md::mb-4">
            {title}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-normal md:mb-6 mb-4">
            {subtitle}
          </p>
          <a
            href={buttonLink}
            className={`inline-block px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold shadow-lg transform transition-all duration-300 ease-in-out ${buttonBgColor} ${buttonTextColor} hover:scale-105 hover:shadow-2xl`}
          >
            {buttonText}
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
