const cardsData = [
    {
      heading: "Utility program",
      para1: "The Employee Social Committee (ESC) is a self-governed aid program for fundraising and granting for social needs in society, managed entirely by TEO’s employees and with their own money. TEO merely ensures a platform for disseminating the information.",
    para2: "Another social initiative was the donation of 1,000 hours of software development for social NGOs on our 10th anniversary."
    },
   
      {
      heading: "TEO Scholarship Program",
      para1: "TEO’s scholarship program isa well-organized program, since its foundation has awarded 227 study scholarships to deserving needy students on IT programs at 17 universities in Pakistan. With an IT education, a person can support approx. 10-20 people in his immediate family and surroundings. At the same time, we are breaking the social legacy from this generation to the next generation.",
    para2:"The scholarships are awarded from TEO’s own funds, with appropriate control measures, e.g. in that the individual universities approve the students who have applied for scholarships.",
   
    },
    {
      heading: "Jobs",
      para1: "We take pride in trying to keep our employees as well as we can. Many employees have been with TEO for more than 10 years. When we are looking for new employees, they must be willing to work independently with a low degree of control and constantly learn new things both technically and socially.", 
    para2: "Contact hr@teo-intl.com if you want to apply or know more about your opportunities with us."
    },
   
  
  
  ];
  
  const SocialResponsibility = () => {
    return (
      <>
        <div className="flex flex-col justify-center items-center bg-[#F6F9FC] w-full mt-20 p-3 md:p-8 min-h-[350px]">
         <div className="py-4 flex justify-center items-center flex-wrap content-start md:w-[56%] w-full ">
         <h1 className="text-[24px] font-[400] leading-6 mb-4 text-[#034E70] text-center">
          Corporate Social Responsibility
          </h1>
          <p className="text-[20px] font-normal text-center md:mt-6 mt-3  ">Social responsibility is a crucial part of TEO’s corporate culture, and we support and 
            carry out a number of activities in this area.</p>
         </div>
         
          <div className="w-[90%] gap-2 m-auto flex flex-col md:flex-row">
              {cardsData?.map((card , i)=>{
                  return(
            <div key={i} className="w-full md:w-[10%] flex-1 md:p-4 ">
              <h2 className=" text-[20px] font-[400] leading-7 mb-2 text-[#034E70]">{card.heading}</h2>
              <p className="text-[16px] font-[300] leading-8 text-[#02283A] mt-6 mb-6">{card.para1}</p>
              <p className="text-[16px] font-[300] leading-8 text-[#02283A] mt-6 mb-6">{card.para2}</p>
            </div>
                  )   
              })}
          
          </div>
        </div>
      </>
    );
  };
  
  export default SocialResponsibility;
  