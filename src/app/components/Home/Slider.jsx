"use client"

import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';



const profiles = [
  {
    id: 1,
    image: 'https://teo.dk/wp-content/uploads/2023/06/noroot-2.png', // replace with actual image URL
    name: 'John Doe',
    role: 'Software Engineer',
    heading: 'About John',
    description:"“Not only has TEO delivered on time and budget, but they have helped to drive knowledge transfer across team and provide ad hoc project management to ﬁll eBay’s own internal staffing gaps. We would recommend TEO to any organization looking for a software development partner and would not hesitate to work with TEO again in the future.”"
  },
  {
    id: 2,
    image: 'https://teo.dk/wp-content/uploads/2023/06/noroot-2.png', // replace with actual image URL
    name: 'John Doe',
    role: 'Software Engineer',
    heading: 'About John',
    description:"“Not only has TEO delivered on time and budget, but they have helped to drive knowledge transfer across team and provide ad hoc project management to ﬁll eBay’s own internal staffing gaps. We would recommend TEO to any organization looking for a software development partner and would not hesitate to work with TEO again in the future.”"
  },
  {
    id: 3,
    image: 'https://teo.dk/wp-content/uploads/2023/06/noroot-2.png', // replace with actual image URL
    name: 'John Doe',
    role: 'Software Engineer',
    heading: 'About John',
    description:"“Not only has TEO delivered on time and budget, but they have helped to drive knowledge transfer across team and provide ad hoc project management to ﬁll eBay’s own internal staffing gaps. We would recommend TEO to any organization looking for a software development partner and would not hesitate to work with TEO again in the future.”"
  },
  {
    id: 4,
    image: 'https://teo.dk/wp-content/uploads/2023/06/noroot-3.png', // replace with actual image URL
    name: 'Jane Smith',
    role: 'Product Manager',
    heading: 'About Jane',
    description:
      'Jane is an experienced product manager with a passion for building user-centric products. She has led several successful projects and is always eager to take on new challenges.',
  },
  // Add more profiles as needed
];

// Custom Arrow Component for Previous Arrow
const PrevArrowComponent = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: '#fff' }}
      onClick={onClick}
    >
      <Image src="/assets/icons/next.svg" alt="next" width={70} height={70} 
        className="hidden sm:block transform rotate-180"/>

    </div>
  );
};

// Custom Arrow Component for Next Arrow
const NextArrowComponent = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: '#fff' }}
      onClick={onClick}
    >
      {/* Insert your custom next arrow icon here */}
      {/* <NextArrow /> */}
      <Image src="/assets/icons/next.svg" alt="next" width={25} height={25}/>

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
  };

  return (
    <>
    <div className="flex justify-center text-center w-[90%] mx-auto mt-10 text-[19.2px] font-[400] leading-[38.4px] text-[#034e70]">
WHAT OUR DANISH CUSTOMERS SAY
</div>
    <div className="container mx-auto flex justify-center">
      
      <Slider {...settings} className=" w-[100%] md:w-[80%]">
        {profiles.map((profile) => (
          <div key={profile.id} className="flex-none p-4">
            <div className="bg-white rounded-lg p-6 text-center">
              <Image
                src={`${profile.image}`}
                alt={profile.name}
                width={73}
                height={73}
                className="rounded-full mx-auto mb-4"
              />
              <h2 className="text-[20px] leading-6 font-[500] text-[#034e70] ">{profile.name}</h2>
              <p className= "text-[18px] leading-5 font-normal text-[#034e70] mb-8">{profile.role}</p>
              <h3 className="text-[25px] leading-6 font-[500] text-[#143848] mb-2">{profile.heading}</h3>
              <p className="text-[16px] leading-6 font-[300] text-[#59727e] text-center">{profile.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
    </>
  );
};

export default SliderComponent;

