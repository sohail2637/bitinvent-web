"use client"

import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';

const profiles = [
  {
    id: 1,
    image: 'https://teo.dk/wp-content/uploads/2023/06/noroot-2.png',
    name: 'John Doe',
    role: 'Software Engineer',
    heading: 'About John',
    description: "“Not only has TEO delivered on time and budget, but they have helped to drive knowledge transfer across team and provide ad hoc project management to ﬁll eBay's own internal staffing gaps. We would recommend TEO to any organization looking for a software development partner and would not hesitate to work with TEO again in the future.”"
  },
  {
    id: 2,
    image: 'https://teo.dk/wp-content/uploads/2023/06/noroot-2.png',
    name: 'John Doe',
    role: 'Software Engineer',
    heading: 'About John',
    description: "“Not only has TEO delivered on time and budget, but they have helped to drive knowledge transfer across team and provide ad hoc project management to ﬁll eBay's own internal staffing gaps. We would recommend TEO to any organization looking for a software development partner and would not hesitate to work with TEO again in the future.”"
  },
  {
    id: 3,
    image: 'https://teo.dk/wp-content/uploads/2023/06/noroot-2.png',
    name: 'John Doe',
    role: 'Software Engineer',
    heading: 'About John',
    description: "“Not only has TEO delivered on time and budget, but they have helped to drive knowledge transfer across team and provide ad hoc project management to ﬁll eBay's own internal staffing gaps. We would recommend TEO to any organization looking for a software development partner and would not hesitate to work with TEO again in the future.”"
  },
  {
    id: 4,
    image: 'https://teo.dk/wp-content/uploads/2023/06/noroot-3.png',
    name: 'Jane Smith',
    role: 'Product Manager',
    heading: 'About Jane',
    description: 'Jane is an experienced product manager with a passion for building user-centric products. She has led several successful projects and is always eager to take on new challenges.',
  },
];

const PrevArrowComponent = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} !hidden sm:!flex items-center justify-center`}
      style={{
        ...style,
        left: '-50px',
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        background: 'rgba(255,255,255,0.8)',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
        zIndex: 1,
        display: 'flex !important',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onClick={onClick}
    >
      <div className="relative w-5 h-5">
        <Image
         style={{
       left:"-9px"
      }}
          src="/assets/icons/next.svg"
          alt="previous"
          fill
          className="object-contain transform rotate-180"
        />
      </div>
    </div>
  );
};

const NextArrowComponent = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} !hidden sm:!flex items-center justify-center`}
      style={{
        ...style,
        right: '-50px',
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        background: 'rgba(255,255,255,0.8)',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
        zIndex: 1,
        display: 'flex !important',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onClick={onClick}
    >
      <div className="relative w-5 h-5">
        <Image
          style={{
       left:"-9px"
      }}
          src="/assets/icons/next.svg"
          alt="next"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
};

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrowComponent />,
    nextArrow: <NextArrowComponent />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          dots: true
        }
      }
    ]
  };

  return (
    <div className="md:py-12 py-6 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="text-center md:mb-10 mb-5">
        <h2 className="text-xl md:text-2xl font-medium text-[#034e70]">
          WHAT OUR DANISH CUSTOMERS SAY
        </h2>
      </div>

      <div className="max-w-4xl mx-auto">
        <Slider {...settings}>
          {profiles.map((profile) => (
            <div key={profile.id} className="px-2 sm:px-4 focus:outline-none">
              <div className="bg-white rounded-lg p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex flex-col items-center">
                  <Image
                    src={profile.image}
                    alt={profile.name}
                    width={80}
                    height={80}
                    className="rounded-full object-cover mb-4"
                  />
                  <h3 className="text-lg sm:text-xl font-medium text-[#034e70]">{profile.name}</h3>
                  <p className="text-sm sm:text-base text-[#034e70] md:mb-6 mb-3">{profile.role}</p>
                  <h4 className="md:text-[25px] text-[20px] font-medium text-[#143848] mb-4">{profile.heading}</h4>
                  <p className="md:text-[18px] text-[16px] leading-6 text-[#59727e] max-w-2xl mx-auto">
                    {profile.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SliderComponent;