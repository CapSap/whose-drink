import React, { useState } from "react";

function DrinkSummary(props) {
  let everyone = props.friendsArray.concat(props.userName);
  let selfBuyerSummary = {};
  let render = [];
  let totalPurchased = {};

  // count how many drinks a person bought for themselves and store in buyerSummary
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
        selfBuyerSummary[buyer] = count;
      }
    }
  }
  for (let key in selfBuyerSummary) {
    render.push(
      <div key={[key]}>
        {[key]} purchased this many drinks for themselves:{" "}
        {selfBuyerSummary[key]}
      </div>
    );
  }
  console.log(props.orderHistory);
  for (let i = 0; i < everyone.length; i++) {
    let count = 0;
    for (let k = 0; k < props.orderHistory.length; k++) {
      if (everyone[i] === props.orderHistory[k].buyer) {
        count = count + props.orderHistory[k].receivers.length;
      }
    }
    console.log(everyone[i] + count);
    totalPurchased[everyone[i]] = count;
    console.log(totalPurchased);
  }
  // next features are: how many drinks purchased total?
  // how many drinks purchased for other people?
  // how many drinks did this person buy for this particular person?
  // drinks consumed

  return <div>{render}</div>;
}

export default DrinkSummary;
