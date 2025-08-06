import Image from 'next/image'
import ServicesCard from "./ServicesCard"
import React from 'react'

export default function OurServices() {
  return (
   <>
   <section  >
        <div className='w-full md:flex justify-between items-end gap-11 md:max-w-7xl md:mr-auto ml-auto mb-12 ' >


          <div className='flex  justify-start items-end content-end md:w-[35%] mb-7 p-5 w-full'>
            <div className='text-left'>
              <h1 className='text-[32px] font-light leading-6 text-[#034E70] '>Our Services</h1>
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
      <ServicesCard/>
    </>
  )
}
