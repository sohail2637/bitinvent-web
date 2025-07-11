import Image from 'next/image';
import React from 'react'

export default function ManagmentTeam() {
 
 const managmentTeam =[
    {
        name:"Zahid Abdullah",
        detail:"Zahid is the founder and CEO of TEO. He has been involved in software development since 1993 and Global Software Engineering & Management since 2001.",
        img:"/assets/images/hamza-img.jpeg",
    },{
        name:"Mads Transel",
        detail:"Mads has extensive management experience in sales and marketing, as well as implementing new structures and strategies to drive profitable growth.",
        img:"/assets/images/hamza-img.jpeg",
    },{
        name:"Kerny Ustrup",
        detail:"Kerny, with his extensive experience in the Danish IT industry and management roles at Krak and Maersk, is deeply committed to digitization processes.",
        img:"/assets/images/tahir-img.jpeg",
    },{
        name:"Per Agger-Nielsen",
        detail:"Per has 25+ years of experience working with small and medium-sized companies, initially as a CFO and later as an investor and board member.",
        img:"/assets/images/tahir-img.jpeg",
    },{
        name:"Claus Østergaard",
        detail:"Claus has amassed a wealth of valuable experience at the management level within the IT industry across Denmark, Scandinavia, Europe, and Asia. Among other relevant positions, he held the pivotal role of sales director at Fujitsu Siemens.",
        img:"/assets/images/Gufran-img.jpg",
    },{
        name:"Rami Ismail",
        detail:"Rami has worked with B2B sales and has been in charge of the talent development program at Danfoss for several years.",
        img:"/assets/images/Gufran-img.jpg",
    },{
        name:"Gufran Usman",
        detail:"Gufran has been working in sales and business development since 2000 and became the sales director at TEO in 2012.",
        img:"/assets/images/Gufran-img.jpg",
    },{
        name:"Jibran Safdar",
        detail:"Jibran has extensive experience in the software industry; he is currently the Country Manager at TEO, where he collaborates with Danish customers and employees from Pakistan.",
        img:"/assets/images/hamza-img.jpeg",
    },{
        name:"Azmat Shir",
        detail:"Azmat serves as the Chief Technology Officer at TEO. He is a computer scientist with over 20 years of experience in system requirements, architecture, and software development.",
        img:"/assets/images/hamza-img.jpeg",
    },
 ]
    return (
    <>
    <section>
        <div className='flex flex-col justify-center items-center  w-full mt-15 p-3 md:p-8 min-h-[450px] mr-auto ml-auto'>
        <h2 className='text-center text-[24px] font-medium text-[#034E70] mb-6'>Management Team</h2>
    <div className='md:flex justify-between items-start flex-wrap gap-2 md:mx-24 '>
  {
  managmentTeam.map((data) => {
    return (
      <div className='w-full md:w-[29%]  mt-3 p-5 text-left h-fit ' style={{ fontFamily: 'Lato, sans-serif' }}>
        <div className='w-40 h-40 mb-9 '>
          <Image
            src={data.img}
            width={250}
            height={250}
            objectFit='cover'
            layout='responsive'
            alt={data.name}
            className='relative  rounded-full overflow-hidden'
          />
        </div>
        <div className='text-xl leading-6 md:leading-8 font-normal '>
            <h3 className='text-[20px] font-normal text-[#034E70] leading-4 mb-5 '>{data.name}</h3>
         <p className='text-[17px] md:text-[18px] font-light' > {data.detail}</p>
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
