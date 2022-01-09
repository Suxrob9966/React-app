import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";
import React from "react";
// import { useState } from "react";

const ExpenseItem = (props) => {
  // const [title, setTitle] = useState(props.title); // must be called directly inside component function. It always returns an array with exactly 2 elements. First element is current state value, second is the function to update that value

  // function clickHandler() { // this is for demo purposes. needs to be commented
  //   setTitle("Updated!"); // pass new value to title
  //   console.log("Clicked!!");
  // }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* <button onClick={clickHandler}>Change Title</button> */}
    </Card>
  );
};

export default ExpenseItem;
