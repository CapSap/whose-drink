import React, { useState } from "react";

function DrinkSummary(props) {
  const [summaryState, setSummaryState] = useState([]);

  let everyone = props.friendsArray.concat(props.userName);
  let buyerSummary = [];

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
        console.log(
          buyer + " purchase this many drinks for themselves:" + count
        );
      }
    }
    
    buyerSummary.push(
      everyone[i] + " purchased " + count + " drink for themselves "
    );

    
  }

  return <div>{buyerSummary}</div>;
}

export default DrinkSummary;
