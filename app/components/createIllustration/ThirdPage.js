import {
    InputLabel,
    TextField,
    Select,
    MenuItem,
    FormControl,
    Slider,
    Typography,
  } from "@mui/material";
  import React, { useContext, useState } from "react";
  import { multiStepContext } from "../../StepContext";
  import ImageCard from "../ImageCard";
  
  export default function ThirdPage() {
    
  
    const { setCurrentStep, userData, setUserData } =
      useContext(multiStepContext);
    return (
      <div>
        <div className="flex flex-col mx-20 bg-white p-8 pl-12 rounded-lg ">
          <div className="flex justify-center">
            <div className="w-[45%]">
              <InputLabel className="text-black font-bold mb-1">
                Illustration Preview
              </InputLabel>
              <img
                src="/images/building.jpg"
                alt="image"
                className=" object-cover rounded-lg"
              />
            </div>
          </div>
          <div className="flex flex-row justify-center">
          <button className="btn self-center row w-1/6 bg-btn text-primary p-3 mt-6 rounded-lg"
           >Save</button>
          <button className="btn self-center w-1/6 bg-btn text-primary p-3 mt-6 ml-4 rounded-lg"
           >Buy</button>
           </div>
        </div>
      </div>
    );
  }
  