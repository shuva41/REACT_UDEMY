import { useState } from 'react';

import ExpenseList from './ExpenseList';
import ExpenseFilter from './Expensefilter';
import ExpensesChart from './ExpensesChart';
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

  /* **********Conditional JSX: 3rd Method********* */
  return (
    <Card className="expenses">
      <ExpenseFilter
        onFilterChange={filterChangeHandler}
        selected={filteredYear}
      />
      <ExpensesChart expenses={filteredExpense} />
      {/* **********Conditional JSX: 1st Method********* */}
      {/* {filteredExpense.length == 0 ? (
        <p>No Expenses found</p>
      ) : (
        filteredExpense.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      )} */}

      {/* **********Conditional JSX: 2nd Method********* */}
      {/* {filteredExpense.length === 0 && <p>No Expenses Found</p>}
      {filteredExpense.length > 0 &&  filteredExpense.map( ( expense ) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ) ) 
}*/}
      {/* **********Conditional JSX: 3rd Method********* */}
      <ExpenseList items={filteredExpense} />
    </Card>
  );
}

export default Expense;
