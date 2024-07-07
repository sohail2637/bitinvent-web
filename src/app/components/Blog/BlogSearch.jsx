import React from 'react'

export default function BlogSearch() {
  return (
   <>
   {/* <section>
<div className='flex justify-center items-center m-14'>
    <div className='flex  flex-col h-[150px] w-[45%] bg-[#F1F1F1] text-center'>
        <p className='font-medium leading-6 text-[20px] text-[#034E70] m-5 '>Join us for our updates and news</p>
        <div className='flex justify-between items-center'>
            <div className='w-32'>
            <input type="text" placeholder='Your Email' />

            </div>
            <button className='bg-[#034e70] '>SUBSCRIBE</button>
        </div>
    </div>
</div>

   </section> */}
   <section>
     <div className="flex justify-center items-center mt-16 md:mt-0 md:p-14 ">
      <div className="bg-[#F1F1F1] p-6 md:w-[46%] w-full">
        <h2 className="text-center text-[20px] leading-6 font-normal text-[#034E70] md:m-4 m-2">
          Join us for our updates and news
        </h2>
        <form className="flex items-center space-x-3">
          <input
            type="email"
            placeholder="Your email"
            className="w-full px-4 md:py-3 py-[8px]  focus:outline-none focus:border-transparent"
          />
          <button
            type="submit"
            className="text-white  px-4 md:py-3 bg-[#034e70] text-[12.8px] font-semibold w-44 md:h-12 h-10 "
          >
            SUBSCRIBE
          </button>
        </form>
      </div>
    </div></section>
   </>
  )
}
