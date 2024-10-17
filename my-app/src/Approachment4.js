import React, { useEffect, useState } from "react";
import Approachment2 from "./Approachment2";

const Approachment4 = () => {
  const [scale, setScale] = useState(1); // Scale factor
  const [childSize, setChildSize] = useState(44);

  useEffect(() => {
    const resizeHandler = () => {
      const browserWidth = window.innerWidth;

      if (browserWidth < 1800) {
        const newScale = Math.max(0.5, Math.max(1, browserWidth / 1800));
        setScale(newScale);

        const newChildSize = Math.min(44, 44 * newScale); 
        setChildSize(newChildSize);
      } else {
        setScale(1); 
        setChildSize(44); 
      }
    };

    window.addEventListener("resize", resizeHandler);
    
    resizeHandler();

    return () => window.removeEventListener("resize", resizeHandler);
  }, []);

  const cardItems = Array(5).fill(null); 

  return (
    <div className="mainBg">
    <div className="gameWrapper">
      <div
        className="cardHolder"
        style={{
          transform: `scale(${scale})`,
          transformOrigin: 'center center',
  
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
                // width: `${childSize}px`,
                // height: `${childSize}px`,
              }}
            ></div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Approachment4;
