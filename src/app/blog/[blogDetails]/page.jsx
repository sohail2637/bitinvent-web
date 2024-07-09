"use client";
import React from "react";
import {cardsData} from "../../components/Blog/dynamicCardData"
import BlogCardDetail from "../../components/Blog/BlogCardDetail";

export default function Dashboard() {
  
  return (
    <>
   
      <BlogCardDetail cardsData={cardsData} />
    </>
  );
}