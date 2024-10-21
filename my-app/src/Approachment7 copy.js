import React, { useState, useEffect } from "react";

export default function Approachment7() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      // Define breakpoints and corresponding dimensions
      const minWidth = 304;  // Width at 320px viewport
      const minHeight = 66.09; // Height at 320px viewport
      const maxWidth = 570.04;  // Width at 375px viewport
      const maxHeight = 124; // Height at 375px viewport
      const minViewport = 1013; // Minimum viewport width
      const maxViewport = 1800; // Maximum viewport width

      const viewportWidth = window.innerWidth;

      // Calculate the scaling factor based on the viewport width
      let newScale;

      if (viewportWidth < minViewport) {
        newScale = 1; // No scaling below 320px
      } else if (viewportWidth > maxViewport) {
        newScale = maxWidth / minWidth; // Use maximum scale
      } else {
        // Linear interpolation between min and max
        const scaleFactor =
          (viewportWidth - minViewport) / (maxViewport - minViewport);
        
        const width = minWidth + (maxWidth - minWidth) * scaleFactor;
        const height = minHeight + (maxHeight - minHeight) * scaleFactor;

        newScale = width / minWidth; // Calculate scale based on width
      }

      setScale(newScale);
    };

    window.addEventListener("resize", handleResize);

    // Trigger resize on component mount
    handleResize();

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="mainBg">
      <div
        className="cBOx"
        style={{
          transform: `scale(${scale})`, // Scale width and height
        }}
      >
        {/* Add more elements inside cBOx */}
      </div>
    </div>
  );
}
