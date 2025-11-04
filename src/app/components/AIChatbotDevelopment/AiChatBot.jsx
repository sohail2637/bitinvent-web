import React from 'react';
import { FiMessageSquare, FiHeadphones, FiShoppingCart, FiHelpCircle, FiUser, FiGlobe } from 'react-icons/fi';

const ChatbotTypes = () => {

  const chatbotTypes = [
    {
      icon: <FiMessageSquare className="text-blue-500" />,
      name: "Customer Support Chatbots",
      description: "24/7 automated support that resolves common queries instantly, reducing wait times and improving satisfaction."
    },
    {
      icon: <FiShoppingCart className="text-purple-500" />,
      name: "E-commerce Assistants",
      description: "Personalized shopping assistants that recommend products, process orders, and boost conversion rates."
    },
    {
      icon: <FiHelpCircle className="text-green-500" />,
      name: "FAQ Chatbots",
      description: "Instant answers to frequently asked questions, reducing repetitive support requests."
    },
    {
      icon: <FiUser className="text-orange-500" />,
      name: "Lead Generation Bots",
      description: "Engage visitors, qualify leads, and capture contact information automatically."
    },
    {
      icon: <FiHeadphones className="text-red-500" />,
      name: "Voice Assistants",
      description: "Voice-enabled AI that provides hands-free interaction for your customers."
    },
    {
      icon: <FiGlobe className="text-teal-500" />,
      name: "Multilingual Chatbots",
      description: "Break language barriers with bots that communicate in multiple languages."
    }
  ];

  return (
    <section className="md:py-12 py-6 bg-gradient-to-b from-[#fdfbff] to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center md:mb-16 mb-4">
        
          <h2 className="lg:text-2xl px-2 text-xl font-semibold  text-gray-900 lg:mb-4 mb-0">
            Smart AI Chatbots for Your Business 
          </h2>
          <p className="md:text-lg hidden md:block  text-base  text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transform customer interactions with our AI-powered virtual assistants, built using cutting-edge NLP and machine learning technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {chatbotTypes.map((type, index) => (
            <div 
              key={index} 
              className="bg-white md:p-6 p-3 flex flex-col rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="text-3xl lg:mb-6 mb-3 p-4 bg-blue-50 rounded-full  lg:h-14 lg:w-14 h-14 w-14 flex items-center justify-center">
                {type.icon}
              </div>
              <h3 className="lg:text-xl text-lg font-bold lg:mb-3 mb-1 text-gray-800">{type.name}</h3>
              <p className="text-gray-600 md:text-base text-sm  md:mb-4 mb-2">{type.description}</p>
            
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChatbotTypes;