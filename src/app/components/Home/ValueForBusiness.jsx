const cardsData = [
  // {
  //   heading: "Knowledge and skills",
  //   para: "You get access to skills from our employees and partners with 600 technology employees.",
  // },
  {
    heading: "Stability",
    para: "You get a team, processes and practices that reflect that our customers are typically with us for 6 years.",
  },
  {
    heading: "Economic value",
    para: "Free up money for other investments in your business. You can afford a development team with us if you can afford an employee in Denmark.",
  },
  {
    heading: "Danish terms",
    para: "You have direct contact with the management in Denmark, you get a Danish contract and what we earn is taxed in Denmark, to the benefit of your company’s future as well.",
  },


];

const ValueForBusiness = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center bg-[#ecf5fd] w-full  p-3 py-4 md:p-8 min-h-[350px]">
        <h1 className="text-[19px] font-[400] leading-6 mb-4 text-[#02283a] text-center">
          VALUE FOR YOUR BUSINESS
        </h1>
        <div className="w-[90%] gap-5 m-auto flex flex-col md:flex-row">
            {cardsData?.map((card , i)=>{
                return(
          <div key={i} className="w-full md:w-[10%] flex-1 md:p-4 p-0 ">
            <h2 className=" text-[19px] font-[400] leading-6 md:mb-2 mb-0 text-[#034e70]">{card.heading}</h2>
            <p className="text-[16px] font-[300] leading-6 text-[#5d7785]">{card.para}</p>
          </div>
                )   
            })}
        
        </div>
      </div>
    </>
  );
};

export default ValueForBusiness;
