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
    <footer className="bg-[#02283a] text-white w-full px-6 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        <div className="max-w-screen-lg mx-auto flex flex-col">
          {/* Main content */}
          <div className="md:flex justify-between items-start space-y-8 md:space-y-0">
            {/* Member section */}
            <div className="md:w-1/4 space-y-4">
              <h3 className="text-lg font-semibold tracking-wider">MEMBER OF</h3>
              <p className="text-white/90 hover:text-white transition-colors">
                DI – Dansk Industri Innovere Group Pasha
              </p>
            </div>

            {/* Denmark address */}
            <div className="md:w-1/4 space-y-4">
              <h3 className="text-lg font-semibold tracking-wider">DENMARK</h3>
              <ul className="space-y-2 text-white/90">
                <li>BitInvent A/S</li>
                <li>Njalsgade 76,</li>
                <li>2300 KBH S, Denmark</li>
                <li className="font-medium hover:text-white transition-colors">
                  info@bitInvent.dk
                </li>
                <li>+92 305 5534249</li>
                <li>CVR 2924 0442</li>
              </ul>
            </div>

            {/* Pakistan address */}
            <div className="md:w-1/4 space-y-4">
              <h3 className="text-lg font-semibold tracking-wider">PAKISTAN</h3>
              <ul className="space-y-2 text-white/90">
                <li>BitInvent (Pvt.) Ltd.</li>
                <li>Hassan Arcade, F-11 Markaz,</li>
                <li>33000 Faisalabad, Pakistan</li>
                <li className="italic">A subsidiary of bitInvent Denmark</li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/20 my-8"></div>

          {/* Bottom links */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4 text-sm">
              <a href="/privacy-policy" className="hover:underline hover:text-white/100 transition-colors">
                Privacy Policy
              </a>
              {/* <span>|</span>
              <a href="#" className="hover:underline hover:text-white/100 transition-colors">
                Cookie Policy
              </a>
              <span>|</span>
              <a href="#" className="hover:underline hover:text-white/100 transition-colors">
                Terms of Service
              </a> */}
            </div>
            <div className="text-sm text-white/80">
              Copyright © bitInvent A/S {new Date().getFullYear()}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
