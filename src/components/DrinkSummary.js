import React, { useState } from "react";

function DrinkSummary(props) {
  const [summaryState, setSummaryState] = useState([]);

  let everyone = props.friendsArray.concat(props.userName);
  let buyerSummary = {};
  let render = [];

  for (let i = 0, n = everyone.length; i < n; i++) {
    let count = 0;

    for (let k = 0; k < props.orderHistory.length; k++) {
      let { buyer, receivers } = props.orderHistory[k];
      if (everyone[i] === buyer) {
        for (let l = 0; l < receivers.length; l++) {
          if (everyone[i] === receivers[l]) {
            count++;
          }
        }
        let obj = { [buyer]: count };
        buyerSummary[buyer] = count;
      }
    }
  }
  console.log(buyerSummary);
  for (let key in buyerSummary) {
    render.push(
      <div>
        {[key]} purchased this many drinks for themselves: {buyerSummary[key]}
      </div>
    );
  }

  return <div>{render}</div>;
}

export default DrinkSummary;
