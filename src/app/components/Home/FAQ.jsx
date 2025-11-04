"use client";

import { useState } from "react";
import { FaChevronUp } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa6";
import { FaQuestion } from "react-icons/fa";

const faqs = [
  {
    question: "What type of services does BitInvent offer?",
    answer:
      "BitInvent provides end-to-end technology solutions, including Custom Software Development, AI & ML Solutions, Web & Mobile App Development, Cloud Services, DevOps, UI/UX Design, and Digital Marketing.",
  },
  {
    question: "Does BitInvent offer post-development support?",
    answer:
      "Yes! We believe in long-term partnerships. Our team provides maintenance, updates, performance optimization, and troubleshooting to ensure your product runs smoothly even after launch.",
  },
  {
    question: "Can AI technology help us make better decisions?",
    answer:
      "Absolutely. Our AI-driven solutions help businesses analyze data, predict outcomes, automate tasks, and provide real-time insights that lead to smarter, faster, and more confident decision-making.",
  },
  {
    question: "How do I choose the right AI chatbot development company?",
    answer:
      "Look for a partner with proven expertise, strong AI capabilities, industry-specific knowledge, and a client-focused approach. At BitInvent, we build chatbots that are intelligent, scalable, and customized for your business needs.",
  },
  {
    question: "Why choose BitInvent as your AI development company?",
    answer:
      "Because we combine innovation, experience, and cutting-edge technology. Our AI solutions are tailored, scalable, and ROI-focused, ensuring your business stays ahead of the curve.",
  },
  {
    question: "How are BitInvent developers different?",
    answer:
      "Our developers are not just coders – they’re problem solvers, innovators, and collaborators. With a client-first mindset and expertise across modern tech stacks, they ensure quality, speed, and innovation in every project.",
  },
  {
    question: "What type of custom AI solutions does BitInvent offer?",
    answer:
      "We offer predictive analytics, computer vision, NLP-based chatbots, recommendation engines, process automation, and intelligent decision-making tools customized for your industry.",
  },
  {
    question: "Which software is best for mobile app development?",
    answer:
      "It depends on your needs! For iOS, we use Swift/Objective-C; for Android, Kotlin/Java; and for cross-platform, Flutter or React Native. BitInvent recommends the best-fit tech stack after analyzing your project goals.",
  },
  {
    question: "Why are UI/UX services important?",
    answer:
      "A great design means happy users. UI/UX ensures your app/website is engaging, easy-to-use, and conversion-focused, improving both customer satisfaction and retention.",
  },
  {
    question: "Would my business benefit from digital marketing services?",
    answer:
      "Yes! With the right digital strategy, we help businesses increase visibility, attract qualified leads, boost brand credibility, and grow revenue.",
  },
  {
    question: "Does BitInvent provide custom web development?",
    answer:
      "Of course! From eCommerce platforms to enterprise-grade applications, our team builds secure, scalable, and high-performing web solutions tailored to your business.",
  },
  {
    question: "What are the benefits of DevOps implementation?",
    answer:
      "DevOps improves collaboration, automation, faster deployment, continuous delivery, and reduced downtime, leading to higher efficiency and cost savings.",
  },
  {
    question: "How much does it cost to build custom software?",
    answer:
      "Costs vary depending on features, complexity, tech stack, and timeline. At BitInvent, we provide transparent pricing and ensure the best value for investment.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 md:py-14 py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center md:mb-16 mb-5">
          <div className="inline-flex items-center justify-center p-2 bg-blue-50 rounded-full mb-4">
            <FaQuestion className="w-6 h-6 text-[#02283a] " />
          </div>
          <h2 className="md:text-3xl text-xl font-bold text-gray-900 md:mb-4 mb-1">
            Frequently Asked Questions
          </h2>
          <p className="md:text-xl text-base text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about our services and solutions
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 gap-6 max-w-6xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl border border-gray-100 transition-all duration-300 
                ${openIndex === index ? 'shadow-lg' : 'shadow-md'} 
                hover:shadow-xl hover:border-blue-100`}
            >
              <div
                className="md:p-6 p-3 cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-start">
                  <h3 className="md:text-lg text-base font-semibold text-gray-900 md:pr-8 pr-3">
                    {faq.question}
                  </h3>
                  <div className={`mt-1 transition-transform duration-300 
                    ${openIndex === index ? 'transform rotate-180' : ''}`}>
                    <FaChevronDown className={`w-5 h-5 
                      ${openIndex === index ? 'text-blue-600' : 'text-gray-400'}`} />
                  </div>
                </div>
                <div
                  className={`md:mt-4 mt-2 md:text-lg text-sm  text-gray-600 leading-relaxed transition-all duration-300 
                    ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 hidden'}`}
                >
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
