import { useState, useEffect } from "react";
import { sliderData } from "../../slider-data";
import "./info.css";

const Possibility = () => {

    const [currentSlide, setCurrentSlide] = useState(0);
    const slideLength = sliderData.length;
  
    const autoScroll = true;
    let slideInterval;
    let intervalTime = 5000;
  
    const nextSlide = () => {
      setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
      console.log("next");
    };
  
    const prevSlide = () => {
      setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
      console.log("prev");
    };
  
    function auto() {
      slideInterval = setInterval(nextSlide, intervalTime);
    }
  
    useEffect(() => {
      setCurrentSlide(0);
    }, []);
  
    useEffect(() => {
      if (autoScroll) {
        auto();
      }
      return () => clearInterval(slideInterval);
    }, [currentSlide]);
  
  return (
    <div className="aboutIPC">
    <div className="slider">
    
    <div className="ipc__whatIPC section__margin">

      {sliderData.map((slide, index) => {
        return (
          <div
            className={index === currentSlide ? "slide current" : "slide"}
            key={index}
          >
          {index === currentSlide && (
  <div>
    <img src={slide.image} alt="slide" className="image" />
  
  </div>
)}
          </div>
        );
      })}

      <div className="ipc__whatIPC-feature">
        {/* <h2 className="title">What is IPC?</h2> */}
       
        <h2 className="title">What is IPC Philly?</h2>
        <p className="text">We are a local community church,  Christ-centered, family-focused service to our community.</p>
     
      </div>
      
      </div>
      </div>
      </div>

  )
}

export default Possibility;