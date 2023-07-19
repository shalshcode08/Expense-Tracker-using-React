import React, { useState } from "react";
import "./NewExpenses.css";
import ExepenseForm from "./ExpenseForm";

function NewExpenses(props) {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  function editingHandler() {
    setIsEditing(true);
  }

  function notEditingHandler() {
    setIsEditing(false);
  }

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={editingHandler}>Add New Expenses.</button>
      )}
      {isEditing && (
        <ExepenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancle={notEditingHandler}
        />
      )}
    </div>
  );
}

export default NewExpenses;
