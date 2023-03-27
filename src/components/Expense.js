import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expense = (props) => {
  return props.expenses.map((item) => {
    return (
      <ExpenseItem
        key={item.id}
        title={item.title}
        amount={item.amount}
        date={item.date}
      />
    );
  });
};

export default Expense;
