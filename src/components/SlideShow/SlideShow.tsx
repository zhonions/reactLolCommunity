import { useState, useEffect } from "react";
import "./SlideShow.scss";
import slide1 from "../../assets/images/slide1.jpeg";
import slide2 from "../../assets/images/slide2.jpg";
import slide3 from "../../assets/images/slide3.jpg";

interface Slide {
  src: string;
  alt: string;
}

const slides: Slide[] = [
  { src: slide1, alt: "League of Legends match" },
  { src: slide2, alt: "League of Legends champion" },
  { src: slide3, alt: "League of Legends community" },
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
          key={slide.src}
          className={`mySlides fade ${index === currentSlide ? "active" : ""}`}
        >
          <img src={slide.src} className="bannerImg" alt={slide.alt} />
        </div>
      ))}
    </div>
  );
};

export default Slideshow;
