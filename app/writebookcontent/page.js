"use client";
import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import FirstStep from "./FirstStep";
import Heading from "../components/Heading";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";
import { Stepper, StepLabel, Step } from "@mui/material";
import { multiStepContext } from "../StepContext";
import FourthStep from "./FourthStep";
import FifthStep from "./FifthStep";
import SixthStep from "./SixthStep";
import FourthStep3 from "./FourthStep3";
import FourthStep2 from "./FourthStep2";
import ConfirmationStep from "./ConfirmationStep";
import DownloadStep from "./DownloadStep";


const Writebook = () => {
  const headingText = [
    "Now create your AI Generated Books",
    "Fill out the prompt to generated Book Covers",
    "Cover Design for Book",
    "Title Page Design",
    "Dedicated Page Design",
    "Page Design",
  ];

  const stepLabels = [
    "Add Details",
    "Contents",
    "Cover Design",
    "Title for page",
    "Prompt for Cover Design",
    "Last Page Design",
  ];
  const { currentWritingStep, finalData } = useContext(multiStepContext);
  function showStep(step) {
    switch (step) {
      case 1:
        return <FirstStep />;
      case 2:
        return <SecondStep />;
      case 3:
        return <ThirdStep />;
      case 4:
        return <FourthStep />;
      case 5:
        return <FifthStep />;
      case 6:
        return <SixthStep />;
      case 7:
        return <ConfirmationStep />;
      case 8:
        return <DownloadStep />;
    }
  }
  return (
    <div className="max-h-screen">
      <Navbar />
      <div className="bg-primary lg:h-lvh">
        <Heading headingText={headingText[currentWritingStep - 1]} />
        <div className="flex justify-center pb-4">
          <Stepper
            style={{ width: "80%" }}
            activeStep={currentWritingStep - 1}
            orientation="horizontal"
          >
            {stepLabels?.map((stepNumber,i) => (
              <Step
                key={stepNumber}
                sx={{
                  "& .MuiStepLabel-root .Mui-completed ": {
                    color: "#51d66e", // circle color (COMPLETED)
                  },
                  "& .MuiStepLabel-label.Mui-completed.MuiStepLabel-label":
                    {
                      color: "grey.500", // Just text label (COMPLETED)
                    },
                  "& .MuiStepLabel-root .Mui-active": {
                    color: "#7b51d6", // circle color (ACTIVE)
                  },
                  "& .MuiStepLabel-label.Mui-active.MuiStepLabel-label":
                    {
                      color: "#000000", // Just text label (ACTIVE)
                    },
                  "& .MuiStepLabel-root .Mui-active .MuiStepIcon-text": {
                    fill: "white", // circle's number (ACTIVE)
                  },
                  
                }}
              >
                <StepLabel>{stepLabels[i]}</StepLabel>
              </Step>
            ))}

          </Stepper>
        </div>
        {showStep(currentWritingStep)}
      </div>
    </div>
  );
};

export default Writebook;
