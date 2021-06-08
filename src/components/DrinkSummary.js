function DrinkSummary(props) {
  const sum = props.orderHistory.map((x) => {
    return x.receivers;
  });
  return <div>{sum}</div>;
}

export default DrinkSummary;
