import Image from "next/image";
import React, { useState } from "react";

const CaseStudyPortfolio = () => {
    const [activeFilter, setActiveFilter] = useState("all");

    const projects = [
        {
            id: 1,
            title: "Aver-Store",
            description:
                "An e-commerce platform specialized in selling premium fabrics online.",
            image: "/assets/images/avera-store.webp",
        },
        {
            id: 2,
            title: "AverCollection",
            description:
                "A management system designed for shop owners to streamline inventory, sales, and customer management.",
            image: "/assets/images/avera.webp",
        },
        {
            id: 3,
            title: "Premium Fabric",
            description:
                "A factory finance management platform built for handling premium fabric manufacturing operations.",
            image: "/assets/images/premium.jpg",
        },
        {
            id: 4,
            title: "BIT.EU",
            description:
                "Crypto platform offering professional trading, earning rewards, and instant conversion for 300+ cryptocurrencies.",
            image: "/assets/images/home_trad_tab.webp",
        },
        {
            id: 5,
            title: "Lapfarm",
            description:
                "A blog website where users can read and write about plants and animals with an integrated AI chatbot.",
            image: "/assets/images/lapfarm.jpg",
        },
        {
            id: 6,
            title: "JungleUI",
            description:
                "A website providing modern CSS templates and UI components for developers and designers.",
            image: "/assets/images/jungleui.jpg",
        },
        {
            id: 7,
            title: "Direct Chat",
            description:
                "A browser extension that lets you quickly start WhatsApp chats by highlighting phone numbers on any webpage.",
            image: "/assets/images/direct-link.webp",
        },

    ];

    const filteredProjects =
        activeFilter === "all"
            ? projects
            : projects.filter((project) => project.category === activeFilter);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 md:py-24 py-10 px-4  lg:px-24">
            <div className="max-w-7xl mx-auto">
                <div className="relative mb-3">
                    <div className="flex justify-between flex-col text-start md:my-16 mt-16 relative z-10">
                        <h1 className="md:text-2xl md:text-left text-center font-bold text-gray-900 text-xl">Our Portfolio</h1>
                        <p className="md:text-xl md:text-left text-center font-medium text-gray-900 text-sm leading-5 md:leading-normal" >
                            Experience the value created by our successfully executed projects.
                        </p>
                        <div className="md:flex hidden w-full"></div>
                    </div>
                </div>
                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-12 gap-6">
                    {filteredProjects.map((project) => (
                        <div key={project.id} className="flex flex-col ">
                            <div className="relative w-full h-64">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            {/* Text */}
                            <div className="mt-4">
                                <h3 className="text-xl  font-bold text-gray-900 mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 text-base leading-5 md:leading-normal mb-4">{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Empty State */}
                {filteredProjects.length === 0 && (
                    <div className="text-center py-12">
                        <div className="text-6xl mb-4">🔍</div>
                        <h3 className="text-2xl font-medium text-gray-900 mb-2">
                            No projects found
                        </h3>
                        <p className="text-gray-600">
                            Try selecting a different category
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CaseStudyPortfolio;
