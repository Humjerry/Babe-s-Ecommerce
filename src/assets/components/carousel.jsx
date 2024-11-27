import React, { useState, useEffect } from "react";
import bg1 from "../images/herobg2.jpg";
import bg2 from "../images/herobg3.jpg";
import bg3 from "../images/herobg4.jpg";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { image: bg1, id: 1 },
    { image: bg2, id: 2 },
    { image: bg3, id: 3 },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 10000); // Change every 5 seconds

    return () => clearInterval(interval); 
  }, []);

  return (
    <div>
      {/* Slideshow Container */}
      <div className="slideshow-container">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`mySlides ${index === currentSlide ? "active" : "hidden"}`}
            style={{
              display: index === currentSlide ? "block" : "none",
            }}
          >
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="slideImg"
            />
          </div>
        ))}

        {/* Navigation buttons */}
        <div className="arrow">
          <IoIosArrowBack className="prev" onClick={prevSlide} />
          <div className="text">
            <h1>BEST FOOD DELIVERY</h1>
            <p>
              We know how large objects will act, but things on a small scale
              just do not act that way.
            </p>
            <button className="bg-brandred">Order Now</button>
          </div>
          <IoIosArrowForward className="next" onClick={nextSlide} />
        </div>
      </div>

      {/* Dots */}
      <div style={{ textAlign: "center",  position:"absolute", bottom:"70px", right:"650px"}}>
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
