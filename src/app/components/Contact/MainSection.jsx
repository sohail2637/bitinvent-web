// import Image from 'next/image'
// import React from 'react'

// export default function MainSection() {

//   const contactData = [
//     {
//       name: 'Gufran Usman',
//       position: 'Director Sales',
//       location: 'Head Office DK',
//       phone: '+45 31 32 33 40',
//       email: 'gufran@bitInvent.dk',
//       img: '/assets/images/Gufran-img.jpg'
//     },
//     {
//       name: 'Tahir Mirza',
//       position: 'Sales Associate',
//       location: 'Head Office DK',
//       phone: '+45 40 11 33 40',
//       email: 'tahir@bitInvent.dk',
//       img: '/assets/images/tahir-img.jpeg'
//     },
//     {
//       name: 'Hamza Mazhar',
//       position: 'Sales Advisor',
//       location: 'Office Norway',
//       phone: '+47 98 00 60 62',
//       email: 'hamza@bitInventnorge.no',
//       img: '/assets/images/hamza-img.jpeg'
//     }
//   ]
//   return (
//     <>
//       <section  >
//         <div className='w-full md:flex justify-between items-end gap-11 md:max-w-7xl md:mr-auto ml-auto mb-12 ' >


//           <div className='flex md:justify-center justify-start items-end content-end md:w-[35%] mb-7 p-5 w-full'>
//             <div className='md:text-center text-left'>
//               <h1 className='text-[32px] font-light leading-6 text-[#034E70] '>Contact us today</h1>
//             </div>
//           </div>

//           <div className='relative md:w-[65%] w-full' >
//             <Image
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

//       <section>
//         <div className='md:flex justify-around items-center m-20 max-w-screen-xl  ml-auto mr-auto '>
//           <div className='w-full md:w-[25%] m-4'>
//             <div className='text-xl font-thin leading-8' >
//               <p className='mb-7 '>Feel free to contact us if you have any questions or comments.</p>
//               <p className='mb-7 '>Call us on <br /><strong className='text-[#034E70] font-normal'>+92 305 5534249</strong></p>
//               <p className='mb-7 '>Or write us an email to<br /><strong className='text-[#034E70] font-normal'>info@bitInvent.dk</strong></p>
//               <button className='cursor-pointer bg-[#EF6461] text-white text-[20px] h-[50px] w-[200px] rounded-[5px] '>How can we help?</button>
//             </div>

//           </div>
//           <div className='md:flex justify-between items-center  md:w-[75%] md:mx-12 '>
//             {contactData.map((data ,index) => {
//               return (
//                 <div key={index} className='w-full md:w-[30%] text-center mt-9 md:mt-3'>
//                   <div className='w-40 h-40 mb-4 mx-auto '>
//                     <Image
//                       src={data.img}
//                       width={250}
//                       height={250}
//                       objectFit='cover'
//                       layout='responsive'
//                       alt={data.name}
//                       className='relative mx-auto rounded-full overflow-hidden'
//                     />
//                   </div>
//                   <div className='text-xl leading-7 md:leading-8 font-normal mb-14 '>
//                     <strong className='font-normal text-[#02283A]'>{data.name}</strong><br />
//                     {data.position}<br />
//                     {data.location}<br />
//                     {data.phone}<br />
//                     <strong className='text-[#034E70] font-normal'>{data.email}</strong>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//         </div>

//       </section>
//     </>
//   )
// }

import { motion } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';

const MainSection = () => {
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
    <section  >
        <div className='w-full md:flex justify-between items-end gap-11 md:max-w-7xl md:mr-auto ml-auto md:mb-12 mb-4 ' >


           <div className='flex md:justify-center justify-start items-end content-end md:w-[35%] mb-7 p-5 w-full'>
             <div className='md:text-center text-left'>
               <h1 className='text-[32px] font-light leading-6 text-[#034E70] '>Contact us today</h1>
             </div>
           </div>

           <div className='relative md:w-[65%] w-full' >
          <Image
              src="/assets/images/contact-mbl.png"
              width={800}
              height={450}
              layout='responsive'
              alt='tech'
            >
            </Image>
          </div>

        </div>
      </section>

      <Head>
        <title>Contact Us - BitInvent</title>
        <meta
          name="description"
          content="Get in touch with BitInvent. We're here to help you bring your ideas to life with innovative technology solutions."
        />
      </Head>

      <div className="min-h-screen bg-[#f8f9fb] text-gray-800">
        {/* Hero Section */}
        <motion.section
          className="relative md:py-28 py-3 px-6 bg-gradient-to-br from-white to-gray-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="container mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-6xl font-serif font-bold md:mb-6 mb-3 text-gray-900"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Get in <span className="text-blue-600">Touch</span>
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-left md:text-center max-w-2xl mx-auto text-gray-600"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              We&apos;d love to hear from you. Whether you&apos;re curious about our services, need support, or want to collaborate — let&apos;s start the conversation.
            </motion.p>
          </div>
        </motion.section>

        <div className="container mx-auto px-6 lg:px-20 py-9">
          {/* Contact Info Section */}
          <motion.section
            className="mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={containerVariants}
          >
            <motion.div
              className="grid md:grid-cols-2 gap-8"
              variants={containerVariants}
            >
              {[
                // {
                //   title: 'Our Office',
                //   icon: (
                //     <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                //       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                //     </svg>
                //   ),
                //   desc: 'BitInvent Headquarters, Islamabad, Pakistan'
                // },
                {
                  title: 'Email Us',
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 8h18a2 2 0 002-2V6a2 2 0 00-2-2H3a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  ),
                  desc: 'byte@bitinvent.org'
                },
                {
                  title: 'Call Us',
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a2 2 0 011.95 1.56l1.2 5.4a2 2 0 01-.45 1.77l-2.2 2.47a16.06 16.06 0 006.6 6.6l2.47-2.2a2 2 0 011.77-.45l5.4 1.2A2 2 0 0121 21.72V19a2 2 0 00-2-2h-3" />
                    </svg>
                  ),
                  desc: '+92 305 5534249'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-md border border-gray-100 text-center hover:shadow-lg transition"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex justify-center text-blue-600 mb-6">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* Why Contact Us Section */}
          <motion.section
            className="md:mb-28 mb-9"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={containerVariants}
          >
            <motion.div
              className="bg-gradient-to-r from-blue-50 to-white rounded-2xl md:p-12 p-2 shadow-md border border-gray-100"
              variants={itemVariants}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
                Why Reach Out to BitInvent?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-10">
                Whether you&apos;re looking to transform your business with cutting-edge solutions or just need guidance on your next big project — we&apos;re here for you. 
                Our team specializes in creating impactful technology strategies tailored to your goals.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                {['Project Consultations', 'Partnership Opportunities', 'Technical Guidance'].map((point, i) => (
                  <div key={i} className="px-6 py-3 bg-white border border-gray-200 rounded-full shadow-sm text-gray-700 hover:shadow-md transition">
                    {point}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.section>
        </div>
      </div>
    </>
  );
};



export default MainSection;

