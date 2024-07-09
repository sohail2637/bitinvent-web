import React from 'react'

export default function BlogSearch({width}) {
  return (
   <>
 
   <section>
     <div className="flex justify-center items-center max-w-7xl mt-16 md:mt-0 md:p-14 ml-auto mr-auto ">
      <div className={`bg-[#F1F1F1] p-6 ${width}`}>
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
