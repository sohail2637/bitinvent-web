import Image from 'next/image'
import React from 'react'

export default function ShareButton() {
  return (
   <>
   
   <section>
    <h1 className='px-9 font-semibold p-4 text-[19.2px] '>Share on Social Media</h1>
   <div className="flex justify-center  ">
   <div className="md:flex space-x-4 m-5">
  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-[#000000] text-white px-4 py-2 rounded-md flex items-center md:w-auto w-[250px] md:m-0 m-3">
    <Image src="/assets/icons/twitter.svg" alt="Twitter" width={25} height={25} className="h-6 w-6 mr-2" />
    <span className="text-lg font-bold">Twitter</span>
  </a>

  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="bg-[#3f51b5] text-white px-4 py-2 rounded-md flex items-center md:w-auto w-[250px] md:m-0 m-3">
    <Image src="/assets/icons/facebook.svg" alt="Facebook" width={25} height={25} className="h-6 w-6 mr-2" />
    <span className="text-lg font-bold">Facebook</span>
  </a>

  <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer" className="bg-[#e60023] text-white px-4 py-2 rounded-md flex items-center md:w-auto w-[250px] md:m-0 m-3">
    <Image src="/assets/icons/pinterest.svg" alt="Pinterest" width={25} height={25} className="h-6 w-6 mr-2" />
    <span className="text-lg font-bold">Pinterest</span>
  </a>

  <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-[#0288d1] text-white px-4 py-2 rounded-md flex items-center md:w-auto w-[250px] md:m-0 m-3">
    <Image src="/assets/icons/linkedn.svg" alt="LinkedIn" width={25} height={25} className="h-6 w-6 mr-2" />
    <span className="text-lg font-bold">LinkedIn</span>
  </a>
</div>

    </div>
   </section>
   </>
  )
}
