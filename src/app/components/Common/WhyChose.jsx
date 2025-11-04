import React from 'react'
import { FaRocket, FaGlobe, FaCheckCircle, FaLightbulb, FaHandshake, FaUsers } from 'react-icons/fa'

export default function WhyChose() {
  const cards = [
    {
      icon: <FaRocket className="text-blue-600 md:text-4xl text-2xl" />,
      title: "Innovation First",
      description: "We design cutting-edge digital solutions tailored to modern business needs.",
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
      borderColor: "border-blue-200"
    },
    {
      icon: <FaGlobe className="text-indigo-600 tmd:text-4xl text-2xl" />,
      title: "Diverse Solutions",
      description: "From AI to e-commerce, we build platforms that solve real-world problems.",
      bgColor: "bg-gradient-to-br from-indigo-50 to-purple-50",
      borderColor: "border-indigo-200"
    },
    {
      icon: <FaCheckCircle className="text-purple-600 md:text-4xl text-2xl" />,
      title: "Quality Focused",
      description: "Every product we deliver is tested, refined, and optimized for lasting impact.",
      bgColor: "bg-gradient-to-br from-purple-50 to-pink-50",
      borderColor: "border-purple-200"
    },
    {
      icon: <FaLightbulb className="text-amber-600 md:text-4xl text-2xl" />,
      title: "Creative Approach",
      description: "We think outside the box to deliver unique solutions that stand out.",
      bgColor: "bg-gradient-to-br from-amber-50 to-orange-50",
      borderColor: "border-amber-200"
    },
    {
      icon: <FaHandshake className="text-green-600 md:text-4xl text-2xl" />,
      title: "Partnership",
      description: "We work with you as partners, not just vendors, in your success journey.",
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
      borderColor: "border-green-200"
    },
    {
      icon: <FaUsers className="text-teal-600 md:text-4xl text-2xl" />,
      title: "Expert Team",
      description: "Our skilled professionals bring years of experience to your project.",
      bgColor: "bg-gradient-to-br from-teal-50 to-cyan-50",
      borderColor: "border-teal-200"
    }
  ]

  return (
    <section className="md:py-12 py-6 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-72 bg-gradient-to-r from-blue-50/30 to-indigo-50/30 -skew-y-3 -translate-y-24"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-blue-200/20 rounded-full"></div>
      <div className="absolute -bottom-60 -left-40 w-96 h-96 bg-purple-200/20 rounded-full"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center md:mb-9 mb-4">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 md:mb-4 mb-1">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">BitInvent</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto md:text-lg text-base">
            We blend creativity, technology, and strategy to deliver solutions that make an impact and drive your business forward.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {cards.map((card, index) => (
            <div 
              key={index}
              className={`${card.bgColor} ${card.borderColor} rounded-2xl md:p-6 p-3 flex flex-col border shadow-sm hover:shadow-lg`}
            >
              <div className="flex items-center md:mb-4 mb-1">
                <div className="min-w-[60px] md:h-14 md:w-14 w-11 h-11 rounded-lg bg-white shadow-sm flex items-center justify-center mr-4">
                  {card.icon}
                </div>
                <h3 className="md:text-xl text-lg font-semibold text-gray-900">{card.title}</h3>
              </div>
              <p className="text-gray-700 md:text-lg text-sm leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}