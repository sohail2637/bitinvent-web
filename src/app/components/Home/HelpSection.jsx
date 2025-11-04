import Image from "next/image";

const HelpSection = () => {
  return (
    <div className="w-full bg-[#ebf5fd] md:py-12 py-9 flex justify-center">
      <div className="max-w-7xl w-full flex flex-wrap gap-10 items-center justify-center px-4">
        {/* Left Text */}
        <div className="w-[90%] md:w-[40%] flex flex-col md:gap-8 gap-6">
          <p className="md:text-[25px] text-[20px] font-[400] md:leading-10 leading-7">
            HOW CAN WE HELP?
          </p>
          <div className="flex flex-col md:gap-8 gap-6 text-[#3a3a3a]">
            <span className="md:text-[20px] text-[18px] font-[300] leading-7">
              At BitInvent, we build software designed around your goals. From web
              and mobile apps to powerful backends, seamless integrations and
              innovative IoT solutions, we handle it all.
            </span>
            <a
              href="/contact"
              className="inline-block w-[200px] text-center bg-[#EF6461] hover:bg-[#db3431] text-white text-[16px] leading-6 px-6 py-3 rounded-md font-medium shadow-md hover:shadow-lg transition-all duration-200"
            >
              How can we help?
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-[100%] md:w-[37%] flex justify-center">
          <Image
            src="/assets/images/mbl.png"
            alt="meeting"
            width={550}
            height={309}
            layout="responsive"
          />
        </div>
      </div>
    </div>
  );
};

export default HelpSection;
