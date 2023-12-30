import { InputLabel, TextField } from "@mui/material";
import React, { useContext } from "react";
import { multiStepContext } from "../StepContext";
import ImageCard from "../components/ImageCard";

export default function FourthStep2() {
  const { setCurrentFourthSubStep, userData, setUserData } =
    useContext(multiStepContext);
  return (
    <div>
      <div className="flex flex-col mx-20 bg-white p-8 pl-12 rounded-lg ">
        <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-8">
          <div>
            <div className="">
              <InputLabel className="text-black font-bold">
                Principle Text
              </InputLabel>
              <TextField
                value={userData["principlText"]}
                onChange={(e) =>
                  setUserData({ ...userData, "principlText": e.target.value })
                }
                placeholder="Hungarian"
                className="bg-primary rounded-3xl w-full mt-1"
                variant="filled"
                InputProps={{
                  style: {
                    border: "none",
                    borderRadius: "15px",
                    height: "2.5rem",
                    paddingBottom: "0.8rem",
                  },
                  disableUnderline: true,
                }}
              />
            </div>
            <button
          className="btn self-center w-full bg-btn text-primary p-3 mt-4 rounded-lg"
        //   onClick={}
        >
          Generate Illustrations
        </button>
          </div>
          <div className="flex justify-end w-full">
            <img
              src="/images/building.jpg"
              alt="image"
              className="w-[65%] mr-8 h-full object-cover rounded-tr-lg rounded-br-lg"
            />
          </div>
        </div>
        <button
          className="btn self-center w-1/4 bg-btn text-primary p-3 m-4 mt-16 rounded-lg"
          onClick={() => setCurrentFourthSubStep(3)}
        >
          Next Step
        </button>
      </div>
    </div>
  );
}
