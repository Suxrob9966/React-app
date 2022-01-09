import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import React, { useState } from "react";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const expenseFilterHandler = (pickedYear) => {
    setFilteredYear(pickedYear);
    // console.log(pickedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onFilterExpense={expenseFilterHandler}
          selected={filteredYear}
        />
        {props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
