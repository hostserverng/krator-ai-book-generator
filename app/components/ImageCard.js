
import React from 'react';

const ImageCard = ({ src, alt, border='rounded-tr-lg rounded-br-lg'}) => {
  return (
    <div className="flex-none w-full md:w-1/2 lg:w-1/4 p-2">
    <div className='relative w-full h-96'>
      <img
        src={src}
        alt={alt}
        className={`w-[85%] h-full object-cover ${border}`}
      />
      </div>
    </div>
  );
};

export default ImageCard;
