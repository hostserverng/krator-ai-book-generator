
import React, { useContext, useEffect, useState } from "react";
import { multiStepContext } from "../StepContext";

import ImageCard from "../components/ImageCard";


export default function SixthStep() {
    const {setCurrentWritingStep, userData, setUserData,submitData} = useContext(multiStepContext);
    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        setImageUrl(userData['back-cover-image']);
    }, [userData]);
  return (
    <div>
      <div className="flex flex-col items-center mx-16 bg-white h-full pt-24 rounded-lg">
                {imageUrl && <ImageCard key={1} src={imageUrl} alt={'Image'} />}
                <button className="btn self-center lg:w-1/4 md:w-1/2 bg-btn text-primary p-3 m-4 rounded-lg"
                    onClick={() => setCurrentWritingStep(7)}>Next Step</button>
            </div>
    </div>
  );
}
