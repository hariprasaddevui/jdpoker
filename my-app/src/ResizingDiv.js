import React, { useState, useEffect } from "react";

export default function Approachment7() {
  const [boxSize, setBoxSize] = useState({ width: 304, height: 66.09 }); // Default size at 320px

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

      // Calculate the interpolated width and height
      let newWidth, newHeight;

      if (viewportWidth <= minViewportWidth) {
        newWidth = minWidth;
        newHeight = minHeight;
      } else if (viewportWidth >= maxViewportWidth) {
        newWidth = maxWidth;
        newHeight = maxHeight;
      } else {
        // Calculate width and height proportionally between min and max breakpoints
        const scaleFactor = (viewportWidth - minViewportWidth) / (maxViewportWidth - minViewportWidth);

        newWidth = minWidth + (maxWidth - minWidth) * scaleFactor;
        newHeight = minHeight + (maxHeight - minHeight) * scaleFactor;
      }

      setBoxSize({ width: newWidth, height: newHeight });
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
          width: `${boxSize.width}px`,
          height: `${boxSize.height}px`,
        }}
      >
        <div className="cBoxText">
          Width: {Math.round(boxSize.width)}px <br />
          Height: {Math.round(boxSize.height)}px
        </div>
      </div>
    </div>
  );
}
