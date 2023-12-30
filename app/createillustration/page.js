"use client";
import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar";

import Heading from "../components/Heading";
import { multiStepContext } from "../StepContext";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";

const CreateIllustration = () => {
  const headingText = [
    "Create Illustrations",
    "Preview of Illustrations",
    "Preview of Illustrations",
  ];

  const { currentIllustrationStep, finalData } = useContext(multiStepContext);
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
        <Heading headingText={headingText[currentIllustrationStep - 1]} subHeading={currentIllustrationStep==2?' ':null}/>
        <div className="flex justify-center pb-4"></div>
        {showStep(currentIllustrationStep)}
      </div>
    </div>
  );
};

export default CreateIllustration;
