"use client";

import dynamic from "next/dynamic";
import HeroSection from "../../components/Common/HeroSection";
import FeatureSection from "../../components/Common/FeatureSection";
import WhyChose from "../../components/Common/WhyChose";
import SectionList from "../../components/Common/SectionList";
import BenefitsCard from "../../components/Common/Benefits";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

export default function IndustryPages({ industry }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50  text-gray-800">
      <main className="pt-[90px]">
        <HeroSection
          title={industry.title}
          subtitle={industry.description}
          buttonText="Let's Connect"
          backgroundImage={industry.bgImage}
        />
      </main>

      <FeatureSection
        title={industry.titleFeature}
        description={industry.featureDescription}
         imageSrc={industry.bgImage}
        buttonText="Schedule a Demo"
        buttonLink="/contact"
      />

      {/* Benefits Grid */}
      <section className="lg:py-20 py-7 bg-gradient-to-b from-white to-purple-50">
        <div className="mx-auto  md:px-6 px-1 max-w-7xl">

        <div className="text-center md:mb-8 mb-4">
          <h2 className="text-3xl md:text-4xl font-bold text-start text-gray-900">
            {industry?.mainHeading}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {industry?.highlights.map((highlight, index) => (
            <BenefitsCard key={index} benefits={highlight} />
          ))}
        </div>
        </div>

      </section>

      {/* Slider Section */}
      <section className="max-w-7xl mx-auto px-5 md:px-10 lg:px-0 py-12">
        <div className="text-center md:mb-8 mb-4">
          <h2 className="text-3xl md:text-4xl font-bold text-start text-gray-900">
            {industry?.title} Use Cases
          </h2>
         
        </div>

        <Slider {...settings}>
          {industry?.sections?.map((highlight, index) => (
            <div key={index} className="px-3">
              <SectionList sections={highlight} />
            </div>
          ))}
        </Slider>
      </section>

      <WhyChose />
    </div>
  );
}
