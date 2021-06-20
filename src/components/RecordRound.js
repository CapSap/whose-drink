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
      <form onSubmit={(e) => props.onSubmitRecord(e)}>
        <div className="recorder-container">
          <div className="recorder-item">
            <h3>Who bought drinks? </h3>
            {drinkBuyer}
          </div>
          <div className="recorder-item">
            <h3>Who received drinks? </h3>
            {drinkReciever}
          </div>
          <button
            className="recorder-button"
            type="submit"
            style={{ color: "red" }}
          >
            Record Round of drinks!
          </button>
        </div>
      </form>
    </div>
  );
}

export default RecordRound;
