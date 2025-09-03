import { motion } from "framer-motion";
import Image from "next/image";

const AboutSection = () => {
  return (
    <div className="w-full flex justify-center md:py-12 py-0 md:pb-9pb-2 ">
      <div className="max-w-7xl w-full flex flex-wrap gap-5 items-start justify-center px-4">
        {/* Left Image */}
        <div className="w-[90%] md:w-[37%] flex justify-center">
          <Image
            src="/assets/images/meeting.jpg"
            alt="meeting"
            width={550}
            height={309}
            layout="responsive"
            className="rounded-md"
          />
        </div>

        {/* Right Text */}
        <div className="w-[90%] px-1 md:w-[40%] flex flex-col md:gap-7 gap-4">
          <p className="md:text-[25px] text-[20px] leading-7 font-[400] md:leading-10">
            BitInvent — Innovating Software and IoT Solutions for Your Needs
          </p>
          <div className="md:text-[20px] text-[15px] font-[300] md:leading-7 flex flex-col md:gap-8 gap-3 text-[#3a3a3a]">
            <span>
              BitInvent is a seasoned software and IoT solutions company with two
              years of experience. Renowned for our technical expertise, effective
              communication, and exceptional project management, we deliver
              innovative IT solutions at competitive prices.
            </span>
            <span>
              With an average customer retention rate of 2 years, our business
              model blends management and customer care with software development
              by our team of 50+ engineers based in Faisalabad, Pakistan.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
