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
    description: "Deploy advanced chatbots for websites, applications, and messaging platforms. They provide intuitive assistance and support through natural language interactions."
  },
  {
    icon: <FaQuestion className="inline-block" />,
    title: "Question Answering Module",
    description: "Integrate a powerful capability that delivers accurate and relevant answers to user queries in real-time."
  },
  {
    icon: <FaPenAlt className="inline-block" />,
    title: "Content Generation",
    description: "Empower your platform with engaging, personalized written content created by our AI integration services."
  },
  {
    icon: <FaGlobe className="inline-block" />,
    title: "Language Translation",
    description: "Break down language barriers with seamless translation services powered by natural language processing, making your app accessible to a global audience."
  },
  {
    icon: <FaGem className="inline-block" />,
    title: "Personalized Recommendations",
    description: "Boost user engagement and conversions with AI-driven recommendations tailored to individual user preferences and behaviors."
  },
  {
    icon: <FaTools className="inline-block" />,
    title: "Prompt Engineering",
    description: "We craft compelling and effective prompts to ensure the language model generates high-quality, relevant responses that meet your specific business needs."
  }
];

export default function ChatGPTIntegrationPage() {
  return (
    <div className="bg-gray-50 text-gray-80 min-h-screen">
      <main className="pt-[90px]">
        <HeroSection
          title="Seamless Communication with ChatGPT Integration Services"
          subtitle="At BitInvent, we provide top-notch AI development services designed to transform user engagement and drive conversions. Our specialty is creating seamless communication channels through cutting-edge ChatGPT integrations, tailored for industries like health tech and beyond."
          buttonText="Let's Connect"
          backgroundImage="/assets/images/chatgpt-img.jpg"
        />
      </main>

      <FeatureSection
        title="Experience the Future of Enterprise Solutions"
        description="As a premier mobile app development company, BitInvent empowers ambitious businesses with scalable, user-focused applications. Our team collaborates with you to build custom features, streamline processes, and analyze usage patterns to deliver actionable insights and a superior user experience."
        imageSrc="/assets/images/chatgpt-img.jpg"
        buttonText="Schedule a Demo"
        buttonLink="/contact"
      />

      <ServiceSection
        title="Our ChatGPT Integration Services"
        services={services}
      />

      <WhyChose />
    </div>
  );
}