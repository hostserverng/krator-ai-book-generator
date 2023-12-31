
import React, { useContext } from "react";
import { multiStepContext } from "../StepContext";
import ImageCard from "../components/ImageCard";

export default function ConfirmationStep() {
    const {setCurrentWritingStep, userData, setUserData, submitData} = useContext(multiStepContext);

    const images = [
      { id: 1, src: '/images/building.jpg', alt: 'Image 1' },
      { id: 2, src: '/images/building.jpg', alt: 'Image 2' },
      { id: 3, src: '/images/building.jpg', alt: 'Image 3' },
      { id: 4, src: '/images/building.jpg', alt: 'Image 4' },
    ];
  return (
    <div>
      <div className="flex flex-col items-start mx-16 bg-white h-full p-8">
      <div className="flex flex-wrap">
      {images.map((image) => (
        <ImageCard key={image.id} src={image.src} alt={image.alt} />
      ))}
    </div>
        <button className="btn self-center lg:w-1/4 md:w-1/2 bg-btn text-primary p-3 m-4 mt-12 rounded-lg"
        onClick={()=>{submitData; setCurrentWritingStep(8);}} >Next Step</button>
      </div>
    </div>
  );
}
