function CreateUser(props) {
  return (
    <div>
      <form>
        <label htmlFor="userName">Your Name: </label>
        <input
          id="userName"
          type="text"
          placeholder="your name goes here"
          value={props.userName}
          onChange={props.handleChange}
        ></input>
      </form>
    </div>
  );
}

export default CreateUser;
