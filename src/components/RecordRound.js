function RecordRound(props) {
  const drinkBuyer = [
    <div key="buyerbuyer">
      <label htmlFor={props.userName}>
        {" "}
        <input
          id={props.userName + "B"}
          type="radio"
          value={props.userName}
          name="buyer"
          required
        ></input>{" "}
        {props.userName}
      </label>
    </div>,
    ...props.friendsArray.map((friendsName) => {
      return (
        <div key={friendsName + "B"}>
          <label htmlFor={friendsName}>
            {" "}
            <input
              id={friendsName}
              type="radio"
              value={friendsName}
              name="buyer"
            />{" "}
            {friendsName}
          </label>
        </div>
      );
    }),
  ];

  const drinkReciever = [
    <div key="buyer">
      <label htmlFor={props.userName + "R"}>
        {" "}
        <input
          id={props.userName + "R"}
          type="checkbox"
          value={props.userName}
          name="reciever"
        ></input>{" "}
        {props.userName}
      </label>
    </div>,
    ...props.friendsArray.map((friendsName) => {
      return (
        <div key={friendsName + "R"}>
          <label htmlFor={friendsName + "R"}>
            <input
              id={friendsName + "R"}
              type="checkbox"
              value={friendsName}
              name="reciever"
            />{" "}
            {friendsName}
          </label>
        </div>
      );
    }),
  ];

  return (
    <div className="record-round-container">
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
          <button className="recorder-button" type="submit">
            Record Round of drinks!
          </button>
        </div>
      </form>
    </div>
  );
}

export default RecordRound;
