import React from "react";

function DrinkSummary(props) {
  let everyone = props.friendsArray.concat(props.userName);
  let render = [];

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
      <div key={key + "dpfo"}>
        {key} purchased a total of {totalPurchased[key]} drinks;{" "}
        {selfBuyerSummary[key]} for themselves, {drinksPurchasedForOthers[key]}{" "}
        drinks for others
      </div>
    );
  }

  // how many drinks did this person buy for this particular person?
  let drinkParticular = {};
  let drinkParRender = [];

  // go through everyone array
  for (let i = 0; i < everyone.length; i++) {
    let arr = [];

    drinkParticular[everyone[i]] = [];

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
      drinkParRender.push(
        <div>
          {everyone[i]} purchased {occurrences[arr[l]]}
        </div>
      );
    }
    console.log(occurrences);
    drinkParticular[everyone[i]] = occurrences;
    for (let key in drinkParticular) {
      // console.log(
      //   [key] + " purchased " + drinkParticular[key] + " for " + [key]
      // );
    }
  }
  // console.log(drinkParticular);
  // console.log(drinkParRender);

  // drinks consumed

  return (
    <div>
      {render}
      {drinkParRender}
    </div>
  );
}

export default DrinkSummary;
