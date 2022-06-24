import './App.css';
import React, { useState } from 'react';
import acceptPic from "./happy.png";
import rejectPic from "./sad.png";
import thinkPic from "./think.png";
import shot1 from "./screenshot1.png";
import shot2 from "./screenshot2.png";

function App() {

  const [Accept, setAccept] = useState(false)
  const [Reject, setReject] = useState(false)
  const [Reset, setReset] = useState(true)

  return (
    <div>
      <div className="title">Nilany Friend Application</div>
      <div className="container">

        <img className="img" src={
          Accept ? acceptPic :
          Reject ? rejectPic :
          Reset ? thinkPic :
          thinkPic
        } />

        <div className="buttonsDiv">
          <button className="buttonYes" onClick={() => {
            setAccept(true);
            setReject(false);
            setReset(false);
          }}>Accept Application</button>

          <button className="buttonNo" onClick={() => {
            setReject(true);
            setAccept(false);
            setReset(false);
          }}>Reject Application</button>

          <button className="buttonReset" onClick={() => {
            setReject(false);
            setAccept(false);
            setReset(true);
          }}>Reset</button>
        </div>

      </div>
      <div className="title">Code</div>
      <div className="codediv">
          <img className="shot1" src={shot1} />
          <img className="shot2" src={shot2} />
      </div>
    </div>

  )
}
export default App;
