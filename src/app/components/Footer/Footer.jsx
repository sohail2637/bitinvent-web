// export default function Footer() {
//   return (
//     <>
//       <footer className="bg-[#02283a]" aria-labelledby="footer-heading">
//         <h2 id="footer-heading" className="sr-only">
//           Footer
//         </h2>
//         <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32 ">
//           <div className="xl:grid xl:grid-cols-3 xl:gap-8">
//             <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
//               <div className="md:grid md:grid-cols-2 md:gap-8">

//                 <div className="text-[16px] font-[300] leading-6 text-[#a8b5bb]">
//                   MEMBER OF
//                   <h3 className="text-[16px] font-[400] leading-6 text-[#FFFFFF]">
//                     DI – Dansk Industri Innovere Group Pasha
//                   </h3>
//                 </div>

// <div className="mt-10 md:mt-0">
//   <h3 className="text-[16px] font-[300] leading-6 text-[#a8b5bb]">
//     TEO A/S
//   </h3>
//   <ul role="list" className="mt-6 space-y-4">
//     <li className="text-[16px] font-[300] leading-6 text-[#a8b5bb]">
//       Njalsgade 76, 2300 KBH S, Denmark
//     </li>
//     <li className="text-[16px] font-[400] leading-6 text-[#FFFFFF]">
//       info@teo.dk
//     </li>
//     <li className="text-[16px] font-[300] leading-6 text-[#a8b5bb]">
//       +45 7020 2149
//     </li>
//     <li className="text-[16px] font-[300] leading-6 text-[#a8b5bb]">
//       CVR 2924 0442
//     </li>
//   </ul>
// </div>

//               </div>
// <div className="md:grid md:grid-cols-2 md:gap-8">

//     <ul
//       role="list"
//       className="mt-6 space-y-4 text-[16px] font-[300] leading-6 text-[#a8b5bb]"
//     >
//       <li>TEO (Pvt.) Ltd.</li>
//       <li>
//         Hassan Arcade, F-11 Markaz, 44000 Islamabad, Pakistan
//       </li>
//       <li>A subsidiary of TEO Denmark</li>
//     </ul>
// </div>
//             </div>
//           </div>

//           <div className="flex justify-center mt-16 pt-8 sm:mt-20 lg:mt-24 ">
//             <p className="text-[16px] font-[400] leading-6 text-[#FFFFFF]">
//               Privacy Policy | Cookie Policy |
//               <span className="text-[16px] font-[300] leading-6 text-[#a8b5bb]">
//                 Copyright © TEO A/S 2023
//               </span>
//             </p>
//           </div>
//         </div>
//       </footer>
//     </>
//   );
// }

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#02283a] text-white w-full px-6 py-9">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20 flex flex-col">
        <div className="md:flex flex-col flex-wrap justify-between items-center max-w-screen-lg mr-auto ml-auto ">
         

          <div className="md:flex justify-around items-start ">
            <div className="w-[50%] lg:w-[25.22%] mb-6 sm:mb-0 text-left leading-7 md:p-8">
              <ul className="">
                <li>
                  <a
                    href="#"
                    className="hover:underline text-[16px] font-[300] leading-6 text-white "
                  >
                    MEMBER OF
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:underline text-[16px] font-[400] leading-6 text-white"
                  >
                    {" "}
                    DI – Dansk Industri Innovere Group Pasha
                  </a>
                </li>
             
              </ul>
            </div>

            <div className="mt-10 md:mt-0 leading-7">
            
              <ul role="list" className="mt-6 ">
              <li className="text-[17px] font-[300]  text-white">
              TEO A/S
                </li>
                <li className="text-[17px] font-[300]  text-white">
                  Njalsgade 76,
                </li>
                <li className="text-[17px] font-[300]  text-white">
                   2300 KBH S, Denmark
                </li>
                <li className="text-[17px] font-[400]  text-white">
                  info@teo.dk
                </li>
                <li className="text-[17px] font-[300]  text-white">
                  +45 7020 2149
                </li>
                <li className="text-[17px] font-[300]  text-white">
                  CVR 2924 0442
                </li>
              </ul>
            </div>

            <div className="w-full sm:w-1/2 lg:w-[25.22%] mb-6 sm:mb-0 text-left">
              <ul
                role="list"
                className="mt-6  text-[17px] font-[300] leading-6 text-white"
              >
                <li>TEO (Pvt.) Ltd.</li>
                <li>Hassan Arcade, F-11 Markaz, 44000 Islamabad,</li>
                <li> Pakistan</li>
                <li>A subsidiary of TEO Denmark</li>
              </ul>
            </div>
          </div>
<div className="flex items-center justify-center pt-28 ">
<div className="w-full mb-6 sm:mb-0 ">
            <a href="/privacy-policy " className="text-[17px]">Privacy Policy  |</a>
            <a href="#" className="text-[17px]">Cookie Policy  | </a>
            <a href="#" className="text-[17px]"> Copyright © TEO A/S 2023</a>
          </div>
</div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
