import React, { useEffect, useState } from "react";
import Approachment2 from "./Approachment2";

const Approachment5 = () => {
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

//   const cardItems = Array(5).fill(null);
const cardItems = [
    { src: "images/6Club.png" },
    { src: "images/8Diamond.png" },
    { src: "images/QClub.png" },
    { src: "images/JDiamond.png" },
    { src: "images/JSpades.png" },
  ];
  
  return (
    <div className="mainBg">
      <div className="gameWrapper">
        <div
          className="cardHolder"
          style={{
            transform: `scale(${scale})`,
            transformOrigin: "center center",
          }}
        >
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
};

export default Approachment5;
