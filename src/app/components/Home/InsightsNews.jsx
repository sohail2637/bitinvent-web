import Image from "next/image";

const cardsData = [
  {
    heading: "Top 11 Software Development Trends for 2024 and 2025",
    para: "The software development industry is undergoing rapid transformation, driven by...",
  },
  {
    heading:
      "DevSecOps: Integrating Security into the Heart of Your Development Lifecycle",
    para: "DevSecOps stands for Development, Security, and Operations. It's an approach...",
  },
  {
    heading:
      "Understanding the Importance of Software Testing in Software Development",
    para: "In the fast-paced world of software development, ensuring the reliability...",
  },
  {
    heading: "5 Tips to Boost Your Developer Career in 2024",
    para: "One revolutionary force stands out in the dynamic landscape of...",
  },
];

const InsightsNews = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full mt-20 p-3 md:p-8 min-h-[350px]">
        <h1 className="text-[19px] font-[400] leading-6 mb-4 text-[#034e70] text-center">
          INSIGHTS & NEWS
        </h1>
        {/* <div className="w-[100%] gap-10 m-auto flex flex-wrap justify-center mt-10">
          {cardsData?.map((card, i) => {
            return (
              <div className="overflow-hidden w-[98%] md:[48%] lg:w-[265px]">
             
                  <Image
                    src="/assets/images/meeting.jpg"
                    alt="meeting"
                    width={550}
                    layout="responsive"
                    height={309}
                  />
                <div className="p-3 mt-4">
                  <div className="font-normal leading-6 text-[19px] text-[#303139] hover:text-[#034e70] ">
                    {card.heading}
                  </div>
                  <p className="font-[300] leading-6 text-[17px] text-[#5d7785]">
                    {card.para}
                  </p>
                </div>
                <div className="px-3">
                  <a
                    href="#"
                    className="font-[400] leading-6 text-[12px] text-[#303139] hover:text-[#034e70]"
                  >
                    Read More
                  </a>
                </div>
              </div>
            );
          })}
        </div> */}

<div className="w-full gap-10 mx-auto flex flex-wrap justify-center mt-10">
  {cardsData?.map((card, i) => (
    <div key={i} className="overflow-hidden w-full sm:w-[98%] md:w-[40%] lg:w-[265px]">
      <Image
        src="/assets/images/meeting.jpg"
        alt="meeting"
        width={550}
        layout="responsive"
        height={309}
      />
      <div className="p-3 mt-4">
        <div className="font-normal leading-6 text-[19px] text-[#303139] hover:text-[#034e70]">
          {card.heading}
        </div>
        <p className="font-[300] leading-6 text-[17px] text-[#5d7785]">
          {card.para}
        </p>
      </div>
      <div className="px-3">
        <a
          href="#"
          className="font-[400] leading-6 text-[12px] text-[#303139] hover:text-[#034e70]"
        >
          Read More
        </a>
      </div>
    </div>
  ))}
</div>

<div class="flex justify-center mt-20">
  <div class=" hover:bg-[#02283a] text-[#02283a] hover:text-[#FFFFFF] w-[143px] h-[52px] rounded flex items-center justify-center border-2 border-[#294252]">
    Load More
  </div>
</div>
      </div>
    </>
  );
};

export default InsightsNews;
