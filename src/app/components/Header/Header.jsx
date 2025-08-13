

// "use client"
// import { usePathname } from 'next/navigation';
// import { useState } from 'react';

// const Header = () => {
//   const [servicesDropdown, setServicesDropdown] = useState(false);
//   const [languageDropdown, setLanguageDropdown] = useState(false);
//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const [drawerServicesDropdown, setDrawerServicesDropdown] = useState(false);
//   const [drawerLanguageDropdown, setDrawerLanguageDropdown] = useState(false);
//   const pathname = usePathname(); 

//   const isActive = (href) => {
//     if (href === '/' ) {
//       return pathname === '/' ;
//     }
//     return pathname.startsWith(href);
//   };
//   return (
//     <header className="bg-white">
//       <nav
//         className="mx-auto flex max-w-7xl items-center justify-between lg:px-8"
//         aria-label="Global"
//       >
//         <div className="flex lg:flex-1">
//           <a href="/">
//             <img
//               className="w-[200px]"
//               src="/assets/images/logo.png"
//               alt=""
//             />
//           </a>
//         </div>

//         <div className="hidden md:flex gap-x-12 text-[13px] font-[500] leading-[26px] text-[#3a3a3a]" style={{ fontFamily: 'Lato, sans-serif' }}>
//           <a href="/home" className="text-[13px] font-[500] leading-[26px] text-[#3a3a3a] border-b-2 border-[#3a3a3a]" style={{ fontFamily: 'Lato, sans-serif' }}>
//             HOME
//           </a>
//           <div className="relative" onMouseEnter={() => setServicesDropdown(true)} onMouseLeave={() => setServicesDropdown(false)}>
//             <a href="/service-update" className="hover:border-b-2 border-[#3a3a3a]">
//               SERVICES
//             </a>
//             {servicesDropdown && (
//               <div className="absolute left-0 z-10 w-[200px] bg-white shadow-md">
//                 <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">SOFTWARE DEVELOPMENT</a>
//                 {/* <a href="/software-development" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">SOFTWARE DEVELOPMENT</a> */}
//                 <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">EMBEDDED SYSTEMS</a>
//                 <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">SOFTWARE TESTING & QUALITY ASSURANCE</a>
//                 <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">PROJECT MANAGEMENT</a>
//                 <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">DATA AND AI</a>
//                 <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">UI/UX DESIGN SERVICES</a>
//               </div>
//             )}
//           </div>
//           <a href='/tech-stack' className="hover:border-b-2 border-[#3a3a3a]">
//             TECH STACK
//           </a>
//           {/* <a href="#" className="hover:border-b-2 border-[#3a3a3a]">
//             CLIENTS AND CASES
//           </a> */}
//           <a href="/aboutUs" className="hover:border-b-2 border-[#3a3a3a]">
//             ABOUT US
//           </a>
//           <a href="/contact" className="hover:border-b-2 border-[#3a3a3a]">
//             CONTACT
//           </a>
//           {/* <a href="/blog" className="hover:border-b-2 border-[#3a3a3a]">
//             BLOG
//           </a> */}
//           {/* <div className="relative" onMouseEnter={() => setLanguageDropdown(true)} onMouseLeave={() => setLanguageDropdown(false)}>
//             <a href="#" className="hover:border-b-2 border-[#3a3a3a]">
//               ENGLISH
//             </a>
//             {languageDropdown && (
//               <div className="absolute left-0 z-10 w-48 bg-white shadow-md">
//                 <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">DANSK</a>
//                 <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">ENGLISH</a>
//                 <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">NORSK</a>
//               </div>
//             )}
//           </div> */}
//         </div>

//         {/* Hamburger Menu */}
//         <div className="md:hidden">
//           <button
//             type="button"
//             className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
//             onClick={() => setDrawerOpen(!drawerOpen)}
//           >
//             <span className="sr-only">Open main menu</span>
//             <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
//               <path
//                 className={`${drawerOpen ? 'hidden' : 'block'}`}
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16m-7 6h7"
//               />
//               <path
//                 className={`${drawerOpen ? 'block' : 'hidden'}`}
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           </button>
//         </div>
//       </nav>

