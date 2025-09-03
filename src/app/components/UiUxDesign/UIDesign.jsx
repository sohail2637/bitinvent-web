// pages/ui-ux-design.js
import Head from 'next/head';
import { FaCompass, FaMobile, FaPalette, FaUserCog, FaMousePointer, FaChartLine, FaSketch, FaEye, FaRocket, FaPaintBrush } from 'react-icons/fa';
import HeroSection from '../Common/HeroSection';
import FeatureSection from '../Common/FeatureSection';
import ServiceSection from '../Common/ServiceSection';
import ProcessSection from "../Common/ProcessSection"
import WhyChose from "../Common/WhyChose"
import FeatureCard from '../Common/FeatureCard';

export default function UIDesign() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="pt-[90px]">

        <HeroSection
          title="Elevate Your Digital Presence With Exceptional UI/UX Design"
          subtitle="Craft captivating interfaces for seamless navigation and enhanced user engagement with our top-tier UI/UX design services."
          buttonText="Let's Connect"
          backgroundImage="/assets/images/UiUxDesign.png"

        />
      </main>
      <FeatureSection
        title={
          <>
            Excel in Emerging Tech with Our AI Services
          </>
        }
        description="In today’s digital landscape, thoughtful UI/UX design plays a vital role in how people experience your brand. It influences first impressions, drives engagement, and can shape the success of your business. At BitInvent, we focus on creating designs that feel natural, intuitive, and truly user-centered. Our team takes the time to understand user behavior, allowing us to design interfaces that are not just visually appealing but also meaningful and easy to use. Every interaction is crafted to enhance satisfaction, build trust, and strengthen brand loyalty. With BitInvent, you're investing in design that connects, engages, and delivers real value to your users."
        buttonText="Schedule a Demo"
        buttonLink="/contact"
        imageSrc="/assets/images/customSoftware.png"

      />
      <ServiceSection
        title=" Power-Packed UI/UX Design Services"
        services={services}
      />

    <FeatureCard
          title="Our UI/UX Design Solutions"
          features={features}
        />


      <ProcessSection
        title=" Our UI/UX Design Process"
        steps={processSteps}
      />
      <WhyChose />
    </div>
  );
}

const services = [
  {
    name: 'Intuitive Navigation',
    description: 'Seamlessly guide users through your interface with intuitive navigation that enhances engagement and reduces frustration.',
    icon: <FaCompass />,
  },
  {
    name: 'Responsive Design',
    description: 'Ensure a consistent and enjoyable experience across all devices with responsive design that adapts to various screen sizes.',
    icon: <FaMobile />,
  },
  {
    name: 'Visual Consistency',
    description: 'Maintain a cohesive visual language through consistent typography, colors, and elements that foster brand recognition.',
    icon: <FaPalette />,
  },
  {
    name: 'User-Centric Approach',
    description: 'We design around user needs and behaviors, creating interfaces that resonate and encourage prolonged engagement.',
    icon: <FaUserCog />,
  },
  {
    name: 'Effortless Interactions',
    description: 'Streamline interactions with clear calls-to-action, intuitive gestures, and feedback mechanisms for smooth user experiences.',
    icon: <FaMousePointer />,
  },
  {
    name: 'Data-Driven Optimization',
    description: 'Continuously refine your design based on user data and feedback to enhance usability and drive better experiences.',
    icon: <FaChartLine />,
  },
];

const features = [
  {
    name: 'User-Centered Design',
    description: 'We create intuitive interfaces and frictionless interactions tailored to user preferences that boost satisfaction and engagement.',
    icon: FaUserCog,
  },
  {
    name: 'Wireframing',
    description: 'Transform abstract ideas into tangible designs with detailed wireframes and interactive prototypes to visualize the user journey.',
    icon: FaSketch,
  },
  {
    name: 'Visual Designs',
    description: 'Create visually captivating interfaces that align with your brand identity through expert use of typography, color, and imagery.',
    icon: FaPaintBrush,
  },
  {
    name: 'Usability Testing',
    description: 'Conduct extensive testing to uncover issues and refine design elements for a truly user-friendly experience.',
    icon: FaEye,
  },
];

// const tools = [
//   {
//     name: 'Figma',
//     icon: FaPalette,
//   },
//   {
//     name: 'Sketch',
//     icon: FaPalette,
//   },
//   {
//     name: 'Adobe XD',
//     icon: FaPalette,
//   },
//   {
//     name: 'InVision',
//     icon: FaPalette,
//   },
//   {
//     name: 'Miro',
//     icon: FaPalette,
//   },
//   {
//     name: 'Zeplin',
//     icon: FaPalette,
//   },
// ];

const processSteps = [
  {
    step:"1",
    name: 'Planning & Research',
    description: 'Conduct user experience research, define problem statements, and brainstorm solutions to deeply understand user needs.',
  },
  {step:"2",
    name: 'Structure & Blueprint',
    description: 'Create information architecture, wireframes, prototypes, and design systems to structure content and design flows.',
  },
  {step:"3",
    name: 'Visualization & Testing',
    description: 'Capture feedback through user testing, uncover usability issues, and refine designs to meet user expectations.',
  },
  {step:"4",
    name: 'Implementation & Launch',
    description: 'Launch the fully developed product with ongoing A/B testing and improvements based on post-launch insights.',
  },
];