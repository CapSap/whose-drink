function AddPeople(props) {
  return (
    <div>
      <form>
        <label htmlFor="userName">Your Name: </label>
        <input
          id="userName"
          type="text"
          placeholder="your name goes here"
          value={props.userName}
          onChange={props.handleUserChange}
        ></input>
      </form>
      <form>
        <label htmlFor="createFriends">Your Mates: </label>
        <input
          className="text-input"
          type="text"
          placeholder="who are you with? (seperate with a comma)"
          onChange={props.handleFriendChange}
        ></input>
      </form>
    </div>
  );
}

export default AddPeople;
