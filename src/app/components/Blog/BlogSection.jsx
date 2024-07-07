import React from 'react'
import BlogSearch from "./BlogSearch"
import BlogCards from "./BlogCards"
export default function BlogSection() {
  return (
    <>
    <section>
                <div
                    className="md:bg-cover md:bg-center bg-contain bg-no-repeat md:h-[500px] h-[185px]   w-screen flex justify-between
                     items-end "
                    style={{ backgroundImage: "url('/assets/images/blogging-theme.png')" }}
                >
                    <div className=' md:mx-24 p-4 md:px-11 md:my-9'>
                        <h1 className='text-[#034E70] text-[32px] font-light'>Blog</h1>
                    </div>
                   
                </div>
            </section>
            <BlogSearch/>
            <BlogCards/>
    </>
  )
}
