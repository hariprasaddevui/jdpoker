import React, { useState, useEffect } from "react";

export default function Approachment7() {
  const [scaleFactor, setScaleFactor] = useState(1); // Default scale factor (at 320px)

  useEffect(() => {
    const handleResize = () => {
      const viewportWidth = window.innerWidth;

      // Define the min and max viewport width for scaling
      const minViewportWidth = 320; // Min viewport width (320px)
      const maxViewportWidth = 1800; // Max viewport width (1800px)

      // Base dimensions at 320px (the original dimensions)
      const baseWidth = 304;
      const baseHeight = 66.09;

      // Target dimensions at 1800px (scaled dimensions)
      const targetWidth = 570.4;
      const targetHeight = 124;

      // Calculate scale factors for width and height
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

      // Update the scale factor state
      setScaleFactor(scale);
    };

    window.addEventListener("resize", handleResize);

    // Trigger the resize logic on mount to ensure initial scaling
    handleResize();

    // Clean up the resize event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="mainBg">
      <div
        className="cBOx"
        style={{
          transform: `scale(${scaleFactor})`, // Apply the dynamic scaling factor
        }}
      >
        <div className="cBoxText">
          Scaled Box: {Math.round(scaleFactor * 100)}%
        </div>
      </div>
    </div>
  );
}
