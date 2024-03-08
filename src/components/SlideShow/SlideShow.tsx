import { useState, useEffect } from "react";
import "./SlideShow.scss";
interface Slide {
  src: string;
}

const slides: Slide[] = [
  { src: "/src/assets/images/slide1.jpeg" },
  { src: "/src/assets/images/slide2.jpg" },
  { src: "/src/assets/images/slide3.jpg" },
];

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slideshow-container">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`mySlides fade ${index === currentSlide ? "active" : ""}`}
        >
          <img src={slide.src} className="bannerImg" />
        </div>
      ))}
    </div>
  );
};

export default Slideshow;
