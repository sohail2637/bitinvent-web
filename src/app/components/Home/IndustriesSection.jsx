import IndustryCard from "./IndustryCard"

export const industries = [
  {
    title: "Healthcare",
    description: "Transforming patient care with AI-powered diagnostics and personalized treatment.",
    bgImage: "/assets/images/HealthCare.png",
  },
  {
    title: "E-commerce & Retail",
    description: "Driving sales and customer engagement with personalized shopping experiences.",
    bgImage: "/assets/images/ecommerce.png",
  },
  {
    title: "Education & E-learning",
    description: "Enhancing learning through interactive digital platforms and AI-driven insights.",
    bgImage: "/assets/images/eLearning.png",
  },
  {
    title: "Finance",
    description: "Revolutionizing financial services with secure, fast, and data-driven solutions.",
    bgImage: "/assets/images/finance.png",
  },
  {
    title: "Real Estate",
    description: "Empowering property management and sales with virtual tours and smart analytics.",
    bgImage: "/assets/images/realState.png",
  },
  {
    title: "Travel & Hospitality",
    description: "Elevating guest experiences with AI-driven booking, personalization, and service.",
    bgImage: "/assets/images/travel.png",
  },
  {
    title: "Logistics & Supply Chain",
    description: "Optimizing operations with real-time tracking and predictive analytics.",
    bgImage: "/assets/images/supply.png",
  },
  {
    title: "Legal & Compliance",
    description: "Streamlining compliance and legal processes with AI-powered document analysis.",
    bgImage: "/assets/images/legal.png",
  },
];
const IndustriesSection = () => {
  return (
    <div className="lg:pt-16 pt-7">
      <div className="max-w-[1800px] mx-auto px-4 md:px-8 xl:px-16 2xl:px-20 3xl:px-32 text-center md:mb-16 mb-4">
        <h1 className="lg:text-3xl text-xl font-bold text-gray-800 md:mb-6 mb-2">
          Industries We Transformed with Innovative Software Solutions
        </h1>
        <p className="md:text-xl text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
          We are committed to innovating across industries with our custom AI
          solutions, empowering businesses to thrive in the digital era.
        </p>
      </div>
      <IndustryCard industries={industries} />
    </div>
  );
};

export default IndustriesSection;
