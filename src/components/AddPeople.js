function AddPeople(props) {
  return (
    <div className="form-column">
      <form>
        {/* <!-- Prevent implicit submission of the form --> */}
        <button
          className="prevent-enter-button"
          type="submit"
          disabled
          aria-hidden="true"
          style={{ display: "none" }}
        ></button>
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
          type="text"
          placeholder="who are you with? (seperate with a comma)"
          onChange={props.handleFriendChange}
        ></input>
      </form>
    </div>
  );
}

export default AddPeople;
