function RecordRound(props) {
  const drinkBuyer = [
    <>
      <input type="radio" value={props.userName} name="buyer" required></input>
      <label>{props.userName}</label>
    </>,
    ...props.friendsArray.map((friendsName) => {
      return (
        <>
          <input type="radio" value={friendsName} name="buyer" />
          <label>{friendsName}</label>
        </>
      );
    }),
  ];

  const drinkReciever = [
    <>
      <input type="checkbox" value={props.userName} name="reciever"></input>
      <label>{props.userName}</label>
    </>,
    ...props.friendsArray.map((friendsName) => {
      return (
        <>
          <input type="checkbox" value={friendsName} name="reciever" />
          <label>{friendsName}</label>
        </>
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
