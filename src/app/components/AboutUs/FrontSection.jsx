import React from 'react'

export default function FrontSection() {
    return (
        <>
            <section>
                <div
                    className="md:bg-cover md:bg-center bg-contain bg-no-repeat md:h-[450px] h-[250px]   w-screen flex justify-between
                     items-end "
                    style={{ backgroundImage: "url('/assets/images/about-us-Teo-scaled.jpg')" }}
                >
                    <div className=' md:mx-24 p-4 md:px-11 md:my-9'>
                        <h1 className='text-[#034E70] text-[32px] font-light'>About Us</h1>
                    </div>
                   
                </div>
            </section>

        </>
    )
}
