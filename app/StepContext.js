"use client";
import React, { useState } from 'react'
import Writebook from './writebookcontent/page';
import Designbook from './bookcoverdesign/page';
import CreateIllustration from './createillustration/page';
import Home from './page';

export const multiStepContext = React.createContext();

const StepContext = ({ children }) => {
    const [currentWritingStep, setCurrentWritingStep] = useState(1);
    const [currentDesignStep, setCurrentDesignStep] = useState(1);
    const [currentIllustrationStep, setCurrentIllustrationStep] = useState(1);
    const [userData,setUserData] = useState([]);
    const [finalData, setFinalData] = useState([]);
    const [currentFourthSubStep, setCurrentFourthSubStep] = useState(1);
    

    function submitData(){
        // console.log(userData);
        setFinalData(arr =>[...arr,userData]);
        setUserData('');
        // setCurrentStep(1);
        // console.log(finalData);
    }

    function resetWritingStep(){
      setCurrentWritingStep(1);
    }

  return (
    <div>
        <multiStepContext.Provider value={{currentWritingStep, setCurrentWritingStep,currentDesignStep,setCurrentDesignStep,currentIllustrationStep,setCurrentIllustrationStep,
         userData, setUserData, finalData, setFinalData, submitData, currentFourthSubStep, setCurrentFourthSubStep, resetWritingStep }}>
            {/* <Writebook />
            <Designbook />
            <CreateIllustration /> */}
            {/* <Home /> */}
            {children}
        </multiStepContext.Provider>
    </div>
  )
}

export default StepContext;