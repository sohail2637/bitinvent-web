// // import Image from 'next/image'
// // import React from 'react'

// // export default function MainSection() {

// //   const contactData = [
// //     {
// //       name: 'Gufran Usman',
// //       position: 'Director Sales',
// //       location: 'Head Office DK',
// //       phone: '+45 31 32 33 40',
// //       email: 'gufran@bitInvent.dk',
// //       img: '/assets/images/Gufran-img.jpg'
// //     },
// //     {
// //       name: 'Tahir Mirza',
// //       position: 'Sales Associate',
// //       location: 'Head Office DK',
// //       phone: '+45 40 11 33 40',
// //       email: 'tahir@bitInvent.dk',
// //       img: '/assets/images/tahir-img.jpeg'
// //     },
// //     {
// //       name: 'Hamza Mazhar',
// //       position: 'Sales Advisor',
// //       location: 'Office Norway',
// //       phone: '+47 98 00 60 62',
// //       email: 'hamza@bitInventnorge.no',
// //       img: '/assets/images/hamza-img.jpeg'
// //     }
// //   ]
// //   return (
// //     <>
// //       <section  >
// //         <div className='w-full md:flex justify-between items-end gap-11 md:max-w-7xl md:mr-auto ml-auto mb-12 ' >


// //           <div className='flex md:justify-center justify-start items-end content-end md:w-[35%] mb-7 p-5 w-full'>
// //             <div className='md:text-center text-left'>
// //               <h1 className='text-[32px] font-light leading-6 text-[#034E70] '>Contact us today</h1>
// //             </div>
// //           </div>

// //           <div className='relative md:w-[65%] w-full' >
// //             <Image
// //               src="/assets/images/contact-mbl.png"
// //               width={800}
// //               height={450}
// //               layout='responsive'
// //               alt='tech'
// //             >
// //             </Image>
// //           </div>

// //         </div>
// //       </section>

// //       <section>
// //         <div className='md:flex justify-around items-center m-20 max-w-screen-xl  ml-auto mr-auto '>
// //           <div className='w-full md:w-[25%] m-4'>
// //             <div className='text-xl font-thin leading-8' >
// //               <p className='mb-7 '>Feel free to contact us if you have any questions or comments.</p>
// //               <p className='mb-7 '>Call us on <br /><strong className='text-[#034E70] font-normal'>+92 305 5534249</strong></p>
// //               <p className='mb-7 '>Or write us an email to<br /><strong className='text-[#034E70] font-normal'>info@bitInvent.dk</strong></p>
// //               <button className='cursor-pointer bg-[#EF6461] text-white text-[20px] h-[50px] w-[200px] rounded-[5px] '>How can we help?</button>
// //             </div>

// //           </div>
// //           <div className='md:flex justify-between items-center  md:w-[75%] md:mx-12 '>
// //             {contactData.map((data ,index) => {
// //               return (
// //                 <div key={index} className='w-full md:w-[30%] text-center mt-9 md:mt-3'>
// //                   <div className='w-40 h-40 mb-4 mx-auto '>
// //                     <Image
// //                       src={data.img}
// //                       width={250}
// //                       height={250}
// //                       objectFit='cover'
// //                       layout='responsive'
// //                       alt={data.name}
// //                       className='relative mx-auto rounded-full overflow-hidden'
// //                     />
// //                   </div>
// //                   <div className='text-xl leading-7 md:leading-8 font-normal mb-14 '>
// //                     <strong className='font-normal text-[#02283A]'>{data.name}</strong><br />
// //                     {data.position}<br />
// //                     {data.location}<br />
// //                     {data.phone}<br />
// //                     <strong className='text-[#034E70] font-normal'>{data.email}</strong>
// //                   </div>
// //                 </div>
// //               );
// //             })}
// //           </div>

// //         </div>

// //       </section>
// //     </>
// //   )
// // }

// import { motion } from 'framer-motion';
// import Head from 'next/head';
// import Image from 'next/image';
// import WhyChose from '../Common/WhyChose';

// const MainSection = () => {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.2, delayChildren: 0.3 }
//     }
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } }
//   };

//   return (
//     <>
//     <section  >
//         <div className='w-full md:flex justify-between items-end gap-11 md:max-w-7xl md:mr-auto ml-auto md:mb-12 mb-4 ' >


//            <div className='flex md:justify-center justify-start items-end content-end md:w-[35%] mb-7 p-5 w-full'>
//              <div className='md:text-center text-left'>
//                <h1 className='text-[32px] font-light leading-6 text-[#034E70] '>Contact us today</h1>
//              </div>
//            </div>

//            <div className='relative md:w-[65%] w-full' >
//           <Image
//               src="/assets/images/contact-mbl.png"
//               width={800}
//               height={450}
//               layout='responsive'
//               alt='tech'
//             >
//             </Image>
//           </div>

//         </div>
//       </section>