//       {/* Mobile Drawer */}
//       <div className={`md:hidden ${drawerOpen ? 'block' : 'hidden'} bg-white shadow-lg`}>
//         <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
//           <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-200">HOME</a>
//           <div className="relative w-full text-center">
//             <button
//               onClick={() => setDrawerServicesDropdown(!drawerServicesDropdown)}
//               className="w-full block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-200 focus:outline-none"
//             >
//               SERVICES
//             </button>
//             {drawerServicesDropdown && (
//               <div className="flex flex-col items-center">
//                 <a href="/software-development" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-200">SOFTWARE DEVELOPMENT</a>
//                 <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-200">EMBEDDED SYSTEMS</a>
//                 <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-200">SOFTWARE TESTING & QUALITY ASSURANCE</a>
//                 <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-200">PROJECT MANAGEMENT</a>
//                 <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-200">DATA AND AI</a>
//                 <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-200">UI/UX DESIGN SERVICES</a>
//               </div>
//             )}
//           </div>
//           <a href="/tech-stack" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-200">TECH STACK</a>
//           {/* <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-200">CLIENTS AND CASES</a> */}
//           <a href="/aboutUs" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-200">ABOUT US</a>
//           <a href="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-200">CONTACT</a>
//           {/* <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-200">BLOG</a> */}
//           {/* <div className="relative w-full text-center">
//             <button
//               onClick={() => setDrawerLanguageDropdown(!drawerLanguageDropdown)}
//               className="w-full block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-200 focus:outline-none"
//             >
//               ENGLISH
//             </button>
//             {drawerLanguageDropdown && (
//               <div className="flex flex-col items-center">
//                 <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-200">DANSK</a>
//                 <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-200">ENGLISH</a>
//                 <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-200">NORSK</a>
//               </div>
//             )}
//           </div> */}
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

