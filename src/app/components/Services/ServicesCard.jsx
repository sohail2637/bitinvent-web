import React from 'react'

export default function ServicesCard() {

    const topCardSection = [

        {
            heading: 'Software Development',
            detail: 'We build custom web, mobile, and enterprise software that is scalable, efficient, and user-friendly.'
        },
        {
            heading: 'Embedded Systems',
            detail: 'We create smart firmware and software solutions for embedded devices across industries.'
        },
        {
            heading: 'Software Testing | Quality Assurance',
            detail: 'We ensure reliable, secure, and high-quality software through rigorous testing and QA practices.'
        }
    ];

    const bottomCardSection = [
        {
            heading: 'Project Management',
            detail: 'We provide strategic planning and efficient execution to ensure successful project delivery from start to finish.'
        },
        {
            heading: 'Data and AI',
            detail: 'We help organizations unlock the power of data with advanced AI solutions for smarter decision-making and innovation.'
        },
        {
            heading: 'UI/UX Design Services',
            detail: 'We design intuitive and engaging user interfaces and experiences that enhance customer satisfaction and product success.'
        }
    ];

    return (
        <>
            <section>
                <div className='max-w-7xl mr-auto ml-auto px-5 my-7 mt-28'>
                    <div className='md:flex justify-between items-center gap-5 mb-6 '>
                        {
                            topCardSection.map((data, index) => (
                                <div key={index} className='flex justify-between items-start flex-col bg-[#F8F8F8] md:w-1/3 xl:h-[300px] lg:h-[350px] md:h-[400px] lg:p-9 md:p-6 p-4 rounded-lg md:mb-0 mb-6'>
                                    <div className=''>
                                        <h1 className='text-[20.8px] font-normal text-[#034E70] mb-4'>{data.heading}</h1>
                                        <p className='text-[17.6px] font-light md:leading-8 leading-6  '>{data.detail}</p>

                                    </div>
                                    {/* <div className='mt-5 mb-5'>
                                        <button className='bg-[#F8F8F8] text-[16px] font-medium text-[#034E70] hover:text-white
                     hover:bg-[#034E70] h-[55px] border-[#034E70] border-[3px] rounded-md
                     w-[150px] '>Learn More</button>
                                    </div> */}
                                </div>


                            ))
                        }
                    </div>

                    <div className=' lg:flex md:justify-between md:items-start  gap-4 lg:max-w-7xl mr-auto ml-auto'>
                        <div className='md:flex justify-between items-center gap-5  '>
                            {
                                bottomCardSection.map((data, index) => (
                                    <div key={index} className='flex justify-between items-start
                                 flex-col bg-[#F8F8F8] xl:w-[300px] lg:w-[230px] xl:h-[450px] lg:h-[550px] md:h-auto xl:p-9 lg:p-6 p-4 mt-6 md:mt-0 rounded-lg'>
                                        <div className=''>
                                            <h1 className='text-[20.8px] font-normal text-[#034E70] mb-4'>{data.heading}</h1>
                                            <p className='text-[18px] font-light md:leading-8 leading-6 mb-6 '>{data.detail}</p>
                                            {/* <button className='bg-[#F8F8F8] text-[16px] font-medium text-[#034E70] hover:text-white
                     hover:bg-[#034E70] h-[55px] border-[#034E70] border-[3px] rounded-md
                     w-[150px] '>Learn More</button> */}
                                        </div>

                                    </div>


                                ))
                            }

                        </div>

                        <div className=' bg-[#004f70] text-white xl:w-[300px] lg:w-[230px] xl:h-[450px] lg:h-[550px] md:p-8 p-5 lg:mt-0  mt-5 rounded-lg mb-32'>
                            <div className=''>
                                <h1 className='text-[20.8px] font-normal mb-4'>Let&apos;s talk</h1>
                                <p className='text-[16px] font-light leading-7 mb-4'>BitInvent enhances your systems, creating complete software solutions,
                                    including IoT firmware and apps -an effective extension to your IT department.
                                </p>
                                <p>
                                    byte@bitinvent.org <br />+92 305 5534249
                                </p>

                            </div>

                            <div className=' flex justify-center my-7 '>
                                <button className=' text-[16px] font-medium h-[50px] bg-[#ef6461] 
                                 rounded-md w-[180px] '>How can we help?</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
