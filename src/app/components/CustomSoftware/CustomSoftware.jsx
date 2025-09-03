// pages/custom-software-development.js
import Head from 'next/head';
import { FaCogs, FaMobile, FaGlobe, FaShieldAlt, FaExchangeAlt, FaBoxes, FaChartLine, FaLightbulb, FaMoneyBillWave, FaRocket } from 'react-icons/fa';
import HeroSection from '../Common/HeroSection';
import FeatureSection from '../Common/FeatureSection';
import ServiceSection from '../Common/ServiceSection';
import ProcessSection from "../Common/ProcessSection"
import FeatureCard from "../Common/FeatureCard"
import WhyChose from "../Common/WhyChose"

export default function CustomSoftwareDevelopment() {
  return (
    <div className=" bg-gray-50">
      <main className="pt-[90px]">
        <HeroSection
          title="Custom Digital Solutions for Your Business"
          subtitle="Boost efficiency, streamline processes, and drive growth with tailored software built around your needs."
          buttonText="Let's Connect"
          backgroundImage="/assets/images/customSoftware.png"
        />

        <FeatureSection
          title={
            <>
              Revolutionize Your Business with Custom Application Development Services
            </>
          }
          description="BitInvent is a leading custom software development company delivering top-notch custom software development, custom application development, and tailored software solutions. Our team of expert software specialists follows a comprehensive development process to design, build, deploy, and maintain innovative applications and software tailored to the unique needs of specific users and organizations."
          imageSrc="/assets/images/customSoftware.png"
          buttonText="Schedule a Demo"
          buttonLink="/contact"
        />

        <ServiceSection
          title="Our Dynamic DevOps Development Services"
          services={services}
        />


        <FeatureCard
          title="Our Custom Application Development Features"
          features={features}
        />
        <ProcessSection
          title="The Custom Software Development Process"
          steps={processSteps}
        />
        <WhyChose />
      </main>
    </div>
  );
}

const processSteps = [
  {
    step: "1",
    name: "Planning & Requirements",
    description:
      "Understand business goals, analyze requirements, and define project scope with a feasibility check.",
  },
  {
    step: "2",
    name: "Design & Prototyping",
    description:
      "Create system architecture, document technical details, and validate UI/UX through prototypes.",
  },
  {
    step: "3",
    name: "Development & Testing",
    description:
      "Build the software following best practices, with thorough unit, integration, and QA testing.",
  },
  {
    step: "4",
    name: "Deployment & Maintenance",
    description:
      "Release the software, monitor performance, and provide ongoing updates to meet business needs.",
  },
];

const features = [
  {
    name: 'Efficient',
    description: 'Our streamlined development approach ensures we deliver high-performing, robust custom solutions on time and within budget.',
    icon: FaChartLine,
  },
  {
    name: 'Versatile',
    description: 'Create feature-rich yet versatile applications tailored precisely to your organization\'s unique needs and business model.',
    icon: FaLightbulb,
  },
  {
    name: 'Cost-Effective',
    description: 'Enjoy significant long-term cost savings with custom applications designed to streamline operations and boost efficiency.',
    icon: FaMoneyBillWave,
  },
  {
    name: 'Boost Your Business',
    description: 'Skyrocket growth by leveraging data-driven digital solutions tailored precisely to meet evolving business needs.',
    icon: FaRocket,
  },
];

const services = [
  {
    name: 'Enterprise Applications',
    description: 'Designing and developing software solutions that cater to the specific needs of large organizations, enhancing their operational efficiency and workflow.',
    icon: <FaCogs className="inline-block" />,
  },
  {
    name: 'SaaS Applications',
    description: 'Developing feature-rich SaaS solutions that can be accessed remotely through the internet, offering subscription-based services to users.',
    icon: <FaGlobe className="inline-block" />,
  },
  {
    name: 'HIPAA Compliant Applications',
    description: 'Building software that complies with the Health Insurance Portability and Accountability Act (HIPAA), ensuring the security and privacy of medical data.',
    icon: <FaShieldAlt className="inline-block" />,
  },
  {
    name: 'E-Commerce Applications',
    description: 'Crafting tailored e-commerce platforms with features like online shopping carts, payment gateways, inventory management, and customer portals.',
    icon: <FaBoxes className="inline-block" />,
  },
  {
    name: 'Third-Party Integrations',
    description: 'Integrating custom software solutions with third-party applications, systems, and APIs to enhance functionality and streamline processes.',
    icon: <FaExchangeAlt className="inline-block" />,
  },
  {
    name: 'Custom ERP Systems',
    description: 'Designing Enterprise Resource Planning systems that integrate and manage various business processes like finance, inventory, HR, and more.',
    icon: <FaChartLine className="inline-block" />,
  },
];
