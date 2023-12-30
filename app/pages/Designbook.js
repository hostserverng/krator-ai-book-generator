"use client";
import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar";

import Heading from "../components/Heading";
import { multiStepContext } from "../StepContext";
import FirstPg from "../components/bookCoverDesign/FirstPg";
import SecondPg from "../components/bookCoverDesign/SecondPg";


const Designbook = () => {
  const headingText = [
    "Select Industry, Color & font",
    "Edit Your Logo",
  ];

  
  const { currentStep, finalData } = useContext(multiStepContext);
  function showStep(step) {
    switch (step) {
      case 1:
        return <FirstPg />;
      case 2:
        return <SecondPg />;
    }
  }
  return (
    <div className="max-h-screen">
      <Navbar />
      <div className="bg-primary lg:h-lvh">
        <Heading headingText={headingText[currentStep - 1]} subHeading={currentStep==2?' ':null} />
        <div className="flex justify-center pb-4">
          
        </div>
        {showStep(currentStep)}
      </div>
    </div>
  );
};

export default Designbook;