"use client"
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const Header = () => {
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [languageDropdown, setLanguageDropdown] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerServicesDropdown, setDrawerServicesDropdown] = useState(false);
  const [drawerLanguageDropdown, setDrawerLanguageDropdown] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // All services routes for active state
  const serviceRoutes = [
    '/service-update',
    '/ai-development',
    '/ai-chatbot-development',
    '/mobile-app-development',
    '/chatgpt-integration',
    '/devops',
    '/custom-software',
    '/custom-web-development',
    '/ui-ux-design'
  ];

  // Function to check active state
  const isActive = (href) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  const isServicesActive = () => {
    return serviceRoutes.some(route => pathname.startsWith(route));
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close drawer when route changes
  useEffect(() => {
    setDrawerOpen(false);
  }, [pathname]);

  return (
    <>
      <header className={`fixed w-full top-0 h-[90px] z-50 bg-white transition-all duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between px-4 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="/">
              <Image
                src="/assets/images/logo.webp"
                alt="Company Logo"
                width={200}
                height={50}
                className="w-[160px]"
                priority
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-x-8 text-[13px] font-[500] leading-[26px] text-[#3a3a3a]" style={{ fontFamily: 'Lato, sans-serif' }}>
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdown(true)}
              onMouseLeave={() => setServicesDropdown(false)}
            >
              <a
                href="/service-update"
                className={`transition-all duration-200 ${isServicesActive()
                  ? 'border-b-2 border-[#3a3a3a]'
                  : 'hover:border-b-2 border-[#3a3a3a]'
                  }`}
              >
                SERVICES
              </a>
              <div
                className={`absolute left-0 z-10 w-[220px] bg-white shadow-md rounded-b-md overflow-hidden transition-all duration-300 ${servicesDropdown ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
                  }`}
              >
                <a
                  href="/ai-development"
                  className={`block px-4 py-2 text-sm transition-colors duration-200 ${isActive('/ai-development') ? 'bg-gray-100 text-[#3a3a3a] font-semibold' : 'text-gray-700 hover:bg-gray-100'
                    }`}
                >
                  AI SOFTWARE DEVELOPMENT
                </a>
                <a
                  href="/ai-chatbot-development"
                  className={`block px-4 py-2 text-sm transition-colors duration-200 ${isActive('/ai-chatbot-development') ? 'bg-gray-100 text-[#3a3a3a] font-semibold' : 'text-gray-700 hover:bg-gray-100'
                    }`}
                >
                  AI CHATBOT DEVELOPMENT
                </a>
                <a
                  href="/mobile-app-development"
                  className={`block px-4 py-2 text-sm transition-colors duration-200 ${isActive('/mobile-app-development') ? 'bg-gray-100 text-[#3a3a3a] font-semibold' : 'text-gray-700 hover:bg-gray-100'
                    }`}
                >
                  MOBILE APP DEVELOPMENT
                </a>
                <a
                  href="/chatgpt-integration"
                  className={`block px-4 py-2 text-sm transition-colors duration-200 ${isActive('/chatgpt-integration') ? 'bg-gray-100 text-[#3a3a3a] font-semibold' : 'text-gray-700 hover:bg-gray-100'
                    }`}
                >
                  CHAT GPT INTEGRATION
                </a>
                <a
                  href="/devops"
                  className={`block px-4 py-2 text-sm transition-colors duration-200 ${isActive('/devops') ? 'bg-gray-100 text-[#3a3a3a] font-semibold' : 'text-gray-700 hover:bg-gray-100'
                    }`}
                >
                  DEVOPS
                </a>
                <a
                  href="/custom-software"
                  className={`block px-4 py-2 text-sm transition-colors duration-200 ${isActive('/custom-software') ? 'bg-gray-100 text-[#3a3a3a] font-semibold' : 'text-gray-700 hover:bg-gray-100'
                    }`}
                >
                  CUSTOM SOFTWARE
                </a>
                <a
                  href="/custom-web-development"
                  className={`block px-4 py-2 text-sm transition-colors duration-200 ${isActive('/custom-web-development') ? 'bg-gray-100 text-[#3a3a3a] font-semibold' : 'text-gray-700 hover:bg-gray-100'
                    }`}
                >
                  CUSTOM WEB DEVELOPMENT
                </a>
                <a
                  href="/ui-ux-design"
                  className={`block px-4 py-2 text-sm transition-colors duration-200 ${isActive('/ui-ux-design') ? 'bg-gray-100 text-[#3a3a3a] font-semibold' : 'text-gray-700 hover:bg-gray-100'
                    }`}
                >
                  UI UX DESIGN
                </a>
              </div>
            </div>

            <a
              href='/tech-stack'
              className={`transition-all duration-200 ${isActive('/tech-stack') ? 'border-b-2 border-[#3a3a3a]' : 'hover:border-b-2 border-[#3a3a3a]'}`}
            >
              TECH STACK
            </a>
            <a
              href="/aboutUs"
              className={`transition-all duration-200 ${isActive('/aboutUs') ? 'border-b-2 border-[#3a3a3a]' : 'hover:border-b-2 border-[#3a3a3a]'}`}
            >
              ABOUT US
            </a>
            <a
              href="/contact"
              className={`transition-all duration-200 ${isActive('/contact') ? 'border-b-2 border-[#3a3a3a]' : 'hover:border-b-2 border-[#3a3a3a]'}`}
            >
              CONTACT
            </a>
          </div>
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none transition-colors duration-200"
              onClick={() => setDrawerOpen(!drawerOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  className={`${drawerOpen ? 'hidden' : 'block'} transition-all duration-200`}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
                <path
                  className={`${drawerOpen ? 'block' : 'hidden'} transition-all duration-200`}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </nav>
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${drawerOpen ? 'opacity-100 md:opacity-0 md:hidden' : 'opacity-0 pointer-events-none'
            }`}
          onClick={() => setDrawerOpen(false)}
        />

      </header>


      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white z-50 shadow-xl transform transition-transform duration-300 ease-in-out ${drawerOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex flex-col h-full overflow-y-auto py-6 px-4">
          <div className="flex items-center justify-between mb-8 px-2">
            <a href="/">
              <Image
                className="w-[160px]"
                src="/assets/images/logo.webp"
                alt="Company Logo"
                width={200}
                height={50}
              />
            </a>
            <button
              onClick={() => setDrawerOpen(false)}
              className="p-1 rounded-md text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex flex-col space-y-2">
            <div className="flex flex-col">
              <button
                onClick={() => setDrawerServicesDropdown(!drawerServicesDropdown)}
                className={`px-4 py-3 rounded-md text-base font-medium flex items-center justify-between ${isServicesActive() ? 'bg-gray-100 text-[#3a3a3a]' : 'text-gray-700 hover:bg-gray-100'} transition-colors duration-200`}
              >
                <span>SERVICES</span>
                <svg
                  className={`w-4 h-4 ml-2 transition-transform duration-200 ${drawerServicesDropdown ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${drawerServicesDropdown ? 'max-h-[27rem]' : 'max-h-0'}`}
              >
                <div className="pl-6 py-1 flex flex-col space-y-1">
                  <a href="/ai-development" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200">AI SOFTWARE DEVELOPMENT</a>
                  <a href="/ai-chatbot-development" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200">AI CHATBOT DEVELOPMENT</a>
                  <a href="/mobile-app-development" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200">MOBILE APP DEVELOPMENT</a>
                  <a href="/chatgpt-integration" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200">CHAT GPT INTEGRATION</a>
                  <a href="/devops" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200">DEVOPS</a>
                  <a href="/custom-software" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200">CUSTOM SOFTWARE</a>
                  <a href="/custom-web-development" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200">CUSTOM WEB DEVELOPMENT</a>
                  <a href="/ui-ux-design" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200">UI UX DESIGN</a>
                </div>
              </div>
            </div>

            <a
              href="/tech-stack"
              className={`px-4 py-3 rounded-md text-base font-medium ${isActive('/tech-stack') ? 'bg-gray-100 text-[#3a3a3a]' : 'text-gray-700 hover:bg-gray-100'} transition-colors duration-200`}
            >
              TECH STACK
            </a>

            <a
              href="/aboutUs"
              className={`px-4 py-3 rounded-md text-base font-medium ${isActive('/aboutUs') ? 'bg-gray-100 text-[#3a3a3a]' : 'text-gray-700 hover:bg-gray-100'} transition-colors duration-200`}
            >
              ABOUT US
            </a>

            <a
              href="/contact"
              className={`px-4 py-3 rounded-md text-base font-medium ${isActive('/contact') ? 'bg-gray-100 text-[#3a3a3a]' : 'text-gray-700 hover:bg-gray-100'} transition-colors duration-200`}
            >
              CONTACT
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;