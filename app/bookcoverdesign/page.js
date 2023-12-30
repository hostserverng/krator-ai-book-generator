"use client";
import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar";

import Heading from "../components/Heading";
import { multiStepContext } from "../StepContext";
import FirstPg from "./FirstPg";
import SecondPg from "./SecondPg";


const Designbook = () => {
  const headingText = [
    "Select Industry, Color & font",
    "Edit Your Logo",
  ];

  
  const { currentDesignStep, finalData } = useContext(multiStepContext);
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
        <Heading headingText={headingText[currentDesignStep - 1]} subHeading={currentDesignStep==2?' ':null} />
        <div className="flex justify-center pb-4">
          
        </div>
        {showStep(currentDesignStep)}
      </div>
    </div>
  );
};

export default Designbook;
