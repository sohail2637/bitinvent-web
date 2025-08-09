import React from 'react'

export default function WhyChose() {
  return (
   <section className="py-16 bg-white">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
        Why Choose <span className="text-blue-600">BitInvent</span>
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto text-lg">
        We combine innovation with expertise to deliver exceptional AI solutions
      </p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">

      {/* Cards Section */}
      
        {[
          {
            icon: "5+",
            title: "Years of Experience",
            description: "Our decade-long journey in AI development has delivered proven results across finance, healthcare, and retail sectors.",
            bgColor: "bg-blue-50"
          },
          {
            icon: "50+",
            title: "Team of Experts",
            description: "Our team combines PhD researchers, data scientists, and engineers to tackle complex AI challenges.",
            bgColor: "bg-indigo-50"
          },
          {
            icon: "🌎",
            title: "Global Presence",
            description: "With offices in 12 countries, we provide localized AI solutions with global standards.",
            bgColor: "bg-sky-50"
          },
          {
            icon: "👥",
            title: "People Driven",
            description: "We prioritize continuous learning, fostering innovation through our employee growth programs.",
            bgColor: "bg-purple-50"
          }
        ].map((card, index) => (
          <div 
            key={index}
            className={`${card.bgColor} rounded-xl p-6 flex items-start space-x-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-gray-100`}
          >
            <div className="text-4xl font-bold text-blue-600 min-w-[60px] text-center">
              {card.icon}
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{card.title}</h3>
              <p className="text-gray-600">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
  </div>
</section>
  )
}
