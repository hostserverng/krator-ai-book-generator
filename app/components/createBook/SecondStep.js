import { InputLabel, TextField } from "@mui/material";
import React, { useContext } from "react";
import { multiStepContext } from "../../StepContext";

export default function SecondStep() {
    const {setCurrentStep, userData, setUserData} = useContext(multiStepContext);
  return (
    <div>
    <div className="center">
      <div className="flex flex-col mx-20 bg-white p-8 pl-12 rounded-lg">
        <InputLabel className="my-3 text-black font-bold">
          What will your book be about?
        </InputLabel>
        <TextField
        value={userData['aboutDescription']}
        onChange={(e)=>setUserData({...userData, 'aboutDescription':e.target.value})}
          multiline
          rows={10}
          placeholder="Description"
          className="bg-primary w-full"
          variant="filled"
          InputProps={{
            style: {
              border: "none",
              borderRadius: "15px",
            },
            disableUnderline: true,
          }}
        />
        <button className="btn self-center w-1/4 bg-btn text-primary p-3 m-4 mt-16 rounded-lg"
        onClick={()=>setCurrentStep(3)} >Next</button>
      </div>
    </div>
    </div>
  );
}
