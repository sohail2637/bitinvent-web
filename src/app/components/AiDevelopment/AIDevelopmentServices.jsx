import Head from 'next/head';
import HeroSection from '../Common/HeroSection';
import FeatureSection from '../Common/FeatureSection';
import ServiceSection from '../Common/ServiceSection';
import ProcessSection from  "../Common/ProcessSection"
import WhyChose from  "../Common/WhyChose"

import Image from 'next/image';

export default function AIDevelopmentServices() {

  const services = [
    {
      title: "AI Chatbot Development",
      description: "Step into the future of customer engagement with our AI Development Solutions. We specialize in developing intelligent chatbots that enhance customer engagement, streamline operations, and deliver personalized experiences.",
      icon: "🤖"
    },
    {
      title: "Natural Language Processing",
      description: "NLP solutions help machines understand human language better, making communication and decision-making more efficient. By enhancing language understanding, NLP streamlines communication between humans and machines.",
      icon: "💬"
    },
    {
      title: "Predictive Analytics",
      description: "Utilizing advanced statistical and machine learning algorithms, our predictive analysis solutions ensure accurate predictions of forthcoming events and outcomes.",
      icon: "🔮"
    },
    {
      title: "Machine Learning",
      description: "Our machine learning services use data-driven algorithms to unlock actionable insights and drive transformative solutions for your business.",
      icon: "🧠"
    },
    {
      title: "Computer Vision",
      description: "Our computer vision service opens up new horizons in visual data interpretation, specializing in precise image recognition and object detection.",
      icon: "👁️"
    },
    {
      title: "ChatGPT Integration",
      description: "Enhance your digital interactions with our ChatGPT integration services. We empower your platform to automate responses and engage users in natural conversations.",
      icon: "💡"
    }
  ];


  const processSteps = [
    {
      step: "1",
      title: "Data Collection & Preparation",
      description: "Gathering and preparing relevant datasets to ensure quality and usability for AI model training."
    },
    {
      step: "2",
      title: "Model Design & Training",
      description: "Designing the AI model architecture and training it with prepared data to learn patterns."
    },
    {
      step: "3",
      title: "Evaluation & Optimization",
      description: "Assessing model performance and fine-tuning parameters to enhance accuracy and efficiency."
    },
    {
      step: "4",
      title: "Deployment & Monitoring",
      description: "Implementing the AI model in real-world environments with continuous monitoring for optimal performance."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="pt-[90px]">

      <HeroSection
        title="AI Development Services"
        subtitle="Explore limitless possibilities with our AI development services. Our AI solutions are here to drive innovation, efficiency, and success in your business endeavors."
        buttonText="Let's Connect"
        backgroundImage="/assets/images/ai-development.jpg"

      />
</main>
      <FeatureSection
        title={
          <>
            Excel in Emerging Tech with Our AI Services
          </>
        }
        description="At BitInvent, we deliver end-to-end AI development services, from idea validation to seamless deployment within your existing systems. Our team specializes in industry-leading AI solutions, including applications in healthcare and customizing foundational models like GPT to meet your unique business goals."
         imageSrc="/assets/images/ai-development.jpg"
        buttonText="Schedule a Demo"
        buttonLink="/contact"
      />


      <ServiceSection
        title="Experience the Future of Enterprise Solutions with Our AI Development Services"
        services={services}
      />

      <ProcessSection
        title="AI Development Process"
        steps={processSteps}
      />

   <WhyChose />

    </div>
  );
}