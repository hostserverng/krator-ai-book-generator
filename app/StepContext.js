"use client";
import React, { useState } from 'react'
import Writebook from './pages/Writebook';

export const multiStepContext = React.createContext();

const StepContext = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [userData,setUserData] = useState([]);
    const [finalData, setFinalData] = useState([]);

    function submitData(){
        console.log(userData);
        setFinalData(arr =>[...arr,userData]);
        setUserData('');
        setCurrentStep(1);
        // console.log(finalData);
    }

  return (
    <div>
        <multiStepContext.Provider value={{currentStep, setCurrentStep, userData, setUserData, finalData, setFinalData, submitData}}>
            <Writebook />
        </multiStepContext.Provider>
    </div>
  )
}

export default StepContext;