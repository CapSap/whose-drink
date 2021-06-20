import React, { useState } from "react";
import "./App.css";
import RecordRound from "./components/RecordRound";
import RoundDisplay from "./components/RoundDisplay";
import DrinkSummary from "./components/DrinkSummary";
import Title from "./components/Title";
import AddPeople from "./components/AddPeople.js";
function App() {
  const [userName, setUserName] = useState("");

  const [friendsArray, setFriendsArray] = useState([]);
  // 1st item is date, 2nd is drink buyer, rest is drink reciever.
  const [orderHistory, setOrderHistory] = useState([
    {
      date: "",
      buyer: "",
      receivers: [],
    },
  ]);

  function handleChange(e) {
    setUserName(e.target.value);
  }

  function handleCreateFriends(e) {
    setFriendsArray(e.target.value.split(","));
  }

  function onSubmitRecord(e) {
    e.preventDefault();
    let latestRound = {};
    let newestReceieverArray = [];

    for (let i = 0; i < e.target.length - 1; i++) {
      if (e.target[i].type === "radio" && e.target[i].checked === true) {
        latestRound.buyer = e.target[i].value;
        latestRound.date = new Date();
      }
      if (e.target[i].type === "checkbox" && e.target[i].checked === true) {
        newestReceieverArray.push(e.target[i].value);
      }
      latestRound.receivers = newestReceieverArray;
    }

    if (orderHistory[0].date === "") {
      setOrderHistory([latestRound]);
    } else {
      setOrderHistory((prevOrderHistory) => [...prevOrderHistory, latestRound]);
    }
  }

  return (
    <div>
      <Title />
      <AddPeople
        userName={userName}
        handleUserChange={handleChange}
        friendsArray={friendsArray}
        handleFriendChange={handleCreateFriends}
      />

      <br />
      <RecordRound
        userName={userName}
        friendsArray={friendsArray}
        onSubmitRecord={onSubmitRecord}
      />
      <br />
      <RoundDisplay orderHistory={orderHistory} />
      <DrinkSummary
        orderHistory={orderHistory}
        userName={userName}
        friendsArray={friendsArray}
      />
    </div>
  );
}

export default App;
