function RoundDisplay(props) {
  const roundArr = props.orderHistory.map((round, index) => {
    if (round.date === "") {
      return <div>no recorded entries</div>;
    } else {
      return (
        <div>
          <h3>Round {index + 1}:</h3>
          <p>Buyer: {round.buyer ? round.buyer : "No-buyer"}</p>
          <p>
            Receiver(s): {round.receivers.map((receiver) => " " + receiver)}
          </p>
        </div>
      );
    }
  });

  return <div>{roundArr}</div>;
}

export default RoundDisplay;
