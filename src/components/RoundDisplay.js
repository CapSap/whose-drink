function RoundDisplay(props) {
  // this is what i gotta use eventually. something like this where state is an array
  // for (let i = 0; i < props.orderHistory[i].length; i++) 
  //   {
  // }
  return (
    <div>
      {props.orderHistory.date}
      {props.orderHistory.buyer}
      {props.orderHistory.recievers}
    </div>

  )
}

export default RoundDisplay