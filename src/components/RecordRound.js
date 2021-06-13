function RecordRound(props) {
  const drinkBuyer = [
    <div key="buyerbuyer">
      <input type="radio" value={props.userName} name="buyer" required></input>
      <label>{props.userName}</label>
    </div>,
    ...props.friendsArray.map((friendsName) => {
      return (
        <div key={friendsName + "B"}>
          <input type="radio" value={friendsName} name="buyer" />
          <label>{friendsName}</label>
        </div>
      );
    }),
  ];

  const drinkReciever = [
    <div key="buyer">
      <input type="checkbox" value={props.userName} name="reciever"></input>
      <label>{props.userName}</label>
    </div>,
    ...props.friendsArray.map((friendsName) => {
      return (
        <div key={friendsName + "R"}>
          <input type="checkbox" value={friendsName} name="reciever" />
          <label>{friendsName}</label>
        </div>
      );
    }),
  ];

  return (
    <div>
      <h2>Record rounds here</h2>
      <h3>Who bought drinks? </h3>
      <form onSubmit={(e) => props.onSubmitRecord(e)}>
        {drinkBuyer}
        <h3>Who received drinks? </h3>
        {drinkReciever}
        <button type="submit" style={{ color: "red" }}>
          Record Round of drinks!
        </button>
      </form>
    </div>
  );
}

export default RecordRound;
