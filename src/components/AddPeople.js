function AddPeople(props) {
  return (
    <div className="add-people-container">
      <form
        className="add-people-item"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label htmlFor="userName">Your Name: </label>
        <input
          className="add-people-input"
          id="userName"
          placeholder="Your name goes here"
          value={props.userName}
          onChange={props.handleUserChange}
        ></input>
      </form>
      <form className="add-people-item">
        <label htmlFor="createFriends">Your Mates:</label>

        <textarea
          id="createFriends"
          className="add-people-input"
          type="text"
          placeholder="Who are you with? (seperate with a comma) e.g. Frank, billy, bob"
          onChange={props.handleFriendChange}
        ></textarea>
      </form>
    </div>
  );
}

export default AddPeople;
