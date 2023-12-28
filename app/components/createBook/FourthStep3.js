import { InputLabel, TextField } from "@mui/material";
import React, { useContext } from "react";
import { multiStepContext } from "../../StepContext";
import ImageCard from "../ImageCard";

export default function FourthStep3() {
  const { setCurrentStep, userData, setUserData } =
    useContext(multiStepContext);
  return (
    <div>
      <div className="flex flex-col mx-20 bg-white p-8 pl-12 rounded-lg ">
        <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-8">
          <div>
            <div className="mb-5">
              <InputLabel className="text-black font-bold">
                Chapter Number
              </InputLabel>
              <TextField
                value={userData["chapterNumber"]}
                onChange={(e) =>
                  setUserData({ ...userData, "chapterNumber": e.target.value })
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
            <div className="mb-5">
              <InputLabel className="text-black font-bold">
                Page Number
              </InputLabel>
              <TextField
                value={userData["pagNumber"]}
                onChange={(e) =>
                  setUserData({ ...userData, "pagNumber": e.target.value })
                }
                placeholder="Richard"
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
            <div className="mb-5">
              <InputLabel className="text-black font-bold">
                Principle Text
              </InputLabel>
              <TextField
                value={userData["principleText"]}
                onChange={(e) =>
                  setUserData({ ...userData, "principleText": e.target.value })
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
            <div className="mb-5">
              <InputLabel className="text-black font-bold">
                Generate Image
              </InputLabel>
              <TextField
                value={userData["generateImg"]}
                onChange={(e) =>
                  setUserData({ ...userData, "generateImg": e.target.value })
                }
                placeholder="Richard"
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
            <div className="mb-5">
              <InputLabel className="text-black font-bold">
                Generate Illustrations
              </InputLabel>
              <TextField
                value={userData["generateIllustration"]}
                onChange={(e) =>
                  setUserData({ ...userData, "generateIllustration": e.target.value })
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
          onClick={() => setCurrentStep(5)}
        >
          Next Step
        </button>
      </div>
    </div>
  );
}
