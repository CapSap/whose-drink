function DrinkSummary(props) {
  let everyone = props.friendsArray.concat(props.userName);
  let buyerSummary = [];

  for (let i = 0; i < everyone.length; i++) {
    let count = 0;

    // for (let k = 0; k < props.orderHistory.length; k++) {
    //   let { buyer, receivers } = props.orderHistory[k];
    //   if (everyone[i] === buyer) {
    //     for (let l = 0; l < receivers.length; l++) {
    //       if (everyone[i] === receivers[l]) {
    //         count++;
    //       }
    //     }
    //   }
    // }
    // buyerSummary.push(
    //   everyone[i] + " purchased " + count + " drink for themselves "
    // );

    props.orderHistory.forEach((x) => {
      let { buyer, receivers } = x;
      if (everyone[i] === buyer) {
        for (let l = 0; l < receivers.length; l++) {
          if (everyone[i] === receivers[l]) {
            count++;
          }
        }
        console.log(count);
      }
    });
  }

  return <div>{buyerSummary}</div>;
}

export default DrinkSummary;
