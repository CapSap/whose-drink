function RoundDisplay(props) {

  for (let i = 0; i < props.orderHistory.length; i++) 
    { 
      return (
        <div>
          <h2>Round {i + 1}:{' '}</h2>
          <p>{Date(props.orderHistory[i].date)}</p>
          <p>Drink Buyer: {props.orderHistory[i].buyer}</p>
          <p>Drink Reciever: {props.orderHistory[i].recievers}</p>
          
        </div>
      )
  }
  

  
}

export default RoundDisplay