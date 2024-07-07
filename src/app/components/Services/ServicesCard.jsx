import React from 'react'

export default function ServicesCard() {

    const topCardSection = [
        {
            heading: 'Software Development',
            detail: 'At TEO, we’re convinced that integrating IT into your business strategy isn’t just a good idea—it’s essential for growth and revenue.',
        }, {
            heading: 'Embedded Systems',
            detail: 'TEO is your go-to expert in disruptive innovations, specializing in crafting firmware and software solutions for a variety of embedded systems across industries.',
        }, {
            heading: 'Software Testing | Quality Assurance',
            detail: 'In today’s fast-paced and dynamic digital landscape, ensuring the quality and reliability of software applications is paramount.',
        },
    ]

    const bottomCardSection = [
        {
            heading: 'Project Management',
            detail: 'Step into the realm of Project Management, a dynamic space where strategy meets execution. As a vital contributor to our team, navigate a landscape that involves planning and overseeing projects.',
        },
        {
            heading: 'Data and AI',
            detail: 'In today’s dynamic business landscape, data is a strategic asset, and TEO is here to empower your organisation with innovative AI solutions.',
        },
        {
            heading: 'UI/UX Design Services',
            detail: 'In the digital era, where the user is king, creating an outstanding User Interface (UI) and User Experience (UX) is paramount for the success of any digital product or service.',
        },
    ]
    return (
        <>
            <section>
                <div className='max-w-7xl mr-auto ml-auto px-5 my-7 mt-28'>
                    <div className='md:flex justify-between items-center gap-5 mb-6 '>
                        {
                            topCardSection.map((data) => (
                                <div className='flex justify-between items-start flex-col bg-[#F8F8F8] md:w-1/3 xl:h-[350px] lg:h-[400px] md:h-[450px] lg:p-9 md:p-6 p-4 rounded-lg md:mb-0 mb-6'>
                                    <div className=''>
                                        <h1 className='text-[20.8px] font-normal text-[#034E70] mb-4'>{data.heading}</h1>
                                        <p className='text-[17.6px] font-light leading-8  '>{data.detail}</p>

                                    </div>
                                    <div className='mt-5 mb-5'>
                                        <button className='bg-[#F8F8F8] text-[16px] font-medium text-[#034E70] hover:text-white
                     hover:bg-[#034E70] h-[55px] border-[#034E70] border-[3px] rounded-md
                     w-[150px] '>Learn More</button>
                                    </div>
                                </div>


                            ))
                        }
                    </div>

                    <div className=' lg:flex md:justify-between md:items-start  gap-4 lg:max-w-7xl mr-auto ml-auto'>
                        <div className='md:flex justify-between items-center gap-5  '>
                            {
                                bottomCardSection.map((data) => (
                                    <div className='flex justify-between items-start
                                 flex-col bg-[#F8F8F8] xl:w-[300px] lg:w-[230px] xl:h-[450px] lg:h-[550px] md:h-auto xl:p-9 lg:p-6 p-4 mt-6 md:mt-0 rounded-lg'>
                                        <div className=''>
                                            <h1 className='text-[20.8px] font-normal text-[#034E70] mb-4'>{data.heading}</h1>
                                            <p className='text-[18px] font-light leading-8 mb-6 '>{data.detail}</p>
                                            <button className='bg-[#F8F8F8] text-[16px] font-medium text-[#034E70] hover:text-white
                     hover:bg-[#034E70] h-[55px] border-[#034E70] border-[3px] rounded-md
                     w-[150px] '>Learn More</button>
                                        </div>

                                    </div>


                                ))
                            }

                        </div>

                        <div className=' bg-[#004f70] text-white xl:w-[300px] lg:w-[230px] xl:h-[450px] lg:h-[550px] md:p-8 p-5 lg:mt-0  mt-5 rounded-lg mb-32'>
                            <div className=''>
                                <h1 className='text-[20.8px] font-normal mb-4'>Let's talk</h1>
                                <p className='text-[16px] font-light leading-7 mb-4'>TEO enhances your systems, creating complete software solutions,
                                    including IoT firmware and apps -an effective extension to your IT department.
                                    
                                    </p>
                                    <p>

                                    info@teo.dk <br />+45 7020 2149
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
