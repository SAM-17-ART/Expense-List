import React,{ useState } from 'react';
import './ExpenseForm.css';
const ExpenseForm=(props)=>{
    const[enteredTitle,setEnteredTitle]=useState('');
    const[enteredAmount,setEnteredAmount]=useState('');
    const[enteredDate,setEnteredDate]=useState('');
    //Using one state rather than multiple ones alternative approach for the same problem.

    //const[enteredInput,setuserEnteredInput]=useState({title:'',amount:'',date:''});
    //const titleChangeHandler=(event)=>{
        //setuserEnteredInput({
            //...enteredInput,title:event.target.value;
       // });
    //};
    //const amountChangeHandler=(event)=>{
        //setuserEnteredInput({
            //...enteredInput,amount:event.target.value;
       // });
    //};
    //const dateChangeHandler=(event)=>{
        //setuserEnteredInput({
            //...enteredInput,date:event.target.value;
       // });
    //};
    const titleChangeHandler=(event)=>{
        setEnteredTitle(event.target.value);
    }
    const amountChangeHandler=(event)=>{
        setEnteredAmount(event.target.value);
    }
    const dateChangeHandler=(event)=>{
        setEnteredDate(event.target.value);
    }
    const submitHandler=(event)=>{
        event.preventDefault();
        const expenseData={
            title:enteredTitle,
            amount:+enteredAmount,
            date:new Date(enteredDate)
        }
        // console.log(expenseData);
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };
    return(
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={titleChangeHandler}></input>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' value={enteredAmount} onChange={amountChangeHandler}></input>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2019-01-01' max='2023-12-30' value={enteredDate} onChange={dateChangeHandler}></input>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='button' onClick={props.onCancel}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
}
export default ExpenseForm;