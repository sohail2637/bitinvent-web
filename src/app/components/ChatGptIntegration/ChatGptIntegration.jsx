import React from 'react';
import Link from 'next/link';
import HeroSection from '../Common/HeroSection';
import FeatureSection from '../Common/FeatureSection';
import ServiceSection from '../Common/ServiceSection';
import ProcessSection from "../Common/ProcessSection"
import WhyChose from "../Common/WhyChose"

import { FaRobot, FaQuestion, FaPenAlt, FaGlobe, FaGem, FaTools } from 'react-icons/fa';

const services = [
  {
    icon: <FaRobot className="inline-block" />,
    title: "Chatbot Development",
    description: "For websites, applications, and messaging platforms, Chat GPT offers chatbot development services with natural language interactions that give users assistance and support."
  },
  {
    icon: <FaQuestion className="inline-block" />,
    title: "Question Answering Module",
    description: "We integrate a powerful question-answering capability into your chatbot, enabling it to provide accurate and relevant answers to user queries."
  },
  {
    icon: <FaPenAlt className="inline-block" />,
    title: "Content Generation",
    description: "Our Chat GPT integration service offers content generation. It empowers your website with engaging and personalized written materials."
  },
  {
    icon: <FaGlobe className="inline-block" />,
    title: "Language Translation",
    description: "We integrate natural language processing capabilities with Chat GPT to offer seamless translation services for users in different countries or regions."
  },
  {
    icon: <FaGem className="inline-block" />,
    title: "Personalized Recommendations",
    description: "Experience the power of personalized recommendations with ChatGPT integrations. It is tailored to enhance user experiences and drive conversions."
  },
  {
    icon: <FaTools className="inline-block" />,
    title: "Prompt Engineering",
    description: "This service involves creating compelling prompts. These prompts enable the language model to generate high-quality responses that meet user needs and expectations."
  }
];

export default function ChatGPTIntegrationPage() {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      <main className="pt-[90px]">
        <HeroSection
          title="Seamless Communication with Chat GPT Integrations"
          subtitle="At BitInvent, we strive to provide top-notch AI services. Our specialty is smooth communication via Chat GPT Integration Services, enhancing user engagement and driving conversions across industries like health tech."
          buttonText="Let's Connect"
          backgroundImage="/assets/images/chatgpt-img.jpg"

        />
      </main>
      <FeatureSection
        title={
          <>
            Premier mobile app solutions, your top choice
          </>
        }
        description="BitInvent, a top-tier mobile app development company, delivers cutting-edge custom solutions. We help ambitious businesses to build scalable, user-focused apps that succeed.Our app development team collaborates to create custom features, streamline processes for a better user experience, analyze usage patterns for mobile optimization, and deliver actionable insights to refine your mobile strategy."
        imageSrc="/assets/images/chatgpt-img.jpg"
        buttonText="Schedule a Demo"
        buttonLink="/contact"
      />


      <ServiceSection
        title="Experience the Future of Enterprise Solutions with Our AI Development Services"
        services={services}
      />

      <WhyChose />
    </div>
  );
}

