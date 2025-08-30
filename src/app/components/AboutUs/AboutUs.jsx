// import SocialResponsibility from "./SocialResponsibility"
// import ManagmentTeam from "./ManagmentTeam"
// import FrontSection from "./FrontSection"
// import Image from 'next/image'
// import React from 'react'

// export default function AboutUs() {
//   return (
//   <>
//   <FrontSection/>
//   <section>
//   <div className="flex flex-wrap gap-8 items-start justify-center min-h-[500px] w-full md:py-20">
//         <div className=" w-[90%] md:w-[39%]  flex justify-center">
//           <Image
//             src="/assets/images/teo-office.png"
//             alt="meeting"
//             width={570}
//             layout="responsive"
//             className="rounded-md"
//             height={309}
//           />
//         </div>

//         <div className="w-[90%] px-1 md:w-[40%] flex flex-col gap-8 ">

//           <div className=" flex  flex-col md:gap-8 gap-5 text-[#3a3a3a]   ">
//             <span className="md:text-[20px] text-[16px] leading-6 font-[300] md:leading-8">
//             BitInvent A/S was established in 2019 with a vision to operate as a flexible, 
//             competitive, and scalable extension of customers' internal development departments,
//              following the Core+ model. Leading BitInvent is Sohail Maqsood, the company's 
//              founder, equipped with engineering and commercial education from DTU and roots
//               originating from Pakistan.
//             </span>
//             <h3 className='text-[#034E70] md:text-[23px] text-[20px]  '>
//             Reliable Software Engineers
//             </h3>
//             <span className="md:text-[20px] text-[16px] leading-6 font-[300] md:leading-8">
//             With approximately 170 employees, the vast majority of whom are software engineers,
//              we are one of the largest Danish IT companies.. The headquarters are still in
//               Copenhagen, while our development center is in Islamabad, Pakistan. While it is
//                often a challenge to recruit in Denmark, there is a large base of well-educated
//                 and English-speaking software engineers in Pakistan.
//             </span>
//           </div>
//         </div>
//       </div> 
//   </section>
//   <SocialResponsibility />
//   <ManagmentTeam/>

//   </>
//   )
// }


import { motion } from 'framer-motion';
import Head from 'next/head';
import HeroSection from '../Common/HeroSection';
// import FrontSection from "./FrontSection"

const AboutUs = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  return (
    <>

      {/* <FrontSection /> */}
      <div className="min-h-screen bg-[#f8f9fb] text-gray-800 pt-[90px]">
        {/* Hero Section */}

        <HeroSection
          title="About Us"
          subtitle="We create amazing digital products."
          backgroundImage="/assets/images/about.webp"

        />


        <div className="container mx-auto px-6 lg:px-20 md:py-20 py-6">
          {/* Our Story */}
          <motion.section
            className="md:mb-28 mb-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={containerVariants}
          >

            <motion.div variants={itemVariants}>
              <div className="flex items-center mb-6">
                <div className="h-px w-12 bg-blue-500 mr-4"></div>
                <span className="text-blue-600 font-medium">OUR BEGINNINGS</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold md:mb-6 mb-3 text-gray-900 leading-7 md:leading-tight">
                Crafting digital excellence since 2019
              </h2>
              <p className="md:text-[20px] text[18px] md:leading-7 md:mb-6 mb-3 text-gray-600 leading-relaxed">
                Founded in Faisalabad, Pakistan, BitInvent began as a passionate
                collective of visionaries determined to transform the digital
                landscape. Our journey started with a simple belief: technology
                should empower, not complicate.
              </p>
              <p className="md:text-[20px] text[18px] md:leading-7 text-gray-600 leading-relaxed">
                Today, we&apos;ve grown into a global team of strategists, designers, and
                engineers who bridge the gap between ambitious ideas and exceptional
                digital experiences.
              </p>
            </motion.div>
          </motion.section>

          {/* Our Mission */}
          <motion.section
            className="md:mb-28 mb-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={containerVariants}
          >
            <motion.div
              className="bg-white rounded-2xl md:p-10 p-5 shadow-lg border border-gray-100"
              variants={itemVariants}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center md:mb-6 mb-3">
                <div className="h-px w-12 bg-blue-500 mr-4"></div>
                <span className="text-blue-600 font-medium">OUR PURPOSE</span>
              </div>
              <h2 className="text-xl md:text-4xl font-serif font-bold md:mb-8 mb-3 text-gray-900 leading-tight">
                We exist to create meaningful digital experiences
              </h2>
              <p className="md:text-[20px] md:leading-7 text[18px] text-gray-700 leading-relaxed italic">
                &quot;Our mission is to craft technology solutions that don&apos;t just function
                beautifully, but fundamentally transform how businesses connect with
                their audiences and achieve their most ambitious goals.&quot;
              </p>
            </motion.div>
          </motion.section>

          {/* Our Values */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={containerVariants}
          >
            <motion.div className="text-center md:mb-16 mb-6" variants={itemVariants}>
              <span className="text-blue-600 font-medium">OUR FOUNDATION</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mt-2 text-gray-900 leading-tight">
                Principles that guide our work
              </h2>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={containerVariants}
            >
              {[
                {
                  title: 'Innovation',
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  ),
                  desc: 'We challenge conventions to deliver groundbreaking solutions that set new standards.'
                },
                {
                  title: 'Integrity',
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  ),
                  desc: 'We build trust through transparency, honesty, and ethical business practices.'
                },
                {
                  title: 'Excellence',
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                      />
                    </svg>
                  ),
                  desc: 'We pursue mastery in every detail, delivering work we are proud to stand behind.'
                },
                {
                  title: 'Collaboration',
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  ),
                  desc: 'We believe the best solutions emerge from diverse perspectives working in harmony.'
                }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  className="bg-white lg:p-8 p-4 rounded-xl shadow-md border border-gray-100 text-center hover:shadow-xl transition"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex justify-center gap-3 md:gap-5 items-start flex-row text-blue-600 mb-2">
                    <p>{value.icon}</p>
                  <h3 className="text-xl font-bold lg:mb-4 mb-0 text-gray-900">{value.title}</h3>
                    </div>
                  <p className="text-gray-600">{value.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* Stats Section */}
          <motion.section
            className="md:mt-20 mt-6 md:mb-20 bg-white border border-gray-100 rounded-2xl md:p-12 p-6 shadow-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={containerVariants}
          >
            <motion.div className="grid md:grid-cols-3 md:gap-8 gap-4" variants={containerVariants}>
              {[
                { number: '150+', label: 'Projects Completed' },
                { number: '40+', label: 'Satisfied Clients' },
                { number: '5', label: 'Years of Excellence' }
              ].map((stat, index) => (
                <motion.div key={index} className="text-center" variants={itemVariants}>
                  <div className="text-5xl font-bold text-blue-600 md:mb-3 mb-0">{stat.number}</div>
                  <div className="text-xl text-gray-700">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>
        </div>
      </div>
    </>
  );
};

export default AboutUs;

