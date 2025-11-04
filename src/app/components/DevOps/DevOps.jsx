// pages/index.js
import Head from 'next/head';
import { FaRobot, FaCode, FaCloud, FaShieldAlt, FaUsers, FaChartLine, FaSyncAlt, FaServer, FaEye, FaHandsHelping, FaGlobe, FaUserTie } from 'react-icons/fa';
import HeroSection from '../Common/HeroSection';
import FeatureSection from '../Common/FeatureSection';
import ServiceSection from '../Common/ServiceSection';
import ProcessSection from "../Common/ProcessSection"
import WhyChose from "../Common/WhyChose"

const services = [
  {
    name: 'Continuous Integration (CI)',
    description: 'Experience accelerated software delivery through automated code integration, streamlined builds, and comprehensive testing. Ensure smoother collaboration among developers.',
    icon: <FaSyncAlt className="inline-block" />,
  },
  {
    name: 'Continuous Deployment (CD)',
    description: 'Streamline the release process by automating code deployment. It reduces manual intervention and enables quick and reliable delivery of new features and updates.',
    icon: <FaServer className="inline-block" />,
  },
  {
    name: 'Infrastructure as Code (IaC)',
    description: 'Use code-based infrastructure provisioning for better scalability and consistency. This helps you manage your infrastructure quickly and prevents configuration issues.',
    icon: <FaCode className="inline-block" />,
  },
  {
    name: 'Monitoring and Logging',
    description: 'Set up robust monitoring tools to track app performance and gain valuable insights. This makes it easier to spot issues, troubleshoot, and optimize promptly.',
    icon: <FaEye className="inline-block" />,
  },
  {
    name: 'Collaboration Tools',
    description: 'Integrate collaborative platforms to enhance communication among cross-functional teams, promoting efficient coordination throughout the development lifecycle.',
    icon: <FaUsers className="inline-block" />,
  },
  {
    name: 'Security Integration',
    description: 'Include security practices in every development phase. Use automated scans, compliance checks, and vulnerability assessments to ensure safer software delivery with reduced risks.',
    icon: <FaShieldAlt className="inline-block" />,
  },
];

const processSteps = [
  {
    step: "1",
    name: "Plan and Develop",
    description: "Define project goals, gather requirements, and build solutions following coding standards with Git for collaboration.",
  },
  {
    step: "2",
    name: "CI/CD",
    description: "Automate code integration, testing, and deployment to ensure faster and more reliable delivery.",
  },
  {
    step: "3",
    name: "Monitor and Secure",
    description: "Continuously track performance and apply security best practices through scans and timely updates.",
  },
  {
    step: "4",
    name: "Optimize and Improve",
    description: "Scale resources, gather feedback, and use automation to enhance efficiency and performance.",
  },
];

export default function DevOps() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800"> {/* Fixed typo here */}
      <main className="pt-[90px]">
        <HeroSection
          title="Revolutionize Your Business.With Our DevOps Solutions"
          subtitle="Streamline your development lifecycle with our AI-powered DevOps services. Accelerate delivery, enhance collaboration, and achieve operational excellence."
          buttonText="Let's Connect"
          backgroundImage="/assets/images/devops.png"
        />
      </main>
      <FeatureSection
        title="Revolutionize Your Business with BitInvent’s DevOps Consulting Services"
        description="Revolutionize Your Business with BitInvent’s DevOps Consulting Services Experience streamlined and accelerated DevOps software development with BitInvent’s collaborative culture and tailored AI integration. As a leading DevOps consulting company, we harness AI-powered automation tools, predictive analytics, and robust quality assurance to optimize efficiency, reduce risks, and deliver faster, more reliable software deployments."
        imageSrc="/assets/images/chatgpt-img.jpg"
        buttonText="Schedule a Demo"
        buttonLink="/contact"
      />

      <ServiceSection
        title="Our Dynamic DevOps Development Services"
        services={services}
      />
      
      <ProcessSection
        title="The DevOps Software Development Process"
        steps={processSteps}
      />
      
      <WhyChose />
    </div>
  );
}