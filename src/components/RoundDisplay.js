function RoundDisplay(props) {
  const roundArr = props.orderHistory.map((round, index) => {
    if (round.date === "") {
      return <div key="intial">no recorded entries</div>;
    } else {
      return (
        <div key={round.date}>
          <h3 key={round.date}>Round {index + 1}:</h3>
          <p key={round.date}>
            Buyer: {round.buyer ? round.buyer : "No-buyer"}
          </p>
          <p key={round.date}>
            Receiver(s): {round.receivers.map((receiver) => " " + receiver)}
          </p>
        </div>
      );
    }
  });

  return <div>{roundArr}</div>;
}

export default RoundDisplay;
