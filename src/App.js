import React, { useState } from "react";
import "./App.css";
import CreateFriends from "./components/CreateFriends";
import CreateUser from "./components/CreateUser";
import RecordRound from "./components/RecordRound"

function App() {
  const [userName, setUserName] = useState("");

  const [friendsArray, setFriendsArray] = useState([]);
// 1st item is date, 2nd is drink buyer, rest is drink reciever. 
  const [orderHistory, setOrderHistory] = useState({
    date: "test",
    buyer: "",
    recievers: []
  })

  function handleChange(e) {
    setUserName(e.target.value);
  }

  function handleCreateFriends(e) {
    setFriendsArray(e.target.value.split(","));
    console.log(e.target.value.split(","));
  }

  function onSubmitRecord(e) {
    for (let i=0;i<e.target.length; i++) {
      console.log(e.target[i].type)
    }    
    e.preventDefault()
    console.log(e.target)
    setOrderHistory({
      date: Date.now(),
      buyer: ""
    })
  }

  

  return (
    <div>
            {console.log(orderHistory.date)}

      <CreateUser 
        userName={userName} 
        handleChange={handleChange} />
      <CreateFriends
        friendsArray={friendsArray}
        handleChange={handleCreateFriends}
      />

      <br />
      <RecordRound 
        userName={userName}
        friendsArray={friendsArray}
        onSubmitRecord={onSubmitRecord}
        />     
      <br />
        {orderHistory.buyer}      
    </div>
  );
}

export default App;
