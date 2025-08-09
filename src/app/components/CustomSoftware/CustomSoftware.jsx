// pages/custom-software-development.js
import Head from 'next/head';
import { FaCogs, FaMobile, FaGlobe, FaShieldAlt, FaExchangeAlt, FaBoxes, FaChartLine, FaLightbulb, FaMoneyBillWave, FaRocket } from 'react-icons/fa';
import HeroSection from '../Common/HeroSection';
import FeatureSection from '../Common/FeatureSection';
import ServiceSection from '../Common/ServiceSection';
import ProcessSection from "../Common/ProcessSection"
import WhyChose from "../Common/WhyChose"

export default function CustomSoftwareDevelopment() {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection
        title="Personalized Digital Solutions For Your Business"
        subtitle="Unlock your business's full potential with our Custom Software Development Services. Tailored solutions designed to boost efficiency, streamline processes, and drive growth. "
        buttonText="Let's Connect"
        backgroundImage="/assets/images/customSoftware.webp"

      />
      <FeatureSection
        title={
          <>
            Revolutionize Your Business with Custom Application Development Services
          </>
        }
        description="BitInvent is a leading custom software development company delivering top-notch custom software development, custom application development, and tailored software solutions. Our team of expert software specialists follows a comprehensive development process to design, build, deploy, and maintain innovative applications and software tailored to the unique needs of specific users and organizations."
        imageSrc="/assets/images/customSoftware.webp"
        buttonText="Schedule a Demo"
        buttonLink="/contact"
      />

      <ServiceSection
        title="Our Dynamic DevOps Development Services"
        services={services}
      />


      {/* Features Section */}
      <div id="features" className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center">
            <p className="lg:text-3xl text-2xl leading-8 font-semibold tracking-tight text-gray-900">
              Our Custom Application Development Features
            </p>
          </div>

          <div className="lg:mt-10 mt-5">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-4">
              {features.map((feature) => (
                <div key={feature.name} className="pt-6 text-center">
                  <div className="flow-root bg-white rounded-lg px-6 pb-8 shadow-sm hover:shadow-md transition duration-300">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center p-3 bg-indigo-100 rounded-md shadow-lg mx-auto">
                          <feature.icon className="h-6 w-6 text-indigo-600" aria-hidden="true" />
                        </span>
                      </div>
                      <h3 className="lg:mt-8 mt-4 text-lg font-semiBold text-gray-900 tracking-tight">{feature.name}</h3>
                      <p className="lg:mt-5 mt-3 text-base text-gray-500">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <ProcessSection
        title="The Custom Software Development Process"
        steps={processSteps}
      />
      <WhyChose />

    </div>
  );
}

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
    name: 'Third-Party Applications',
    description: 'Integrating custom software solutions with third-party applications, systems, and APIs enhances functionality and custom application development that streamlines processes.',
    icon: <FaExchangeAlt className="inline-block" />,
  },
  {
    name: 'Custom ERP Systems',
    description: 'Designing Enterprise Resource Planning systems that integrate and manage various business processes like finance, banking, inventory, HR, etc.',
    icon: <FaChartLine className="inline-block" />,
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

const processSteps = [
  {
     step: "1",
    name: 'Planning and Requirements Gathering',
    description: 'Initial consultation to understand business goals, followed by requirement analysis to define software features. Project scope is outlined and feasibility study conducted.',
  },
  { step: "2",
    name: 'Design and Prototyping',
    description: 'Architects create high-level system architecture detailing component interactions. Detailed design documents specify technical aspects, while prototypes validate UI/UX.',
  },
  { step: "3",
    name: 'Development and Testing',
    description: 'Developers create code following design specs and best practices. Rigorous unit and integration testing assure functionality. QA performs comprehensive testing.',
  },
  { step: "4",
    name: 'Deployment and Maintenance',
    description: 'Software is deployed for users with continuous monitoring for performance and security. Regular maintenance and updates align with evolving business needs.',
  },
];
