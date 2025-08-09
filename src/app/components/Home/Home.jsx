import Image from "next/image";
import { motion } from 'framer-motion';
import SliderComponent from "./Slider";
import ValueForBusiness from "./ValueForBusiness";
import InsightsNews from "./InsightsNews"
import HeroSection from "../Common/HeroSection";

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Delay between child animations
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.5 } } // Adjust duration for slower animation
};


// const variants = {
//   hidden: { opacity: 0, y: 50 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
// };

const Home = () => {
  return (
    <>

      {/* first */}
      {/* <div className="relative h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center w-full"
          style={{
            backgroundImage: 'url("/assets/images/bg.jpg")',
            backgroundPosition: 'center center'
          }}
        >
          <div className="absolute inset-0 bg-black/40 md:bg-black/30 backdrop-blur-sm"></div>
        </div>

        <div className="absolute w-full px-6 top-1/2 transform -translate-y-1/2 md:w-1/2 md:left-10 md:p-10 text-white">
          <div className="max-w-xl space-y-4 md:space-y-6 animate-fadeIn">
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-light leading-snug sm:leading-tight text-white mb-3 md:mb-4"
              style={{ fontFamily: "Roboto, sans-serif" }}
            >
              Software and IoT solutions, <span className="font-medium">tailored for your business.</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl font-light leading-relaxed text-white/90 mb-6 md:mb-8">
              We deliver IT-solutions and technical knowhow at reasonable prices across industries and fields.
            </p>

            <div className="flex justify-center md:justify-start">
              <button
                className="bg-[#009b72] hover:bg-[#1aa37f] transition-all duration-300 ease-in-out 
                    text-white text-base sm:text-lg leading-6 py-3 px-6 sm:py-4 sm:px-8 rounded-lg shadow-lg
                    hover:shadow-xl active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#009b72] focus:ring-opacity-50"
              >
                LET&apos;S TALK
              </button>
            </div>
          </div>
        </div>
      </div> */}
      <main className="pt-[90px]">

        <HeroSection
          title="Software and IoT solutions,tailored for your business."
          subtitle="We deliver IT-solutions and technical knowhow at reasonable prices across industries and fields."
          backgroundImage="/assets/images/bg.jpg"
          buttonText="Let's Talk"
          buttonBgColor='bg-[#009b72]'
          buttonTextColor='text-white'
        />
      </main>
      {/* second */}
      {/* 
      <div className="flex flex-wrap gap-5 items-start justify-center min-h-[500px] w-full py-12">
        <div className=" w-[90%] md:w-[37%]  flex justify-center">
          <Image
            src="/assets/images/meeting.jpg"
            alt="meeting"
            width={550}
            layout="responsive"
            className="rounded-md"
            height={309}
          />
        </div>

        <div className="w-[90%] px-1 md:w-[40%] flex flex-col gap-8 ">
          <p className="text-[25px] font-[400] leading-10 ">
            {" "}
            TEO - builders of software and IoT solutions
          </p>
          <div className="text-[20px] font-[300] leading-7 flex  flex-col gap-8 text-[#3a3a3a]   ">
            <span>
              TEO is an experienced software and IoT solutions company with 17
              years of experience and a portfolio of 100+ Danish and
              international clients. We are praised for our technical prowess,
              communication, and project management. We offer innovative IT
              solutions at competitive prices and can agilely handle projects of
              all sizes.
            </span>
            <span>
              With an average customer retention of six years, our business
              concept combines Copenhagen for management and customer care with
              software development by our 170+ engineers in Islamabad, Pakistan.
            </span>
          </div>
        </div>
      </div> */}
      <motion.div
        className="flex flex-wrap gap-5 items-start justify-center min-h-[500px] w-full py-12"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div className="w-[90%] md:w-[37%] flex justify-center" variants={itemVariants}>
          <Image
            src="/assets/images/meeting.jpg"
            alt="meeting"
            width={550}
            layout="responsive"
            className="rounded-md"
            height={309}
          />
        </motion.div>

        <motion.div className="w-[90%] px-1 md:w-[40%] flex flex-col md:gap-7 gap-4" variants={itemVariants}>
          <p className="md:text-[25px] text-[20px] leading-7 font-[400] md:leading-10">
            BitInvent-Innovating Software and IoT Solutions for Your Needs
          </p>
          <div className="md:text-[20px] text[18px] font-[300] md:leading-7 flex flex-col gap-8 text-[#3a3a3a]">
            <motion.span variants={itemVariants}>
              BitInvent is a seasoned software and IoT solutions company with five years of experience, boasting a portfolio of over 100 international clients. Renowned for our technical expertise, effective communication, and exceptional project management, we deliver innovative IT solutions at competitive prices. Our agile approach allows us to handle projects of all sizes efficiently.
            </motion.span>
            <motion.span variants={itemVariants}>
              With an average customer retention rate of five years, our business model blends management and customer care with software development by our team of 70+ engineers based in Faisalabad, Pakistan.
            </motion.span>
          </div>

        </motion.div>
      </motion.div>
      {/* third */}


      <div className="bg-[#174163] w-full min-h-[calc(100vh-60px)] flex flex-col md:gap-10 gap-5 justify-center md:p-5 p-3">
        <motion.div
          className="text-[20px] leading-7 font-bold text-[#FFFFFF] md:p-5 p-3 flex justify-center items-center"
          initial="hidden"
          animate="visible"
          variants={itemVariants}
        >
          BITINVENT SERVICES
        </motion.div>

        <motion.div
          className="text-[16px] leading-6 font-[300] text-[#cbd5e1] flex flex-col p-5 md:flex-row md:flex-wrap gap-y-10 justify-center items-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div className="flex flex-col gap-5 items-center w-full md:w-[30%]" variants={itemVariants}>
            <a href="/ai-development" className="flex flex-col items-center gap-5">
              <Image src="/assets/icons/ai.svg" alt="AI" width={70} height={70} />
              <span>AI SOFTWARE DEVELOPMENT</span>
            </a>
          </motion.div>

          <motion.div className="flex flex-col gap-5 items-center w-full md:w-[30%]" variants={itemVariants}>
            <a href="/ai-chatbot-development" className="flex flex-col items-center gap-5">
              <Image src="/assets/icons/ai.svg" alt="AI Chatbot" width={70} height={70} />
              <span>AI CHATBOT DEVELOPMENT</span>
            </a>
          </motion.div>

          <motion.div className="flex flex-col gap-5 items-center w-full md:w-[30%]" variants={itemVariants}>
            <a href="/mobile-app-development" className="flex flex-col items-center gap-5">
              <Image src="/assets/icons/web-dev.svg" alt="Mobile App" width={70} height={70} />
              <span>MOBILE APP DEVELOPMENT</span>
            </a>
          </motion.div>

          <motion.div className="flex flex-col gap-5 items-center w-full md:w-[30%]" variants={itemVariants}>
            <a href="/chatgpt-integration" className="flex flex-col items-center gap-5">
              <Image src="/assets/icons/ai.svg" alt="ChatGPT" width={70} height={70} />
              <span>CHAT GPT INTEGRATION</span>
            </a>
          </motion.div>

          <motion.div className="flex flex-col gap-5 items-center w-full md:w-[30%]" variants={itemVariants}>
            <a href="/devops" className="flex flex-col items-center gap-5">
              <Image src="/assets/icons/pm.svg" alt="DevOps" width={70} height={70} />
              <span>DEVOPS</span>
            </a>
          </motion.div>

          <motion.div className="flex flex-col gap-5 items-center w-full md:w-[30%]" variants={itemVariants}>
            <a href="/custom-software" className="flex flex-col items-center gap-5">
              <Image src="/assets/icons/web-dev.svg" alt="Custom Software" width={70} height={70} />
              <span>CUSTOM SOFTWARE</span>
            </a>
          </motion.div>

          <motion.div className="flex flex-col gap-5 items-center w-full md:w-[30%]" variants={itemVariants}>
            <a href="/custom-web-development" className="flex flex-col items-center gap-5">
              <Image src="/assets/icons/web-dev.svg" alt="Web Development" width={70} height={70} />
              <span>CUSTOM WEB DEVELOPMENT</span>
            </a>
          </motion.div>

          <motion.div className="flex flex-col gap-5 items-center w-full md:w-[30%]" variants={itemVariants}>
            <a href="/ui-ux-design" className="flex flex-col items-center gap-5">
              <Image src="/assets/icons/ui.svg" alt="UI/UX Design" width={70} height={70} />
              <span>UI UX DESIGN</span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* fourth */}

      <div className="flex flex-wrap gap-10 items-center justify-center min-h-[500px] w-full md:py-12 py-9 bg-[#ebf5fd]">
        <div className="  w-[90%] md:w-[40%] flex flex-col md:gap-8 gap-6 ">
          <p className="md:text-[25px] text-[20px] font-[400] md:leading-10 leading-7 ">
            {" "}
            HOW CAN WE HELP?
          </p>
          <div className="flex  flex-col md:gap-8 gap-6 text-[#3a3a3a]">
            <span className="md:text-[20px] text-[18px] font-[300] leading-7">
              At BitInvent, we build software designed around your goals. From web and mobile apps to powerful backends, seamless integrations and innovative IoT solutions, we handle it all. We also collaborate closely with your IT team to ensure smooth implementation and deliver real, lasting value to your business.
            </span>
            <a
              href="/contact"
              className="inline-block w-[200px] text-center bg-[#EF6461] hover:bg-[#db3431] text-white text-[16px] leading-6 px-6 py-3 rounded-md font-medium shadow-md hover:shadow-lg transition-all duration-200"
            >
              How can we help?
            </a>

          </div>
        </div>
        <div className=" w-[100%] md:w-[37%] flex justify-center">
          <Image
            src="/assets/images/mbl.png"
            alt="meeting"
            width={550}
            height={309}
            layout="responsive"
          />
        </div>


      </div>
      {/* five */}


      {/* <SliderComponent /> */}
      {/* six */}
      {/* <ValueForBusiness /> */}
      {/* <InsightsNews /> */}
    </>
  );
};
export default Home;
