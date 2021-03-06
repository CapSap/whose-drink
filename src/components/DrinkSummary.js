import React from "react";

function DrinkSummary(props) {
  let everyone = props.friendsArray.concat(props.userName);
  let render = [];

  // get unique billmurr image for each person
  let billMurray = [];
  for (let i = 0; i < everyone.length; i++) {
    billMurray[everyone[i]] =
      "https://www.fillmurray.com/" + 5 + i + "/" + 5 + i;
  }

  // count how many drinks a person bought for themselves and store in buyerSummary
  let selfBuyerSummary = {};

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

  // calculate total number of drinks purchased by individual person
  let totalPurchased = {};

  for (let i = 0; i < everyone.length; i++) {
    let count = 0;
    for (let k = 0; k < props.orderHistory.length; k++) {
      if (everyone[i] === props.orderHistory[k].buyer) {
        count = count + props.orderHistory[k].receivers.length;
        totalPurchased[props.orderHistory[k].buyer] = count;
      }
    }
  }

  // cal how many drinks purchased for other people
  let drinksPurchasedForOthers = {};

  for (let key in totalPurchased) {
    drinksPurchasedForOthers[key] = totalPurchased[key] - selfBuyerSummary[key];
    render.push(
      <li key={key + "dpfo"} className="summary-item">
        <img src={billMurray[key]} alt="bill murray logo"></img> {key} purchased
        a total of {totalPurchased[key]} drinks; {selfBuyerSummary[key]} for
        themselves, {drinksPurchasedForOthers[key]} drinks for others
      </li>
    );
  }

  // how many drinks did this person buy for this particular person?
  let drinkParRender = [];

  // go through everyone array
  for (let i = 0; i < everyone.length; i++) {
    let arr = [];

    // go through the entire order history
    for (let k = 0; k < props.orderHistory.length; k++) {
      // checking everyone[i] against buyer and then add the receivers to an array
      if (props.orderHistory[k].buyer === everyone[i]) {
        arr = arr.concat(props.orderHistory[k].receivers);
      }
      // push the recievers array and then later on count all the occurances of the people/persons
    }
    let occurrences = {};
    for (let l = 0; l < arr.length; l++) {
      occurrences[arr[l]] = (occurrences[arr[l]] || 0) + 1;
    }
    for (let key in occurrences) {
      drinkParRender.push(
        <li
          key={everyone[i] + "BuyFor" + [key]}
          className="summary-detail-item"
        >
          <img src={billMurray[everyone[i]]} alt={everyone[i] + " logo"}></img>
          {everyone[i]} purchased {occurrences[key]} drinks for{" "}
          <img src={billMurray[key]} alt={[key] + " logo"}></img> {[key]}
        </li>
      );
    }
  }
  if (props.orderHistory[0].date === "") {
    return null;
  } else {
    return (
      <div className="drink-summary">
        <h2>Summary:</h2>
        <ul className="summary-list">{render}</ul> <br />
        <ul className="summary-detail"> {drinkParRender}</ul>
        <br />
      </div>
    );
  }
}

export default DrinkSummary;
