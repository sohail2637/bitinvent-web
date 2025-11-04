"use client"

import Footer from "@/app/components/Footer/Footer"
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

export default function Dashboard() {
  return (

    <div className="flex flex-col min-h-screen">
      <Header />
      <Home />

      <Footer />
    </div>

  );
}

