import React, { useState } from "react";

function RoundDisplay(props) {
  const [render, setRender] = useState(true);

  const roundArr = props.orderHistory.map((round, index) => {
    if (round.date === "") {
      return (
        <div className="round-display" key="intial">
          <p>No recorded entries. Get some drinks!</p>
        </div>
      );
    } else {
      return (
        <div className="round-display-item" key={round.date}>
          <h3>Round {index + 1}:</h3>
          <p>Buyer: {round.buyer ? round.buyer : "No-buyer"}</p>
          <p>
            Receiver(s): {round.receivers.map((receiver) => " " + receiver)}
          </p>
          <p>{round.date.toLocaleString()}</p>
        </div>
      );
    }
  });

  function onClick() {
    setRender(!render);
  }

  return (
    <div>
      <button onClick={() => onClick()}>Show/Hide detailed Rounds</button>
      {render ? <div className="round-display">{roundArr}</div> : null}
    </div>
  );
}

export default RoundDisplay;
