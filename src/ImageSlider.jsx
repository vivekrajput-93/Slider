import React, { useState } from "react";
import next from "./images/icon-next.svg";
import prev from "./images/icon-prev.svg";

const ImageSlider = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevious = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative flex justify-center items-center ">
      <div className="slide-button-prev ">
        <img
          src={prev}
          width={24}
          height={24}
          
          className=" drop-shadow-md  text-slate-100 cursor-pointer"
          onClick={handlePrevious}
        />
      </div>
      <div className="flex justify-center items-center h-screen max-[768px]:flex-col-reverse">
        <div className="flex-1 px-6 font-medium text-justify">
          <p className="text-3xl text-gray-600">{images[currentSlide].content}</p>
          <div className="flex mt-10 gap-4 items-center  ">
            <h2 className="text-2xl font-bold text-dark">{images[currentSlide].name}</h2>
            <h3 className="text-2xl text-grayishBlue">{images[currentSlide].title}</h3>
          </div>
        </div>
        <div className="flex-1 w-fit h-fit max-[768px]:h-full">
          {images && images.length
            ? images.map((item, index) => (
                <img
                
                  src={item.img}
                  key={item.id}
                  alt={item.title}
                  className={`${
                    currentSlide === index
                      ? " rounded-lg shadow-md  w-[400px] h-[400px]"
                      : "hidden"
                  }`}
                />
              ))
            : null}
        </div>
      </div>
      <div className="slide-button-next ">
        {" "}
        <img
          src={next}
          width={24}
          height={24}
          className=" drop-shadow-md  text-slate-100 cursor-pointer"
          onClick={handleNext}
        />
      </div>
    </div>
  );
};

export default ImageSlider;
