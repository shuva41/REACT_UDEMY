import { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './Expensefilter';
import Card from '../UI/Card';
import './Expense.css';

function Expense(props) {
  const [filteredYear, setfilteredYear] = useState('2021');
  const filterChangeHandler = (selectedYear) => {
    setfilteredYear(selectedYear);
  };
  const filteredExpense = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter
        onFilterChange={filterChangeHandler}
        selected={filteredYear}
      />
      {filteredExpense.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
}

export default Expense;
