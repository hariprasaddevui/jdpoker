import React, { useEffect, useRef } from 'react';

function Approachment8() {
  const boxRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const boxElement = boxRef.current;
      const originalWidth = 304; // Default width
      const originalHeight = 66.09; // Default height
      const desiredWidth = 570.4; // Desired width for 1800x1013
      const desiredHeight = 124; // Desired height for 1800x1013
      const aspectRatio = desiredWidth / desiredHeight;
      const scale = Math.min(window.innerWidth / originalWidth, window.innerHeight / originalHeight);
      const newWidth = originalWidth * scale;
      const newHeight = newWidth / aspectRatio;

      // Apply specific scale values at breakpoints
      if (window.innerWidth >= 1800) {
        scale = 1.875; // Exact scale for 1800 breakpoint
      } else if (window.innerWidth >= 1024) {
        scale = 1.23453; // Scale for 1024 breakpoint
      }

      boxElement.style.transform = `scale(${scale})`;
      boxElement.style.width = `${newWidth}px`;
      boxElement.style.height = `${newHeight}px`;
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial scaling

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      className="box"
      ref={boxRef}
      style={{
        transition: 'transform 0.3s ease-in-out', // Add transition
      }}
    >
      Approachment8
    </div>
  );
}

export default Approachment8;