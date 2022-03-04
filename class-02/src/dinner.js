import React from "react";

function Dinner(props){
  return(
    <div>
      <h3> My Fav Dish Name is {props.dishName}</h3>
      <h3>My Fav Sweet Dish   is {props.sweetDish}</h3>
    </div>
  )
} 
export default Dinner;