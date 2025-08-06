import Image from 'next/image'
import Link from 'next/link'
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
  <div className='columns-1 md:columns-2 gap-4 md:max-w-[70em] md:px-32 px-3 mb-5'>
    {blogCardData.map((data, index) => (
      <div key={index} className="mb-4 break-inside-avoid md:max-w-full shadow-lg">
       <Link href={`/blog/${data.heading}`}>
        <div className='mb-4 relative group overflow-hidden'>
          <Image
            className="w-full transition-transform duration-500 ease-in-out transform "
            src={data.img}
            width={400}
            height={250}
            layout='responsive'
            alt='tech'
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 bg-black bg-opacity-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6 text-white"
            >
              <path d="M7.493 18.5c-.425 0-.82-.236-.975-.632A7.48 7.48 0 0 1 6 15.125c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75A.75.75 0 0 1 15 2a2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23h-.777ZM2.331 10.727a11.969 11.969 0 0 0-.831 4.398 12 12 0 0 0 .52 3.507C2.28 19.482 3.105 20 3.994 20H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 0 1-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227Z" />
            </svg>
          </div>
        </div>
        </Link>
        <div className="md:px-6 px-3">
         <Link href={`/blog/${data.heading}`}>
         <h1 className='text-[#23527C] font-normal text-[21.6px] mb-4'>{data.heading}</h1>
         </Link> 
          <p className="md:text-[19.2px] text-[18px] font-light">
            {data.detail}
          </p>
        </div>
        <Link href={`/blog/${data.heading}`}>
        <div className="px-5 py-3">
          <a href="#" className="text-[#000BEC] text-[12px]">Read More</a>
        </div>
        </Link> 

      </div>
    ))}
  </div>
</section>


        </>
    )
}
