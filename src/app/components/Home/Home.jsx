import Image from "next/image";
import { motion } from 'framer-motion';
import SliderComponent from "./Slider";
import ValueForBusiness from "./ValueForBusiness";
import InsightsNews from "./InsightsNews"
import IndustryCard from "./IndustryCard"
import HomeServicesSection from "./HomeServicesSection"
import HeroSection from "../Common/HeroSection";
import FAQ from "./FAQ";
import Slider from "./Slider";
import AboutSection from "./AboutSection"
import HelpSection from "./HelpSection"
import IndustriesSection from "./IndustriesSection"


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
      <AboutSection />
    
      <section className="lg:pt-16 pt-7">
        <div className="text-center md:mb-16 mb-4">
          <h1 className="lg:text-3xl text-2xl font-bold text-center text-gray-800 mb-6">
            BITINVENT SERVICES
          </h1>
        </div>
        <HomeServicesSection />
      </section>
  <IndustriesSection />
      <HelpSection />

 
      {/* five */}

      {/* <Slider /> */}
      <FAQ />
      {/* six */}
      {/* <ValueForBusiness /> */}
      {/* <InsightsNews /> */}
    </>
  );
};
export default Home;
