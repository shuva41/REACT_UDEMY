import React from 'react';
import ExpenseForm from './ExpenseForm';

import './NewExpenses.css';

const NewExpenses = (props) => {
  const saveExpenseDataHandler = (enteredExpenseObject) => {
    const expenseData = {
      ...enteredExpenseObject,
      id: Math.random().toString(),
    };
    props.onAddExpense( expenseData );
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpenses;
