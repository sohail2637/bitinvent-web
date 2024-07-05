import Image from "next/image";
import { motion } from 'framer-motion';
import SliderComponent from "./Slider";
import ValueForBusiness from "./ValueForBusiness";
import InsightsNews from "./InsightsNews"

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
      <div className="relative h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center w-full"
          style={{
            backgroundImage: 'url("/assets/images/bg.jpg")',
           
          }}
        ></div>

        <div className="absolute w-full px-5 top-1/2 md:w-1/2  md:left-10 transform -translate-y-1/2 md:p-10  text-white">
          <h1
            className="text-[32px] font-[300] leading-10 text-[#FFFFFF] mb-4"
            style={{ fontFamily: "Roboto, sans-serif" }}
          >
            Software and IoT solutions, tailored for your business.
          </h1>
          <p className="text-[22px] font-[300] leading-8 text-[#FFFFFF] mb-4 ">
            We deliver IT-solutions and technical knowhow at reasonable prices
            across industries and fields.
          </p>
          <button className="bg-[#009b72] hover:bg-[#1aa37f] text-white text-[16px] leading-6 py-3 px-4 rounded">
            LET US TALK
          </button>
        </div>
      </div>
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

    <motion.div className="w-[90%] px-1 md:w-[40%] flex flex-col gap-8" variants={itemVariants}>
      <p className="text-[25px] font-[400] leading-10">
        TEO - builders of software and IoT solutions
      </p>
      <div className="text-[20px] font-[300] leading-7 flex flex-col gap-8 text-[#3a3a3a]">
        <motion.span variants={itemVariants}>
          TEO is an experienced software and IoT solutions company with 17 years of experience and a portfolio of 100+ Danish and international clients. We are praised for our technical prowess, communication, and project management. We offer innovative IT solutions at competitive prices and can agilely handle projects of all sizes.
        </motion.span>
        <motion.span variants={itemVariants}>
          With an average customer retention of six years, our business concept combines Copenhagen for management and customer care with software development by our 170+ engineers in Islamabad, Pakistan.
        </motion.span>
      </div>
    </motion.div>
  </motion.div>
{/* third */}


<div className="bg-[#174163] w-full min-h-[calc(100vh-60px)] flex flex-col gap-10 justify-center p-5">
    <motion.div
      className="text-[20px] leading-7 font-bold text-[#FFFFFF] p-5 flex justify-center items-center"
      initial="hidden"
      animate="visible"
      variants={itemVariants}
    >
      TEO SERVICES
    </motion.div>
  
    <motion.div
      className="text-[16px] leading-6 font-[300] text-[#cbd5e1] flex flex-col p-5 md:flex-row md:flex-wrap gap-y-10 justify-center items-center"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    > 
      <motion.div className="flex flex-col gap-5 items-center w-full md:w-[30%]" variants={itemVariants}>
        <Image src="/assets/icons/web-dev.svg" alt="AI" width={70} height={70}/>
        <span>Software Development</span>
      </motion.div>
      <motion.div className="flex flex-col gap-5 items-center text-center w-full md:w-[30%]" variants={itemVariants}>
        <Image src="/assets/icons/file.svg" alt="AI" width={70} height={70}/>
        <span>Embedded Systems</span>
      </motion.div>
      <motion.div className="flex flex-col gap-5 items-center text-center w-full md:w-[30%]" variants={itemVariants}>
        <Image src="/assets/icons/sqa.svg" alt="AI" width={70} height={70}/>
        <span>Software Testing | Quality Assurance</span>
      </motion.div>
      <motion.div className="flex flex-col gap-5 items-center text-center w-full md:w-[30%]" variants={itemVariants}>
        <Image src="/assets/icons/pm.svg" alt="AI" width={70} height={70}/>
        <span>Project Management</span>
      </motion.div>
      <motion.div className="flex flex-col gap-5 items-center text-center w-full md:w-[30%]" variants={itemVariants}>
        <Image src="/assets/icons/ai.svg" alt="AI" width={70} height={70}/>
        <span>Data and AI</span>
      </motion.div>
      <motion.div className="flex flex-col gap-5 items-center text-center w-full md:w-[30%]" variants={itemVariants}>
        <Image src="/assets/icons/ui.svg" alt="AI" width={70} height={70}/>
        <span>UI UX Design Services</span>
      </motion.div>
    </motion.div>
  </div>

{/* fourth */}

<div className="flex flex-wrap gap-10 items-center justify-center min-h-[500px] w-full py-12 bg-[#ebf5fd]">
<div className=" w-[90%] md:w-[40%] flex flex-col gap-8 ">
          <p className="text-[25px] font-[400] leading-10 ">
            {" "}
            HOW CAN WE HELP?
          </p>
          <div className="text-[20px] font-[300] leading-7 flex  flex-col gap-8 text-[#3a3a3a]">
            <span>
            You can get help with development on existing systems or help with building
             new complete software solutions with apps, backends and integrations. 
            We also build firmware and apps for IoT solutions. 
            We work closely with your existing IT department.
            </span>
            <button className="bg-[#EF6461] hover:bg-[#db3431] w-[70%] md:w-1/2 text-white text-[16px] leading-6 py-3 px-4 rounded">
           How can we help?
          </button>
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


      <SliderComponent/>
{/* six */}
<ValueForBusiness/>
<InsightsNews/>
    </>
  );
};
export default Home;
