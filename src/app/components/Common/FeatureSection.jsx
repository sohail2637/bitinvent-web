import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const FeatureSection = ({
    title,
    description,
    imageSrc,
    imageAlt = 'Feature Image',
    reverse = false,
    buttonText,
    buttonLink = '#',
    buttonBgColor = 'bg-white',
    buttonTextColor = 'text-blue-600'
}) => {
    return (
          <div className="relative overflow-hidden px-6 md:py-7 py-4  ">
        <section className='max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between ' >
            {/* Text Content */}
            <div
                className={`w-full mb-4 md:space-y-6 ${reverse ? 'md:order-2' : ''
                    }`}
            >
                <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold  text-[#0F1F4B] leading-tight">
                    {title}
                </h1>
                <p className="text-gray-600 text-base md:mb-4 my-2">{description}</p>

                <a
                    href={buttonLink}
                    className="inline-block px-8 py-3 text-[15px] rounded-lg font-semibold shadow-lg transform transition-all duration-300 ease-in-out bg-blue-600 text-white hover:bg-white hover:text-blue-600 hover:scale-105 hover:shadow-2xl border-2 border-transparent hover:border-blue-600"
                >
                    {buttonText}
                </a>
            </div>

            {/* Image */}
            <div
                className={`w-full md:w-1/2 relative flex justify-center mt-3 md:mt-0 ${reverse ? 'md:order-1' : ''
                    }`}
            >
                <div className="relative z-10">
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        width={400}
                        height={400}
                        className="rounded-2xl"
                    />
                </div>
            </div>
        </section>
             </div>
    );
};

export default FeatureSection;
