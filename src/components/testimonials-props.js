import React, { useState } from "react";
// import {motion, AnimatePresence} from "framer-motion";

const testimonialsProps = [
  {description: `“We’ve used Traveler to lorem ipsum dolor sit amet, consectetur
    adipiscing elit, sed do eiusmod tempor incididunt ut labore et
    dolore magna aliqua.”`,
    image: "/Avatar/quote-200h.png",
    name: "Michael McDonald"
  },
    {
      description: "“Traveler made our trip planning effortless...”",
      image: "/Avatar/quote-200h.png",
      name: "Riku Tafes",
    },
    {
      description: `“I love how easy it is to use Traveler. I can plan my trips in minutes!”`,
      image: "/Avatar/quote-200h.png",
      name: "Martha Stewart",
    },
];

 function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsProps.length);
    console.log("butoni u klikua");
  }
  
  const goPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonialsProps.length) % testimonialsProps.length);
    console.log("butoni u klikua");
  }

  // const current = testimonialsProps[currentIndex];


  return (
  <div className="home-content12">
    {/* <AnimatePresence mode="wait">
      <motion.div 
        key={currentIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}> */}
    <div className="home-heading12">
      <span className="home-title">Customer testimonial</span>
      <p className="home-quote">
        {testimonialsProps[currentIndex].description}
      </p>
    </div>

    <div className="home-details">
      <div className="home-author">
        <img
          alt="image"
          src={testimonialsProps[currentIndex].image}
          className="home-avatar"
        />
        <span className="home-name">
          {testimonialsProps[currentIndex].name}
        </span>
      </div>
      
      

      {/* buttons for moving slider left or right */}
      <div className="home-controls">
        <div className="page" onClick={goPrev}>
          <span className="home-text23">&lt;</span>
        </div>
        <div className="home-next2 page" onClick={goNext}>
          <span className="home-text24">&lt;</span>
        </div>
      </div>
      
    </div>
    {/* </motion.div>
    </AnimatePresence> */}
  </div>
  
);
}

export default TestimonialsCarousel