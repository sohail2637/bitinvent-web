import HeroSection from '../Common/HeroSection';
import FeatureSection from '../Common/FeatureSection';
import ServiceSection from '../Common/ServiceSection';
import ProcessSection from "../Common/ProcessSection"
import WhyChose from "../Common/WhyChose"
import ChatbotTypes from "./AiChatBot"

export default function AIChatbotDevelopment() {
  const services = [
    {
      title: "AI Chatbot Development Solutions",
      description: "We offer end-to-end AI development services, including design, development, integration, and support. Our intelligent virtual assistants engage users in meaningful conversations 24/7.",
      icon: "🤖"
    },
    {
      title: "Chatbot Design and Development",
      description: "We specialize in creating chatbots designed for business needs. Our team collaborates to understand the brand, goals, and challenges.",
      icon: "🎨"
    },
    {
      title: "Multi-language Chatbot Development",
      description: "We develop multilingual chatbots that can converse seamlessly in different languages. We provide localized support across diverse markets.",
      icon: "🌐"
    },
    {
      title: "Chatbot Integration",
      description: "Our integration experts ensure smooth chatbot integration across websites, apps, and messaging platforms.",
      icon: "🔌"
    },
    {
      title: "NLP Chatbot Development",
      description: "With advanced NLP capabilities, we create AI chatbots that understand users' complex queries and provide context-aware interactions.",
      icon: "💬"
    },
    {
      title: "Chatbot Maintenance and Support",
      description: "Post-deployment, we ensure chatbots perform optimally through regular updates, upgrades, and issue resolution support.",
      icon: "⚙️"
    }
  ];

  const chatbotTypes = [
    { name: "AI Chatbot Engineering", icon: "🧠", description: "Designing advanced AI chatbots using machine learning and neural networks." },
    { name: "AI Voice Assistant Chatbots", icon: "🎙️", description: "Virtual assistants with speech recognition for hands-free interactions." },
    { name: "Medical AI Chatbots", icon: "🏥", description: "Chatbots for clinical workflows and remote consultations." },
    { name: "Legal Chatbots", icon: "⚖️", description: "AI assistants for law firms handling client interactions and legal research." },
    { name: "Social Media Chatbot", icon: "📱", description: "Chatbots that engage customers across social media platforms." },
    { name: "Vision-based Chatbots", icon: "👁️", description: "Chatbots that analyze visual inputs for enhanced understanding." }
  ];

  const platforms = [
    { name: "Websites", icon: "🌐" },
    { name: "Social Media", icon: "📱" },
    { name: "E-commerce Portals", icon: "🛒" },
    { name: "Android Applications", icon: "🤖" },
    { name: "iOS Applications", icon: "🍏" },
    { name: "Web-Based Applications", icon: "💻" }
  ];

  const benefits = [
    { title: "Cost Savings", description: "Automating repetitive tasks translates into significant cost savings." },
    { title: "Increased Efficiency", description: "24/7 support reduces customer wait times and enhances satisfaction." },
    { title: "Data-Driven Insights", description: "Collect valuable customer data to personalize experiences." },
    { title: "Competitive Advantage", description: "Demonstrates commitment to innovation and customer-centricity." },
    { title: "Enhanced User Engagement", description: "Creates engaging interactions that foster customer relationships." },
    { title: "Scalability", description: "Adaptable to business growth and evolving technologies." }
  ];

  const processSteps = [
    { step: "1", title: "Contact Us", description: "Fill out the form so we can contact you and understand your needs." },
    { step: "2", title: "Get a Consultation", description: "Schedule a call with our team to assess project feasibility." },
    { step: "3", title: "Get a Cost Estimate", description: "Receive a proposal with budget and timeline after reviewing requirements." },
    { step: "4", title: "Project Kickoff", description: "We form a skilled team to initiate and launch your project." }
  ];



  return (
    <div className="min-h-screen bg-gray-50">
      <main className="pt-[90px]">

        <HeroSection
          title="Customized AI Chatbot Development Services"
          subtitle="Boost customer engagement with our customized AI chatbot development services. Converse with customers anytime, anywhere through our AI Chatbots. 24/7 automated support at a fraction of the time and cost."
          buttonText="Let's Connect"
          backgroundImage="/assets/images/ai-chatbot-2.png"

        />
      </main>
      <FeatureSection
        title={
          <>
            AI Models Leveraged by Our Specialists
          </>
        }
        description="As the Chatbot market grows, more businesses are realizing the benefits of using chatbots. The ease of automation and AI-powered customer service solutions has led to a surge in chatbot use across industries. Whether in e-commerce or customer service, our chatbots automate tasks, offer real-time support, and create personalized experiences. Maintain a competitive edge in the digital landscape with our adaptable, smart, and ready-to-deploy conversational chatbot solutions."
        buttonText="Schedule a Demo"
        buttonLink="/contact"
         imageSrc="/assets/images/ai-chatbot.png"

      />


      <ServiceSection
        title="Experience the Future of Enterprise Solutions with Our AI Development Services"
        services={services}
      />

      <ChatbotTypes />


      {/* Platform Integration Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="lg:text-4xl text-2xl font-bold text-center text-gray-800 mb-3 lg:mb-6">
            Integrate Our Chatbots into Different Platforms
          </h2>
          <p className="lg:text-xl text-base text-center text-gray-600 lg:mb-12 mb-4 max-w-4xl mx-auto">
            No matter where your customers are, our AI chatbots can meet their needs. We&apos;ve designed our AI chatbots to work seamlessly with a wide range of platforms.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {platforms.map((platform, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-blue-500 transition">
                <div className="text-3xl mb-3">{platform.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{platform.name}</h3>
                <p className="text-gray-600">Our chatbots integrate seamlessly with {platform.name.toLowerCase()} to enhance user experience.</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Benefits Section */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            How Does BitInvent Benefit Your Business?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="border border-gray-200 p-6 rounded-lg hover:shadow-md transition">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Our Chatbot Development Process
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm text-center">
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

    </div>
  );
}