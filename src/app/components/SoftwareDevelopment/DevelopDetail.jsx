import React from 'react';

const content = [
  {
    title: "Software Development",
    description: "At TEO, we pride ourselves on delivering cutting-edge software development services tailored to meet the unique needs of our clients. With a team of seasoned software engineers and dedicated project management professionals, we aim to transform your ideas into robust, scalable, and innovative solutions."
  },
  {
    title: "Our Approach",
    description: "We believe in a collaborative approach, working closely with our clients to understand their vision, goals, and business requirements. From conceptualization to deployment, our agile development methodology ensures flexibility and adaptability throughout the project lifecycle. This allows us to respond effectively to changes, deliver incremental value, and maintain the highest quality standards."
  },
  {
    title: "Service Offerings",
    description: "Our comprehensive suite of software development services spans various platforms and technologies. Whether you require cloud-based solutions, desktop applications, web development, mobile apps, or IoT solutions, we have the expertise to bring your vision to life. Our services extend beyond coding – we provide end-to-end support, including requirements analysis, documentation, and prototyping."
  },
  {
    title: "Extended Teams Model",
    description: "Consider our “Extended Teams” model for a customized and scalable workforce. Tailored to your project’s specific needs, this model allows you to augment your in-house team with our skilled professionals. From small teams tackling specific tasks to larger squads specializing in frontend, backend, testing, and data management, we offer the flexibility to optimize your project’s success."
  },
  {
    title: "Quality Assurance",
    description: "We understand the critical importance of delivering reliable and secure software. Our rigorous testing and quality assurance processes ensure your solution meets and exceeds industry standards. We are committed to providing bug-free, efficient, and user-friendly software products."
  },
  {
    title: "Contact Us",
    description: "Embrace the future of software development with TEO. Contact us today to discuss how we can turn your ideas into reality and propel your business to new heights through innovative and reliable software solutions."
  }
];

const DevelopDetail = () => {
  return (
    <div className='w-[60%] mr-auto ml-auto p-7 py-20 '>
      {content.map((section, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-[20px] font-medium mb-2 text-[#02283A] ">{section.title}</h2>
          <p className="text-[17px] leading-7">{section.description}</p>
        </div>
      ))}
    </div>
  );
};

export default DevelopDetail;

