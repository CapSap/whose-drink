import React, { useState } from "react";
import "./App.css";
import CreateFriends from "./components/CreateFriends";
import CreateUser from "./components/CreateUser";
import RecordRound from "./components/RecordRound";
import RoundDisplay from "./components/RoundDisplay";

function App() {
  const [userName, setUserName] = useState("");

  const [friendsArray, setFriendsArray] = useState([]);
  // 1st item is date, 2nd is drink buyer, rest is drink reciever.
  const [orderHistory, setOrderHistory] = useState([
    {
      date: "",
      buyer: "intial buyer",
      receivers: ["intial reciever test", "etc"],
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

    for (let i = 0; i < e.target.length; i++) {
      if (e.target[i].type === "radio" && e.target[i].checked === true) {
        latestRound.buyer = e.target[i].value;
        latestRound.date = Date.now();
      }
      if (e.target[i].type === "checkbox" && e.target[i].checked === true) {
        newestReceieverArray.push(e.target[i].value);
      }
      latestRound.receivers = newestReceieverArray;
    }
    setOrderHistory((prevOrderHistory) => [...prevOrderHistory, latestRound]);
  }

  return (
    <div>
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
    </div>
  );
}

export default App;
