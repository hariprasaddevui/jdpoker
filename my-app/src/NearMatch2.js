import React, { useState, useEffect } from "react";

export default function NearMatch2() {
  const [scaleFactor, setScaleFactor] = useState(1); 

  useEffect(() => {
    const handleResize = () => {
      const viewportWidth = window.innerWidth;
      const minViewportWidth = 320; 
      const maxViewportWidth = 1800;
      const baseWidth = 304;
      const baseHeight = 66.09;
      const targetWidth = 570.4;
      const targetHeight = 120;


      const scaleX = targetWidth / baseWidth; // 1.875 (570.4 / 304)
      const scaleY = targetHeight / baseHeight; // 1.875 (124 / 66.09)

      // Ensure uniform scaling by using scaleX (since scaleX and scaleY are the same)
      let scale;
      if (viewportWidth <= minViewportWidth) {
        scale = 1; // No scaling at 320px, it's the base size
      } else if (viewportWidth >= maxViewportWidth) {
        scale = scaleX; // Maximum scale at 1800px
      } else {
        // Dynamically calculate the scaling factor for in-between sizes
        const scaleFactor =
          1 +
          ((viewportWidth - minViewportWidth) * (scaleX - 1)) /
            (maxViewportWidth - minViewportWidth);
        scale = scaleFactor; // Dynamic scaling factor between 320px and 1800px
      }

      setScaleFactor(scale);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const cardItems = [
    { src: "images/6Club.png" },
    { src: "images/8Diamond.png" },
    { src: "images/QClub.png" },
    { src: "images/JDiamond.png" },
    { src: "images/JSpades.png" },
  ];
  return (
    <div className="mainBg">
      <div
        className="cBOx"
      >
        <div className="cBoxText">
          Scaled Box: {Math.round(scaleFactor * 100)}%
        </div>
        <div className="cardHolder">
          {cardItems.map((item, index) => (
            <div className="cardItem" key={index}>
              <div className="cardBg">
                <img src={item.src} alt={`card-${index}`} />
              </div>
              <div className="child"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}