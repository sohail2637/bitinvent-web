"use client";
import React from "react";
import {privacyPolicyData} from "../components/PrivacyPolicy/privacyPolicyData"

import PrivacyPolicy from "../components/PrivacyPolicy/PrivacyPolicy";

export default function Dashboard() {
  return (
    <>
   
      <PrivacyPolicy privacyPolicyData={privacyPolicyData}/>
    </>
  );
}