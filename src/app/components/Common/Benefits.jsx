"use client";

import { FaRobot, FaMobile, FaCloud, FaHeartbeat, FaMobileAlt, FaChartLine, FaLock, FaHandshake } from "react-icons/fa";

const iconsMap = {
    FaRobot,
    FaMobile,
    FaHeartbeat,
    FaMobileAlt,
    FaCloud,
    FaChartLine,
    FaLock,
    FaHandshake
};

const BenefitsCard = ({ benefits }) => {
    const Icon = iconsMap[benefits.icon] || FaRobot;

    return (
        <div className="group relative  bg-white p-6 lg:p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
            {/* Icon */}
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-100 text-gray-700 text-2xl mb-4 group-hover:bg-gray-200 transition-colors duration-300">
                <Icon />
            </div>

            {/* Title */}
            <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-2">
                {benefits.title}
            </h3>

            {/* Description */}
            <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                {benefits.description}
            </p>
        </div>
    );
};

export default BenefitsCard;
