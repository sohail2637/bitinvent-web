// pages/index.js
import Head from 'next/head';
import { FaRobot, FaCode, FaCloud, FaShieldAlt, FaUsers, FaChartLine, FaSyncAlt, FaServer, FaEye, FaHandsHelping, FaGlobe, FaUserTie } from 'react-icons/fa';
import HeroSection from '../Common/HeroSection';
import FeatureSection from '../Common/FeatureSection';
import ServiceSection from '../Common/ServiceSection';
import ProcessSection from "../Common/ProcessSection"
import WhyChose from "../Common/WhyChose"

export default function DevOps() {
  return (
    <div className="min-h-screen bg-gray-50">
            <main className="pt-[90px]">

      <HeroSection
        title="Revolutionize Your Business.With Our DevOps Solutions"
        subtitle="Streamline your development lifecycle with our AI-powered DevOps services. Accelerate delivery, enhance collaboration, and achieve operational excellence."
        buttonText="Let's Connect"
        backgroundImage="/assets/images/devops.png"

      />
      </main>
      <FeatureSection
        title={
          <>
            Revolutionize Your Business with BitInvent&apos;s DevOps Consulting Services
          </>
        }
        description="Revolutionize Your Business with BitInvent’s DevOps Consulting Services Experience streamlined and accelerated DevOps software development with BitInvent’s collaborative culture and tailored AI integration. As a leading DevOps consulting company, we harness AI-powered automation tools, predictive analytics, and robust quality assurance to optimize efficiency, reduce risks, and deliver faster, more reliable software deployments."
        imageSrc="/assets/images/chatgpt-img.jpg"
        buttonText="Schedule a Demo"
        buttonLink="/contact"
      />

      <ServiceSection
        title="Our Dynamic DevOps Development Services"
        services={services}
      />
      {/* Process Section */}
      {/* <div id="process" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Process</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              The DevOps Software Development Process
            </p>
          </div>

          <div className="mt-10">
            <div className="relative">
              <div className="absolute hidden md:block h-full border-r-2 border-indigo-200" style={{ left: '50%' }}></div>

              {processSteps.map((step, index) => (
                <div key={step.name} className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="order-1 md:w-5/12"></div>
                  <div className="z-10 flex items-center order-1 bg-indigo-100 shadow-xl w-8 h-8 rounded-full">
                    <h1 className="mx-auto font-semibold text-lg text-indigo-800">{index + 1}</h1>
                  </div>
                  <div className={`order-1 rounded-lg shadow-xl md:w-5/12 px-6 py-4 ${index % 2 === 0 ? 'bg-indigo-600' : 'bg-gray-800'}`}>
                    <h3 className={`mb-3 text-xl font-bold ${index % 2 === 0 ? 'text-white' : 'text-indigo-300'}`}>{step.name}</h3>
                    <p className={`text-sm ${index % 2 === 0 ? 'text-indigo-100' : 'text-gray-300'}`}>
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div> */}
         <ProcessSection
              title="The DevOps Software Development Process"
              steps={processSteps}
            />
      <WhyChose />
    </div>
  );
}

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

const features = [
  {
    name: 'CI/CD Setup',
    description: 'Design, build, and deploy automated continuous integration and continuous delivery pipelines for faster and more reliable software updates.',
    icon: FaRobot,
  },
  {
    name: 'Automation',
    description: 'Leverage Docker containers and Kubernetes orchestration to ensure consistent and repeatable deployments across all environments.',
    icon: FaRobot,
  },
  {
    name: 'Cloudization',
    description: 'Seamlessly migrate applications to the cloud to improve cost-effectiveness, flexibility, and performance through horizontal scaling.',
    icon: FaCloud,
  },
  {
    name: 'DevSecOps Integration',
    description: 'Implement security best practices into the DevOps lifecycle by incorporating security testing, compliance validation, and risk analysis procedures.',
    icon: FaShieldAlt,
  },
];

const processSteps = [
  {
    step: "1",
    name: "Plan and Develop",
    description:
      "Define project goals, gather requirements, and build solutions following coding standards with Git for collaboration.",
  },
  {
    step: "2",
    name: "CI/CD",
    description:
      "Automate code integration, testing, and deployment to ensure faster and more reliable delivery.",
  },
  {
    step: "3",
    name: "Monitor and Secure",
    description:
      "Continuously track performance and apply security best practices through scans and timely updates.",
  },
  {
    step: "4",
    name: "Optimize and Improve",
    description:
      "Scale resources, gather feedback, and use automation to enhance efficiency and performance.",
  },
];


const reasons = [
  {
    name: '10+ Years of Experience',
    description: 'Our extensive experience in DevOps gives us a proven track record of success and expertise to meet your business needs.',
    icon: FaChartLine,
  },
  {
    name: 'Team of Experts',
    description: 'We offer a broad range of skills and knowledge to support your business requirements, providing comprehensive solutions.',
    icon: FaUserTie,
  },
  {
    name: 'Global Presence',
    description: 'Our international footprint allows us to offer solutions and support worldwide, making us an excellent choice for businesses with global operations.',
    icon: FaGlobe,
  },
  {
    name: 'People Driven',
    description: 'We prioritize our employees growth and development, ensuring a dedicated team committed to delivering the best solutions for your business.',
    icon: FaHandsHelping,
  },
];