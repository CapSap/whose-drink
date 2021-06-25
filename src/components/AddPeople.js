function AddPeople(props) {
  return (
    <div className="form-column">
      <form>
        {/* <!-- Prevent implicit submission of the form --> */}
        <button
          type="submit"
          disabled
          aria-hidden="true"
          style={{ display: "none" }}
        ></button>
        <label htmlFor="userName">Your Name: </label>
        <input
          className="addPeopleInput"
          id="userName"
          type="text"
          placeholder="Your name goes here"
          value={props.userName}
          onChange={props.handleUserChange}
        ></input>
      </form>
      <form>
        <label htmlFor="createFriends">Your Mates: </label>

        <input
          className="addPeopleInput"
          type="text"
          placeholder="who are you with? (seperate with a comma) e.g. Frank, billy, etc"
          onChange={props.handleFriendChange}
        ></input>
      </form>
    </div>
  );
}

export default AddPeople;
