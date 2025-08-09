import Head from 'next/head';
import Link from 'next/link';
import HeroSection from '../Common/HeroSection';
import FeatureSection from '../Common/FeatureSection';
import ServiceSection from '../Common/ServiceSection';
import ProcessSection from "../Common/ProcessSection"
import WhyChose from "../Common/WhyChose"

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

  const features = [
    {
      title: "User-friendly Interface",
      description: "Our apps ensure a seamless experience with intuitive navigation and swift content access.",
      icon: "👆"
    },
    {
      title: "Improve Stability",
      description: "Guaranteeing a crash-free experience that handles many users without slowing down.",
      icon: "⚡"
    },
    {
      title: "Resilience",
      description: "Advanced encryption and security framework to protect user-sensitive information.",
      icon: "🛡️"
    },
    {
      title: "Socialization",
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
        backgroundImage="/assets/images/mobileApp.webp"

      />
</main>
      <FeatureSection
        title={
          <>
            Premier mobile app solutions, your top choice
          </>
        }
        description="BitInvent, a top-tier mobile app development company, delivers cutting-edge custom solutions. We help ambitious businesses to build scalable, user-focused apps that succeed.Our app development team collaborates to create custom features, streamline processes for a better user experience, analyze usage patterns for mobile optimization, and deliver actionable insights to refine your mobile strategy."
        imageSrc="/assets/images/mobileApp.webp"
        buttonText="Schedule a Demo"
        buttonLink="/contact"
      />


      <ServiceSection
        title="Experience the Future of Enterprise Solutions with Our AI Development Services"
        services={services}
      />


      {/* Features Section */}
      <section className="lg:py-16 py-7 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="lg:text-3xl text-2xl font-bold text-center text-gray-800 lg:mb-12 mb-6">
            Mobile App Development Features
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="border border-gray-200 p-6 rounded-lg hover:border-blue-500 transition">
                <div className="text-4xl lg:mb-4 mb-2">{feature.icon}</div>
                <h3 className="text-xl font-semibold lg:mb-3 mb-1 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
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
      </section>

      {/* Process Section */}
      <section className="lg:py-16 py-7 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="lg:text-3xl text-2xl font-bold text-center text-gray-800 mb-12">
            Mobile App Development Service Process
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


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