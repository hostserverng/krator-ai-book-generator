"use client";
import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar";

import Heading from "../components/Heading";
import { multiStepContext } from "../StepContext";
import FirstPage from "../components/createIllustration/FirstPage";
import SecondPage from "../components/createIllustration/SecondPage";
import ThirdPage from "../components/createIllustration/ThirdPage";

const CreateIllustration = () => {
  const headingText = [
    "Create Illustrations",
    "Preview of Illustrations",
    "Preview of Illustrations",
  ];

  const { currentStep, finalData } = useContext(multiStepContext);
  function showStep(step) {
    switch (step) {
      case 1:
        return <FirstPage />;
      case 2:
        return <SecondPage />;
      case 3:
        return <ThirdPage />;
    }
  }
  return (
    <div className="max-h-screen">
      <Navbar />
      <div className="bg-primary lg:h-lvh">
        <Heading headingText={headingText[currentStep - 1]} subHeading={currentStep==2?' ':null}/>
        <div className="flex justify-center pb-4"></div>
        {showStep(currentStep)}
      </div>
    </div>
  );
};

export default CreateIllustration;
