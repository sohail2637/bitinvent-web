import Head from 'next/head';
import Link from 'next/link';
import HeroSection from '../Common/HeroSection';
import FeatureSection from '../Common/FeatureSection';
import ServiceSection from '../Common/ServiceSection';
import ProcessSection from "../Common/ProcessSection"
import WhyChose from "../Common/WhyChose"
import PlatformsSection from "../Common/PlatformsSection"

export default function MobileAppDevelopment() {
  const services = [
    {
      title: "App Development Consultation",
      description: "Our mobile development and consulting focus on your app's unique needs, providing data-backed insights for crafting your brand's Android/iOS solution.",
      icon: "💡"
    },
    {
      title: "App UI/UX Design",
      description: "Improving user journeys drives Mobile App UI/UX Design. Our creative developers craft business-aligned, innovative designs that meet user expectations.",
      icon: "🎨"
    },
    {
      title: "Mobile App Development Service",
      description: "Revitalize Mobile App Development with UI improvements, added functionality, and captivating features for premium results on schedule.",
      icon: "📱"
    },
    {
      title: "Mobile App Testing & QA",
      description: "Our Mobile Web App Development involves rigorous testing and QA to ensure usability, security, and functionality, addressing potential vulnerabilities.",
      icon: "🔍"
    },
    {
      title: "Custom App Development",
      description: "Custom mobile apps are tailored to client needs, ensuring unique business solutions, user experiences, and functionalities are met.",
      icon: "🛠️"
    },
    {
      title: "APIs Development Services",
      description: "Create secure, efficient APIs linking your mobile apps with third-party systems and data sources for seamless integration.",
      icon: "🔗"
    }
  ];

  const platformsData = [
    {
      name: "User-friendly Interface",
      description: "Our apps ensure a seamless experience with intuitive navigation and swift content access.",
      icon: "👆"
    },
    {
      name: "Improve Stability",
      description: "Guaranteeing a crash-free experience that handles many users without slowing down.",
      icon: "⚡"
    },
    {
      name: "Resilience",
      description: "Advanced encryption and security framework to protect user-sensitive information.",
      icon: "🛡️"
    },
    {
      name: "Socialization",
      description: "Integration with social platforms for login and content sharing.",
      icon: "🤝"
    }
  ];

  const platforms = [
    { name: "iOS", icon: "🍏" },
    { name: "Android", icon: "🤖" },
    { name: "React Native", icon: "⚛️" },
    { name: "Flutter", icon: "🦋" },
    { name: "Xamarin", icon: "✖️" },
    { name: "Ionic", icon: "⚡" }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Requirement Gathering",
      description: "Collaborate with the client to collect data including app purpose, audience, features, and platform preferences."
    },
    {
      step: "2",
      title: "Design and Development",
      description: "Craft prototypes and UI/UX designs, then code apps using suitable frameworks with clean, modular code."
    },
    {
      step: "3",
      title: "Testing and Implementation",
      description: "Conduct comprehensive tests and aid in store listings for user engagement."
    },
    {
      step: "4",
      title: "Maintenance and Updates",
      description: "Prioritize app maintenance, keeping it secure and compatible with new OS versions."
    }
  ];


  return (
    <div className="min-h-screen bg-gray-50">
      <main className="pt-[90px]">

        <HeroSection
          title="Custom Mobile App Development"
          subtitle="Turn your business ideas into compelling, user-focused apps with our top-tier Mobile App Developer Services."
          buttonText="Let's Connect"
          backgroundImage="/assets/images/mobileApp.jpeg"

        />
      </main>
      <FeatureSection
        title={
          <>
            Premier mobile app solutions, your top choice
          </>
        }
        description="BitInvent, a top-tier mobile app development company, delivers cutting-edge custom solutions. We help ambitious businesses to build scalable, user-focused apps that succeed.Our app development team collaborates to create custom features, streamline processes for a better user experience, analyze usage patterns for mobile optimization, and deliver actionable insights to refine your mobile strategy."
        imageSrc="/assets/images/mobileApp.jpeg"
        buttonText="Schedule a Demo"
        buttonLink="/contact"
      />


      <ServiceSection
        title="Experience the Future of Enterprise Solutions with Our AI Development Services"
        services={services}
      />
      <PlatformsSection
        title="Mobile App Development"
      description="No matter where your customers are, our AI chatbots can meet their needs. We've designed our AI chatbots to work seamlessly with a wide range of platforms."
        platforms={platformsData}
      />

      {/* Platforms Section
      <section className="lg:py-16 py-7 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="lg:text-3xl text-2xl font-bold text-center text-gray-800 lg:mb-6 mb-3">
            Top Mobile Development Platforms We Use
          </h2>
          <p className="lg:text-xl text-lg text-center text-gray-600 lg:mb-12 mb-8 max-w-3xl mx-auto">
            We leverage the best technologies to build high-performance mobile applications tailored to your needs.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {platforms.map((platform, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition">
                <div className="text-4xl mb-3">{platform.icon}</div>
                <h3 className="font-semibold text-gray-800">{platform.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <ProcessSection
        title=" Mobile App Development Service Process"
        steps={processSteps}
      />


      <WhyChose />

      <style jsx global>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
}