import { InputLabel, TextField, Select, MenuItem } from "@mui/material";
import React, { useContext, useState } from "react";
import { multiStepContext } from "../StepContext";
// import {  createMuiTheme } from '@mui/core/styles';

export default function FirstPage() {
  const [illustration, setIllustration] = useState([]);

  const { setCurrentIllustrationStep, userData, setUserData } =
    useContext(multiStepContext);
  return (
    <div>
      <div className="flex flex-col mx-20 bg-white p-8 pl-12 rounded-lg ">
        <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-8">
          <div className="col-span-1">
              <InputLabel className="text-black font-bold">
                Write Prompt
              </InputLabel>
              <TextField
                value={userData["prompt"]}
                onChange={(e) =>
                  setUserData({ ...userData, prompt: e.target.value })
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
          <div className="lg:col-span-2 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
            <div className="">
              <InputLabel className="text-black font-bold">
                Select illustration Type 1
              </InputLabel>
              <div className="bg-btn-purple h-[155px] mt-1 rounded-3xl hover:bg-gray-300 transition flex flex-row">
              <img
              src="/images/building.jpg"
              alt="image"
              className=" object-cover rounded-lg w-full"
            />
              </div>
            </div>
            <div className="">
              <InputLabel className="text-black font-bold">
              Select illustration Type 2
              </InputLabel>
              <div className="bg-btn-purple h-[155px] mt-1 rounded-3xl hover:bg-gray-300 transition flex flex-row">
              <img
              src="/images/building.jpg"
              alt="image"
              className=" object-cover rounded-lg w-full"
            />
              </div>
            </div>
            <div className="">
              <InputLabel className="text-black font-bold">
              Select illustration Type 3
              </InputLabel>
              <div className="bg-btn-purple h-[155px] mt-1 rounded-3xl hover:bg-gray-300 transition flex flex-row">
              <img
              src="/images/building.jpg"
              alt="image"
              className=" object-cover rounded-lg w-full"
            />
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <InputLabel className="text-black font-bold">
              Select Drawing Style
            </InputLabel>

            <Select
              value={userData["drawingStyle"]}
              onChange={(e) =>
                setUserData({ ...userData, drawingStyle: e.target.value })
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
          <div className="col-span-1">
            <InputLabel className="text-black font-bold">
              Select Preferred Medium
            </InputLabel>

            <Select
              value={userData["prefMedium"]}
              onChange={(e) =>
                setUserData({ ...userData, prefMedium: e.target.value })
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
        </div>
        <button
          className="btn self-center lg:w-1/4 md:w-1/2 bg-btn text-primary p-3 m-4 mt-16 rounded-lg"
          onClick={() => setCurrentIllustrationStep(2)}
        >
          Next Step
        </button>
      </div>
    </div>
  );
}
