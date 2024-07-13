import React from 'react'

export default function DevelopButtons() {

    const buttonData = [
        "EMBEDDED SYS", "SOFTWARE TEST", "PROJECT MGNT", "DATA & AI", "UI/UX DESIGN"
    ]
    return (
        <>
            <section className='bg-[#f9fafb] text-center py-10 '>
                <h1 className='text-[19.2px] text-[#034E70] p-5 font-normal '>Explore other services by TEO</h1>
                <div className='flex justify-between items-center w-[80%] mr-auto ml-auto'>
                    {
                        buttonData.map((data) => (
                            <button className='rounded-md text-[16px] font-normal bg-[#034c6e] h-12 w-40 text-white '>{data}</button>
                        ))
                    }
                </div>
            </section>
        </>
    )
}
