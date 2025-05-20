
import React, { useState } from "react";
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

 function testimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsProps.length);
    console.log("butoni u klikua");
  }
  
  const goPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonialsProps.length) % testimonialsProps.length);
    console.log("butoni u klikua");
  }


  return (
    <div className="home-content12">
              <div className="home-heading12">
                <span className="home-title">Customer testimonial</span>
                <p className="home-quote">
                  {testimonialsProps[0].description}
                </p>
              </div>
              <div className="home-details">
                <div className="home-author">
                  <img
                    alt="image"
                    src={testimonialsProps[0].image}
                    className="home-avatar"
                  />
                  <span className="home-name">{testimonialsProps[0].name}</span>
                </div>
                <div className="home-controls">
                  <div className="page">
                    <span className="home-text23" onClick={goPrev}>&lt;</span>
                  </div>
                  <div className="home-next2 page">
                    <span className="home-text24" onClick={goNext}>&lt;</span>
                  </div>
                </div>
              </div>
            </div>
  )

  const current = testimonialsProps[currentIndex];
}

export default testimonialsCarousel