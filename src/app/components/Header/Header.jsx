

"use client"
import { useState } from 'react';

const Header = () => {
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [languageDropdown, setLanguageDropdown] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerServicesDropdown, setDrawerServicesDropdown] = useState(false);
  const [drawerLanguageDropdown, setDrawerLanguageDropdown] = useState(false);

  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex w-full items-center justify-between lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#">
            <img
              className="w-[200px]"
              src="/assets/images/logo.png"
              alt=""
            />
          </a>
        </div>

        <div className="hidden md:flex gap-x-12 text-[13px] font-[500] leading-[26px] text-[#3a3a3a]" style={{ fontFamily: 'Lato, sans-serif' }}>
          <a href="#" className="text-[13px] font-[500] leading-[26px] text-[#3a3a3a] border-b-2 border-[#3a3a3a]" style={{ fontFamily: 'Lato, sans-serif' }}>
            HOME
          </a>
          <div className="relative" onMouseEnter={() => setServicesDropdown(true)} onMouseLeave={() => setServicesDropdown(false)}>
            <a href="/service-update" className="hover:border-b-2 border-[#3a3a3a]">
              SERVICES
            </a>
            {servicesDropdown && (
              <div className="absolute left-0 z-10 w-[200px] bg-white shadow-md">
                <a href="/software-development" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">SOFTWARE DEVELOPMENT</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">EMBEDDED SYSTEMS</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">SOFTWARE TESTING & QUALITY ASSURANCE</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">PROJECT MANAGEMENT</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">DATA AND AI</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">UI/UX DESIGN SERVICES</a>
              </div>
            )}
          </div>
          <a href='/tech-stack' className="hover:border-b-2 border-[#3a3a3a]">
            TECH STACK
          </a>
          <a href="#" className="hover:border-b-2 border-[#3a3a3a]">
            CLIENTS AND CASES
          </a>
          <a href="/aboutUs" className="hover:border-b-2 border-[#3a3a3a]">
            ABOUT US
          </a>
          <a href="/contact" className="hover:border-b-2 border-[#3a3a3a]">
            CONTACT
          </a>
          <a href="/blog" className="hover:border-b-2 border-[#3a3a3a]">
            BLOG
          </a>
          {/* <div className="relative" onMouseEnter={() => setLanguageDropdown(true)} onMouseLeave={() => setLanguageDropdown(false)}>
            <a href="#" className="hover:border-b-2 border-[#3a3a3a]">
              ENGLISH
            </a>
            {languageDropdown && (
              <div className="absolute left-0 z-10 w-48 bg-white shadow-md">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">DANSK</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">ENGLISH</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">NORSK</a>
              </div>
            )}
          </div> */}
        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
            onClick={() => setDrawerOpen(!drawerOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path
                className={`${drawerOpen ? 'hidden' : 'block'}`}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
              <path
                className={`${drawerOpen ? 'block' : 'hidden'}`}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div className={`md:hidden ${drawerOpen ? 'block' : 'hidden'} bg-white shadow-lg`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-200">HOME</a>
          <div className="relative w-full text-center">
            <button
              onClick={() => setDrawerServicesDropdown(!drawerServicesDropdown)}
              className="w-full block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-200 focus:outline-none"
            >
              SERVICES
            </button>
            {drawerServicesDropdown && (
              <div className="flex flex-col items-center">
                <a href="/software-development" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-200">SOFTWARE DEVELOPMENT</a>
                <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-200">EMBEDDED SYSTEMS</a>
                <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-200">SOFTWARE TESTING & QUALITY ASSURANCE</a>
                <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-200">PROJECT MANAGEMENT</a>
                <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-200">DATA AND AI</a>
                <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-200">UI/UX DESIGN SERVICES</a>
              </div>
            )}
          </div>
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-200">TECH STACK</a>
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-200">CLIENTS AND CASES</a>
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-200">ABOUT US</a>
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-200">CONTACT</a>
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-200">BLOG</a>
          <div className="relative w-full text-center">
            <button
              onClick={() => setDrawerLanguageDropdown(!drawerLanguageDropdown)}
              className="w-full block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-200 focus:outline-none"
            >
              ENGLISH
            </button>
            {drawerLanguageDropdown && (
              <div className="flex flex-col items-center">
                <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-200">DANSK</a>
                <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-200">ENGLISH</a>
                <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-200">NORSK</a>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
