import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        //console.log(event.target.value)
        // setUserInput({
        //   ...userInput,
        //   enteredTitle: event.target.value,
        // });
        // setUserInput((prevState) => {
        //   return { ...prevState, enteredTitle: event.target.value };
        // });
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        // setUserInput({
        //   ...userInput,
        //   enteredAmount: event.target.value,
        // });
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // setUserInput({
        //   ...userInput,
        //   enteredDate: event.target.value,
        // });
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        };
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        props.onSaveExpenseData(expenseData);
        //console.log(expenseData);
    };


    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input
                        type='text'
                        onChange={titleChangeHandler}
                        value={enteredTitle} //zeruje po submit
                        placeholder='Title'>
                    </input>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input
                        type='number'
                        onChange={amountChangeHandler}
                        value={enteredAmount}
                        min='0.01'
                        step='0.01'
                        placeholder='Amount'>
                    </input>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input
                        type='date'
                        onChange={dateChangeHandler}
                        value={enteredDate} //zeruje po submit
                        min="2019-01-01"
                        max="2022-12-31">
                    </input>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='button' onClick={props.onCancel}>Cancel</button>
                <button type='submit'>Add Expense</button>

            </div>
        </form>
    );
};

export default ExpenseForm;