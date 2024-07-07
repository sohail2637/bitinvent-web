import Image from 'next/image'
import React from 'react'

export default function BlogCards() {

    const blogCardData = [
        {
            img: "/assets/images/meeting.jpg",
            heading: "Becoming a Full Stack Developer: Your Comprehensive Guide for 2024",
            detail: "The role of a full stack developer has evolved significantly...",
            option: "",
        }, {
            img: "/assets/images/meeting.jpg",
            heading: "Key Technologies and Best Practices for Modern Developers",
            detail: "Backend development is a crucial part of building any web...",
            option: "",
        }, {
            img: "/assets/images/meeting.jpg",
            heading: "DevSecOps: Integrating Security into the Heart of Your Development Lifecycle",
            detail: "DevSecOps stands for Development, Security, and Operations. It's an approach...",
            option: "",
        }, {
            img: "/assets/images/bg.jpg",
            heading: "Top 11 Software Development Trends for 2024 and 2025",
            detail: "The software development industry is undergoing rapid transformation, driven by...",
            option: "",
        }, {
            img: "/assets/images/bg.jpg",
            heading: "5 Tips to Boost Your Developer Career in 2024",
            detail: "One revolutionary force stands out in the dynamic landscape of...",
            option: "",
        }, {
            img: "/assets/images/bg.jpg",
            heading: "Understanding the Importance of Software Testing in Software Development",
            detail: "In the fast-paced world of software development, ensuring the reliability..",
            option: "",
        },
    ]
    return (
        <>
            <section className='flex justify-center items-center mb-6 mt-14'>
    <div className='columns-1 md:columns-2 gap-4 md:max-w-[70em]  md:px-32 px-3 mb-5'>
        {blogCardData.map((data, index) => (
            <div key={index} className="mb-4 break-inside-avoid md:max-w-full shadow-lg">
                <div className='mb-4'>
                    <Image className="w-full"
                        src={data.img}
                        width={400} 
                        height={250} 
                        layout='responsive'
                    />
                </div>
                <div className="md:px-6 px-3">
                        <h1 className='text-[#23527C] font-normal text-[21.6px] mb-4'>{data.heading}</h1>
                    <p className="md:text-[19.2px] text-[18px] font-light">
                        {data.detail}
                    </p>
    
                </div>
                <div className="px-5 py-3">
                    <a href="#" className="text-[#000BEC] text-[12px]">Read More</a>
                </div>
            </div>
        ))}
    </div>
</section>

        </>
    )
}
