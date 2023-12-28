import { InputLabel, TextField } from "@mui/material";
import React, { useContext } from "react";
import { multiStepContext } from "../../StepContext";
import Image from "next/image";

export default function SixthStep() {
    const {setCurrentStep, userData, setUserData,submitData} = useContext(multiStepContext);
  return (
    <div>
      <div className="flex flex-col items-center mx-16 bg-white h-full pt-24 rounded-lg">
        <Image src="/images/building.jpg" height={400} width={250} />
        <button className="btn self-center w-1/4 bg-btn text-primary p-3 m-4 rounded-lg"
        onClick={submitData} >Download</button>
      </div>
    </div>
  );
}