//       <div className="min-h-screen bg-[#f8f9fb] text-gray-800">
//         {/* Hero Section */}
//         <motion.section
//           className="relative md:py-28 py-3 px-6 bg-gradient-to-br from-white to-gray-100"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.8 }}
//         >
//           <div className="container mx-auto text-center">
//             <motion.h1
//               className="text-4xl md:text-6xl font-serif font-bold md:mb-6 mb-3 text-gray-900"
//               initial={{ y: -50, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ delay: 0.2, duration: 0.6 }}
//             >
//               Get in <span className="text-blue-600">Touch</span>
//             </motion.h1>
//             <motion.p
//               className="text-lg md:text-xl text-left md:text-center max-w-2xl mx-auto text-gray-600"
//               initial={{ y: 50, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ delay: 0.4, duration: 0.6 }}
//             >
//               We&apos;d love to hear from you. Whether you&apos;re curious about our services, need support, or want to collaborate — let&apos;s start the conversation.
//             </motion.p>
//           </div>
//         </motion.section>

//         <div className="container mx-auto px-6 lg:px-20 py-9">
//           {/* Contact Info Section */}
//           <motion.section
//             className="mb-20"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, margin: '-100px' }}
//             variants={containerVariants}
//           >
//             <motion.div
//               className="grid md:grid-cols-2 gap-8"
//               variants={containerVariants}
//             >
//               {[
//                       {
//                   title: 'Email Us',
//                   icon: (
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 8h18a2 2 0 002-2V6a2 2 0 00-2-2H3a2 2 0 00-2 2v8a2 2 0 002 2z" />
//                     </svg>
//                   ),
//                   desc: 'byte@bitinvent.org'
//                 },
//                 {
//                   title: 'Call Us',
//                   icon: (
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a2 2 0 011.95 1.56l1.2 5.4a2 2 0 01-.45 1.77l-2.2 2.47a16.06 16.06 0 006.6 6.6l2.47-2.2a2 2 0 011.77-.45l5.4 1.2A2 2 0 0121 21.72V19a2 2 0 00-2-2h-3" />
//                     </svg>
//                   ),
//                   desc: '+92 305 5534249'
//                 }
//               ].map((item, index) => (
//                 <motion.div
//                   key={index}
//                   className="bg-white p-8 rounded-xl shadow-md border border-gray-100 text-center hover:shadow-lg transition"
//                   variants={itemVariants}
//                   whileHover={{ y: -5 }}
//                 >
//                   <div className="flex justify-center text-blue-600 mb-6">{item.icon}</div>
//                   <h3 className="text-xl font-bold mb-4 text-gray-900">{item.title}</h3>
//                   <p className="text-gray-600">{item.desc}</p>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </motion.section>
//           <WhyChose />
//         </div>
//       </div>
//     </>
//   );
// };



// export default MainSection;

"use client";

import { useState } from "react";
import HeroSection from "../Common/HeroSection";

export default function MainSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        alert("✅ Thank you for contacting us!");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        alert("❌ Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("❌ Something went wrong.");
    }
  };


  return (
    <div className="bg-white pt-[90px] text-gray-800">

      {/* Hero Section */}
      <HeroSection
        title="Contact Us"
        subtitle="Let’s talk about your project and how we can help."
        backgroundImage="/assets/images/contact-mbl.png"
      />

      {/* Contact Section */}
      <section className="lg:py-16 py-5 px-3 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">

          {/* Left Info */}
          <div>
            <h2 className="lg:text-3xl text-xl font-bold md:mb-4 mb-1 text-darkGreen">Get In Touch</h2>
            <p className="text-gray-600 md:mb-8 mb-4 lg:text-lg text-base leading-5 md:leading-relaxed">
              Whether you&apos;re exploring our services, interested in a free trial, or seeking press details, we&apos;re here to answer any questions you may have.
            </p>


            <ul className="space-y-6">
              <li className="flex items-center gap-3">
                <span className="text-xl">💬</span>
                <a
                  href="https://wa.me/923055534249"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-darkGreen font-medium hover:underline"
                >
                  Chat with us on WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-xl">✉️</span>
                <a
                  href="mailto:byte@bitinvent.org"
                  className="text-darkGreen font-medium hover:underline"
                >
                  byte@bitinvent.org
                </a>
              </li>
            </ul>
          </div>

          {/* Right Form */}
          <div className="bg-white shadow-lg border border-gray-100 rounded-2xl lg:p-8 p-3">
            <form onSubmit={handleSubmit} className="space-y-6">
              <h1 className="md:text-3xl text-center text-xl font-bold md:mb-4 mb-0 text-darkGreen">Submit Form</h1>
              {/* Name + Email */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg md:p-3 p-2 mt-1  focus:ring-2 focus:ring-darkGreen focus:border-darkGreen transition"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg md:p-3 p-2 mt-1 focus:ring-2 focus:ring-darkGreen focus:border-darkGreen transition"
                    required
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg md:p-3 p-2 mt-1 focus:ring-2 focus:ring-darkGreen focus:border-darkGreen transition"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full border border-gray-300 rounded-lg md:p-3 p-2 mt-1 focus:ring-2 focus:ring-darkGreen focus:border-darkGreen transition"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-darkGreen bg-blue-700 text-white font-medium py-3 rounded-lg shadow-md transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>

  );
}
