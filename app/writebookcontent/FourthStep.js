import { InputLabel, TextField } from "@mui/material";
import React, { useContext } from "react";
import { multiStepContext } from "../StepContext";
import ImageCard from "../components/ImageCard";
import FourthStep2 from "./FourthStep2";
import FourthStep3 from "./FourthStep3";
import FourthStep1 from "./FourthStep1";

export default function FourthStep() {

  const { currentFourthSubStep } =
    useContext(multiStepContext);

    function showSubStep(step) {
      switch (step) {
        case 1:
          return <FourthStep1 />;
        case 2:
          return <FourthStep2 />;
        case 3:
          return <FourthStep3 />;
      }
    }
  return (
    <div>
      {showSubStep(currentFourthSubStep)}
    </div>
  );
}
