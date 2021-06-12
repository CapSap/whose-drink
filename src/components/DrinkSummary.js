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
        // console.log(
        //   buyer + " purchase this many drinks for themselves:" + count
        // );

        // console.log(buyerSummary);
      }

      // issue im having is buyersum was getting a new obj pushed with every cycle of loop. i want to update value only, not add a new object
      console.log(count);
      let obj = { [buyer]: count };
      console.log(obj);
      console.log(buyerSummary);
    }

    // buyerSummary.push(
    //   everyone[i] + " purchased " + count + " drink for themselves "
    // );
    // if the setstate is in the above code block react doenst like it because it will trigger a re-redender loop
    // maybe button on click get drink summary
    // then on button click get drink summary again
    // ie show no of rounds, who purchased drinks for who?

    // or always show drink summary?
    // how? this functional component gets props from app state. it also takes these props and make some stuff out of it. as app state gets updated it will be passed to thsi app
    // so? on load / componentDidMount load up this comp with a variable that holds some info that we loop through state and pull out some data?
  }

  return <div>test</div>;
}

export default DrinkSummary;
