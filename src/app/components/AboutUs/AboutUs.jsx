import SocialResponsibility from "./SocialResponsibility"
import ManagmentTeam from "./ManagmentTeam"
import FrontSection from "./FrontSection"
import Image from 'next/image'
import React from 'react'

export default function AboutUs() {
  return (
  <>
  <FrontSection/>
  <section>
  <div className="flex flex-wrap gap-8 items-start justify-center min-h-[500px] w-full py-20">
        <div className=" w-[90%] md:w-[39%]  flex justify-center">
          <Image
            src="/assets/images/teo-office.png"
            alt="meeting"
            width={570}
            layout="responsive"
            className="rounded-md"
            height={309}
          />
        </div>

        <div className="w-[90%] px-1 md:w-[40%] flex flex-col gap-8 ">
         
          <div className="text-[20px] font-[300] leading-8 flex  flex-col gap-8 text-[#3a3a3a]   ">
            <span>
            TEO A/S was founded in 2007 in Copenhagen with Syddansk Kapital as co-owner.
             The aim was to be a flexible, competitive and scalable extension of the customers’
              internal development department (the Core+ model). At the head of TEO is Zahid 
              Abdullah, who founded the company and who has engineering and commercial education
               from DTU and roots from Pakistan.
            </span>
            <h3 className='text-[#034E70] text-[23px] '>
            Reliable Software Engineers
            </h3>
            <span>
            With approximately 170 employees, the vast majority of whom are software engineers,
             we are one of the largest Danish IT companies.. The headquarters are still in
              Copenhagen, while our development center is in Islamabad, Pakistan. While it is
               often a challenge to recruit in Denmark, there is a large base of well-educated
                and English-speaking software engineers in Pakistan.
            </span>
          </div>
        </div>
      </div> 
  </section>
  <SocialResponsibility />
  <ManagmentTeam/>
  
  </>
  )
}
