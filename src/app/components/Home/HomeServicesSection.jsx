"use client";
import { motion } from "framer-motion";
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

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
    <div className="bg-[#174163] w-full flex flex-col md:gap-10 gap-5 justify-center p-12">
      <motion.div
        className="text-[16px] leading-6 font-[300] text-[#cbd5e1] grid gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="flex flex-col gap-5 items-center text-center w-full sm:w-[80%] hover:scale-105 transition-transform"
            variants={itemVariants}
          >
            <a href={service.link} className="flex flex-col items-center gap-5">
              <span className="text-white">{service.icon}</span>
              <span className="text-white">{service.title}</span>
            </a>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
