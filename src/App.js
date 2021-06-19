import React, { useState } from "react";
import "./App.css";
import CreateFriends from "./components/CreateFriends";
import CreateUser from "./components/CreateUser";
import RecordRound from "./components/RecordRound";
import RoundDisplay from "./components/RoundDisplay";
import DrinkSummary from "./components/DrinkSummary";

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
      <div>
        <h1>Drink recorder</h1>
        <p>Track drink purchases below.</p>
      </div>
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
