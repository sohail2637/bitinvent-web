import React from "react";
import Footer from "@/app/components/Footer/Footer"
import Header  from '../../components/Header/Header';

export default function Layout({ children }) {
  return (
    
    <div className="flex flex-col min-h-screen">
   
    <main className="flex-1">
      {children}
    </main>
  
  </div>

);
}