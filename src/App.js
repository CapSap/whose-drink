import React, { useState } from "react";
import "./App.css";
import CreateFriends from "./components/CreateFriends";
import CreateUser from "./components/CreateUser";
import RecordRound from "./components/RecordRound";
import RoundDisplay from './components/RoundDisplay'

function App() {
  const [userName, setUserName] = useState("");

  const [friendsArray, setFriendsArray] = useState([]);
  // 1st item is date, 2nd is drink buyer, rest is drink reciever.
  const [orderHistory, setOrderHistory] = useState([{
    date: "",
    buyer: "",
    recievers: [],
  }]);

  function handleChange(e) {
    setUserName(e.target.value);
  }

  function handleCreateFriends(e) {
    setFriendsArray(e.target.value.split(","));
    console.log(e.target.value.split(","));
  }

  function onSubmitRecord(e) {
    e.preventDefault();
    let newestRecieverArray = []

    for (let i = 0; i < e.target.length; i++) {
      if (e.target[i].type === "radio" && e.target[i].checked === true) {
        setOrderHistory(prevOrderHistory => ({
          ...prevOrderHistory,
          buyer: e.target[i].value,
          date: Date.now()
        }));
      };
      if (e.target[i].type === 'checkbox' && e.target[i].checked === true) {
        newestRecieverArray.push(e.target[i].value)
    }
    setOrderHistory(prevOrderHistory => ({
      ...prevOrderHistory,
      recievers: newestRecieverArray
    }));
    
  } console.log(orderHistory.recievers)
}

  return (
    <div>
      {console.log(orderHistory.date)}

      <CreateUser userName={userName} handleChange={handleChange} />
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
     <RoundDisplay orderHistory={orderHistory}/>
    </div>
  );
};

export default App;