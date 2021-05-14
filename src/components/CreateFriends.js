function CreateFriends(props) {
  
  return(
    <div>
      <form>
        <label for='createFriends'>
          Your Buddies: {' '}
        </label>
        <input
          type='text'
          placeholder='who are you with? (seperate with a comma)'
          onChange={props.handleChange}
        >
        </input>
        
      </form>
    </div>
  )
}

export default CreateFriends