import React, { useEffect, useState } from "react";

const Game3 = () => {
  const [scale, setScale] = useState(1); // Scale factor
  const [childSize, setChildSize] = useState(44);

  useEffect(() => {
    const resizeHandler = () => {
      const browserWidth = window.innerWidth;

      if (browserWidth < 1800) {
        // Calculate scale based on browser width
        const newScale = Math.max(0.5, Math.min(1, browserWidth / 1800));
        setScale(newScale);

        // Calculate new child size based on scale
        const newChildSize = Math.min(44, 44 * newScale); // Scale child size proportionally
        setChildSize(newChildSize);
      } else {
        setScale(1); // Reset scale to 1
        setChildSize(44); // Reset to default size
      }
    };

    window.addEventListener("resize", resizeHandler);
    
    // Initial run on mount
    resizeHandler();

    // Cleanup on unmount
    return () => window.removeEventListener("resize", resizeHandler);
  }, []);

  const cardItems = Array(5).fill(null); // Create an array for 5 card items

  return (
    <div className="gameWrapper">
      <div
        className="cardHolder"
        style={{
          transform: `scale(${scale})`,
          transformOrigin: 'center center', // Ensures scaling from the top left corner
          width: '570px', // Keep the original width for layout purposes
          // height: '800px', // Keep the original height for layout purposes
        }}
      >
        {cardItems.map((_, index) => (
          <div className="cardItem" key={index}>
            <div className="cardBg">
              <img src="https://i.ibb.co/80B4R4g/Flat-Cards-2.png" alt="" />
            </div>
            <div
              className="child"
              style={{
                width: `${childSize}px`,
                height: `${childSize}px`,
              }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Game3;
