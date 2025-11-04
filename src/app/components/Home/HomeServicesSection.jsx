"use client";
import {
  FaBrain,
  FaRobot,
  FaMobileAlt,
  FaComments,
  FaServer,
  FaCogs,
  FaLaptopCode,
  FaPaintBrush,
} from "react-icons/fa";

const services = [
  {
    title: "AI SOFTWARE DEVELOPMENT",
    link: "/ai-development",
    icon: <FaBrain size={60} />,
  },
  {
    title: "AI CHATBOT DEVELOPMENT",
    link: "/ai-chatbot-development",
    icon: <FaRobot size={60} />,
  },
  {
    title: "MOBILE APP DEVELOPMENT",
    link: "/mobile-app-development",
    icon: <FaMobileAlt size={60} />,
  },
  {
    title: "CHAT GPT INTEGRATION",
    link: "/chatgpt-integration",
    icon: <FaComments size={60} />,
  },
  {
    title: "DEVOPS",
    link: "/devops",
    icon: <FaServer size={60} />,
  },
  {
    title: "CUSTOM SOFTWARE",
    link: "/custom-software",
    icon: <FaCogs size={60} />,
  },
  {
    title: "CUSTOM WEB DEVELOPMENT",
    link: "/custom-web-development",
    icon: <FaLaptopCode size={60} />,
  },
  {
    title: "UI UX DESIGN",
    link: "/ui-ux-design",
    icon: <FaPaintBrush size={60} />,
  },
];

export default function ServicesSection() {
  return (
    <div className="bg-[#174163] w-full flex flex-col md:gap-10 gap-3 justify-center md:p-12 p-4">
      <div
        className="text-[16px] leading-6 font-[300] text-[#cbd5e1] grid gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center"
       
      >
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col gap-5 items-center text-center w-full sm:w-[80%] hover:scale-105 transition-transform"
          >
            <a href={service.link} className="flex flex-col items-center md:gap-5 gap-2">
              <span className="text-white">{service.icon}</span>
              <span className="text-white">{service.title}</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
