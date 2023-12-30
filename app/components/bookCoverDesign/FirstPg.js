import {
  InputLabel,
  TextField,
  Select,
  MenuItem,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { multiStepContext } from "../../StepContext";
// import {  createMuiTheme } from '@mui/core/styles';

export default function FirstPg() {
  const [selectedFile1, setSelectedFile1] = useState(null);
  const [selectedFile2, setSelectedFile2] = useState(null);
  const [selectedFile3, setSelectedFile3] = useState(null);

  const [contrast, setContrast] = useState(100);

  const handleContrastChange = (event, newValue) => {
    setContrast(newValue);
    // You can apply the contrast dynamically to your UI elements here
    // Example: document.body.style.filter = `contrast(${newValue}%)`;
  };

  const { setCurrentStep, userData, setUserData } =
    useContext(multiStepContext);
  return (
    <div>
      <div className="flex flex-col mx-20 bg-white p-8 pl-12 rounded-lg ">
        <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-8">
          <div className="col-span-1">
            <InputLabel className="text-black font-bold">
              Select Your Industry
            </InputLabel>
            <Select
              value={userData["industry"]}
              onChange={(e) =>
                setUserData({ ...userData, industry: e.target.value })
              }
              displayEmpty
              className="bg-primary rounded-3xl w-full mt-1 pb-4 h-[40%]"
              variant="filled"
              disableUnderline
              defaultValue="Hungarian"
              autoFocus={false}
            >
              <MenuItem value="Hungarian">Hungarian</MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </div>
          <div className="col-span-2 grid grid-cols-3 gap-4">
            <div className="">
              <InputLabel className="text-black font-bold">
                About Author
              </InputLabel>
              <div className="bg-btn-purple h-[155px] mt-1 rounded-3xl hover:bg-gray-300 transition flex flex-row">
                <button className="bg-warmLow h-full w-1/4 rounded-tl-xl"></button>
                <button className="bg-warmMidLow h-full w-1/4">Warm</button>
                <button className="bg-warmMid h-full w-1/4"></button>
                <button className="bg-warmHigh h-full w-1/4 rounded-tr-xl"></button>
              </div>
            </div>
            <div className="">
              <InputLabel className="text-black font-bold">
                About Author
              </InputLabel>
              <div className="bg-btn-purple h-[155px] mt-1 rounded-3xl hover:bg-gray-300 transition flex flex-row">
                <button className="bg-cold-low h-full w-1/4 rounded-tl-xl"></button>
                <button className="bg-cold-mid-low h-full w-1/4">Cold</button>
                <button className="bg-cold-mid h-full w-1/4"></button>
                <button className="bg-cold-high h-full w-1/4 rounded-tr-xl"></button>
              </div>

            </div>
            <div className="">
              <InputLabel className="text-black font-bold">
                About Author
              </InputLabel>
              <div className="bg-btn-purple h-[155px] mt-1 rounded-3xl hover:bg-gray-300 transition flex flex-row">
                <button className="bg-contrast-low h-full w-[12.5%] rounded-tl-xl"></button>
                <button className="bg-contrast-mid-low h-full w-[37.5%]">Contrast</button>
                <button className="bg-contrast-mid h-full w-[37.5%]"></button>
                <button className="bg-contrast-high h-full w-[12.5%] rounded-tr-xl"></button>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <InputLabel className="text-black font-bold">
              Select Font Style
            </InputLabel>

            <Select
              value={userData["fontStyle"]}
              onChange={(e) =>
                setUserData({ ...userData, fontStyle: e.target.value })
              }
              displayEmpty
              className="bg-primary rounded-3xl w-full mt-1 pb-4 h-[40%]"
              variant="filled"
              disableUnderline
              defaultValue="Hungarian"
              autoFocus={false}
            >
              <MenuItem value="Hungarian">Hungarian</MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>

            {/* <TextField
              value={userData["fontStyle"]}
              onChange={(e) =>
                setUserData({ ...userData, fontStyle: e.target.value })
              }
              placeholder="01"
              
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
            /> */}
          </div>
        </div>
        <button
          className="btn self-center w-1/4 bg-btn text-primary p-3 m-4 mt-16 rounded-lg"
          onClick={() => setCurrentStep(2)}
        >
          Next Step
        </button>
      </div>
    </div>
  );
}
