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
    <section className="md:py-20 py-12 bg-gradient-to-b from-[#fdfbff] to-white">
      <div className="container mx-auto px-6">
        <div className="text-center md:mb-16 mb-4">
        
          <h2 className="lg:text-4xl text-2xl font-bold text-gray-900 lg:mb-4 mb-0">
            Smart AI Chatbots for Your Business
          </h2>
          <p className="md:text-xl text-lg  text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transform customer interactions with our AI-powered virtual assistants, built using cutting-edge NLP and machine learning technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {chatbotTypes.map((type, index) => (
            <div 
              key={index} 
              className="bg-white md:p-8 p-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="text-5xl lg:mb-6 mb-3 p-4 bg-blue-50 rounded-full w-14 h-14 lg:w-20 lg:h-20 flex items-center justify-center">
                {type.icon}
              </div>
              <h3 className="md:text-2xl text-xl  font-bold lg:mb-4 mb-2 text-gray-800">{type.name}</h3>
              <p className="text-gray-600  mb-6">{type.description}</p>
            
            </div>
          ))}
        </div>

        {/* <div className="text-center mt-16">
          <button  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition duration-300 transform hover:scale-105">
            Get Your Custom Chatbot
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default ChatbotTypes;