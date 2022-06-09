import React, { useState } from 'react';
import './Expenses.css'
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {

    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
        console.log(selectedYear);
    };

    return (
        <Card className='expenses'>
            <ExpensesFilter
                selected={filteredYear}
                onChangeFilter={filterChangeHandler}
            />
            {props.items.map((expense) => (<ExpenseItem
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
            ))}
        </Card>
    );

    // return (
    //     <div>
    //       <Card className='expenses'>
    //         <ExpensesFilter
    //           selected={filteredYear}
    //           onChangeFilter={filterChangeHandler}
    //         />
    //         {props.items.map((expense) => (
    //           <ExpenseItem
    //             title={expense.title}
    //             amount={expense.amount}
    //             date={expense.date}
    //           />
    //         ))}
    //       </Card>
    //     </div>
    //   );
}




export default Expenses