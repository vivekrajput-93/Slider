import React, { useEffect, useState } from "react";
import {BsArrowLeftCircle, BsArrowRightCircle} from  "react-icons/bs"

const Slider = ({ url, limit = 5, page = 1 }) => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchImages = async (geturl) => {
    try {
      setLoading(true);
      const response = await fetch(`${geturl}?page=${page}&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (error) {
      setErrorMsg(error.message);
    }
  };


  useEffect(() => {
    if (url !== " ") fetchImages(url);
  }, [url]);




  if (loading) {
    return <h2>Loading... Please wait</h2>;
  }




  if (errorMsg !== null) {
    return <span>There is an issue regarding {errorMsg}</span>;
  }


  const handlePrevious = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide -1)
  }

  const handleNext = () => {
    setCurrentSlide(currentSlide === images.length-1 ? 0 : currentSlide + 1)
  }


  return <div className="relative flex justify-center items-center w-[600px] h-[450px]">
    <BsArrowLeftCircle size={24} className="absolute drop-shadow-md left-4 text-slate-100" onClick={handlePrevious} />
    { images && images.length ? 
        images.map((item, index) => (
            <img src={item.download_url} key={item.id} alt={item.dowload_url} className={`${currentSlide === index ? "border rounded-lg shadow-md w-full h-full" : "hidden"}`} />
        ))
     : null }
     <BsArrowRightCircle size={24} className="absolute drop-shadow-md right-4 text-slate-100" onClick={handleNext} />
    <span className="flex absolute bottom-4">
        {images && images.length ? 
        images.map((_, index) => (
         <button key={index}  onClick={() => setCurrentSlide(index)} className={`${currentSlide == index ? "bg-white h-[15px] w-[15px] rounded-full border-none cursor-pointer m-0 mx-2" : "text-slate-500"}`} ></button>
        ))
         : null }

    </span>
  </div>
};

export default Slider;