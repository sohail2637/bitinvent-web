import React from "react";
import Footer from "@/app/components/Footer/Footer"
import Header  from '../components/Header/Header';

export default function Layout({ children }) {
  return (
    
    <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex-1">
      {children}
    </main>
    <Footer />
  </div>

);
}

{/* <div className="bg-[#E5E8EB] h-screen flex flex-col overflow-hidden ">
  <Header  />
  <div className="flex flex-1 overflow-hidden">
    <div className="w-[16%] h-full sideBar-gradient">
      <SideNavbar />
    </div>
  </div>
</div> */}  