import React, { useState, useEffect } from "react";

export default function Approachment7() {
  const [scale, setScale] = useState(1); // Default scale factor

  useEffect(() => {
    const handleResize = () => {
      const viewportWidth = window.innerWidth;

      // Min and max viewport breakpoints
      const minViewportWidth = 320;
      const maxViewportWidth = 1800;

      // Base dimensions at 320px
      const minWidth = 304;
      const minHeight = 66.09;

      // Target dimensions at 1800px
      const maxWidth = 570.4;
      const maxHeight = 124;

      // Calculate the scale factor
      let newScale;

      if (viewportWidth <= minViewportWidth) {
        newScale = 1; // Base scale at 320px
      } else if (viewportWidth >= maxViewportWidth) {
        newScale = maxWidth / minWidth; // Max scale at 1800px
      } else {
        // Calculate scale proportionally between min and max breakpoints
        const scaleFactor = (viewportWidth - minViewportWidth) / (maxViewportWidth - minViewportWidth);
        newScale = 1 + (maxWidth / minWidth - 1) * scaleFactor; // Scaling from 1x to 1.875x
      }

      setScale(newScale);
    };

    window.addEventListener("resize", handleResize);

    // Trigger resize logic initially
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="mainBg">
      <div
        className="cBOx"
        style={{
          transform: `scale(${scale})`,
        }}
      >
        <div className="cBoxText">
          Width: {Math.round(304 * scale)}px <br />
          Height: {Math.round(66.09 * scale)}px
        </div>
      </div>
    </div>
  );
}
