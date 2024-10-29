import logo from "./logo.svg";
// import "./App.css";
// import "./App3.css";
// import "./approachment1.css";
// import "./approachment3.css";
// import "./approachment4.css";
// import "./approachment5.css";
//  import "./approachment6.css";
//  import "./approachment7.css";
//  import "./approachment8.css";
// import "./ResizingDiv.css"
// import "./SomeHow.css"
// import "./NearMatch.css";
// import "./NearMatch2.css";
import "./gameContainer.css";

// import "./approachment2.css";

// import Approachment1 from "./Approachment1";
import Approachment2 from "./Approachment2";
import Approachment3 from "./Approachment3";
import Approachment4 from "./Approachment4";
import Approachment5 from "./Approachment5";
import Approachment6 from "./Approachment6";
import Approachment7 from "./Approachment7";
import Approachment8 from "./Approachment8";
import ResizingDiv from "./ResizingDiv";
import SomeHow from "./SomeHow";
import NearMatch from "./NearMatch";
import NearMatch2 from "./NearMatch2";
import GameContainer from "./ GameContainer";

// import "./App2.css";

function App() {
  return (
    <>
      <div className="mainBg" style={{ display: "none" }}>
        <div className="gameWrapper">
          <div className="cardHolder">
            <div className="cardItem">
              <div className="cardPlaceHolder">
                <img src="https://i.ibb.co/80B4R4g/Flat-Cards-2.png" alt="" />
              </div>
              <div className="dHolder">
                <div className="decisionIcon">
                  <img src="https://i.ibb.co/N9wmBgK/Hold-no.png" alt="" />
                </div>
              </div>
            </div>
            <div className="cardItem">
              <div className="cardPlaceHolder">
                <img src="https://i.ibb.co/80B4R4g/Flat-Cards-2.png" alt="" />
              </div>
              <div className="dHolder">
                <div className="decisionIcon">
                  <img src="https://i.ibb.co/N9wmBgK/Hold-no.png" alt="" />
                </div>
              </div>
            </div>
            <div className="cardItem">
              <div className="cardPlaceHolder">
                <img src="https://i.ibb.co/80B4R4g/Flat-Cards-2.png" alt="" />
              </div>
              <div className="dHolder">
                <div className="decisionIcon">
                  <img src="https://i.ibb.co/N9wmBgK/Hold-no.png" alt="" />
                </div>
              </div>
            </div>
            <div className="cardItem">
              <div className="cardPlaceHolder">
                <img src="https://i.ibb.co/80B4R4g/Flat-Cards-2.png" alt="" />
              </div>
              <div className="dHolder">
                <div className="decisionIcon">
                  <img src="https://i.ibb.co/N9wmBgK/Hold-no.png" alt="" />
                </div>
              </div>
            </div>
            <div className="cardItem">
              <div className="cardPlaceHolder">
                <img src="https://i.ibb.co/80B4R4g/Flat-Cards-2.png" alt="" />
              </div>
              <div className="dHolder">
                <div className="decisionIcon">
                  <img src="https://i.ibb.co/N9wmBgK/Hold-no.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Approachment1/> */}
      {/* <Approachment2/> */}
      {/* <Approachment3/> */}
      {/* <Approachment4/> */}
      {/* <Approachment5/>  */}
      {/* <Approachment/> */}
      {/* <Approachment7/> */}
      {/* <Approachment8/> */}
      {/* <ResizingDiv/> */}
      {/* <SomeHow/> */}
      {/* <NearMatch /> */}
      {/* <NearMatch2 /> */}
      <GameContainer />
    </>
  );
}

export default App;
