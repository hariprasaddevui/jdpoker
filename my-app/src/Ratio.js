import React from 'react';

export default function Ratio() {
  return (
    <div className='main'>
      <div className="leftWing">x</div>
      <div className="midWing">
        <div 
          className="box"
          style={{ transform: `scale(1)`, transformOrigin: 'center' }} 
        >
          <div className="mini"></div>
          <div className="mini"></div>
          <div className="mini"></div>
          <div className="mini"></div>
        </div>
      </div>
      <div className="rightWing">Z</div>
    </div>
  );
}
