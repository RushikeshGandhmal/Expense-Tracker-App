import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [entertedAmount, setEntertedAmount] = useState("");
  const [entertedDate, setEntertedDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEntertedAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEntertedDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +entertedAmount,
      date: new Date(entertedDate),
    };

    props.onSaveExpenseData(expenseData);

    // For Two way binding
    setEnteredTitle("");
    setEntertedAmount("");
    setEntertedDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label> Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={entertedAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2020-01-01"
            max="2023-01-01"
            value={entertedDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancle}>
          Cancle
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
