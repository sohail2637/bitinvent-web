import Image from 'next/image'
import React from 'react'

export default function MainSection() {

  const contactData = [
    {
      name: 'Gufran Usman',
      position: 'Director Sales',
      location: 'Head Office DK',
      phone: '+45 31 32 33 40',
      email: 'gufran@bitInvent.dk',
      img: '/assets/images/Gufran-img.jpg'
    },
    {
      name: 'Tahir Mirza',
      position: 'Sales Associate',
      location: 'Head Office DK',
      phone: '+45 40 11 33 40',
      email: 'tahir@bitInvent.dk',
      img: '/assets/images/tahir-img.jpeg'
    },
    {
      name: 'Hamza Mazhar',
      position: 'Sales Advisor',
      location: 'Office Norway',
      phone: '+47 98 00 60 62',
      email: 'hamza@bitInventnorge.no',
      img: '/assets/images/hamza-img.jpeg'
    }
  ]
  return (
    <>
      <section  >
        <div className='w-full md:flex justify-between items-end gap-11 md:max-w-7xl md:mr-auto ml-auto mb-12 ' >


          <div className='flex md:justify-center justify-start items-end content-end md:w-[35%] mb-7 p-5 w-full'>
            <div className='md:text-center text-left'>
              <h1 className='text-[32px] font-light leading-6 text-[#034E70] '>Contact us today</h1>
            </div>
          </div>

          <div className='relative md:w-[65%] w-full' >
            <Image
              src="/assets/images/contact-mbl.png"
              width={800}
              height={450}
              layout='responsive'

            >
            </Image>
          </div>

        </div>
      </section>

      <section>
        <div className='md:flex justify-around items-center m-20 max-w-screen-xl  ml-auto mr-auto '>
          <div className='w-full md:w-[25%] m-4'>
            <div className='text-xl font-thin leading-8' >
              <p className='mb-7 '>Feel free to contact us if you have any questions or comments.</p>
              <p className='mb-7 '>Call us on <br /><strong className='text-[#034E70] font-normal'>+92 305 5534249</strong></p>
              <p className='mb-7 '>Or write us an email to<br /><strong className='text-[#034E70] font-normal'>info@bitInvent.dk</strong></p>
              <button className='cursor-pointer bg-[#EF6461] text-white text-[20px] h-[50px] w-[200px] rounded-[5px] '>How can we help?</button>
            </div>

          </div>
          <div className='md:flex justify-between items-center  md:w-[75%] md:mx-12 '>
  {contactData.map((data) => {
    return (
      <div className='w-full md:w-[30%] text-center mt-9 md:mt-3'>
        <div className='w-40 h-40 mb-4 mx-auto '>
          <Image
            src={data.img}
            width={250}
            height={250}
            objectFit='cover'
            layout='responsive'
            alt={data.name}
            className='relative mx-auto rounded-full overflow-hidden'
          />
        </div>
        <div className='text-xl leading-7 md:leading-8 font-normal mb-14 '>
          <strong className='font-normal text-[#02283A]'>{data.name}</strong><br />
          {data.position}<br />
          {data.location}<br />
          {data.phone}<br />
          <strong className='text-[#034E70] font-normal'>{data.email}</strong>
        </div>
      </div>
    );
  })}
</div>

        </div>

      </section>
    </>
  )
}
