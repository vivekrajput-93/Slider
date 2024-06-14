import React, { useState } from 'react';
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';

const ImageSlider = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevious = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative flex justify-center items-center w-[600px] h-[450px]">
      <BsArrowLeftCircle 
        size={24} 
        className="absolute drop-shadow-md left-4 text-slate-100 cursor-pointer" 
        onClick={handlePrevious} 
      />
      {images && images.length ? 
        images.map((item, index) => (
          <img 
            src={item.img} 
            key={item.id} 
            alt={item.title} 
            className={`${currentSlide === index ? "border rounded-lg shadow-md w-full h-full" : "hidden"}`} 
          />
        )) 
      : null}
      <BsArrowRightCircle 
        size={24} 
        className="absolute drop-shadow-md right-4 text-slate-100 cursor-pointer" 
        onClick={handleNext} 
      />
    </div>
  );
};

export default ImageSlider;
