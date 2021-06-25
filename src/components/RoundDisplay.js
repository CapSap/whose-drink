function RoundDisplay(props) {
  const roundArr = props.orderHistory.map((round, index) => {
    if (round.date === "") {
      return (
        <div className="round-display" key="intial">
          <p>No recorded entries. Get some drinks!</p>
        </div>
      );
    } else {
      return (
        <div className="round-display" key={round.date}>
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

  return <div>{roundArr}</div>;
}

export default RoundDisplay;
