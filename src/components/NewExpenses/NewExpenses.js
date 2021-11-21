import React from 'react'; //Not Mandatory now
import { useState } from 'react';
import ExpenseForm from './ExpenseForm';

import './NewExpenses.css';
const NewExpenses = (props) => {
  const [isEdit, setIsEdit] = useState(false);

  const isEditHandler = () => {
    setIsEdit(true);
  };

  const isCancelHandler = () => {
    setIsEdit(false);
  };

  const saveExpenseDataHandler = (enteredExpenseObject) => {
    const expenseData = {
      ...enteredExpenseObject,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEdit(false);
  };
  return (
    <div className="new-expense">
      {!isEdit && <button onClick={isEditHandler}>Add Expense</button>}
      {isEdit && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={isCancelHandler}
        />
      )}
    </div>
  );
};

export default NewExpenses;
