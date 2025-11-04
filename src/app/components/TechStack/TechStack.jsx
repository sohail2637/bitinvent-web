import Image from 'next/image'
import React from 'react'
import StackCard from "./StackCard"

export default function TechStack() {
  return (
    <>
  
            <section>
                <div
                    className="md:bg-cover md:bg-center bg-contain bg-no-repeat md:h-[520px] h-[250px]  flex justify-between
                     items-end "
                    style={{ backgroundImage: "url('/assets/images/Tech-stack.jpg')" }}
                >
                    <div className=' md:mx-24 p-4 md:px-11 md:my-9'>
                        <h1 className='text-[#034E70] text-[32px] font-light'>TechStack</h1>
                    </div>
                   
                </div>
            </section>

      <StackCard /> 
    </>
  )
}
