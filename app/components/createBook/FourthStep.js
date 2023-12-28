import { InputLabel, TextField } from "@mui/material";
import React, { useContext } from "react";
import { multiStepContext } from "../../StepContext";

export default function FourthStep() {
    const {setCurrentStep, userData, setUserData} = useContext(multiStepContext);
  return (
    <div>
      <div className="flex flex-col items-start mx-16 bg-white h-full p-8">
        <InputLabel className="my-3 text-black">
          Author
        </InputLabel>
        <TextField
        value={userData['author']}
        onChange={(e)=>setUserData({...userData, 'author':e.target.value})}
          multiline
          rows={10}
          placeholder="Description"
          className="bg-primary w-5/6"
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
        onClick={()=>setCurrentStep(5)} >Next</button>
      </div>
    </div>
  );
}
