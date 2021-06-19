function CreateFriends(props) {
  return (
    <div>
      <form>
        <label htmlFor="createFriends">Your Mates: </label>
        <input
          className="text-input"
          type="text"
          placeholder="who are you with? (seperate with a comma)"
          onChange={props.handleChange}
        ></input>
      </form>
    </div>
  );
}

export default CreateFriends;
