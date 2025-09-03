// pages/custom-web-development.js
import Head from 'next/head';
import { FaPalette, FaCode, FaBoxOpen, FaShoppingCart, FaPlug, FaMobileAlt, FaClock, FaAdjust, FaChartLine, FaRocket } from 'react-icons/fa';
import HeroSection from '../Common/HeroSection';
import FeatureSection from '../Common/FeatureSection';
import ServiceSection from '../Common/ServiceSection';
import ProcessSection from "../Common/ProcessSection"
import WhyChose from "../Common/WhyChose"
import FeatureCard from '../Common/FeatureCard';

export default function CustomWebDevelopment() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="pt-[90px]">

        <HeroSection
          title="Revolutionize Your Online Presence With Custom Web Development"
          subtitle="Unlock your business's full potential with our Custom Web Development Services. Tailored solutions designed to boost efficiency, streamline processes, and drive growth."
          buttonText="Let's Connect"
          backgroundImage="/assets/images/WebDevelop.png"

        />
      </main>
      <FeatureSection
        title={
          <>
            Revolutionize Your Business with Our Web Development Services
          </>
        }
        description="BitInvent is a leading web development company specializing in custom web development, custom website development, and bespoke web design services. Our expert team follows a comprehensive development process to design, build, deploy, and maintain tailored websites and applications that meet the unique needs of specific users and organizations."
        imageSrc="/assets/images/WebDevelop.png"
        buttonText="Schedule a Demo"
        buttonLink="/contact"
      />
      <ServiceSection
        title="Experience the Future of Enterprise Solutions with Our AI Development Services"
        services={services}
      />
        <FeatureCard
          title="Our Custom Web Development Features"
          features={features}
        />

      <ProcessSection
        title="Our Web Development Process"
        steps={processSteps}
      />
      <WhyChose />



    </div>
  );
}

const services = [
  {
    name: 'Website Design',
    description: 'Conceptualizing the website\'s overall design, layout, navigation, and look & feel. This includes wireframing, prototyping, and visual design.',
    icon: <FaPalette className="inline-block" />,
  },
  {
    name: 'Website Development',
    description: 'Coding the front-end and back-end of the website using languages like HTML, CSS, JavaScript, PHP, and Python using top-of-the-line development frameworks.',
    icon: <FaCode className="inline-block" />,
  },
  {
    name: 'CMS Development',
    description: 'Building websites using Content Management platforms like WordPress, Wix, Shopify, Joomla, and Drupal to allow non-technical users to manage content.',
    icon: <FaBoxOpen className="inline-block" />,
  },
  {
    name: 'E-Commerce Development',
    description: 'Incorporating essential e-commerce functionalities, including online shopping carts, secure payment gateways, and inventory management systems.',
    icon: <FaShoppingCart className="inline-block" />,
  },
  {
    name: 'API & Database Integration',
    description: 'Connecting the website to external APIs and databases to fetch or store data. This includes user authentication/authorization APIs.',
    icon: <FaPlug className="inline-block" />,
  },
  {
    name: 'Web App Development',
    description: 'Leveraging full-stack frameworks such as Laravel, Django, and Ruby on Rails to proficiently code intricate, data-centric web applications.',
    icon: <FaMobileAlt className="inline-block" />,
  },
];

const features = [
  {
    name: 'Efficient Process',
    description: 'Our streamlined development approach ensures we deliver high-quality, custom web solutions on time and within budget.',
    icon: FaClock,
  },
  {
    name: 'Flexible Solutions',
    description: 'We design and build highly customized digital solutions with advanced features that adapt to your unique organizational needs.',
    icon: FaAdjust,
  },
  {
    name: 'Maximize ROI',
    description: 'Enjoy significant long-term savings with custom solutions designed to streamline operations and boost efficiency.',
    icon: FaChartLine,
  },
  {
    name: 'Accelerate Growth',
    description: 'Skyrocket business growth by leveraging data-driven digital solutions crafted specifically to meet changing needs.',
    icon: FaRocket,
  },
];

const processSteps = [
  {step : "1",
    name: 'Consultation & Planning',
    description: 'We conduct a thorough needs analysis and requirements gathering process to understand your business goals, target users, functionality needs, and technical requirements.',
  },
  {step : "2",
    name: 'Design & Prototyping',
    description: 'Our UX and UI experts will create user-friendly, responsive website prototypes based on the agreed-upon specifications to ensure they meet your needs before development begins.',
  },
  {step : "3",
    name: 'Development & Testing',
    description: 'Our skilled developers will then code, test, and debug the custom application according to the agreed specifications, timelines, and quality standards.',
  },
  {step : "4",
    name: 'Launch & Maintenance',
    description: 'Once launched, we provide ongoing support, maintenance, updates, and enhancements as needed to ensure your website continues performing optimally.',
  },
];

const technologies = [
  {
    name: 'React',
    icon: FaCode,
  },
  {
    name: 'Angular',
    icon: FaCode,
  },
  {
    name: 'Vue',
    icon: FaCode,
  },
  {
    name: 'Node.js',
    icon: FaCode,
  },
  {
    name: 'Laravel',
    icon: FaCode,
  },
  {
    name: 'Django',
    icon: FaCode,
  },
];