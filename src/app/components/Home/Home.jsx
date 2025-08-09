import Image from "next/image";
import { motion } from 'framer-motion';
import SliderComponent from "./Slider";
import ValueForBusiness from "./ValueForBusiness";
import InsightsNews from "./InsightsNews"
import IndustryCard from "./IndustryCard"
import HomeServicesSection from "./HomeServicesSection"
import HeroSection from "../Common/HeroSection";

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Delay between child animations
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.5 } } // Adjust duration for slower animation
};

export const industries = [
  {
    title: "Healthcare",
    description: "Transforming patient care with AI-powered diagnostics and personalized treatment.",
    bgImage: "/assets/images/HealthCare.png",
  },
  {
    title: "E-commerce & Retail",
    description: "Driving sales and customer engagement with personalized shopping experiences.",
    bgImage: "/assets/images/ecommerce.png",
  },
  {
    title: "Education & E-learning",
    description: "Enhancing learning through interactive digital platforms and AI-driven insights.",
    bgImage: "/assets/images/eLearning.png",
  },
  {
    title: "Finance & Fintech",
    description: "Revolutionizing financial services with secure, fast, and data-driven solutions.",
    bgImage: "/assets/images/finance.png",
  },
  {
    title: "Real Estate",
    description: "Empowering property management and sales with virtual tours and smart analytics.",
    bgImage: "/assets/images/realState.png",
  },
  {
    title: "Travel & Hospitality",
    description: "Elevating guest experiences with AI-driven booking, personalization, and service.",
    bgImage: "/assets/images/travel.png",
  },
  {
    title: "Logistics & Supply Chain",
    description: "Optimizing operations with real-time tracking and predictive analytics.",
    bgImage: "/assets/images/supply.png",
  },
  {
    title: "Legal & Compliance",
    description: "Streamlining compliance and legal processes with AI-powered document analysis.",
    bgImage: "/assets/images/legal.png",
  },
];



const Home = () => {
  return (
    <>

      <main className="pt-[90px]">

        <HeroSection
          title="Software and IoT solutions,tailored for your business."
          subtitle="We deliver IT-solutions and technical knowhow at reasonable prices across industries and fields."
          backgroundImage="/assets/images/bg.jpg"
          buttonText="Let's Talk"
          buttonBgColor='bg-[#009b72]'
          buttonTextColor='text-white'
        />
      </main>
      <motion.div
        className="flex flex-wrap gap-5 items-start justify-center min-h-[500px] w-full py-12"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div className="w-[90%] md:w-[37%] flex justify-center" variants={itemVariants}>
          <Image
            src="/assets/images/meeting.jpg"
            alt="meeting"
            width={550}
            layout="responsive"
            className="rounded-md"
            height={309}
          />
        </motion.div>

        <motion.div className="w-[90%] px-1 md:w-[40%] flex flex-col md:gap-7 gap-4" variants={itemVariants}>
          <p className="md:text-[25px] text-[20px] leading-7 font-[400] md:leading-10">
            BitInvent-Innovating Software and IoT Solutions for Your Needs
          </p>
          <div className="md:text-[20px] text[18px] font-[300] md:leading-7 flex flex-col gap-8 text-[#3a3a3a]">
            <motion.span variants={itemVariants}>
              BitInvent is a seasoned software and IoT solutions company with five years of experience, boasting a portfolio of over 100 international clients. Renowned for our technical expertise, effective communication, and exceptional project management, we deliver innovative IT solutions at competitive prices. Our agile approach allows us to handle projects of all sizes efficiently.
            </motion.span>
            <motion.span variants={itemVariants}>
              With an average customer retention rate of five years, our business model blends management and customer care with software development by our team of 70+ engineers based in Faisalabad, Pakistan.
            </motion.span>
          </div>

        </motion.div>
      </motion.div>

      <div className="lg:pt-16 pt-7">
        <div className="text-center md:mb-16 mb-4">
          <h1 className="lg:text-3xl text-2xl font-bold text-center text-gray-800 mb-6">Industries We Transformed with Innovative Software Solutions</h1>
          <p className="md:text-xl text-lg  text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are committed to innovating across industries with our custom AI solutions, empowering businesses to thrive in the digital era.
          </p>
        </div>

        <IndustryCard industries={industries} />
      </div>

      <section className="lg:pt-16 pt-7">
        <div className="text-center md:mb-16 mb-4">
        <h1 className="lg:text-3xl text-2xl font-bold text-center text-gray-800 mb-6">
                    BITINVENT SERVICES
        </h1>
        </div>
        <HomeServicesSection />
      </section>


      <div className="flex flex-wrap gap-10 items-center justify-center min-h-[500px] w-full md:py-12 py-9 bg-[#ebf5fd]">
        <div className="  w-[90%] md:w-[40%] flex flex-col md:gap-8 gap-6 ">
          <p className="md:text-[25px] text-[20px] font-[400] md:leading-10 leading-7 ">
            {" "}
            HOW CAN WE HELP?
          </p>
          <div className="flex  flex-col md:gap-8 gap-6 text-[#3a3a3a]">
            <span className="md:text-[20px] text-[18px] font-[300] leading-7">
              At BitInvent, we build software designed around your goals. From web and mobile apps to powerful backends, seamless integrations and innovative IoT solutions, we handle it all. We also collaborate closely with your IT team to ensure smooth implementation and deliver real, lasting value to your business.
            </span>
            <a
              href="/contact"
              className="inline-block w-[200px] text-center bg-[#EF6461] hover:bg-[#db3431] text-white text-[16px] leading-6 px-6 py-3 rounded-md font-medium shadow-md hover:shadow-lg transition-all duration-200"
            >
              How can we help?
            </a>

          </div>
        </div>
        <div className=" w-[100%] md:w-[37%] flex justify-center">
          <Image
            src="/assets/images/mbl.png"
            alt="meeting"
            width={550}
            height={309}
            layout="responsive"
          />
        </div>


      </div>
      {/* five */}


      {/* <SliderComponent /> */}
      {/* six */}
      {/* <ValueForBusiness /> */}
      {/* <InsightsNews /> */}
    </>
  );
};
export default Home;
