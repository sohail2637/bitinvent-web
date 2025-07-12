import React from 'react'
import DevelopDetail from './DevelopDetail'
import DevelopCards from "./DevelopCards"
import {softwareData} from "./softwareData"
import DevelopButtons from "./DevelopButtons"

export default function DevelopSection() {
  return (
   <>
       <section>
                <div
                    className=" flex justify-between items-center md:bg-cover md:bg-center bg-contain bg-no-repeat md:h-[520px] h-[250px]"
                    style={{ backgroundImage: "url('/assets/images/software-dev.png')" }}
                >
                    <div className=' md:mx-24 p-4 md:px-11 md:my-9'>
                        <h1 className='text-[#034E70] text-[32px] font-light'>Software Development</h1>
                    </div>
                   
                </div>
        
            </section>
            <DevelopDetail />
            <DevelopCards softwareData={softwareData} />
            <DevelopButtons />
         
   </>
  )
}
