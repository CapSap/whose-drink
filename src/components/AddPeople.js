function AddPeople(props) {
  return (
    <div className="add-people-container">
      <form className="add-people-item">
        {/* <!-- Prevent implicit submission of the form --> */}
        <button
          type="submit"
          disabled
          aria-hidden="true"
          style={{ display: "none" }}
        ></button>
        <label htmlFor="userName">Your Name: </label>
        <input
          className="add-people-input"
          id="userName"
          type="text"
          placeholder="Your name goes here"
          value={props.userName}
          onChange={props.handleUserChange}
        ></input>
      </form>
      <form className="add-people-item">
        <label htmlFor="createFriends">Your Mates: </label>

        <textarea
          className="add-people-input"
          type="text"
          placeholder="Who are you with? (seperate with a comma) e.g. Frank, billy, etc"
          onChange={props.handleFriendChange}
        ></textarea>
      </form>
    </div>
  );
}

export default AddPeople;
