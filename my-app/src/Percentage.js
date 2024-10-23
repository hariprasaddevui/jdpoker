import React, { useState, useEffect } from "react";
import "./Percentage.css"; // Import the CSS file

const Percentage = () => {
  const [scale, setScale] = useState(1); // Initial scale value

  useEffect(() => {
    const handleResize = () => {
      // Calculate the scale factor based on the window width
      const parentWidth = window.innerWidth;
      const maxWidth = 1800; // Maximum width before scaling starts
      if (parentWidth < maxWidth) {
        setScale(parentWidth / maxWidth); // Scale proportionally
      } else {
        setScale(1); // No scaling if the width is above 1800px
      }
    };

    // Initial scaling when the component mounts
    handleResize();

    // Add event listener to scale on window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="parent">
      <div className="leftSection">left</div>
      <div className="midSection">
        <div
          className="scaleWrapper"
          style={{
            // transform: `scale(${scale})`
            transformOrigin: "center center", // Set origin to top-left
            width: '100%', // Ensure full width
            transition: "transform 0.2s ease-in-out", // Smooth scaling transition
          }}
        >
          <div className="cardContainer">
            {/* Repeatable Card Items */}
            {[...Array(5)].map((_, index) => (
              <div className="cardItem" key={index}>
                <div className="cardAsset"></div>
                <div className="decisinIcon"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="rightSection">right</div>
    </div>
  );
};

export default Percentage;
